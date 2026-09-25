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

### Contact forms

Both forms, this app's and the "Brief Us" form on the homepage, use the
same two repo secrets:

1. Get a free access key at <https://web3forms.com> (it emails enquiries to
   the address you sign up with).
2. In GitHub: **Settings → Secrets and variables → Actions → New repository
   secret**. Add `VITE_FORM_ENDPOINT` = `https://api.web3forms.com/submit`
   and `VITE_FORM_ACCESS_KEY` = your key. (Formspree works too: put its form
   URL in `VITE_FORM_ENDPOINT` and leave the key empty.)
3. Push or re-run the deploy. The "Fill in the homepage form endpoint" step
   logs whether an endpoint was set.

The key ends up in the public page either way; form-to-email keys are made
for that. The secrets just keep it out of the repository.

Without an endpoint, submitting opens WhatsApp with the enquiry filled in,
and the page says to press Send there (it no longer claims the enquiry was
received). If a POST fails, the page offers a WhatsApp link with the
enquiry, instead of opening a pop-up the browser would block. Both forms
have a hidden honeypot checkbox (`botcheck`) and link to `/privacy.html`.

The original form did neither: it ran a 500 ms `setTimeout`, showed
"Inquiry Received!", and discarded the data.

## Routing

Three client routes, all base-aware (`src/routing.ts`):

- `/tools/demo/salon`
- `/tools/demo/gym`
- `/tools/link` (personalised link builder)

GitHub Pages has no SPA rewrites, so `scripts/emit-routes.mjs` copies the built
shell to those paths (plus `404.html`) after every build. Deep links and shared
URLs therefore load a real file.

## Personalised demo links

A demo URL can carry a prospect's own details, so a salon owner opens a demo
with their name on it instead of an invented business:

```
/tools/demo/salon?biz=Salon+Ana&staff=Ana,Jovana,Milica&cur=rsd&lang=sr
```

| Param   | Effect                                                         |
| ------- | -------------------------------------------------------------- |
| `biz`   | Replaces "Studio Milena" / "Iron & Kettle" everywhere, max 40 chars |
| `staff` | Salon only: up to three names for the chairs, max 20 chars each |
| `cur`   | `rsd` shows every price in dinars (≈117 RSD/€, rounded to 100)  |
| `lang`  | `sr`, `en` or `tr`; wins for that visit, never saved            |

The WhatsApp button on a personalised demo sends "I looked at the demo for
{biz}…", so you know which link turned into an enquiry. Personalised pages
are `noindex`, and switching between the salon and gym demo keeps the query.

Build links at **`/tools/link`** instead of typing them: fill in the form, then
copy the link or send it straight to WhatsApp with a message in the demo's
language. That page is not linked from the site and is `noindex`. Code:
`src/personalize.ts`, `src/components/LinkBuilder.tsx`.

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

- The demo businesses ("Studio Milena", "Iron & Kettle") are invented. The
  strongest replacement is a real client, once there is one.
