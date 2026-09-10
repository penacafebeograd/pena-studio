"""Generates the narration audio the app plays when a device has no voice.

Why this exists
---------------
The app reads stories aloud with the speech engine already on the phone:
free, offline, zero download. But what is *installed* varies, and Serbian in
particular is often missing. This script produces a fallback track so a walk
is never silent, using Piper — an MIT-licensed neural TTS that runs locally
on CPU, with no account, no API key and no per-character cost.

Everything here happens once, on a laptop. The app only ever loads static
files, so the running cost stays zero.

Usage
-----
    python -m pip install piper-tts
    node scripts/extract-narration.mjs
    python scripts/make_audio.py                 # everything missing
    python scripts/make_audio.py --locale sr     # one language
    python scripts/make_audio.py --limit 1       # a single file, to try it

Requires ffmpeg on PATH for the encode step. Piper writes WAV, which is far
too large to ship (about 5 MB a minute); Opus at 24 kbit/s mono is roughly
a hundredth of that and every browser we target plays it.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NARRATION = ROOT / "scripts" / "narration.json"
OUT_DIR = ROOT / "public" / "audio"
MANIFEST = ROOT / "src" / "lib" / "audio-manifest.ts"

# Voice models are ~75 MB each and are cached here rather than in the repo.
VOICE_DIR = Path.home() / ".local" / "share" / "piper-voices"

# One Piper voice per language, taken from the published catalogue at
# huggingface.co/rhasspy/piper-voices (voices.json). Verify a name against
# that list before adding it — a wrong id fails with a bare HTTP 404.
VOICES = {
    "en": "en_GB-cori-medium",
    "tr": "tr_TR-dfki-medium",
    "es": "es_ES-davefx-medium",
    "fr": "fr_FR-siwis-medium",
    "ru": "ru_RU-ruslan-medium",
    # Serbian is deliberately absent. The only Piper voice for sr_RS
    # (serbski_institut) silently produces an empty WAV for any sentence
    # containing č or ć, which is most Serbian sentences — its phoneme set
    # does not cover what espeak-ng emits for Serbian. Serbian therefore
    # relies on the device's own speech engine, which on Android does
    # support it. Re-test if a second sr voice ever appears.
}

# 24 kbit/s mono is plenty for speech and keeps a two-minute story near
# 350 kB, so a whole walk in one language is a couple of megabytes.
OPUS_BITRATE = "24k"


def check_tools() -> None:
    if shutil.which("ffmpeg") is None:
        sys.exit("ffmpeg not found on PATH — needed to encode Opus.")
    try:
        subprocess.run(
            [sys.executable, "-m", "piper", "--help"],
            capture_output=True,
            check=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError):
        sys.exit("piper not available — run: python -m pip install piper-tts")


def ensure_voice(voice: str) -> Path:
    """Piper 1.8 will not fetch a voice implicitly, so ask for it once."""
    model = VOICE_DIR / f"{voice}.onnx"
    if model.exists():
        return model

    VOICE_DIR.mkdir(parents=True, exist_ok=True)
    print(f"  downloading voice {voice} (~75 MB, once) ...", flush=True)
    subprocess.run(
        [sys.executable, "-m", "piper.download_voices", voice, "--data-dir", str(VOICE_DIR)],
        check=True,
        capture_output=True,
    )
    return model


def split_sentences(text: str) -> list[str]:
    """Splits narration into sentences for synthesis.

    Piper 1.8 silently produces an empty WAV for a long single line — a
    957-character paragraph fails while its first sentence succeeds — so the
    text has to be fed in sentence-sized pieces and stitched back together.
    """
    parts = re.split(r"(?<=[.!?])\s+", text.strip())
    return [part.strip() for part in parts if part.strip()]


def synthesise(text: str, voice: str, wav_path: Path) -> None:
    model = ensure_voice(voice)
    wav_path.parent.mkdir(parents=True, exist_ok=True)
    sentences = split_sentences(text)
    pieces: list[Path] = []

    for index, sentence in enumerate(sentences):
        piece = wav_path.with_name(f"{wav_path.stem}.part{index:03d}.wav")
        subprocess.run(
            [
                sys.executable,
                "-m",
                "piper",
                "--model",
                str(model),
                "--sentence-silence",
                "0.35",
                "--output_file",
                str(piece),
            ],
            # Piper reads stdin line by line, so the newline matters: without
            # it the only line is never consumed.
            input=(sentence + "\n").encode("utf-8"),
            check=True,
            capture_output=True,
        )
        pieces.append(piece)

    # Concat demuxer rather than the filter: no re-encode, no sample-rate
    # guessing, and it copes with however many sentences a stop has.
    listing = wav_path.with_suffix(".txt")
    listing.write_text(
        "\n".join(f"file '{piece.name}'" for piece in pieces) + "\n",
        encoding="utf-8",
    )
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-loglevel",
            "error",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(listing),
            "-c",
            "copy",
            str(wav_path),
        ],
        check=True,
        cwd=str(wav_path.parent),
    )

    listing.unlink()
    for piece in pieces:
        piece.unlink()


def clean_partials(wav_path: Path) -> None:
    """Removes anything a failed run left behind.

    Without this, a voice that fails on some sentences (Piper's Serbian
    voice fails on every č and ć) leaves .partNNN.wav fragments in
    public/, and public/ is copied verbatim to the published site.
    """
    for leftover in wav_path.parent.glob(f"{wav_path.stem}.part*.wav"):
        leftover.unlink(missing_ok=True)
    wav_path.unlink(missing_ok=True)
    wav_path.with_suffix(".txt").unlink(missing_ok=True)


def encode(wav_path: Path, opus_path: Path) -> None:
    opus_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-loglevel",
            "error",
            "-i",
            str(wav_path),
            "-c:a",
            "libopus",
            "-b:a",
            OPUS_BITRATE,
            "-ac",
            "1",
            str(opus_path),
        ],
        check=True,
    )


def write_manifest() -> None:
    """Lists what actually exists, so the app never offers a missing file."""
    available: dict[str, list[str]] = {}
    for path in sorted(OUT_DIR.rglob("*.opus")):
        rel = path.relative_to(OUT_DIR)
        locale = rel.parts[0]
        key = f"{rel.parts[1]}/{rel.stem}"
        available.setdefault(locale, []).append(key)

    lines = [
        "// GENERATED by scripts/make_audio.py — do not edit by hand.",
        "//",
        "// Lists the pre-recorded narration that shipped with this build, as",
        '// "<tourId>/<stopId>" per language. The player consults this before',
        "// reaching for the device's own speech engine, and falls back to it",
        "// for anything not listed here.",
        "",
        "export const audioManifest: Record<string, string[]> = {",
    ]
    for locale, keys in sorted(available.items()):
        lines.append(f'  {locale}: [')
        for key in keys:
            lines.append(f'    "{key}",')
        lines.append("  ],")
    lines.append("};")
    lines.append("")
    MANIFEST.write_text("\n".join(lines), encoding="utf-8")
    total = sum(len(v) for v in available.values())
    print(f"manifest: {total} clips across {len(available)} languages -> {MANIFEST.name}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--locale", help="only this language")
    parser.add_argument("--tour", help="only this walk")
    parser.add_argument("--limit", type=int, help="stop after N files")
    parser.add_argument("--force", action="store_true", help="re-make existing files")
    args = parser.parse_args()

    if not NARRATION.exists():
        sys.exit("scripts/narration.json missing — run: node scripts/extract-narration.mjs")

    check_tools()
    rows = json.loads(NARRATION.read_text(encoding="utf-8"))
    work = [
        row
        for row in rows
        if (args.locale is None or row["locale"] == args.locale)
        and (args.tour is None or row["tourId"] == args.tour)
        and row["locale"] in VOICES
    ]

    made = 0
    for row in work:
        if args.limit is not None and made >= args.limit:
            break
        opus = OUT_DIR / row["locale"] / row["tourId"] / f"{row['stopId']}.opus"
        if opus.exists() and not args.force:
            continue

        wav = OUT_DIR / row["locale"] / row["tourId"] / f"{row['stopId']}.wav"
        print(f"  {row['locale']}/{row['tourId']}/{row['stopId']} ...", flush=True)
        try:
            synthesise(row["text"], VOICES[row["locale"]], wav)
            encode(wav, opus)
        finally:
            clean_partials(wav)
        made += 1
        print(f"    {opus.stat().st_size // 1024} kB")

    print(f"{made} file(s) generated")
    write_manifest()


if __name__ == "__main__":
    main()
