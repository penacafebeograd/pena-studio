import type { Tour } from "@/lib/tours/types";

import { en } from "./content/en";
import { es } from "./content/es";
import { fr } from "./content/fr";
import { ru } from "./content/ru";
import { sr } from "./content/sr";
import { tr } from "./content/tr";
import { detours, legs, stops, variants } from "./geo";

/** The first subscriber walk: temple, roundabout, flowers, Tesla, Tašmajdan. */
export const vracar: Tour = {
  id: "vracar",
  area: "Vračar",
  theme: "history",
  access: "subscriber",
  published: true,
  geo: { stops, legs, detours, variants },
  text: { en, tr, sr, es, fr, ru },
};
