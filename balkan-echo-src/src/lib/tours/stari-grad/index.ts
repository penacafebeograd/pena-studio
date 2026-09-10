import type { Tour } from "@/lib/tours/types";

import { en } from "./content/en";
import { es } from "./content/es";
import { fr } from "./content/fr";
import { ru } from "./content/ru";
import { sr } from "./content/sr";
import { tr } from "./content/tr";
import { detours, legs, stops, variants } from "./geo";

/**
 * The pilot walk, and the one that stays free: it is the sample that shows
 * what the paid walks are like, and the material for the store listing.
 */
export const stariGrad: Tour = {
  id: "stari-grad",
  area: "Stari Grad",
  theme: "history",
  access: "free",
  published: true,
  geo: { stops, legs, detours, variants },
  text: { en, tr, sr, es, fr, ru },
};
