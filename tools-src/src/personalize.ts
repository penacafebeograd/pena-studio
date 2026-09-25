/**
 * Personalised demo links.
 *
 * A demo URL can carry the prospect's own details, so a salon owner opens a
 * demo with their name on it instead of an invented business:
 *
 *   /tools/demo/salon?biz=Salon+Ana&staff=Ana,Jovana,Milica&cur=rsd&lang=sr
 *
 *   biz    business name, replaces "Studio Milena" / "Iron & Kettle"
 *   staff  salon only: up to three names for the chairs (Ana, Miloš, Milica)
 *   cur    "rsd" shows prices in dinars; anything else keeps euros
 *   lang   sr | en | tr, opens the demo in that language
 *
 * Links are built at /tools/link. Everything here is plain text rendered by
 * React, and each value is length-capped, so a crafted link can put a silly
 * name on the page but cannot inject markup.
 */
import type { Language } from './types';

export type Currency = 'eur' | 'rsd';

export interface Personalization {
  biz: string;
  staff: string[];
  cur: Currency;
  lang: Language | null;
}

export const MAX_BIZ = 40;
export const MAX_STAFF = 20;

/** Rough, rounded rate: prices only need to look right on a price list. */
const RSD_PER_EUR = 117;

const clean = (v: string | null, max: number) =>
  (v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export const parsePersonalization = (search: string): Personalization => {
  const q = new URLSearchParams(search);
  const lang = q.get('lang');
  return {
    biz: clean(q.get('biz'), MAX_BIZ),
    staff: (q.get('staff') ?? '')
      .split(',')
      .map((n) => clean(n, MAX_STAFF))
      .filter(Boolean)
      .slice(0, 3),
    cur: q.get('cur')?.toLowerCase() === 'rsd' ? 'rsd' : 'eur',
    lang: lang === 'sr' || lang === 'en' || lang === 'tr' ? lang : null,
  };
};

/**
 * Read once at load. In-app navigation between the two demos keeps the query
 * string (see routing.ts), so this stays true for the whole visit.
 */
export const personal: Personalization = parsePersonalization(
  typeof window === 'undefined' ? '' : window.location.search,
);

export const isPersonalized = (p: Personalization = personal) =>
  Boolean(p.biz || p.staff.length || p.cur === 'rsd');

/** A euro price in the link's currency. Dinar prices round to the nearest hundred. */
export const inCurrency = (eur: number, p: Personalization = personal): number =>
  p.cur === 'eur' ? eur : Math.round((eur * RSD_PER_EUR) / 100) * 100;

/** Format an amount that is already in the link's currency. */
export const formatAmount = (amount: number, p: Personalization = personal): string =>
  p.cur === 'eur'
    ? `€${amount.toLocaleString('en')}`
    : `${amount.toLocaleString('sr-RS')} RSD`;

/** "€35" or "4.100 RSD". Totals should sum `inCurrency` values instead, so
 *  they match the rounded prices shown on each line. */
export const money = (eur: number, p: Personalization = personal): string =>
  formatAmount(inCurrency(eur, p), p);

const DEFAULT_NAMES = ['Studio Milena', 'Iron & Kettle'];
const DEFAULT_STAFF = ['Ana', 'Miloš', 'Milica'];

/** Swap the default chair names for the prospect's staff. */
export const withStaff = (label: string, p: Personalization = personal) =>
  p.staff.length === 0
    ? label
    : // One pass, so a new name that happens to be another default is not renamed twice.
      label.replace(/\((Ana|Miloš|Milica)\)/g, (m, name: string) => {
        const custom = p.staff[DEFAULT_STAFF.indexOf(name)];
        return custom ? `(${custom})` : m;
      });

/** Apply the business name, staff and currency to one UI string. */
export const personalizeText = (
  text: string,
  p: Personalization = personal,
): string => {
  let out = text;
  if (p.biz) for (const n of DEFAULT_NAMES) out = out.split(n).join(p.biz);
  if (p.cur === 'rsd') {
    // Both "€35" (EN) and "35 €" (SR/TR) appear in the demo copy.
    out = out
      .replace(/€\s?(\d+)/g, (_, n) => money(Number(n), p))
      .replace(/(\d+)\s?€/g, (_, n) => money(Number(n), p));
  }
  return withStaff(out, p);
};

/** Personalise every string in a flat-or-nested strings object. */
export const personalizeStrings = <T>(
  strings: T,
  p: Personalization = personal,
): T => {
  if (!isPersonalized(p)) return strings;
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return personalizeText(v, p);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object')
      return Object.fromEntries(
        Object.entries(v).map(([k, x]) => [k, walk(x)]),
      );
    return v;
  };
  return walk(strings) as T;
};

/** Build a personalised demo URL (absolute) from the link-builder form. */
export const buildDemoUrl = (
  origin: string,
  base: string,
  demo: 'salon' | 'gym',
  p: Personalization,
): string => {
  const q = new URLSearchParams();
  if (p.biz.trim()) q.set('biz', clean(p.biz, MAX_BIZ));
  const staff = p.staff.map((n) => clean(n, MAX_STAFF)).filter(Boolean);
  if (demo === 'salon' && staff.length) q.set('staff', staff.join(','));
  if (p.cur === 'rsd') q.set('cur', 'rsd');
  if (p.lang) q.set('lang', p.lang);
  const qs = q.toString();
  return `${origin}${base}demo/${demo}${qs ? `?${qs}` : ''}`;
};
