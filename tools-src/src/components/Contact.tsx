import React, { useState } from 'react';
import { Language } from '../types';
import { Content } from '../i18n';
import {
  MessageCircle,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import {
  CONTACT_EMAIL,
  FORM_ACCESS_KEY,
  FORM_ENDPOINT,
  WHATSAPP_NUMBER,
  hasEmail,
  hasFormEndpoint,
  hasWhatsApp,
  waLink,
} from '../config';

interface ContactProps {
  t: Content;
  lang: Language;
}

type FormState = {
  name: string;
  businessType: string;
  trackingNow: string;
  contactMethod: string;
  notes: string;
};

const EMPTY_FORM: FormState = {
  name: '',
  businessType: '',
  trackingNow: '',
  contactMethod: '',
  notes: '',
};

export const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openingLine = () => {
    switch (lang) {
      case 'sr':
        return 'Zdravo, zanima me izrada jednostavne aplikacije za moj biznis.';
      case 'tr':
        return 'Merhaba, isletmem icin 1 gunde sade bir uygulama yaptirmak istiyorum.';
      default:
        return "Hi, I'm interested in building a simple 1-day app for my business.";
    }
  };

  const chatLink = waLink(openingLine());

  /** The filled-in form rendered as a plain-text message. */
  const composeEnquiry = (d: FormState) =>
    [
      `${t.contact.fields.name}: ${d.name}`,
      `${t.contact.fields.businessType}: ${d.businessType}`,
      `${t.contact.fields.trackingNow}: ${d.trackingNow}`,
      `${t.contact.fields.contactMethod}: ${d.contactMethod}`,
      d.notes ? `${t.contact.fields.notes}: ${d.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

  const handoff = (d: FormState) => {
    const body = composeEnquiry(d);
    if (hasWhatsApp) {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
        '_blank',
        'noopener,noreferrer',
      );
      return true;
    }
    if (hasEmail) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        'Pena Tools enquiry',
      )}&body=${encodeURIComponent(body)}`;
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Preferred path: POST to a real form-to-email endpoint when one is set.
    if (hasFormEndpoint) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...(FORM_ACCESS_KEY ? { access_key: FORM_ACCESS_KEY } : {}),
            subject: `Pena Tools enquiry — ${formData.businessType || 'new'}`,
            language: lang,
            page: typeof window !== 'undefined' ? window.location.href : '',
            ...formData,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setIsSubmitting(false);
        setSubmitted(true);
        return;
      } catch {
        // Fall through to the handoff so the enquiry is never silently dropped.
      }
    }

    const delivered = handoff(formData);
    setIsSubmitting(false);
    if (delivered) {
      setSubmitted(true);
    } else {
      setError(t.ui.formErrorText);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800 bg-[#fafaf8] dark:bg-[#0f1115] transition-colors duration-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: WhatsApp / direct contact */}
          <FadeIn delay={0} className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border-2 border-teal-700/80 dark:border-teal-500/60 bg-white dark:bg-[#161820] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    {t.ui.fastestResponse}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t.ui.directWhatsApp}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                {t.ui.whatsappBlurb}
              </p>

              <div className="mt-6">
                {chatLink ? (
                  <a
                    href={chatLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="whatsapp-primary-cta"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 transition-colors px-5 py-3.5 text-sm font-semibold text-white shadow-xs active:scale-[0.99] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{t.contact.whatsappBtn}</span>
                  </a>
                ) : (
                  /* No number configured yet — say so instead of dialling a stranger. */
                  <div className="rounded-xl border border-dashed border-amber-400/70 dark:border-amber-500/50 bg-amber-50/70 dark:bg-amber-950/30 p-3 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>
                      WhatsApp number not configured yet — set{' '}
                      <code className="font-mono">WHATSAPP_NUMBER</code> in{' '}
                      <code className="font-mono">src/config.ts</code>.
                    </span>
                  </div>
                )}
                <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-stone-400">
                  {t.contact.whatsappSub}
                </p>
              </div>
            </div>

            {(hasWhatsApp || hasEmail) && (
              <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#161820] p-5 text-xs text-slate-600 dark:text-stone-300 space-y-3">
                {hasWhatsApp && (
                  <div className="flex items-center gap-2.5 text-slate-800 dark:text-stone-200 font-medium">
                    <Phone className="h-4 w-4 text-teal-800 dark:text-teal-400 shrink-0" />
                    <span>+{WHATSAPP_NUMBER}</span>
                  </div>
                )}
                {hasEmail && (
                  <div className="flex items-center gap-2.5 text-slate-800 dark:text-stone-200 font-medium">
                    <Mail className="h-4 w-4 text-teal-800 dark:text-teal-400 shrink-0" />
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2.5 text-slate-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <Clock className="h-4 w-4 text-slate-400 dark:text-stone-500 shrink-0" />
                  <span>{t.ui.availability}</span>
                </div>
              </div>
            )}
          </FadeIn>

          {/* Right: the form */}
          <FadeIn delay={120} className="lg:col-span-7">
            <div className="rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#161820] p-6 sm:p-8 shadow-xs">
              <div className="pb-4 border-b border-stone-200 dark:border-stone-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.contact.formTitle}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-stone-400">
                  {t.contact.formSubtitle}
                </p>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-950/40 p-6 text-center"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-700 dark:text-emerald-400 mb-3" />
                  <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-200">
                    {t.ui.inquiryReceived}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.successMessage}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(EMPTY_FORM);
                    }}
                    className="mt-5 inline-block text-xs font-semibold text-emerald-800 dark:text-emerald-400 underline cursor-pointer"
                  >
                    {t.ui.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-800 dark:text-stone-200 mb-1.5"
                      >
                        {t.contact.fields.name} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contact.fields.namePlaceholder}
                        className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-[#1f222e] px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-teal-700 dark:focus:border-teal-400 focus:bg-white dark:focus:bg-[#1f222e] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-business"
                        className="block text-xs font-semibold text-slate-800 dark:text-stone-200 mb-1.5"
                      >
                        {t.contact.fields.businessType} *
                      </label>
                      <input
                        id="contact-business"
                        name="businessType"
                        type="text"
                        required
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({ ...formData, businessType: e.target.value })
                        }
                        placeholder={t.contact.fields.businessTypePlaceholder}
                        className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-[#1f222e] px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-teal-700 dark:focus:border-teal-400 focus:bg-white dark:focus:bg-[#1f222e] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-tracking"
                      className="block text-xs font-semibold text-slate-800 dark:text-stone-200 mb-1.5"
                    >
                      {t.contact.fields.trackingNow} *
                    </label>
                    <input
                      id="contact-tracking"
                      name="trackingNow"
                      type="text"
                      required
                      value={formData.trackingNow}
                      onChange={(e) =>
                        setFormData({ ...formData, trackingNow: e.target.value })
                      }
                      placeholder={t.contact.fields.trackingNowPlaceholder}
                      className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-[#1f222e] px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-teal-700 dark:focus:border-teal-400 focus:bg-white dark:focus:bg-[#1f222e] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-method"
                      className="block text-xs font-semibold text-slate-800 dark:text-stone-200 mb-1.5"
                    >
                      {t.contact.fields.contactMethod} *
                    </label>
                    <input
                      id="contact-method"
                      name="contactMethod"
                      type="text"
                      autoComplete="tel"
                      required
                      value={formData.contactMethod}
                      onChange={(e) =>
                        setFormData({ ...formData, contactMethod: e.target.value })
                      }
                      placeholder={t.contact.fields.contactMethodPlaceholder}
                      className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-[#1f222e] px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-teal-700 dark:focus:border-teal-400 focus:bg-white dark:focus:bg-[#1f222e] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-slate-800 dark:text-stone-200 mb-1.5"
                    >
                      {t.contact.fields.notes}
                    </label>
                    <textarea
                      id="contact-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder={t.contact.fields.notesPlaceholder}
                      className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-[#1f222e] px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-teal-700 dark:focus:border-teal-400 focus:bg-white dark:focus:bg-[#1f222e] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 transition-colors"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs font-medium text-red-800 dark:text-red-300"
                    >
                      {error}
                    </p>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-form-submit-btn"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 px-5 py-3 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                    >
                      <span>
                        {isSubmitting ? t.ui.sending : t.contact.fields.submitBtn}
                      </span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.ui.noSpam}
                    </span>
                  </div>

                  {!hasFormEndpoint && (hasWhatsApp || hasEmail) && (
                    <p className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.ui.formFallbackNote}
                    </p>
                  )}
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
