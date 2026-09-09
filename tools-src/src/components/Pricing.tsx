import React from 'react';
import { Content } from '../i18n';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface PricingProps {
  t: Content;
  onGetFreeDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ t, onGetFreeDemo }) => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800 bg-[#fafaf8] dark:bg-[#0f1115] transition-colors duration-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.pricing.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={100} className="mt-12 max-w-4xl mx-auto rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-[#161820] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: The Fee Box */}
            <div className="lg:col-span-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-[#fdfdfc] dark:bg-[#1c1e28] p-6 text-center lg:text-left flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-3 py-1 text-xs font-semibold text-teal-800 dark:text-teal-300">
                  {t.ui.fixedFeeBadge}
                </span>

                <div className="mt-4">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                    {t.pricing.feeRange}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500 dark:text-stone-400 leading-normal">
                  {t.pricing.feeLabel}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
                <button
                  onClick={onGetFreeDemo}
                  id="pricing-cta-btn"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-xs cursor-pointer"
                >
                  <span>{t.pricing.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="block mt-2 text-[11px] text-slate-500 dark:text-stone-400 text-center">
                  {t.ui.freeKickoff}
                </span>
              </div>
            </div>

            {/* Right side: Reassurance & What is Included */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Reassurance Banner */}
                <div className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/70 dark:bg-teal-950/40 p-4">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-teal-800 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-teal-950 dark:text-teal-200">
                        {t.pricing.reassuranceTitle}
                      </h4>
                      <p className="mt-1 text-xs text-teal-900/90 dark:text-teal-300/90 leading-relaxed">
                        {t.pricing.reassuranceText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 font-mono mb-3">
                    {t.ui.includedTitle}
                  </h4>
                  <ul className="space-y-2.5">
                    {t.pricing.includedItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300"
                      >
                        <Check className="h-4 w-4 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* No hidden costs row */}
                <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-stone-400 font-mono mb-2.5">
                    {t.ui.neverPayTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.pricing.noHiddenCosts.map((cost, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-600 dark:text-stone-300"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-stone-200 dark:bg-stone-800 text-slate-600 dark:text-stone-400 text-[10px] font-bold shrink-0">
                          ✕
                        </span>
                        <span>{cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
