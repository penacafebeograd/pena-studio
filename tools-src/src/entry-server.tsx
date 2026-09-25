// Build-time only: scripts/prerender.mjs renders the landing page to static
// HTML so crawlers that do not run JavaScript (most AI search bots) still see
// the copy. On the server there is no window, so the app renders the Serbian
// landing page with the light theme; the browser then takes over as before.
import { renderToString } from 'react-dom/server';
import App from './App';
import { translations } from './translations';

export const render = (): string => renderToString(<App />);

export const faq = translations.sr.faq.items;
