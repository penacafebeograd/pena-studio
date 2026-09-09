import React from 'react';
import { Content } from '../i18n';
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import { FadeIn } from './FadeIn';

interface HeroProps {
  t: Content;
  onOpenSalonDemo: () => void;
  onGetFreeDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  onOpenSalonDemo,
  onGetFreeDemo,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-stone-200 dark:border-stone-800 bg-[#fafaf8] dark:bg-[#0f1115] transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Eyebrow Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 dark:border-teal-800 bg-teal-50/80 dark:bg-teal-950/60 px-3 py-1 text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-tight">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></span>
            {t.hero.badge}
          </span>
        </div>

        {/* Two-column layout on desktop: Left Copy, Right App Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Outcome Headline & Action */}
          <FadeIn className="lg:col-span-6 lg:pr-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              {t.hero.headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-stone-300 leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onGetFreeDemo}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-900 dark:hover:bg-teal-600 active:scale-[0.99] cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onOpenSalonDemo}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-stone-200 shadow-2xs transition-all hover:bg-stone-50 dark:hover:bg-stone-700 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <span className="text-xs rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 px-1.5 py-0.5 font-mono">{t.ui.live}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 dark:border-stone-800">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
                {t.hero.trustPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-teal-700 dark:text-teal-400 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right Column: Realistic UI Mockup */}
          <FadeIn delay={120} className="lg:col-span-6">
            <div className="relative rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#161820] shadow-md dark:shadow-none overflow-hidden">
              {/* Browser/Window Header */}
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 bg-stone-100/90 dark:bg-[#12141a] px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1d26] px-3 py-0.5 text-[11px] font-mono text-slate-500 dark:text-stone-400">
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">https://</span>
                  <span>app.studiomilena.rs</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-teal-700 dark:text-teal-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse"></span>
                  <span>{t.ui.live}</span>
                </div>
              </div>

              {/* App UI Interior */}
              <div className="p-4 sm:p-5">
                {/* App Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-stone-700">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.hero.appMockup.businessName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-stone-400">
                      {t.hero.appMockup.tagline}
                    </p>
                  </div>
                  <button
                    onClick={onOpenSalonDemo}
                    className="inline-flex items-center gap-1 rounded bg-teal-800 dark:bg-teal-700 px-2.5 py-1 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>{t.hero.appMockup.newBookingBtn}</span>
                  </button>
                </div>

                {/* Daily Metrics Row */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-left">
                  <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-[#1b1e27] p-2.5">
                    <span className="block text-[11px] text-slate-500 dark:text-stone-400 font-medium">
                      {t.ui.heroSlotsFilled}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      11 / 12
                    </span>
                  </div>
                  <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-[#1b1e27] p-2.5">
                    <span className="block text-[11px] text-slate-500 dark:text-stone-400 font-medium">
                      {t.ui.heroExpected}
                    </span>
                    <span className="text-sm font-bold text-teal-900 dark:text-teal-300 font-mono">
                      €340.00
                    </span>
                  </div>
                  <div className="rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-[#1b1e27] p-2.5">
                    <span className="block text-[11px] text-slate-500 dark:text-stone-400 font-medium">
                      {t.ui.heroNextInChair}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      11:30
                    </span>
                  </div>
                </div>

                {/* Appointments Schedule List */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-stone-400 px-0.5">
                    <span>{t.hero.appMockup.todaySummary}</span>
                    <span className="text-[11px] font-mono text-teal-700 dark:text-teal-400">{t.ui.heroStaffActive}</span>
                  </div>

                  {/* Appointment Row 1 */}
                  <div className="flex items-center justify-between rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1b1e27] p-2.5 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="flex flex-col items-center justify-center rounded-md bg-stone-100 dark:bg-stone-800 px-2 py-1 text-center font-mono">
                        <span className="text-xs font-bold text-slate-800 dark:text-stone-200">10:00</span>
                        <span className="text-[10px] text-slate-500 dark:text-stone-400">60m</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {t.hero.appMockup.clientName1}
                          </span>
                          <span className="rounded bg-teal-100 dark:bg-teal-950/70 px-1.5 py-0.5 text-[10px] font-medium text-teal-800 dark:text-teal-300">
                            {t.hero.appMockup.statusInProgress}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 block">
                          {t.hero.appMockup.service1}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">€65</span>
                      <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">{t.ui.heroPaidCard}</span>
                    </div>
                  </div>

                  {/* Appointment Row 2 */}
                  <div className="flex items-center justify-between rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1b1e27] p-2.5 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="flex flex-col items-center justify-center rounded-md bg-teal-50 dark:bg-teal-950/60 px-2 py-1 text-center font-mono text-teal-900 dark:text-teal-300">
                        <span className="text-xs font-bold">11:30</span>
                        <span className="text-[10px] text-teal-700 dark:text-teal-400">30m</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {t.hero.appMockup.clientName2}
                          </span>
                          <span className="rounded bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:text-stone-300">
                            {t.hero.appMockup.statusConfirmed}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 block">
                          {t.hero.appMockup.service2}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">€25</span>
                      <span className="block text-[10px] text-slate-400 dark:text-stone-500">{t.ui.heroCashOnVisit}</span>
                    </div>
                  </div>

                  {/* Appointment Row 3 */}
                  <div className="flex items-center justify-between rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1b1e27] p-2.5 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="flex flex-col items-center justify-center rounded-md bg-stone-100 dark:bg-stone-800 px-2 py-1 text-center font-mono">
                        <span className="text-xs font-bold text-slate-800 dark:text-stone-200">12:15</span>
                        <span className="text-[10px] text-slate-500 dark:text-stone-400">45m</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {t.hero.appMockup.clientName3}
                          </span>
                          <span className="rounded bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:text-stone-300">
                            {t.hero.appMockup.statusConfirmed}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 block">
                          {t.hero.appMockup.service3}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">€35</span>
                      <span className="block text-[10px] text-slate-400 dark:text-stone-500">{t.ui.heroCashOnVisit}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom hint */}
                <div className="mt-3.5 flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-700/60 text-[11px] text-slate-500 dark:text-stone-400">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5 text-slate-400 dark:text-stone-400" />
                    <span>{t.ui.heroWorksOn}</span>
                  </div>
                  <button
                    onClick={onOpenSalonDemo}
                    className="font-semibold text-teal-800 dark:text-teal-400 hover:text-teal-950 dark:hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.ui.heroTestDemo}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
