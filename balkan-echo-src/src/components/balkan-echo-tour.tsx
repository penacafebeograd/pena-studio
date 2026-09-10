"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  Compass,
  Footprints,
  Languages,
  Lock,
  LocateFixed,
  MapPin,
  Maximize2,
  Minimize2,
  Monitor,
  Moon,
  Pause,
  Play,
  Radio,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Sun,
  Volume2,
  X,
} from "lucide-react";

import {
  canOpen,
  readEntitlement,
  startSubscription,
  subscriptionPrice,
  type Entitlement,
} from "@/lib/entitlement";
import {
  languageName,
  locales,
  localeNames,
  speechLang,
  t,
  type Locale,
} from "@/lib/i18n";
import {
  availableDetours,
  buildItinerary,
  formatDistance,
  segmentAfter,
  stopGeoById,
  tourSummary,
  walkingMinutes,
  type Direction,
} from "@/lib/itinerary";
import { hasRecording, recordingUrl, tourIsRecorded } from "@/lib/audio";
import {
  findVoice,
  voiceHelpPlatform,
  voiceStatus,
  type VoiceStatus,
} from "@/lib/speech";
import {
  applyTheme,
  initialLocale,
  readTheme,
  saveLocale,
  saveTheme,
  type Theme,
} from "@/lib/preferences";
import { getTour, isTourTranslated, publishedTours, tourText } from "@/lib/tours";
import type { MapStop, MapView, VisitorLocation } from "@/components/tour-route-map";

const TourRouteMap = dynamic(
  () => import("@/components/tour-route-map").then((module) => module.TourRouteMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-72 items-center justify-center bg-muted text-sm text-muted-foreground sm:h-[22rem]">
        Loading the route map…
      </div>
    ),
  },
);

const directionIds: Direction[] = ["forward", "reverse"];

function distanceInMeters(
  latitude: number,
  longitude: number,
  destinationLatitude: number,
  destinationLongitude: number,
) {
  const earthRadius = 6371e3;
  const latitudeDelta = ((destinationLatitude - latitude) * Math.PI) / 180;
  const longitudeDelta = ((destinationLongitude - longitude) * Math.PI) / 180;
  const firstLatitude = (latitude * Math.PI) / 180;
  const secondLatitude = (destinationLatitude * Math.PI) / 180;
  const a =
    Math.sin(latitudeDelta / 2) * Math.sin(latitudeDelta / 2) +
    Math.cos(firstLatitude) *
      Math.cos(secondLatitude) *
      Math.sin(longitudeDelta / 2) *
      Math.sin(longitudeDelta / 2);

  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function BalkanEchoTour() {
  const [screen, setScreen] = useState<"welcome" | "setup" | "tour">("welcome");
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("system");
  const [tourId, setTourId] = useState(publishedTours[0].id);
  const [entitlement, setEntitlement] = useState<Entitlement>({ state: "loading" });
  const [price, setPrice] = useState<string | null>(null);
  const [purchasing, setPurchasing] = useState(false);
  const [purchaseNote, setPurchaseNote] = useState("");

  const [variantId, setVariantId] = useState<string>("full");
  const [direction, setDirection] = useState<Direction>("forward");
  const [pathChoices, setPathChoices] = useState<Record<string, string>>({});
  const [detourIds, setDetourIds] = useState<string[]>([]);

  const [activeStop, setActiveStop] = useState(0);
  const [mapView, setMapView] = useState<MapView>("stop");
  const [mapExpanded, setMapExpanded] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioMessage, setAudioMessage] = useState("");
  const [voiceState, setVoiceState] = useState<VoiceStatus>("checking");

  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "ready" | "denied" | "unavailable"
  >("idle");
  const [visitorLocation, setVisitorLocation] = useState<VisitorLocation | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const watchId = useRef<number | null>(null);
  const activeStopIdRef = useRef<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tour = getTour(tourId);
  const text = tourText(tour, locale);

  const itinerary = useMemo(
    () =>
      buildItinerary({
        geo: tour.geo,
        variantId,
        direction,
        pathChoices,
        detourIds,
      }),
    [tour, variantId, direction, pathChoices, detourIds],
  );

  const stopCount = itinerary.stopIds.length;
  const stopId = itinerary.stopIds[Math.min(activeStop, stopCount - 1)];
  const stop = text.stops[stopId];
  const nextSegment = segmentAfter(itinerary, activeStop);

  const mapStops = useMemo<MapStop[]>(
    () =>
      itinerary.stopIds.map((id) => {
        const geo = stopGeoById(tour.geo, id);
        return {
          id,
          title: text.stops[id].title,
          position: [geo.latitude, geo.longitude],
        };
      }),
    [itinerary.stopIds, text, tour.geo],
  );

  const legDetours = nextSegment
    ? availableDetours(tour.geo, itinerary).filter(
        (detour) => detour.leg === nextSegment.legKey,
      )
    : [];

  const detourNames = Object.fromEntries(
    Object.entries(text.detours).map(([id, value]) => [id, value.name]),
  );

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      audioRef.current?.pause();
      if (watchId.current !== null) navigator.geolocation?.clearWatch(watchId.current);
    };
  }, []);

  useEffect(() => {
    void readEntitlement().then(setEntitlement);
    void subscriptionPrice().then(setPrice);
  }, []);

  // Restored after mount rather than during render: this is a static
  // export, so the served HTML cannot know either preference.
  useEffect(() => {
    setLocale(initialLocale());
    const stored = readTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  function chooseLocale(next: Locale) {
    setLocale(next);
    saveLocale(next);
  }

  function cycleTheme() {
    const order: Theme[] = ["system", "light", "dark"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    saveTheme(next);
  }

  const themeLabel = t(
    locale,
    theme === "dark" ? "themeDark" : theme === "light" ? "themeLight" : "themeSystem",
  );

  // Rendered in both headers so the two controls people looked for are
  // never more than one glance away.
  function headerControls() {
    return (
      <div className="flex items-center gap-2">
        <label
          className="sr-only"
          htmlFor="balkan-echo-language"
        >
          {t(locale, "language")}
        </label>
        <select
          id="balkan-echo-language"
          value={locale}
          onChange={(event) => chooseLocale(event.target.value as Locale)}
          className="min-h-9 rounded-full border border-border bg-card px-3 text-xs font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {locales.map((code) => (
            <option key={code} value={code}>
              {localeNames[code]}
            </option>
          ))}
        </select>

        <button
          onClick={cycleTheme}
          title={`${t(locale, "theme")}: ${themeLabel}`}
          aria-label={`${t(locale, "theme")}: ${themeLabel}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Monitor className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  }

  async function subscribe() {
    setPurchasing(true);
    setPurchaseNote("");
    const outcome = await startSubscription();
    setPurchasing(false);

    if (outcome === "ok") {
      // Ask Play what it now holds rather than assuming the sheet
      // succeeded: the entitlement is Play's answer, not ours.
      setEntitlement(await readEntitlement());
      setPurchaseNote(t(locale, "subscribeThanks"));
      return;
    }
    setPurchaseNote(
      t(
        locale,
        outcome === "cancelled"
          ? "subscribeCancelled"
          : outcome === "unavailable"
            ? "subscribeUnavailable"
            : "subscribeFailed",
      ),
    );
  }

  // Chrome populates the voice list asynchronously; without this the first
  // language check runs against an empty array and wrongly reports "no voice".
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setVoiceState("unsupported");
      return;
    }
    const update = () => setVoiceState(voiceStatus(locale));
    update();
    window.speechSynthesis.addEventListener("voiceschanged", update);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", update);
  }, [locale]);

  useEffect(() => {
    activeStopIdRef.current = stopId;
  }, [stopId]);

  // Changing the walk, its length or its direction renumbers the stops.
  useEffect(() => {
    setActiveStop(0);
    setPathChoices({});
    setDetourIds([]);
  }, [tourId, variantId, direction]);

  useEffect(() => {
    if (!visitorLocation) return;
    const geo = stopGeoById(tour.geo, stopId);
    setDistance(
      distanceInMeters(
        visitorLocation.latitude,
        visitorLocation.longitude,
        geo.latitude,
        geo.longitude,
      ),
    );
  }, [stopId, tour.geo, visitorLocation]);

  const stopNarration = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("unavailable");
      return;
    }

    if (watchId.current !== null) navigator.geolocation.clearWatch(watchId.current);
    setLocationStatus("loading");
    watchId.current = navigator.geolocation.watchPosition(
      (position) => {
        const geo = stopGeoById(tour.geo, activeStopIdRef.current);
        setLocationStatus("ready");
        setVisitorLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setDistance(
          distanceInMeters(
            position.coords.latitude,
            position.coords.longitude,
            geo.latitude,
            geo.longitude,
          ),
        );
      },
      (error) => {
        setVisitorLocation(null);
        setDistance(null);
        setLocationStatus(
          error.code === error.PERMISSION_DENIED ? "denied" : "unavailable",
        );
      },
      { enableHighAccuracy: true, maximumAge: 15000, timeout: 10000 },
    );
  }

  const recorded = hasRecording(locale, tour.id, stopId);

  function playRecording() {
    const element = audioRef.current ?? new Audio();
    audioRef.current = element;
    const url = recordingUrl(locale, tour.id, stopId);

    if (element.src !== new URL(url, window.location.href).href) {
      element.src = url;
    }
    element.onended = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    element.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setAudioMessage(t(locale, "narrationFailed"));
    };

    void element.play().then(
      () => {
        setAudioMessage("");
        setIsSpeaking(true);
        setIsPaused(false);
      },
      () => {
        setIsSpeaking(false);
        setAudioMessage(t(locale, "narrationFailed"));
      },
    );
  }

  function playNarration() {
    // A shipped recording beats the device engine: same voice for everyone,
    // and it works on phones that have no voice for this language at all.
    if (recorded) {
      playRecording();
      return;
    }

    if (!("speechSynthesis" in window)) {
      setAudioMessage(t(locale, "narrationUnsupported"));
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    const tag = speechLang(locale);
    const voice = findVoice(locale);

    // No voice for this language: stay silent rather than reading, say,
    // Turkish prose with an English voice — that is worse than text alone.
    if (voiceState !== "checking" && !voice) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      const platform = voiceHelpPlatform();
      setAudioMessage(
        `${t(locale, "narrationNoVoice", { language: languageName(locale) })} ` +
          t(
            locale,
            platform === "android"
              ? "voiceHelpAndroid"
              : platform === "ios"
                ? "voiceHelpIos"
                : "voiceHelpDesktop",
          ),
      );
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(stop.script);
    utterance.lang = tag;
    if (voice) utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setAudioMessage(t(locale, "narrationFailed"));
    };
    window.speechSynthesis.speak(utterance);
    setAudioMessage("");
    setIsSpeaking(true);
    setIsPaused(false);
  }

  function pauseNarration() {
    if (recorded && audioRef.current) audioRef.current.pause();
    else window.speechSynthesis?.pause();
    setIsPaused(true);
    setIsSpeaking(false);
  }

  function selectStop(index: number) {
    stopNarration();
    setAudioMessage("");
    setActiveStop(index);
    setMapView("stop");
  }

  function choosePath(legKey: string, pathId: string) {
    setPathChoices((current) => ({ ...current, [legKey]: pathId }));
  }

  function toggleDetour(id: string) {
    setDetourIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function openWalk(id: string) {
    setTourId(id);
    setVariantId("full");
    setScreen("setup");
  }

  const routeSummary = itinerary.detourMinutes
    ? t(locale, "routeSummaryDetours", {
        distance: formatDistance(itinerary.distance),
        minutes: walkingMinutes(itinerary.duration),
        detour: itinerary.detourMinutes,
      })
    : t(locale, "routeSummary", {
        distance: formatDistance(itinerary.distance),
        minutes: walkingMinutes(itinerary.duration),
      });

  if (screen === "welcome") {
    const pilot = publishedTours.find((item) => item.access === "free") ?? publishedTours[0];

    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="font-heading text-2xl font-semibold tracking-tight">
            Balkan Echo
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#walks"
              className="hidden rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              {t(locale, "allWalks")}
            </a>
            {headerControls()}
          </div>
        </header>

        <main id="top">
          <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-8 sm:px-8 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> {t(locale, "heroKicker")}
              </p>
              <h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[0.94] tracking-tight sm:text-7xl">
                {t(locale, "heroTitle")}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {t(locale, "heroBody")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => openWalk(pilot.id)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Footprints className="h-5 w-5" /> {t(locale, "openFreeWalk")}{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#walks"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-base font-semibold transition-colors hover:bg-muted"
                >
                  <ArrowDown className="h-4 w-4" /> {t(locale, "seeRoute")}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {t(locale, "chooseWalkHere")}
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {t(locale, "badgeBrowser")}
                </span>
              </div>
            </div>

            {/* The offer, stated next to the hero rather than hidden behind a
                click: one walk free, the rest on a subscription. */}
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl shadow-primary/10 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                {t(locale, "badgeSubscriberWalk")}
              </p>
              <p className="mt-3 font-heading text-4xl font-semibold">
                {price ? t(locale, "subscribePerMonth", { price }) : t(locale, "subscribe")}
              </p>
              <p className="mt-3 leading-7 text-muted-foreground">
                {t(locale, "subscribeAllWalks")}
              </p>

              {entitlement.state === "subscribed" ? (
                <p className="mt-6 flex items-center gap-2 rounded-2xl bg-primary/10 p-4 text-sm font-semibold text-primary">
                  <Check className="h-4 w-4" /> {t(locale, "subscribeThanks")}
                </p>
              ) : (
                <>
                  <button
                    onClick={subscribe}
                    disabled={purchasing}
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                  >
                    <Lock className="h-4 w-4" /> {t(locale, "subscribe")}
                  </button>
                  {purchaseNote && (
                    <p role="status" className="mt-3 text-sm leading-6 text-muted-foreground">
                      {purchaseNote}
                    </p>
                  )}
                </>
              )}
            </div>
          </section>

          <section id="walks" className="border-t border-border bg-muted/40">
            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {t(locale, "walksKicker")}
              </p>
              <h2 className="mt-2 max-w-2xl font-heading text-4xl font-semibold leading-tight">
                {t(locale, "walksTitle")}
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                {t(locale, "walksBody")}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {publishedTours.map((item) => {
                  const itemText = tourText(item, locale);
                  const summary = tourSummary(item.geo);
                  const unlocked = canOpen(item.access, entitlement);

                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col rounded-[1.7rem] border bg-background p-5 shadow-sm sm:p-6 ${
                        unlocked ? "border-border" : "border-dashed border-border"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          {item.area}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                            item.access === "free"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.access === "free" ? (
                            t(locale, "badgeFreeWalk")
                          ) : (
                            <>
                              <Lock className="h-3 w-3" />
                              {t(locale, "badgeSubscriberWalk")}
                            </>
                          )}
                        </span>
                      </div>

                      <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight">
                        {itemText.name}
                      </h3>
                      <p className="mt-2 leading-7 text-muted-foreground">
                        {itemText.tagline}
                      </p>

                      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-primary" />
                          {t(locale, "walkStops", { count: summary.stopCount })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Footprints className="h-4 w-4 text-primary" />
                          {t(locale, "walkStat", {
                            minutes: walkingMinutes(summary.duration),
                            distance: formatDistance(summary.distance),
                          })}
                        </span>
                      </p>

                      {!isTourTranslated(item, locale) && (
                        <p className="mt-3 text-xs leading-5 text-muted-foreground">
                          {t(locale, "walkEnglishOnly")}
                        </p>
                      )}

                      <div className="mt-auto pt-5">
                        {unlocked ? (
                          <button
                            onClick={() => openWalk(item.id)}
                            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                          >
                            {t(locale, "openWalk")} <ArrowRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            onClick={subscribe}
                            disabled={purchasing}
                            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-primary bg-primary/10 px-5 font-semibold text-primary transition-colors hover:bg-primary/15 disabled:cursor-wait disabled:opacity-60"
                          >
                            <Lock className="h-4 w-4" />
                            {price
                              ? t(locale, "subscribePerMonth", { price })
                              : t(locale, "subscribe")}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="what-to-expect" className="border-t border-border">
            <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold text-primary">
                  {t(locale, "expectKicker")}
                </p>
                <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-tight">
                  {t(locale, "expectTitle")}
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-6 text-muted-foreground">
                <p>
                  <strong className="font-semibold text-foreground">
                    {t(locale, "expectOneTitle")}
                  </strong>{" "}
                  {t(locale, "expectOneBody")}
                </p>
                <p>
                  <strong className="font-semibold text-foreground">
                    {t(locale, "expectTwoTitle")}
                  </strong>{" "}
                  {t(locale, "expectTwoBody")}
                </p>
                <p>
                  <strong className="font-semibold text-foreground">
                    {t(locale, "expectThreeTitle")}
                  </strong>{" "}
                  {t(locale, "expectThreeBody")}
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} Balkan Echo · {t(locale, "footerLine")}
          </span>
          <a className="hover:text-foreground" href="privacy/">
            Privacy
          </a>
        </footer>
      </div>
    );
  }

  if (screen === "setup") {
    return (
      <div className="min-h-screen bg-muted/30 px-5 py-5 sm:px-8 sm:py-8">
        <main className="mx-auto max-w-xl rounded-[2rem] border border-border bg-background p-6 shadow-xl shadow-primary/10 sm:p-9">
          <button
            onClick={() => setScreen("welcome")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {t(locale, "allWalks")}
          </button>
          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            {tour.area} ·{" "}
            {tour.access === "free"
              ? t(locale, "badgeFreeWalk")
              : t(locale, "badgeSubscriberWalk")}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-tight">
            {t(locale, "setupTitle")}
          </h1>
          <p className="mt-3 leading-7 text-muted-foreground">
            {t(locale, "setupBody")}
          </p>

          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{t(locale, "chooseLanguage")}</h2>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {locales.map((code) => (
                <button
                  key={code}
                  onClick={() => chooseLocale(code)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    locale === code
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <span className="block font-semibold">{localeNames[code]}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {isTourTranslated(tour, code)
                      ? t(locale, "languageNoteReady")
                      : t(locale, "walkEnglishOnly")}
                  </span>
                  {/* Rendered only once the engine has reported. The page is
                      prerendered as static HTML, where no voice list exists,
                      and claiming "can be read aloud" there would be both a
                      hydration mismatch and a lie. */}
                  {voiceState !== "checking" &&
                    (() => {
                      const hearable =
                        tourIsRecorded(code, tour.id, tour.geo.variants[0].stopIds) ||
                        voiceStatus(code) !== "missing";
                      return (
                        <span
                          className={`mt-1 block text-xs ${
                            hearable ? "text-primary" : "text-muted-foreground/70"
                          }`}
                        >
                          {hearable
                            ? t(locale, "voiceAvailable")
                            : t(locale, "voiceMissing")}
                        </span>
                      );
                    })()}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{t(locale, "chooseTheme")}</h2>
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-primary bg-primary/10 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{t(locale, "themeHistory")}</p>
                <p className="text-sm text-muted-foreground">
                  {t(locale, "themeHistoryBody")}
                </p>
              </div>
              <Check className="ml-auto h-5 w-5 text-primary" />
            </div>
          </section>

          <section className="mt-8">
            <div className="flex items-center gap-2">
              <RouteIcon className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{t(locale, "chooseLength")}</h2>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {tour.geo.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setVariantId(variant.id)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    variantId === variant.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <span className="block font-semibold">
                    {text.variants[variant.id].label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {text.variants[variant.id].blurb}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Footprints className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">{t(locale, "chooseDirection")}</h2>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {directionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => setDirection(id)}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    direction === id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <span className="block font-semibold">
                    {text.directions[id].label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {text.directions[id].blurb}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <button
            onClick={() => setScreen("tour")}
            className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t(locale, "openTour")} <ArrowRight className="h-4 w-4" />
          </button>
        </main>
      </div>
    );
  }

  const locationCopy =
    locationStatus === "ready" && distance !== null
      ? distance <= 100
        ? t(locale, "locationArrived")
        : t(locale, "locationDistance", { distance: formatDistance(distance) })
      : locationStatus === "loading"
        ? t(locale, "locationLoading")
        : locationStatus === "denied"
          ? t(locale, "locationDenied")
          : locationStatus === "unavailable"
            ? t(locale, "locationUnavailable")
            : t(locale, "locationIdle");

  return (
    <div className="min-h-screen bg-muted/30 pb-28 text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => setScreen("welcome")}
            className="font-heading text-xl font-semibold"
          >
            Balkan Echo
          </button>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:inline-block">
              {tour.area} · {activeStop + 1}/{stopCount}
            </span>
            {headerControls()}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-5 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.7rem] border border-border bg-background shadow-sm">
              <div className="border-b border-border p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {t(locale, "mapKicker")}
                </p>
                <h2 className="mt-1 font-heading text-2xl font-semibold">
                  {t(locale, "mapTitle")}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(locale, "mapHint")}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="inline-flex rounded-full border border-border p-0.5">
                    <button
                      onClick={() => setMapView("stop")}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                        mapView === "stop"
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t(locale, "mapThisStop")}
                    </button>
                    <button
                      onClick={() => setMapView("route")}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                        mapView === "route"
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t(locale, "mapWholeRoute")}
                    </button>
                  </div>
                  <button
                    onClick={() => setMapExpanded((value) => !value)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {mapExpanded ? (
                      <>
                        <Minimize2 className="h-3.5 w-3.5" /> {t(locale, "mapCollapse")}
                      </>
                    ) : (
                      <>
                        <Maximize2 className="h-3.5 w-3.5" /> {t(locale, "mapExpand")}
                      </>
                    )}
                  </button>
                </div>
              </div>

              <TourRouteMap
                itinerary={itinerary}
                stops={mapStops}
                activeStop={activeStop}
                onSelectStop={selectStop}
                onChoosePath={choosePath}
                detours={availableDetours(tour.geo, itinerary)}
                activeDetourIds={detourIds}
                detourNames={detourNames}
                onToggleDetour={toggleDetour}
                visitorLocation={visitorLocation}
                view={mapView}
                expanded={mapExpanded}
                labels={{
                  route: t(locale, "mapLegendRoute"),
                  alternative: t(locale, "mapLegendAlternative"),
                  detour: t(locale, "mapLegendDetour"),
                }}
              />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-5 rounded-full bg-primary" />
                  {t(locale, "mapLegendRoute")}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-5 rounded-full border-t-2 border-dotted border-accent" />
                  {t(locale, "mapLegendAlternative")}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-dashed border-muted-foreground" />
                  {t(locale, "mapLegendDetour")}
                </span>
              </div>
              <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
                {locationStatus === "ready"
                  ? t(locale, "mapLocationOn")
                  : t(locale, "mapLocationOff")}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.7rem] border border-border bg-background shadow-sm">
              <div className="border-b border-border p-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {t(locale, "yourRoute")}
                </p>
                <h2 className="mt-1 font-heading text-2xl font-semibold">
                  {text.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {routeSummary} · {languageName(locale)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tour.geo.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setVariantId(variant.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        variantId === variant.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {text.variants[variant.id].label}
                    </button>
                  ))}
                  {directionIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => setDirection(id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        direction === id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {text.directions[id].label}
                    </button>
                  ))}
                </div>
              </div>
              <ol className="p-2">
                {itinerary.stopIds.map((id, index) => (
                  <li key={id}>
                    <button
                      onClick={() => selectStop(index)}
                      className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-colors ${
                        activeStop === index
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          activeStop === index
                            ? "bg-primary-foreground text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold">
                          {text.stops[id].title}
                        </span>
                        <span
                          className={`mt-0.5 block text-xs ${
                            activeStop === index
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {text.stops[id].kicker}
                        </span>
                      </span>
                      {activeStop === index && <ChevronRight className="ml-auto h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <section className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[1.9rem] border border-border bg-background shadow-xl shadow-primary/10">
              <div className="bg-primary px-5 py-5 text-primary-foreground sm:px-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80">
                      {t(locale, "stopWord")} {activeStop + 1} · {stop.kicker}
                    </p>
                    <h1 className="mt-2 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                      {stop.title}
                    </h1>
                  </div>
                  <MapPin className="mt-1 h-6 w-6 shrink-0" />
                </div>
                <p className="mt-4 text-sm text-primary-foreground/85">{stop.landmark}</p>
              </div>

              <div className="p-5 sm:p-7">
                <div className="rounded-[1.4rem] border border-border bg-muted/60 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary">
                      <Radio className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {isPaused
                          ? t(locale, "narrationPaused")
                          : isSpeaking
                            ? t(locale, "narrationPlaying")
                            : t(locale, "narrationReady")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {recorded
                          ? t(locale, "narrationRecorded")
                          : t(locale, "narrationSource")}{" "}
                        · {languageName(locale)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    {isSpeaking ? (
                      <button
                        onClick={pauseNarration}
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 font-semibold text-primary-foreground"
                      >
                        <Pause className="h-4 w-4" /> {t(locale, "pause")}
                      </button>
                    ) : (
                      <button
                        onClick={playNarration}
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 font-semibold text-primary-foreground"
                      >
                        <Play className="h-4 w-4" />{" "}
                        {isPaused ? t(locale, "resumeStory") : t(locale, "playStory")}
                      </button>
                    )}
                    <button
                      onClick={stopNarration}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-4 text-muted-foreground hover:bg-muted"
                      aria-label={t(locale, "stopNarration")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {audioMessage && (
                    <p
                      role="status"
                      className="mt-3 flex gap-2 text-sm leading-6 text-destructive"
                    >
                      <CircleAlert className="mt-1 h-4 w-4 shrink-0" />
                      {audioMessage}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-heading text-2xl font-semibold">
                      {t(locale, "listenOrRead")}
                    </h2>
                    <Volume2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-3 text-[1rem] leading-8 text-muted-foreground">
                    {stop.script}
                  </p>
                </div>

                <div className="mt-7 rounded-[1.4rem] border border-border bg-card p-5">
                  <div className="flex items-start gap-3">
                    <LocateFixed className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h2 className="font-semibold">{t(locale, "locationTitle")}</h2>
                      <p
                        role="status"
                        className="mt-1 text-sm leading-6 text-muted-foreground"
                      >
                        {locationCopy}
                      </p>
                    </div>
                  </div>
                  {locationStatus !== "ready" && (
                    <button
                      onClick={requestLocation}
                      disabled={locationStatus === "loading"}
                      className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-semibold hover:bg-muted disabled:cursor-wait disabled:opacity-60"
                    >
                      <LocateFixed className="h-4 w-4" />{" "}
                      {locationStatus === "loading"
                        ? t(locale, "checkingLocation")
                        : t(locale, "useMyLocation")}
                    </button>
                  )}
                </div>

                <div className="mt-5 rounded-[1.4rem] bg-muted p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {nextSegment ? t(locale, "walkNext") : t(locale, "tourComplete")}
                  </p>

                  {nextSegment ? (
                    <>
                      <p className="mt-2 flex items-center gap-2 font-semibold">
                        <Footprints className="h-4 w-4 text-primary" />
                        {t(locale, "walkStat", {
                          minutes: walkingMinutes(nextSegment.path.duration),
                          distance: formatDistance(nextSegment.path.distance),
                        })}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {direction === "forward"
                          ? stop.direction
                          : t(locale, "directionReverseNote")}
                      </p>

                      {nextSegment.options.length > 1 && (
                        <div className="mt-5">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                            {t(locale, "pathChoice")}
                          </p>
                          <div className="mt-3 grid gap-2">
                            {nextSegment.options.map((option) => {
                              const chosen = option.id === nextSegment.path.id;
                              const copy = text.paths[nextSegment.legKey][option.id];

                              return (
                                <button
                                  key={option.id}
                                  onClick={() => choosePath(nextSegment.legKey, option.id)}
                                  aria-pressed={chosen}
                                  className={`rounded-2xl border p-4 text-left transition-colors ${
                                    chosen
                                      ? "border-primary bg-primary/10"
                                      : "border-border bg-background hover:bg-card"
                                  }`}
                                >
                                  <span className="flex items-center justify-between gap-3">
                                    <span className="font-semibold">{copy.label}</span>
                                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                                      {t(locale, "walkStat", {
                                        minutes: walkingMinutes(option.duration),
                                        distance: formatDistance(option.distance),
                                      })}
                                    </span>
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                    {copy.blurb}
                                  </span>
                                  {chosen && (
                                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                                      <Check className="h-3.5 w-3.5" />
                                      {t(locale, "pathChosen")}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                          {t(locale, "detourTitle")}
                        </p>
                        {legDetours.length === 0 ? (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {t(locale, "detourNone")}
                          </p>
                        ) : (
                          <div className="mt-3 grid gap-2">
                            {legDetours.map((detour) => {
                              const added = detourIds.includes(detour.id);
                              const copy = text.detours[detour.id];

                              return (
                                <button
                                  key={detour.id}
                                  onClick={() => toggleDetour(detour.id)}
                                  aria-pressed={added}
                                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${
                                    added
                                      ? "border-accent bg-accent/10"
                                      : "border-border bg-background hover:bg-card"
                                  }`}
                                >
                                  <span className="min-w-0 flex-1">
                                    <span className="block font-semibold">{copy.name}</span>
                                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                      {copy.blurb}
                                    </span>
                                    {copy.offer && (
                                      <span className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                                          {t(locale, "offerCode")}
                                        </span>
                                        <code className="rounded-md bg-primary px-2 py-0.5 font-mono text-xs font-bold tracking-wider text-primary-foreground">
                                          {copy.offer.code}
                                        </code>
                                        <span className="text-xs text-muted-foreground">
                                          {copy.offer.terms} {t(locale, "offerHint")}
                                        </span>
                                      </span>
                                    )}
                                  </span>
                                  <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                                    {t(locale, "detourMinutes", {
                                      minutes: detour.addMinutes,
                                    })}
                                  </span>
                                  <span
                                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                                      added
                                        ? "bg-accent text-accent-foreground"
                                        : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {added
                                      ? t(locale, "detourAdded")
                                      : t(locale, "detourAdd")}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => selectStop(activeStop + 1)}
                        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        {t(locale, "nextStop", {
                          title: text.stops[itinerary.stopIds[activeStop + 1]].title,
                        })}{" "}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {t(locale, "tourCompleteBody")}
                      </p>
                      <button
                        onClick={() => setScreen("welcome")}
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground"
                      >
                        {t(locale, "allWalks")} <Check className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
