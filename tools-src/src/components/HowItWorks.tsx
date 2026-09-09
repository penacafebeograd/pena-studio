import React from 'react';
import { Content } from '../i18n';
import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface HowItWorksProps {
  t: Content;
  onGetFreeDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t, onGetFreeDemo }) => {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-[#fafaf8] dark:bg-[#0f1115] transition-colors duration-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </FadeIn>

        {/* 3 Numbered Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.howItWorks.steps.map((step, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 100}
              className="flex flex-col justify-between rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#161820] p-6 shadow-2xs relative h-full"
            >
              <div>
                {/* Step number badge & timeframe */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-300 font-mono text-sm font-bold">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {step.timeframe}
                  </span>
                </div>

                {/* Step title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="mt-2.5 text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Bullet details */}
                <ul className="mt-5 space-y-2 pt-4 border-t border-stone-100 dark:border-stone-800">
                  {step.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300"
                    >
                      <Check className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom reassure callout */}
        <FadeIn delay={200} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#161820] p-5">
          <div className="text-xs sm:text-sm text-slate-700 dark:text-stone-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              {t.ui.noSetupTitle}
            </span>{' '}
            {t.ui.noSetupText}
          </div>
          <button
            onClick={onGetFreeDemo}
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs shrink-0 cursor-pointer"
          >
            <span>{t.ui.startChat}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
