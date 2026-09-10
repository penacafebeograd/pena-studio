// Renders the app icon at the sizes Android, iOS and the browser tab need.
// Run with: node scripts/make-icons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = readFileSync(new URL("./icon.svg", import.meta.url));

const targets = [
  { file: "public/icons/icon-192.png", size: 192 },
  { file: "public/icons/icon-512.png", size: 512 },
  { file: "public/icons/apple-touch-icon.png", size: 180 },
  { file: "public/icons/favicon-32.png", size: 32 },
];

for (const { file, size } of targets) {
  await sharp(svg, { density: 512 }).resize(size, size).png().toFile(file);
  console.log(`${file}  ${size}x${size}`);
}

// Maskable: Android crops icons to a circle or squircle, so the artwork has to
// sit inside the middle 80%. Scale it down and pad with the brand green.
const inner = Math.round(512 * 0.78);
const pad = Math.round((512 - inner) / 2);
const scaled = await sharp(svg, { density: 512 }).resize(inner, inner).png().toBuffer();
await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 46, g: 125, b: 82, alpha: 1 },
  },
})
  .composite([{ input: scaled, top: pad, left: pad }])
  .png()
  .toFile("public/icons/icon-512-maskable.png");
console.log("public/icons/icon-512-maskable.png  512x512 (maskable)");
