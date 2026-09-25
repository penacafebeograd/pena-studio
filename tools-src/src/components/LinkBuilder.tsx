import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { Content, fill } from '../i18n';
import { uiStrings } from '../translations.ui';
import { BASE, pathFor } from '../routing';
import {
  Currency,
  MAX_BIZ,
  MAX_STAFF,
  buildDemoUrl,
  money,
} from '../personalize';

/**
 * /tools/link: builds a personalised demo URL to send a prospect.
 *
 * Not linked from the public site and marked noindex (see DynamicSeo); it is
 * our own tool. Nothing is stored: the link carries everything.
 */

interface LinkBuilderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome: () => void;
  t: Content;
}

const LANGS: Language[] = ['en', 'sr', 'tr'];

const field =
  'w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-teal-700 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700';
const label = 'block text-xs font-semibold text-slate-700 dark:text-stone-300 mb-1.5';

const Segmented = <T extends string>({
  value,
  options,
  onChange,
  name,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  name: string;
}) => (
  <div
    role="radiogroup"
    aria-label={name}
    className="inline-flex flex-wrap rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-[#1c1e28] p-1 gap-1"
  >
    {options.map((o) => (
      <button
        key={o.value}
        type="button"
        role="radio"
        aria-checked={value === o.value}
        onClick={() => onChange(o.value)}
        className={`px-3 py-1 text-xs font-semibold rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 ${
          value === o.value
            ? 'bg-teal-800 dark:bg-teal-700 text-white'
            : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        {o.label}
      </button>
    ))}
  </div>
);

export const LinkBuilder: React.FC<LinkBuilderProps> = ({
  lang,
  onLanguageChange,
  onNavigateHome,
  t,
}) => {
  const L = t.ui.linkBuilder;
  const s = t.ui.standalone;

  const [demo, setDemo] = useState<'salon' | 'gym'>('salon');
  const [biz, setBiz] = useState('');
  const [staff, setStaff] = useState(['', '', '']);
  // Belgrade prospects price in dinars and read Serbian, so those are the defaults.
  const [cur, setCur] = useState<Currency>('rsd');
  const [demoLang, setDemoLang] = useState<Language | 'auto'>('sr');
  const [copied, setCopied] = useState(false);

  const url = buildDemoUrl(window.location.origin, BASE, demo, {
    biz,
    staff,
    cur,
    lang: demoLang === 'auto' ? null : demoLang,
  });

  // The message goes to the prospect, so it follows the demo's language.
  const shareLang: Language = demoLang === 'auto' ? lang : demoLang;
  const shareHref = biz.trim()
    ? `https://wa.me/?text=${encodeURIComponent(
        fill(uiStrings[shareLang].linkBuilder.shareMessage, { biz: biz.trim(), url }),
      )}`
    : null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard blocked (insecure context, old browser): select the text so
      // a long-press or Ctrl+C still works.
      const el = document.getElementById('demo-link-output') as HTMLInputElement | null;
      el?.select();
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#0f1115] text-slate-900 dark:text-stone-100 transition-colors duration-200">
      <header className="border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-[#13151b]/95 px-4 py-2.5 sm:px-6">
        <div className="mx-auto max-w-2xl flex items-center justify-between gap-3">
          <a
            href={pathFor('home')}
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{s.backToSite}</span>
          </a>
          <div className="flex items-center rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] p-0.5 text-xs font-mono">
            {LANGS.map((code) => (
              <button
                key={code}
                onClick={() => onLanguageChange(code)}
                aria-pressed={lang === code}
                lang={code}
                className={`px-1.5 py-0.5 rounded focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700 ${
                  lang === code
                    ? 'bg-teal-800 text-white font-bold'
                    : 'text-slate-600 dark:text-stone-400'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold tracking-tight">{L.title}</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-stone-400">{L.intro}</p>

        <form
          className="mt-6 space-y-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#161820] p-5 shadow-2xs"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <span className={label}>{L.demo}</span>
            <Segmented
              name={L.demo}
              value={demo}
              onChange={setDemo}
              options={[
                { value: 'salon', label: s.salonSwitch },
                { value: 'gym', label: s.gymSwitch },
              ]}
            />
          </div>

          <div>
            <label htmlFor="lb-biz" className={label}>
              {L.bizLabel}
            </label>
            <input
              id="lb-biz"
              className={field}
              value={biz}
              maxLength={MAX_BIZ}
              placeholder={L.bizPlaceholder}
              onChange={(e) => setBiz(e.target.value)}
            />
          </div>

          {demo === 'salon' && (
            <fieldset>
              <legend className={label}>{L.staffLabel}</legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['Ana', 'Miloš', 'Milica'].map((ph, i) => (
                  <input
                    key={ph}
                    aria-label={`${L.staffLabel} ${i + 1}`}
                    className={field}
                    value={staff[i]}
                    maxLength={MAX_STAFF}
                    placeholder={ph}
                    onChange={(e) =>
                      setStaff((prev) => prev.map((v, j) => (j === i ? e.target.value : v)))
                    }
                  />
                ))}
              </div>
            </fieldset>
          )}

          <div className="flex flex-wrap gap-5">
            <div>
              <span className={label}>{L.currencyLabel}</span>
              <Segmented
                name={L.currencyLabel}
                value={cur}
                onChange={setCur}
                options={[
                  { value: 'rsd', label: `RSD (${money(30, { biz: '', staff: [], cur: 'rsd', lang: null })})` },
                  { value: 'eur', label: `EUR (${money(30, { biz: '', staff: [], cur: 'eur', lang: null })})` },
                ]}
              />
            </div>
            <div>
              <span className={label}>{L.langLabel}</span>
              <Segmented
                name={L.langLabel}
                value={demoLang}
                onChange={setDemoLang}
                options={[
                  { value: 'sr', label: 'SR' },
                  { value: 'en', label: 'EN' },
                  { value: 'tr', label: 'TR' },
                  { value: 'auto', label: L.langVisitor },
                ]}
              />
            </div>
          </div>
        </form>

        <section className="mt-6 rounded-2xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/70 dark:bg-teal-950/40 p-5">
          <label htmlFor="demo-link-output" className={label}>
            {L.yourLink}
          </label>
          <input
            id="demo-link-output"
            readOnly
            value={url}
            onFocus={(e) => e.currentTarget.select()}
            className={`${field} font-mono text-xs`}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? L.copied : L.copy}</span>
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{L.open}</span>
            </a>
            {shareHref ? (
              <a
                href={shareHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-stone-800 px-3.5 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{L.shareWa}</span>
              </a>
            ) : (
              <span className="self-center text-xs text-slate-500 dark:text-stone-400">
                {L.shareNeedsBiz}
              </span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
