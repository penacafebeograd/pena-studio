import React, { useState } from 'react';
import { Content } from '../i18n';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface FaqProps {
  t: Content;
}

export const Faq: React.FC<FaqProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#13151b] transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.faq.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </FadeIn>

        {/* FAQ Accordion list */}
        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn
                key={idx}
                delay={idx * 60}
                className="rounded-xl border border-stone-200 dark:border-stone-800 bg-[#fdfdfc] dark:bg-[#181a24] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-stone-50/80 dark:hover:bg-stone-800/50 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 dark:text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-800 dark:text-teal-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    className="px-5 pb-5 pt-1 border-t border-stone-100/80 dark:border-stone-800 text-sm text-slate-600 dark:text-stone-300 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
