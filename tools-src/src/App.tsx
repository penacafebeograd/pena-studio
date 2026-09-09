import { useCallback, useEffect, useState } from 'react';
import { Language, Theme } from './types';
import { getContent } from './i18n';
import { Route, pushRoute, routeFromPath } from './routing';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { HowItWorks } from './components/HowItWorks';
import { LiveDemos } from './components/LiveDemos';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { StandaloneDemoPage } from './components/StandaloneDemoPage';
import { ScrollProgress } from './components/ScrollProgress';
import { DynamicSeo } from './components/DynamicSeo';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [route, setRoute] = useState<Route>(routeFromPath);
  const [activeDemo, setActiveDemo] = useState<'salon' | 'gym' | null>(null);

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pena_theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('pena_theme', theme);
    } catch {
      // Private browsing / storage disabled — the toggle still works in-session.
    }
  }, [theme]);

  // Back/forward buttons.
  useEffect(() => {
    const handlePopState = () => {
      const current = routeFromPath();
      setRoute(current);
      if (current === 'home') setActiveDemo(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleToggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const t = getContent(lang);

  const scrollToContact = useCallback(() => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleGetFreeDemo = useCallback(() => {
    if (routeFromPath() !== 'home') {
      setRoute('home');
      pushRoute('home');
      // Let the landing page mount before scrolling to a section inside it.
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(scrollToContact),
      );
      return;
    }
    scrollToContact();
  }, [scrollToContact]);

  const handleNavigateHome = () => {
    setRoute('home');
    setActiveDemo(null);
    pushRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStandalone = (type: 'salon' | 'gym') => {
    setActiveDemo(null);
    setRoute(type);
    pushRoute(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoModal = (type: 'salon' | 'gym') => {
    setActiveDemo(type);
    pushRoute(type);
  };

  const handleCloseDemoModal = () => {
    setActiveDemo(null);
    pushRoute('home');
  };

  // Direct visit to /tools/demo/salon or /tools/demo/gym.
  if (route === 'salon' || route === 'gym') {
    return (
      <>
        <DynamicSeo lang={lang} demoRoute={route} />
        <StandaloneDemoPage
          demoType={route}
          onNavigateHome={handleNavigateHome}
          onSwitchDemo={handleOpenStandalone}
          lang={lang}
          onLanguageChange={setLang}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          t={t}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#0f1115] text-slate-900 dark:text-stone-100 font-sans antialiased selection:bg-teal-200 dark:selection:bg-teal-900 selection:text-teal-950 dark:selection:text-teal-100 transition-colors duration-200">
      <DynamicSeo lang={lang} />
      <ScrollProgress />

      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:rounded-lg focus:bg-teal-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.ui.skipToContent}
      </a>

      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        t={t}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        <Hero
          t={t}
          onOpenSalonDemo={() => handleOpenDemoModal('salon')}
          onGetFreeDemo={handleGetFreeDemo}
        />
        <Problems t={t} />
        <HowItWorks t={t} onGetFreeDemo={handleGetFreeDemo} />
        <LiveDemos
          t={t}
          onOpenDemo={handleOpenDemoModal}
          onOpenStandalone={handleOpenStandalone}
        />
        <Pricing t={t} onGetFreeDemo={handleGetFreeDemo} />
        <Faq t={t} />
        <Contact t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} onLanguageChange={setLang} />

      <InteractiveDemoModal
        demoType={activeDemo}
        onClose={handleCloseDemoModal}
        onOpenStandalone={handleOpenStandalone}
        lang={lang}
        t={t}
      />
    </div>
  );
}
