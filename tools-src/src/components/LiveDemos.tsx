import React from 'react';
import { Content } from '../i18n';
import { Dumbbell, Scissors, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { pathFor } from '../routing';
import { FadeIn } from './FadeIn';

interface LiveDemosProps {
  t: Content;
  onOpenDemo: (type: 'salon' | 'gym') => void;
  onOpenStandalone?: (type: 'salon' | 'gym') => void;
}

export const LiveDemos: React.FC<LiveDemosProps> = ({
  t,
  onOpenDemo,
  onOpenStandalone,
}) => {
  return (
    <section id="demos" className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#13151b] transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.demos.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.demos.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.demos.subtitle}
          </p>
        </FadeIn>

        {/* Two Large Clickable Preview Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Salon Booking Demo */}
          <FadeIn delay={0} className="h-full">
            <div
              id="demo-card-salon"
              className="group flex flex-col justify-between rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-[#181a24] p-6 sm:p-7 shadow-xs hover:border-teal-700/40 dark:hover:border-teal-500/40 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out h-full"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 group-hover:bg-teal-100/70 dark:group-hover:bg-teal-900/60 group-hover:border-teal-300 transition-colors duration-300">
                      <Scissors className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-950 dark:group-hover:text-teal-200 transition-colors">
                        {t.demos.items[0].title}
                      </h3>
                      <span className="text-xs font-medium text-teal-800 dark:text-teal-400">
                        {t.demos.items[0].category}
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-stone-200/80 dark:bg-stone-800 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-stone-300">
                    {t.ui.demoBadge} 01
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                  {t.demos.items[0].description}
                </p>

                {/* UI Snapshot Graphic Box */}
                <button
                  type="button"
                  onClick={() => onOpenDemo('salon')}
                  aria-label={`${t.demos.items[0].title} — ${t.demos.tryLiveBtn}`}
                  className="mt-5 w-full text-left rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1f222e] p-3.5 shadow-2xs cursor-pointer group-hover:border-teal-700/40 dark:group-hover:border-teal-500/40 group-hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-700/60 pb-2 text-[11px] font-mono text-slate-500 dark:text-stone-400">
                    <span className="font-semibold text-slate-800 dark:text-stone-200">{t.ui.salonSnapshot}</span>
                    <span className="text-teal-700 dark:text-teal-400 font-medium group-hover:underline">{t.ui.tapToTest}</span>
                  </div>

                  <div className="mt-2.5 space-y-1.5 font-sans">
                    <div className="flex items-center justify-between rounded bg-stone-50 dark:bg-stone-800/80 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-800 dark:text-stone-200">10:00</span>
                        <span className="font-medium text-slate-900 dark:text-white">Jelena Nikolić</span>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 hidden sm:inline">• {t.ui.snapBalayage}</span>
                      </div>
                      <span className="rounded bg-teal-100 dark:bg-teal-950/70 px-1.5 py-0.5 text-[10px] font-medium text-teal-900 dark:text-teal-300">
                        {t.ui.snapInChair}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded bg-stone-50 dark:bg-stone-800/80 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-800 dark:text-stone-200">11:30</span>
                        <span className="font-medium text-slate-900 dark:text-white">Marko Petrović</span>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 hidden sm:inline">• {t.ui.snapBeardCut}</span>
                      </div>
                      <span className="rounded bg-stone-200 dark:bg-stone-700 px-1.5 py-0.5 text-[10px] font-medium text-slate-700 dark:text-stone-300">
                        {t.ui.snapConfirmed}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Features checklist */}
                <ul className="mt-5 space-y-2">
                  {t.demos.items[0].keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA & Stats */}
              <div className="mt-7 pt-5 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-stone-400">
                  <div>
                    <span className="block font-bold font-mono text-slate-900 dark:text-white">
                      {t.demos.items[0].previewStats[0].value}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.demos.items[0].previewStats[0].label}
                    </span>
                  </div>
                  <div className="h-7 w-px bg-stone-200 dark:bg-stone-800"></div>
                  <div>
                    <span className="block font-bold font-mono text-slate-900 dark:text-white">
                      {t.demos.items[0].previewStats[1].value}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.demos.items[0].previewStats[1].label}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={pathFor('salon')}
                    onClick={(e) => {
                      if (onOpenStandalone) {
                        e.preventDefault();
                        onOpenStandalone('salon');
                      }
                    }}
                    className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-xs font-mono text-slate-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                    title={t.ui.directUrl}
                  >
                    <span>/demo/salon</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <button
                    onClick={() => onOpenDemo('salon')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 group-hover:bg-teal-700 dark:group-hover:bg-teal-600 transition-all duration-200 shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    <span>{t.demos.tryLiveBtn}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Gym Membership Demo */}
          <FadeIn delay={150} className="h-full">
            <div
              id="demo-card-gym"
              className="group flex flex-col justify-between rounded-2xl border border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-[#181a24] p-6 sm:p-7 shadow-xs hover:border-teal-700/40 dark:hover:border-teal-500/40 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out h-full"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 group-hover:bg-teal-100/70 dark:group-hover:bg-teal-900/60 group-hover:border-teal-300 transition-colors duration-300">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-950 dark:group-hover:text-teal-200 transition-colors">
                        {t.demos.items[1].title}
                      </h3>
                      <span className="text-xs font-medium text-teal-800 dark:text-teal-400">
                        {t.demos.items[1].category}
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-stone-200/80 dark:bg-stone-800 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-stone-300">
                    {t.ui.demoBadge} 02
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                  {t.demos.items[1].description}
                </p>

                {/* UI Snapshot Graphic Box */}
                <button
                  type="button"
                  onClick={() => onOpenDemo('gym')}
                  aria-label={`${t.demos.items[1].title} — ${t.demos.tryLiveBtn}`}
                  className="mt-5 w-full text-left rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1f222e] p-3.5 shadow-2xs cursor-pointer group-hover:border-teal-700/40 dark:group-hover:border-teal-500/40 group-hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-700/60 pb-2 text-[11px] font-mono text-slate-500 dark:text-stone-400">
                    <span className="font-semibold text-slate-800 dark:text-stone-200">{t.ui.gymSnapshot}</span>
                    <span className="text-teal-700 dark:text-teal-400 font-medium group-hover:underline">{t.ui.tapToTest}</span>
                  </div>

                  <div className="mt-2.5 space-y-1.5 font-sans">
                    <div className="flex items-center justify-between rounded bg-stone-50 dark:bg-stone-800/80 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-stone-200 dark:bg-stone-700 text-[10px] font-bold">L</span>
                        <span className="font-medium text-slate-900 dark:text-white">Luka Đorđević</span>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 hidden sm:inline">• {t.ui.snapPass12}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-300">
                        {t.ui.snapVisitsLeft}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded bg-red-50/60 dark:bg-red-950/40 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-300 text-[10px] font-bold">N</span>
                        <span className="font-medium text-slate-900 dark:text-white">Nikola Simić</span>
                        <span className="text-[11px] text-slate-500 dark:text-stone-400 hidden sm:inline">• {t.ui.snapPass10}</span>
                      </div>
                      <span className="rounded bg-red-100 dark:bg-red-900/60 px-1.5 py-0.5 text-[10px] font-semibold text-red-800 dark:text-red-300">
                        {t.ui.snapExpired}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Features checklist */}
                <ul className="mt-5 space-y-2">
                  {t.demos.items[1].keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA & Stats */}
              <div className="mt-7 pt-5 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-stone-400">
                  <div>
                    <span className="block font-bold font-mono text-slate-900 dark:text-white">
                      {t.demos.items[1].previewStats[0].value}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.demos.items[1].previewStats[0].label}
                    </span>
                  </div>
                  <div className="h-7 w-px bg-stone-200 dark:bg-stone-800"></div>
                  <div>
                    <span className="block font-bold font-mono text-slate-900 dark:text-white">
                      {t.demos.items[1].previewStats[1].value}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-stone-400">
                      {t.demos.items[1].previewStats[1].label}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={pathFor('gym')}
                    onClick={(e) => {
                      if (onOpenStandalone) {
                        e.preventDefault();
                        onOpenStandalone('gym');
                      }
                    }}
                    className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-xs font-mono text-slate-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                    title={t.ui.directUrl}
                  >
                    <span>/demo/gym</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <button
                    onClick={() => onOpenDemo('gym')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 group-hover:bg-teal-700 dark:group-hover:bg-teal-600 transition-all duration-200 shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    <span>{t.demos.tryLiveBtn}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
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
