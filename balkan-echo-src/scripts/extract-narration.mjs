// Pulls every stop's narration out of the tour content files into one JSON
// file, so the audio generator does not have to understand TypeScript.
//
// The content modules are plain object literals whose only imports are
// type-only, so stripping the types leaves valid JavaScript that we can
// evaluate directly. That is sturdier than pattern-matching the prose,
// which contains quotes, apostrophes and em dashes in six languages.
//
// Run: node scripts/extract-narration.mjs

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const toursDir = "src/lib/tours";
const outFile = "scripts/narration.json";

function evaluateContentModule(source) {
  const js = source
    // type-only imports leave nothing behind at runtime
    .replace(/^import type[\s\S]*?;$/gm, "")
    // `export const en: TourText<...> = {` -> `return {`
    .replace(/^export const \w+\s*:\s*TourText<[^>]*>\s*=\s*/m, "return ")
    .replace(/^export const \w+\s*=\s*/m, "return ");

  // eslint-disable-next-line no-new-func
  return new Function(js)();
}

const rows = [];

for (const tourId of readdirSync(toursDir)) {
  const contentDir = join(toursDir, tourId, "content");
  let entries;
  try {
    if (!statSync(contentDir).isDirectory()) continue;
    entries = readdirSync(contentDir);
  } catch {
    continue; // not a tour directory (index.ts, types.ts)
  }

  for (const file of entries) {
    if (!file.endsWith(".ts")) continue;
    const locale = file.replace(/\.ts$/, "");
    const text = evaluateContentModule(readFileSync(join(contentDir, file), "utf8"));

    for (const [stopId, stop] of Object.entries(text.stops)) {
      rows.push({ tourId, locale, stopId, text: stop.script });
    }
  }
}

rows.sort(
  (a, b) =>
    a.locale.localeCompare(b.locale) ||
    a.tourId.localeCompare(b.tourId) ||
    a.stopId.localeCompare(b.stopId),
);

writeFileSync(outFile, JSON.stringify(rows, null, 2), "utf8");

const chars = rows.reduce((total, row) => total + row.text.length, 0);
const byLocale = {};
for (const row of rows) byLocale[row.locale] = (byLocale[row.locale] ?? 0) + 1;

console.log(`${rows.length} narrations, ${chars.toLocaleString()} characters`);
console.log("per language:", byLocale);
console.log(`written to ${outFile}`);
