import type { Locale } from "@/lib/i18n";
import { fallbackLocale } from "@/lib/i18n";
import type { Tour, TourText } from "@/lib/tours/types";

import { dorcol } from "./dorcol";
import { savamala } from "./savamala";
import { stariGrad } from "./stari-grad";
import { vracar } from "./vracar";
import { zemun } from "./zemun";

/**
 * Every walk in the app. Order is the order of the picker, so the free pilot
 * comes first — it is what a first-time visitor should open.
 */
export const tours: Tour[] = [stariGrad, vracar, zemun, savamala, dorcol];

export const publishedTours = tours.filter((tour) => tour.published);

export function getTour(id: string): Tour {
  const tour = tours.find((item) => item.id === id);
  if (!tour) throw new Error(`Unknown tour: ${id}`);
  return tour;
}

/** A walk's prose in the chosen language, falling back to English. */
export function tourText(tour: Tour, locale: Locale): TourText {
  return tour.text[locale] ?? (tour.text[fallbackLocale] as TourText);
}

/** True when this walk has been written in this language. */
export function isTourTranslated(tour: Tour, locale: Locale) {
  return Boolean(tour.text[locale]);
}
