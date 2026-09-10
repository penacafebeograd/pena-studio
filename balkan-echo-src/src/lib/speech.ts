// Reading the stories aloud.
//
// The app uses the speech engine already on the device: free, no bytes to
// download, works offline, and on Android it is Google's own engine, which
// covers all six of our languages. The catch is that what is *installed*
// varies from phone to phone, so the job here is to (a) find a matching
// voice however the platform spells the language tag, and (b) tell the
// walker the truth when there isn't one, instead of reading Turkish prose
// in an American accent.

import { locales, speechLang, type Locale } from "@/lib/i18n";

/**
 * Android's TextToSpeech engine reports locales inconsistently — "tr-TR",
 * "tr_TR" and the three-letter "tur-TR" all turn up in the wild, and some
 * builds report bare "tr". Reduce anything to a two-letter code.
 */
const threeLetter: Record<string, string> = {
  eng: "en",
  tur: "tr",
  srp: "sr",
  hrv: "sr", // Croatian voices read Serbian Latin acceptably
  bos: "sr",
  spa: "es",
  fra: "fr",
  fre: "fr",
  rus: "ru",
};

export function baseLanguage(tag: string) {
  const first = tag.toLowerCase().replace(/_/g, "-").split("-")[0];
  return threeLetter[first] ?? first;
}

function voices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices();
}

/**
 * Best voice for a locale, preferring an exact regional match, then any
 * voice for the language, then a related one (Croatian or Bosnian for
 * Serbian — the phonetics carry, and silence is worse).
 */
export function findVoice(locale: Locale): SpeechSynthesisVoice | null {
  const wanted = speechLang(locale).toLowerCase();
  const base = baseLanguage(wanted);
  const all = voices();

  return (
    all.find((voice) => voice.lang.toLowerCase().replace(/_/g, "-") === wanted) ??
    all.find((voice) => baseLanguage(voice.lang) === base) ??
    null
  );
}

/** Which of our languages this particular device can actually speak. */
export function speakableLocales(): Locale[] {
  return locales.filter((locale) => findVoice(locale) !== null);
}

export type VoiceStatus = "checking" | "available" | "missing" | "unsupported";

export function voiceStatus(locale: Locale): VoiceStatus {
  if (typeof window === "undefined") return "checking";
  if (!("speechSynthesis" in window)) return "unsupported";
  // An empty list usually means the engine has not reported yet rather than
  // that the device is mute; callers re-check on the voiceschanged event.
  if (voices().length === 0) return "checking";
  return findVoice(locale) ? "available" : "missing";
}

/**
 * Where to go to fix a missing voice. Worth being specific: "no voice
 * installed" is useless advice, and the fix is three taps on most phones.
 */
export function voiceHelpPlatform(): "android" | "ios" | "desktop" {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  return "desktop";
}
