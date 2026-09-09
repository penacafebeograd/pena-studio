import React from 'react';
import { Content } from '../i18n';
import { BookX, MessageSquareWarning, FileSpreadsheet } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ProblemsProps {
  t: Content;
}

export const Problems: React.FC<ProblemsProps> = ({ t }) => {
  const getIcon = (type: 'paper' | 'whatsapp' | 'spreadsheet') => {
    switch (type) {
      case 'paper':
        return <BookX className="h-6 w-6 text-amber-700 dark:text-amber-400" />;
      case 'whatsapp':
        return <MessageSquareWarning className="h-6 w-6 text-teal-800 dark:text-teal-400" />;
      case 'spreadsheet':
        return <FileSpreadsheet className="h-6 w-6 text-slate-700 dark:text-stone-300" />;
    }
  };

  return (
    <section id="problems" className="py-16 sm:py-20 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#13151b] transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400 font-mono">
            {t.problems.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.problems.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-stone-300 leading-relaxed">
            {t.problems.subtitle}
          </p>
        </FadeIn>

        {/* 3 Short Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problems.cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="h-full">
              <div
                id={`problem-card-${idx + 1}`}
                className="group flex flex-col justify-between rounded-xl border border-stone-200 dark:border-stone-800 bg-[#fdfdfc] dark:bg-[#181a24] p-6 shadow-2xs hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out h-full cursor-default"
              >
                <div>
                  {/* Icon & header */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700 mb-5 group-hover:bg-stone-200/60 dark:group-hover:bg-stone-700/80 group-hover:border-stone-300 dark:group-hover:border-stone-600 transition-colors duration-300">
                    {getIcon(card.iconType)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-slate-950 dark:group-hover:text-stone-100 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Realistic Quote */}
                <div className="mt-6 pt-4 border-t border-stone-200/80 dark:border-stone-800 group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-colors">
                  <p className="text-xs font-serif italic text-slate-700 dark:text-stone-300 font-medium">
                    {card.realQuote}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
