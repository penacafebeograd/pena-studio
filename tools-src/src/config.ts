/**
 * Single source of truth for contact details and integrations.
 *
 * ⚠️  REPLACE THE PLACEHOLDERS BELOW BEFORE TAKING ENQUIRIES SERIOUSLY.
 *
 * While `WHATSAPP_NUMBER` is left empty, every WhatsApp button falls back to
 * the on-page contact form instead of dialling a number that isn't yours.
 * That is deliberate: the AI-generated draft shipped with `+381 64 123 4567`
 * hardcoded in four places, which is very likely a real stranger's line.
 */

/** Digits only, full international format, no `+` and no spaces. e.g. '381641234567' */
export const WHATSAPP_NUMBER = '';

/** Public contact address. Leave empty to hide the email row entirely. */
export const CONTACT_EMAIL = '';

/**
 * Where the contact form POSTs.
 *
 * Set `VITE_FORM_ENDPOINT` at build time to any form-to-email service that
 * accepts a plain JSON POST — Formspree (https://formspree.io/f/xxxxxxxx) and
 * Web3Forms (https://api.web3forms.com/submit) both work with no code changes.
 *
 * When it is empty the form still works: on submit it composes the enquiry and
 * hands it off to WhatsApp (or email), so nothing is silently dropped.
 */
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT ?? '';

/** Web3Forms requires its access key in the payload; harmless for Formspree. */
export const FORM_ACCESS_KEY = import.meta.env.VITE_FORM_ACCESS_KEY ?? '';

export const hasWhatsApp = WHATSAPP_NUMBER.trim().length > 0;
export const hasEmail = CONTACT_EMAIL.trim().length > 0;
export const hasFormEndpoint = FORM_ENDPOINT.trim().length > 0;

/** Builds a wa.me link, or null when no number is configured. */
export const waLink = (message: string): string | null =>
  hasWhatsApp
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : null;

if (import.meta.env.DEV && !hasWhatsApp) {
  console.warn(
    '[pena-tools] WHATSAPP_NUMBER is not set in src/config.ts — WhatsApp CTAs are falling back to the contact form.',
  );
}
