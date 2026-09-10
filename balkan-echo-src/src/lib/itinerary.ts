// Turns a tour's raw geography into a walkable itinerary: which stops, in
// which order, joined by which path, in which direction.
//
// Everything here is pure — no React, no network, no knowledge of any
// particular walk. The map and the tour UI read the same itinerary, so they
// can never disagree about the route.

import type {
  DetourGeo,
  LatLng,
  PathGeo,
  StopGeo,
  TourGeo,
} from "@/lib/tours/types";

export type Direction = "forward" | "reverse";

/** One walk between two consecutive stops of an itinerary. */
export type Segment = {
  /** position of the starting stop within the itinerary */
  fromIndex: number;
  /** key into the tour's legs — always the stored, forward orientation */
  legKey: string;
  /** true when this leg is being walked backwards */
  reversed: boolean;
  /** the path currently chosen for this leg */
  path: PathGeo;
  /** every path available for this leg, chosen one included */
  options: PathGeo[];
  /** path geometry, already flipped when reversed */
  geometry: LatLng[];
};

export type Itinerary = {
  stopIds: string[];
  segments: Segment[];
  /** metres of walking, chosen paths only */
  distance: number;
  /** seconds of walking, chosen paths only */
  duration: number;
  /** extra minutes for the detours currently switched on */
  detourMinutes: number;
  detours: DetourGeo[];
};

export type ItineraryInput = {
  geo: TourGeo;
  variantId: string;
  direction: Direction;
  /** legKey -> pathId; anything missing falls back to the default path */
  pathChoices: Record<string, string>;
  detourIds: string[];
};

export function stopGeoById(geo: TourGeo, id: string): StopGeo {
  const found = geo.stops.find((stop) => stop.id === id);
  if (!found) throw new Error(`Unknown stop: ${id}`);
  return found;
}

/**
 * Legs are stored one way round (`a>b`). Walking the route in reverse asks
 * for `b>a`, so look up the stored orientation and flip it.
 */
function resolveLeg(geo: TourGeo, fromId: string, toId: string) {
  const forwardKey = `${fromId}>${toId}`;
  if (geo.legs[forwardKey]) return { legKey: forwardKey, reversed: false };

  const backwardKey = `${toId}>${fromId}`;
  if (geo.legs[backwardKey]) return { legKey: backwardKey, reversed: true };

  throw new Error(`No path between ${fromId} and ${toId}`);
}

export function buildItinerary({
  geo,
  variantId,
  direction,
  pathChoices,
  detourIds,
}: ItineraryInput): Itinerary {
  const variant = geo.variants.find((item) => item.id === variantId) ?? geo.variants[0];
  const stopIds =
    direction === "reverse" ? [...variant.stopIds].reverse() : [...variant.stopIds];

  const segments: Segment[] = [];
  let distance = 0;
  let duration = 0;

  for (let index = 0; index < stopIds.length - 1; index += 1) {
    const { legKey, reversed } = resolveLeg(geo, stopIds[index], stopIds[index + 1]);
    const options = geo.legs[legKey];
    const path =
      options.find((option) => option.id === pathChoices[legKey]) ?? options[0];

    segments.push({
      fromIndex: index,
      legKey,
      reversed,
      path,
      options,
      geometry: reversed ? [...path.geometry].reverse() : path.geometry,
    });

    distance += path.distance;
    duration += path.duration;
  }

  const legKeys = new Set(segments.map((segment) => segment.legKey));
  const detours = geo.detours.filter(
    (detour) => detourIds.includes(detour.id) && legKeys.has(detour.leg),
  );

  return {
    stopIds,
    segments,
    distance,
    duration,
    detourMinutes: detours.reduce((total, detour) => total + detour.addMinutes, 0),
    detours,
  };
}

/** Detours that sit beside a leg this itinerary actually walks. */
export function availableDetours(geo: TourGeo, itinerary: Itinerary): DetourGeo[] {
  const legKeys = new Set(itinerary.segments.map((segment) => segment.legKey));
  return geo.detours.filter((detour) => legKeys.has(detour.leg));
}

/** The segment you walk after leaving a given stop, if there is one. */
export function segmentAfter(itinerary: Itinerary, stopIndex: number) {
  return itinerary.segments.find((segment) => segment.fromIndex === stopIndex) ?? null;
}

/** Total walking time of a tour's default full route, for the picker. */
export function tourSummary(geo: TourGeo) {
  const itinerary = buildItinerary({
    geo,
    variantId: geo.variants[0].id,
    direction: "forward",
    pathChoices: {},
    detourIds: [],
  });

  return {
    stopCount: itinerary.stopIds.length,
    distance: itinerary.distance,
    duration: itinerary.duration,
  };
}

export function formatDistance(metres: number) {
  return metres >= 1000
    ? `${(metres / 1000).toFixed(1)} km`
    : `${Math.round(metres / 10) * 10} m`;
}

export function walkingMinutes(seconds: number) {
  return Math.max(1, Math.round(seconds / 60));
}
