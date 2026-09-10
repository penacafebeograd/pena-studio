// What the walker chose last time: language and light or dark.
//
// Both live in localStorage rather than on a server — there are no accounts,
// and a preference that follows the device is the whole requirement. Reads
// are wrapped because a browser in private mode can throw on access rather
// than return null.

import { isLocale, type Locale } from "@/lib/i18n";

export type Theme = "system" | "light" | "dark";

const LOCALE_KEY = "balkan-echo.locale";
const THEME_KEY = "balkan-echo.theme";

function read(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // A walker with storage blocked still gets the walk; they just get
    // asked again next time.
  }
}

/**
 * The language to open in: what they chose before, else what their browser
 * asks for, else English. A Russian visitor opening a shared link should not
 * have to hunt for the language control first.
 */
export function initialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const saved = read(LOCALE_KEY);
  if (saved && isLocale(saved)) return saved;

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0];
    // Serbo-Croatian variants all read the Latin Serbian text fine.
    const mapped = base === "hr" || base === "bs" || base === "sh" ? "sr" : base;
    if (isLocale(mapped)) return mapped;
  }
  return "en";
}

export function saveLocale(locale: Locale) {
  if (typeof window !== "undefined") write(LOCALE_KEY, locale);
}

export function readTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const saved = read(THEME_KEY);
  return saved === "light" || saved === "dark" ? saved : "system";
}

/**
 * Puts the theme on the root element. "system" removes the override and lets
 * the media query in globals.css decide.
 *
 * Kept in step with the inline script in layout.tsx, which does the same
 * thing before first paint so the page never flashes the wrong theme.
 */
export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  root.classList.toggle("dark", dark);
  root.dataset.theme = theme;

  // The browser chrome should match the page, not fight it.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#101512" : "#2E7D52");
}

export function saveTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  write(THEME_KEY, theme);
  applyTheme(theme);
}
