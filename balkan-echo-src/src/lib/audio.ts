// Pre-recorded narration.
//
// The app's first choice is the speech engine on the device: free and zero
// bytes. Where that falls short — a language the phone has no voice for —
// we ship an audio file instead, generated once with Piper (see
// scripts/make_audio.py). Both paths are free; this one just costs
// megabytes in the repo, so it exists per language and per walk rather
// than everywhere.

import { audioManifest } from "@/lib/audio-manifest";
import { asset } from "@/lib/site";

function key(tourId: string, stopId: string) {
  return `${tourId}/${stopId}`;
}

/** True when this build shipped a recording for exactly this stop. */
export function hasRecording(locale: string, tourId: string, stopId: string) {
  return (audioManifest[locale] ?? []).includes(key(tourId, stopId));
}

export function recordingUrl(locale: string, tourId: string, stopId: string) {
  return asset(`/audio/${locale}/${tourId}/${stopId}.opus`);
}

/** True when a whole walk is recorded in a language, for the picker. */
export function tourIsRecorded(locale: string, tourId: string, stopIds: readonly string[]) {
  const clips = audioManifest[locale] ?? [];
  return stopIds.length > 0 && stopIds.every((stopId) => clips.includes(key(tourId, stopId)));
}
