import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { Content } from '../i18n';
import { MessageCircle, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { waLink } from '../config';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Content;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  t,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Falls back to the contact section while no real number is configured,
  // rather than sending visitors to a stranger's WhatsApp.
  const quickChat = waLink(t.hero.subheadline.slice(0, 0) + t.nav.whatsappQuick);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'sr', label: 'Srpski', flag: 'SR' },
    { code: 'tr', label: 'Türkçe', flag: 'TR' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 dark:border-stone-800 bg-[#fcfcfb]/95 dark:bg-[#0f1115]/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 dark:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-800 dark:bg-teal-700 text-white font-mono text-sm font-semibold tracking-tight shadow-xs">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
              Pena Tools
            </span>
            <span className="text-[11px] font-normal text-slate-500 dark:text-stone-400 hidden sm:inline">
              {t.ui.brandTagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-stone-300">
          <button
            onClick={() => scrollToSection('problems')}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.problem}
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection('demos')}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.demos}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Right actions: Theme Toggle + Language Switcher + WhatsApp CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Dark Mode Theme Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-slate-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-slate-900 dark:hover:text-white transition-all shadow-2xs cursor-pointer"
            title={theme === 'dark' ? t.ui.toLightMode : t.ui.toDarkMode}
            aria-label={theme === 'dark' ? t.ui.toLightMode : t.ui.toDarkMode}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 p-0.5 text-xs font-medium text-slate-700 dark:text-stone-200 shadow-2xs">
            <div className="pl-2 pr-1 text-slate-400 dark:text-stone-400 hidden sm:flex items-center">
              <Globe className="h-3.5 w-3.5" />
            </div>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                aria-pressed={lang === l.code}
                lang={l.code}
                className={`rounded px-2 py-1 transition-all cursor-pointer ${
                  lang === l.code
                    ? 'bg-teal-800 dark:bg-teal-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-stone-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-700'
                }`}
                title={l.label}
              >
                {l.flag}
              </button>
            ))}
          </div>

          {/* Quick WhatsApp CTA Button */}
          <a
            href={quickChat ?? '#contact'}
            {...(quickChat ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            onClick={quickChat ? undefined : (e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-900 dark:hover:bg-teal-600 shadow-xs"
          >
            <MessageCircle className="h-3.5 w-3.5 text-teal-200" />
            <span>{t.nav.whatsappQuick}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg border border-stone-300 dark:border-stone-700 p-1.5 text-slate-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
            aria-label={t.ui.toggleMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-[#15171e] px-4 py-3 shadow-lg">
          <div className="flex flex-col gap-2.5 text-sm font-medium text-slate-700 dark:text-stone-200">
            <button
              onClick={() => scrollToSection('problems')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400"
            >
              {t.nav.problem}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('demos')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400"
            >
              {t.nav.demos}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-1.5 hover:text-teal-800 dark:hover:text-teal-400 font-semibold"
            >
              {t.nav.contact}
            </button>
            <div className="pt-2.5 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-stone-400">{t.ui.appearance}</span>
              <button
                type="button"
                onClick={onToggleTheme}
                className="flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-stone-200"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" />
                    <span>{t.ui.lightMode}</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-slate-700" />
                    <span>{t.ui.darkMode}</span>
                  </>
                )}
              </button>
            </div>
            <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
              <a
                href={quickChat ?? '#contact'}
                {...(quickChat ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={quickChat ? undefined : (e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-700 py-2.5 text-xs font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.nav.whatsappQuick}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
