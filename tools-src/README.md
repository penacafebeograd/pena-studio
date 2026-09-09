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

## Before you take real enquiries

Everything that needs a real value lives in **`src/config.ts`**:

| Constant           | Status                | What happens while it is empty                            |
| ------------------ | --------------------- | --------------------------------------------------------- |
| `WHATSAPP_NUMBER`  | **empty — set this**  | WhatsApp CTAs fall back to the contact form / home         |
| `CONTACT_EMAIL`    | **empty — optional**  | The email row is hidden                                    |
| `FORM_ENDPOINT`    | env, optional         | Form hands off to WhatsApp instead of POSTing              |

The generated draft hardcoded `+381 64 123 4567` in four places and
`+381 62 816 9996` in two more. Neither was verified, so both were removed
rather than shipped — a wrong number sends customers to a stranger.

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

## Known gaps

- **The two demo apps are English-only.** `src/components/demos/*` (~1,700
  lines) still has its labels hardcoded. The whole site *shell* — nav, hero,
  pricing, FAQ, contact, modal chrome, standalone demo page — is fully EN/SR/TR.
- `public/og-image.jpg` is ~700 KB; worth compressing.
- Analytics is not wired up (no Plausible instance exists yet).
