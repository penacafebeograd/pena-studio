# Pena Tools — brand assets

**Wordmark:** PENA in ink, TOOLS in teal.
**Typeface:** Barlow SemiBold, 0.09em tracking. SIL Open Font License —
free for commercial use, including this logo.
**Colours:** ink `#0f1115` · teal `#0d9488` · teal on dark `#2dd4bf`

## Which file to use

| Use | File |
| --- | --- |
| Print, sign makers, anyone without Barlow | `wordmark-outlined-*.svg` |
| Single-colour print, engraving, stamps | `wordmark-outlined-mono-*.svg` |
| Web/editable, Barlow present | `wordmark-light.svg` / `wordmark-dark.svg` |
| Slides, documents, quick paste | `wordmark-*.png` |
| App icon, avatars | `icon-512.png` |

`-light` = for light backgrounds. `-dark` = for dark backgrounds.

## Outlined vs not

The `outlined` files contain **no text and no font reference** — every letter
is a vector path, so they render identically anywhere. Verified against the
live font: identical aspect ratio, ink coverage within 0.4%
(`outline-verification.png`).

The non-outlined SVGs keep the text editable but need Barlow installed, or
they fall back to a different face. Send the outlined ones to anyone outside.

## Favicon

The wordmark is unreadable at 16px, so the reduced lockup is a **PT monogram**
on the teal ground: `../../tools-src/public/favicon-{16,32}.png` and
`apple-touch-icon.png`.

## Earlier rounds

`logo-options.png` and `logo-options-v2.png` are the icon studies that were
not taken forward, kept for reference. `mark-*.svg` belong to the first round.
