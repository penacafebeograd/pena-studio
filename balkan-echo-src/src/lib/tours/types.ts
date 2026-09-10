import type { Locale } from "@/lib/i18n";

export type LatLng = [number, number];

export type StopGeo = {
  id: string;
  latitude: number;
  longitude: number;
};

export type PathGeo = {
  id: string;
  /** metres along the actual walkable path */
  distance: number;
  /** seconds at a relaxed walking pace */
  duration: number;
  geometry: LatLng[];
};

export type DetourGeo = {
  id: string;
  latitude: number;
  longitude: number;
  /** rough extra minutes if you take it, there and back */
  addMinutes: number;
  /** the leg of the walk it sits beside */
  leg: string;
  /**
   * A place we run ourselves. Marked so the map can show it differently and
   * so the copy can say plainly whose café it is — a walking guide that
   * quietly recommends its own author is a guide nobody trusts twice.
   */
  partner?: true;
};

export type RouteVariant = {
  id: string;
  stopIds: readonly string[];
};

/** The geography of one walk. Prose lives in TourText. */
export type TourGeo = {
  stops: readonly StopGeo[];
  legs: Record<string, PathGeo[]>;
  detours: readonly DetourGeo[];
  variants: readonly RouteVariant[];
};

export type StopText = {
  title: string;
  kicker: string;
  landmark: string;
  /** written walking directions to the next stop */
  direction: string;
  /** the narration, read aloud and shown as text */
  script: string;
};

/**
 * One walk's prose in one language.
 *
 * The id parameters are supplied by each tour from its own geo module, so a
 * stop added to the geography but not to a translation is a compile error
 * rather than a blank heading discovered on the street.
 */
export type TourText<
  StopId extends string = string,
  LegKey extends string = string,
  DetourId extends string = string,
  VariantId extends string = string,
> = {
  /** the walk's name, e.g. "Stari Grad history walk" */
  name: string;
  /** one line for the picker card and the route header */
  tagline: string;
  /** a sentence of reassurance about pace, under the stop list */
  note: string;
  stops: Record<StopId, StopText>;
  /** legKey -> pathId -> label and one-line description */
  paths: Record<LegKey, Record<string, { label: string; blurb: string }>>;
  detours: Record<
    DetourId,
    {
      name: string;
      blurb: string;
      /** a discount this walk unlocks, shown with the detour */
      offer?: { code: string; terms: string };
    }
  >;
  variants: Record<VariantId, { label: string; blurb: string }>;
  directions: Record<"forward" | "reverse", { label: string; blurb: string }>;
};

/** What it costs to walk this one. */
export type TourAccess = "free" | "subscriber";

/** Which picker group a walk belongs to, and what the theme card says. */
export type TourTheme = "history" | "food" | "riverside" | "modern";

export type Tour = {
  id: string;
  /** neighbourhood or area, shown as the tour's eyebrow */
  area: string;
  theme: TourTheme;
  access: TourAccess;
  /** false while a walk is still being written; hidden from the picker */
  published: boolean;
  geo: TourGeo;
  /** a language missing here falls back to English */
  text: Partial<Record<Locale, TourText>>;
};
