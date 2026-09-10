"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import type {
  Circle as LeafletCircle,
  CircleMarker as LeafletCircleMarker,
  LatLngBoundsExpression,
  LatLngTuple,
  Path as LeafletPath,
  Polyline as LeafletPolyline,
} from "leaflet";

import type { Itinerary } from "@/lib/itinerary";
import type { DetourGeo } from "@/lib/tours/types";

export type MapView = "stop" | "route";

export type VisitorLocation = {
  latitude: number;
  longitude: number;
};

export type MapStop = {
  id: string;
  title: string;
  position: LatLngTuple;
};

type TourRouteMapProps = {
  itinerary: Itinerary;
  /** the itinerary's stops, in walking order */
  stops: MapStop[];
  activeStop: number;
  onSelectStop: (index: number) => void;
  /** tapping the dashed alternative switches the leg to it */
  onChoosePath: (legKey: string, pathId: string) => void;
  detours: DetourGeo[];
  activeDetourIds: string[];
  detourNames: Record<string, string>;
  onToggleDetour: (id: string) => void;
  visitorLocation: VisitorLocation | null;
  view: MapView;
  /** parent grows the container; Leaflet has to be told the size changed */
  expanded: boolean;
  labels: {
    route: string;
    alternative: string;
    detour: string;
  };
};

const belgradeCenter: LatLngTuple = [44.8204, 20.4544];

/**
 * Puts a CSS class on a Leaflet vector layer's SVG element and keeps it there.
 *
 * This exists because react-leaflet silently drops `pathOptions.className`:
 * it hands the whole prop object to the Leaflet constructor as options, so
 * `className` sits one level too deep when `_initPath` looks for it, and the
 * `setStyle` call that follows only ever touches stroke and fill attributes.
 * The class has to be applied by hand — and re-applied, because a path
 * changes role (active, quiet, alternative) without being recreated.
 *
 * Styling from CSS rather than passing colours through `pathOptions` is what
 * lets the route follow the theme tokens: a CSS variable is not resolved
 * inside an SVG presentation attribute, so `color: "var(--primary)"` renders
 * as Leaflet's default blue.
 */
function useVectorClass<T extends LeafletPath>(styleClass: string) {
  const layer = useRef<T | null>(null);
  const applied = useRef<string[]>([]);

  const apply = useCallback(() => {
    const element = layer.current?.getElement();
    if (!element) return;

    element.classList.remove(...applied.current);
    const next = styleClass.split(/\s+/).filter(Boolean);
    element.classList.add(...next);
    applied.current = next;
  }, [styleClass]);

  useEffect(apply, [apply]);

  return useCallback(
    (instance: T | null) => {
      if (!instance) return;
      layer.current = instance;
      apply();
    },
    [apply],
  );
}

type RoutePathProps = {
  positions: LatLngTuple[];
  styleClass: string;
  weight: number;
  dashArray?: string;
  onClick: () => void;
  label: string;
};

function RoutePath({
  positions,
  styleClass,
  weight,
  dashArray,
  onClick,
  label,
}: RoutePathProps) {
  const ref = useVectorClass<LeafletPolyline>(styleClass);

  return (
    <Polyline
      ref={ref}
      positions={positions}
      pathOptions={{ weight, dashArray, lineCap: "round", lineJoin: "round" }}
      eventHandlers={{ click: onClick }}
    >
      <Tooltip sticky>{label}</Tooltip>
    </Polyline>
  );
}

type MapHaloProps = {
  center: LatLngTuple;
  /** metres on the ground, unlike MapDot's pixel radius */
  radius: number;
};

function MapHalo({ center, radius }: MapHaloProps) {
  const ref = useVectorClass<LeafletCircle>("tour-map-visitor-halo");

  return (
    <Circle ref={ref} center={center} radius={radius} pathOptions={{ weight: 1 }} />
  );
}

type MapDotProps = {
  center: LatLngTuple;
  styleClass: string;
  radius: number;
  weight: number;
  onClick?: () => void;
  children?: React.ReactNode;
};

function MapDot({ center, styleClass, radius, weight, onClick, children }: MapDotProps) {
  const ref = useVectorClass<LeafletCircleMarker>(styleClass);

  return (
    <CircleMarker
      ref={ref}
      center={center}
      radius={radius}
      pathOptions={{ weight }}
      eventHandlers={onClick ? { click: onClick } : undefined}
    >
      {children}
    </CircleMarker>
  );
}

/**
 * Drives the camera. Two modes: follow the active stop, or frame the whole
 * route. Also nudges Leaflet when the container is resized, since it caches
 * its own size and otherwise renders into the old box.
 */
function MapCamera({
  view,
  center,
  bounds,
  expanded,
}: {
  view: MapView;
  center: LatLngTuple;
  bounds: LatLngBoundsExpression;
  expanded: boolean;
}) {
  const map = useMap();

  useEffect(() => {
    // Wait a beat: when this fires from an expand, the container is still
    // mid-transition and fitBounds would measure the old height.
    const id = window.setTimeout(() => {
      map.invalidateSize();
      if (view === "route") {
        map.fitBounds(bounds, { padding: [28, 28], animate: true });
      } else {
        map.flyTo(center, Math.max(map.getZoom(), 16), {
          animate: true,
          duration: 0.55,
        });
      }
    }, 60);

    return () => window.clearTimeout(id);
  }, [map, view, center, bounds, expanded]);

  return null;
}

export function TourRouteMap({
  itinerary,
  stops,
  activeStop,
  onSelectStop,
  onChoosePath,
  detours,
  activeDetourIds,
  detourNames,
  onToggleDetour,
  visitorLocation,
  view,
  expanded,
  labels,
}: TourRouteMapProps) {
  const stopPositions = useMemo(() => stops.map((stop) => stop.position), [stops]);

  // The leg you are about to walk. On the final stop there is nothing ahead,
  // so highlight the one that brought you here instead.
  const activeSegment =
    itinerary.segments.find((segment) => segment.fromIndex === activeStop) ??
    itinerary.segments.find((segment) => segment.fromIndex === activeStop - 1) ??
    null;

  const bounds = useMemo<LatLngBoundsExpression>(() => {
    const points: LatLngTuple[] = [...stopPositions];
    for (const segment of itinerary.segments) {
      for (const point of segment.geometry) points.push(point);
    }
    return points;
  }, [itinerary.segments, stopPositions]);

  const activeCenter = stopPositions[activeStop] ?? belgradeCenter;

  return (
    <div
      className={`tour-route-map${expanded ? " tour-route-map-expanded" : ""}`}
      aria-label="Interactive map of the Stari Grad history walk"
    >
      <MapContainer
        center={belgradeCenter}
        zoom={15}
        minZoom={13}
        maxZoom={18}
        scrollWheelZoom
        className="h-full w-full"
      >
        {/* crossOrigin matters more than it looks: without it the browser
            fetches tiles no-cors, the service worker only ever sees opaque
            responses, and the offline tile cache stays empty. */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          crossOrigin="anonymous"
        />

        {/* Alternatives for the leg in play, drawn before the chosen route so
            the route wins wherever the two overlap. */}
        {activeSegment?.options
          .filter((option) => option.id !== activeSegment.path.id)
          .map((option) => (
            <RoutePath
              key={`alt-${activeSegment.legKey}-${option.id}`}
              positions={
                activeSegment.reversed
                  ? [...option.geometry].reverse()
                  : option.geometry
              }
              styleClass="tour-map-path tour-map-path-alternative"
              weight={5}
              dashArray="2 9"
              onClick={() => onChoosePath(activeSegment.legKey, option.id)}
              label={labels.alternative}
            />
          ))}

        {itinerary.segments.map((segment) => {
          const isActive = segment === activeSegment;

          return (
            <RoutePath
              key={`leg-${segment.legKey}-${segment.path.id}`}
              positions={segment.geometry}
              styleClass={`tour-map-path ${
                isActive ? "tour-map-path-active" : "tour-map-path-route"
              }`}
              weight={isActive ? 7 : 5}
              onClick={() => onSelectStop(segment.fromIndex)}
              label={labels.route}
            />
          );
        })}

        {detours.map((detour) => {
          const isOn = activeDetourIds.includes(detour.id);

          return (
            <MapDot
              key={`detour-${detour.id}`}
              center={[detour.latitude, detour.longitude]}
              styleClass={`tour-map-detour${isOn ? " tour-map-detour-on" : ""}${
                detour.partner ? " tour-map-detour-partner" : ""
              }`}
              radius={isOn ? 9 : 7}
              weight={2}
              onClick={() => onToggleDetour(detour.id)}
            >
              <Tooltip direction="top" offset={[0, -8]}>
                {detourNames[detour.id] ?? labels.detour}
              </Tooltip>
            </MapDot>
          );
        })}

        {stopPositions.map((position, index) => {
          const isActive = index === activeStop;

          return (
            <MapDot
              key={`stop-${stops[index].id}`}
              center={position}
              styleClass={`tour-map-stop${isActive ? " tour-map-stop-active" : ""}`}
              radius={isActive ? 16 : 12}
              weight={isActive ? 4 : 2}
              onClick={() => onSelectStop(index)}
            >
              {/* A layer carries only one tooltip and the number has to be the
                  permanent one, so the stop title rides along as its label. */}
              <Tooltip
                className={`tour-map-stop-number${
                  isActive ? " tour-map-stop-number-active" : ""
                }`}
                direction="center"
                offset={[0, 0]}
                opacity={1}
                permanent
              >
                <span aria-label={stops[index].title}>{index + 1}</span>
              </Tooltip>
            </MapDot>
          );
        })}

        {visitorLocation && (
          <>
            <MapHalo
              center={[visitorLocation.latitude, visitorLocation.longitude]}
              radius={35}
            />
            <MapDot
              center={[visitorLocation.latitude, visitorLocation.longitude]}
              styleClass="tour-map-visitor"
              radius={8}
              weight={3}
            />
          </>
        )}

        <MapCamera
          view={view}
          center={activeCenter}
          bounds={bounds}
          expanded={expanded}
        />
      </MapContainer>
    </div>
  );
}
