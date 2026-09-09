import React from 'react';
import { Language } from '../types';
import { Content } from '../i18n';
import { MessageCircle, Mail, Globe, ArrowUp } from 'lucide-react';
import { CONTACT_EMAIL, hasEmail, waLink } from '../config';

interface FooterProps {
  t: Content;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, lang, onLanguageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const chat = waLink(t.contact.whatsappBtn);

  return (
    <footer className="bg-[#182026] dark:bg-[#0c0d10] text-slate-300 dark:text-stone-300 py-12 border-t border-slate-800 dark:border-stone-800 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800 dark:border-stone-800">
          {/* Brand & Mission */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-600 text-white font-mono text-sm font-semibold">
                P
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Pena Tools
              </span>
            </div>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="mt-1 text-[11px] text-teal-400/80 font-mono">
              {t.footer.locationNote}
            </p>
          </div>

          {/* Quick Direct Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            {chat && (
              <a
                href={chat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            )}
            {hasEmail && (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] text-slate-400"
            >
              <span>{t.ui.backToTop}</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & language select */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Pena Tools. {t.footer.rights}
          </div>

          <div className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-slate-400">{t.ui.languageLabel}</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`hover:underline cursor-pointer ${
                lang === 'en' ? 'text-teal-400 font-semibold' : 'text-slate-500'
              }`}
            >
              English
            </button>
            <span>•</span>
            <button
              onClick={() => onLanguageChange('sr')}
              className={`hover:underline cursor-pointer ${
                lang === 'sr' ? 'text-teal-400 font-semibold' : 'text-slate-500'
              }`}
            >
              Srpski
            </button>
            <span>•</span>
            <button
              onClick={() => onLanguageChange('tr')}
              className={`hover:underline cursor-pointer ${
                lang === 'tr' ? 'text-teal-400 font-semibold' : 'text-slate-500'
              }`}
            >
              Türkçe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
