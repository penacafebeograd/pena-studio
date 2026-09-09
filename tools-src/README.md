# Pena Tools

Landing page + two interactive demo apps, served at **https://penastudio.cc/tools/**.

Part of the `penastudio.cc` GitHub Pages site (this repo). The Pena Studio
landing page at `/` and `/work.html` are untouched static files; this app is
built into `/tools` by CI and published alongside them.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000/tools/
```

```bash
npm run build    # typecheck + build into ../tools + emit the static demo routes
```

## Contact details

Everything that needs a real value lives in **`src/config.ts`**:

| Constant          | Status                        | Behaviour when empty                        |
| ----------------- | ----------------------------- | ------------------------------------------- |
| `WHATSAPP_NUMBER` | set — the Pena Art Cafe line  | CTAs fall back to the contact form          |
| `CONTACT_EMAIL`   | empty, optional               | The email row is hidden                     |
| `FORM_ENDPOINT`   | env, optional                 | Form hands off to WhatsApp instead of POST  |

The generated draft hardcoded two different unverified phone numbers, in six
places between them. Neither was checked against anything, so both were
removed rather than shipped — a wrong number sends customers to a stranger.
The digits are deliberately not repeated here: this repository is public.

### Contact form

1. **Preferred:** set `VITE_FORM_ENDPOINT` (and `VITE_FORM_ACCESS_KEY` for
   Web3Forms) as GitHub repo secrets. Formspree and Web3Forms both accept the
   JSON POST this app sends, with no code change.
2. **Fallback (active now):** submitting composes the enquiry and opens
   WhatsApp — or `mailto:` — with the answers pre-filled. Nothing is dropped.

The original form did neither: it ran a 500 ms `setTimeout`, showed
"Inquiry Received!", and discarded the data.

## Routing

Two client routes, both base-aware (`src/routing.ts`):

- `/tools/demo/salon`
- `/tools/demo/gym`

GitHub Pages has no SPA rewrites, so `scripts/emit-routes.mjs` copies the built
shell to those paths (plus `404.html`) after every build. Deep links and shared
URLs therefore load a real file.

## Language

Serbian is the default. Only an explicit Turkish browser preference switches
away from it — an English preference deliberately does not, because Windows
ships an English locale on most machines in Serbia and honouring it would
hand the English page to the Belgrade owners this is written for. A visitor's
own choice wins and persists in `localStorage`.

The demo apps are translated too: `src/components/demos/demoStrings.ts` holds
their chrome plus lookups for the sample data, with Serbian plural forms and
accusative weekdays.

## Analytics

Cloudflare Web Analytics, injected by a Vite plugin only when
`VITE_CF_BEACON_TOKEN` is set as a repo secret. No cookies, no fingerprinting,
so no consent banner. Nothing is emitted without a token.

## Known gaps

- `public/og-image.jpg` is ~700 KB; worth compressing.
- The demo businesses ("Studio Milena", "Iron & Kettle") are invented. The
  strongest replacement is a real client, once there is one.
