import type { Tour } from "@/lib/tours/types";

import { en } from "./content/en";
import { es } from "./content/es";
import { fr } from "./content/fr";
import { ru } from "./content/ru";
import { sr } from "./content/sr";
import { tr } from "./content/tr";
import { detours, legs, stops, variants } from "./geo";

export const dorcol: Tour = {
  id: "dorcol",
  area: "Dorćol",
  theme: "food",
  access: "subscriber",
  published: true,
  geo: { stops, legs, detours, variants },
  text: { en, tr, sr, es, fr, ru },
};
