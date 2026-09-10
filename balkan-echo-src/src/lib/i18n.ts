// App chrome, in every language. Tour prose lives with its tour, under
// src/lib/tours/<id>/content — that split is what stops a seventh walk from
// duplicating these eighty-odd interface strings.

import { en } from "@/lib/ui/en";
import { es } from "@/lib/ui/es";
import { fr } from "@/lib/ui/fr";
import { ru } from "@/lib/ui/ru";
import { sr } from "@/lib/ui/sr";
import { tr } from "@/lib/ui/tr";

export const locales = ["en", "tr", "sr", "es", "fr", "ru"] as const;
export type Locale = (typeof locales)[number];

export type UiStrings = {
  /** the language's own name, as its speakers write it */
  name: string;
  /** BCP-47 tag handed to speechSynthesis */
  speechLang: string;
  strings: Record<string, string>;
};

export const ui: Record<Locale, UiStrings> = { en, tr, sr, es, fr, ru };

/** Names for the picker. Every locale here is fully written. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  sr: "Srpski",
  es: "Español",
  fr: "Français",
  ru: "Русский",
};

export const fallbackLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Looks up an interface string and fills its {placeholders}. Falls back to
 * English for a key a translation has not caught up with, and to the key
 * itself as a last resort — a visible key is easier to chase than an empty
 * element.
 */
export function t(
  locale: Locale,
  key: string,
  values: Record<string, string | number> = {},
) {
  const template = ui[locale].strings[key] ?? en.strings[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}

/** The device voice tag for a locale, e.g. "tr-TR". */
export function speechLang(locale: Locale) {
  return ui[locale].speechLang;
}

export function languageName(locale: Locale) {
  return ui[locale].name;
}
