/**
 * Tiny path router that is aware of the Vite `base`.
 *
 * The generated draft compared `window.location.pathname` against the literal
 * '/demo/salon'. This app is served from https://penastudio.cc/tools/, so the
 * real path is '/tools/demo/salon' and every one of those comparisons — plus
 * every `pushState(…, '/')` — would have missed, dumping visitors out of the
 * app and back to the Pena Studio homepage.
 */

export type Route = 'home' | 'salon' | 'gym';

/** '/tools/' in production, '/' in dev. Always has a trailing slash. */
export const BASE = import.meta.env.BASE_URL || '/';

/** Absolute URL path for a route, base included. */
export const pathFor = (route: Route): string =>
  route === 'home' ? BASE : `${BASE}demo/${route}`;

export const routeFromPath = (pathname?: string): Route => {
  if (typeof window === 'undefined') return 'home';
  const raw = pathname ?? window.location.pathname;

  // Drop the base prefix, then normalise away any leading/trailing slashes.
  const withoutBase = raw.startsWith(BASE) ? raw.slice(BASE.length) : raw;
  const slug = withoutBase.replace(/^\/+/, '').replace(/\/+$/, '');

  if (slug === 'demo/salon') return 'salon';
  if (slug === 'demo/gym') return 'gym';
  return 'home';
};

export const pushRoute = (route: Route) => {
  if (typeof window === 'undefined') return;
  window.history.pushState({}, '', pathFor(route));
};
