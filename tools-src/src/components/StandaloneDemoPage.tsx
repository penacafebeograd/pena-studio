import React from 'react';
import {
  ArrowLeft,
  Scissors,
  Dumbbell,
  Sun,
  Moon,
  MessageSquare,
} from 'lucide-react';
import { Language, Theme } from '../types';
import { Content } from '../i18n';
import { SalonDemo } from './demos/SalonDemo';
import { GymDemo } from './demos/GymDemo';
import { waLink } from '../config';
import { pathFor } from '../routing';

interface StandaloneDemoPageProps {
  demoType: 'salon' | 'gym';
  onNavigateHome: () => void;
  onSwitchDemo: (type: 'salon' | 'gym') => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  t: Content;
}

const LANGS: Language[] = ['en', 'sr', 'tr'];

export const StandaloneDemoPage: React.FC<StandaloneDemoPageProps> = ({
  demoType,
  onNavigateHome,
  onSwitchDemo,
  lang,
  onLanguageChange,
  theme,
  onToggleTheme,
  t,
}) => {
  const s = t.ui.standalone;
  const isSalon = demoType === 'salon';
  const cta = waLink(
    `${s.ctaButton} — ${isSalon ? s.salonSwitch : s.gymSwitch}`,
  );

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#0f1115] text-slate-900 dark:text-stone-100 flex flex-col transition-colors duration-200">
      <header className="sticky top-0 z-40 border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-[#13151b]/95 backdrop-blur-md px-4 py-2.5 sm:px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={pathFor('home')}
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{s.backToSite}</span>
            </a>

            <div
              aria-hidden="true"
              className="h-4 w-px bg-stone-200 dark:bg-stone-700 hidden sm:block"
            ></div>

            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"
              ></span>
              <h1 className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                {isSalon ? s.salonTerminal : s.gymTerminal}
              </h1>
            </div>
          </div>

          {/* Salon / gym switcher */}
          <div
            role="tablist"
            aria-label={t.demos.title}
            className="flex items-center rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-[#1c1e28] p-1 self-start md:self-center"
          >
            <button
              role="tab"
              aria-selected={isSalon}
              onClick={() => onSwitchDemo('salon')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                isSalon
                  ? 'bg-teal-800 dark:bg-teal-700 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Scissors className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{s.salonSwitch}</span>
            </button>
            <button
              role="tab"
              aria-selected={!isSalon}
              onClick={() => onSwitchDemo('gym')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                !isSalon
                  ? 'bg-teal-800 dark:bg-teal-700 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Dumbbell className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{s.gymSwitch}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? t.ui.toLightMode : t.ui.toDarkMode}
              title={theme === 'dark' ? t.ui.toLightMode : t.ui.toDarkMode}
              className="rounded-lg border border-stone-300 dark:border-stone-700 p-1.5 text-slate-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

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

            {cta ? (
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{s.ctaButton}</span>
              </a>
            ) : (
              <a
                href={pathFor('home')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{s.ctaButton}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-3 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#161820] p-3.5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300">
                {isSalon ? (
                  <Scissors className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Dumbbell className="h-4 w-4" aria-hidden="true" />
                )}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  {isSalon ? s.salonBanner : s.gymBanner}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-stone-400">
                  {s.bannerNote}
                </span>
              </div>
            </div>

            <button
              onClick={onNavigateHome}
              className="text-xs font-semibold text-teal-800 dark:text-teal-400 hover:underline cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {s.returnLanding}
            </button>
          </div>

          <div className="rounded-2xl border border-stone-300 dark:border-stone-700/80 bg-[#fbfbf9] dark:bg-[#14161f] p-4 sm:p-6 shadow-xl">
            {isSalon ? <SalonDemo lang={lang} /> : <GymDemo lang={lang} />}
          </div>

          <div className="mt-8 rounded-2xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/70 dark:bg-teal-950/40 p-6 text-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {s.ctaTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-stone-300 max-w-xl mx-auto">
              {s.ctaText}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {cta ? (
                <a
                  href={cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-800 dark:bg-teal-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>{s.ctaButton}</span>
                </a>
              ) : (
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-800 dark:bg-teal-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>{s.ctaButton}</span>
                </button>
              )}
              <button
                onClick={onNavigateHome}
                className="rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                {s.backToPricing}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
