"use client";

import { useEffect } from "react";

import { asset } from "@/lib/site";

/**
 * Registers the offline cache. Skipped in development, where the service
 * worker would cache dev-server chunks and fight hot reload; run
 * `npm run preview` to exercise it against a real production build.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register(asset("/sw.js"), { scope: asset("/") }).catch(() => {
      // Offline support is a bonus, not a requirement — a failed
      // registration should never surface to a walker.
    });
  }, []);

  return null;
}
