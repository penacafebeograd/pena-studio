import React, { useEffect, useRef } from 'react';
import { Language } from '../types';

interface SectionMeta {
  title: string;
  description: string;
}

const SECTION_METADATA: Record<Language, Record<string, SectionMeta>> = {
  en: {
    hero: {
      title: 'Pena Tools — Simple custom business apps, built in 1 day',
      description:
        'Simple custom business apps for local salons, gyms, workshops, and shops. Delivered in 1 day for a fixed price with zero recurring lock-in.',
    },
    problems: {
      title: 'Common Business Bottlenecks & Chaos — Pena Tools',
      description:
        'Messy paper appointment books, missed WhatsApp messages, and broken spreadsheets slow your team down. See what a simple custom tool solves.',
    },
    'how-it-works': {
      title: 'How it works: design first, then built — Pena Tools',
      description:
        'A 30-minute talk, then two or three finished screen designs of your app to approve or change. Only once you say yes is it built, and you have it the next day.',
    },
    demos: {
      title: 'Interactive Live Demos (Salon & Gym Apps) — Pena Tools',
      description:
        'Test our live interactive app simulators for salon appointment scheduling and gym member check-in counter apps directly in your browser.',
    },
    pricing: {
      title: 'Flat Fee Pricing (€250–€750) & 100% Ownership — Pena Tools',
      description:
        'Fixed price €250 to €750. No monthly subscriptions, no vendor lock-in. Full ownership of your code, database, and client data.',
    },
    faq: {
      title: 'Frequently Asked Questions — Pena Tools',
      description:
        'Honest answers about our 24-hour turnaround, hosting costs, future modifications, client privacy, and non-technical setup.',
    },
    contact: {
      title: 'Talk to us & get a free demo — Pena Tools',
      description:
        'Chat directly on WhatsApp or send a quick note about your business routine. We sketch your custom app in a few hours.',
    },
  },
  sr: {
    hero: {
      title: 'Pena Tools — Jednostavne poslovne aplikacije za 1 dan',
      description:
        'Jednostavne aplikacije po meri za salone, teretane, radionice i radnje. Gotove za 1 dan, fiksna cena, bez mesečnih pretplata.',
    },
    problems: {
      title: 'Uobičajeni problemi u poslovanju — Pena Tools',
      description:
        'Iskrzane sveske za zakazivanje, izgubljene WhatsApp poruke i prekomplikovane tabele usporavaju rad. Pogledajte šta rešava jednostavna aplikacija.',
    },
    'how-it-works': {
      title: 'Kako radimo: prvo izgled, pa izrada — Pena Tools',
      description:
        'Razgovor od 30 minuta, pa dva do tri gotova prikaza ekrana koje odobravate ili menjate. Tek kada kažete da je u redu, pravimo aplikaciju - i dobijate je sutradan.',
    },
    demos: {
      title: 'Interaktivni primeri uživo (Saloni i teretane) — Pena Tools',
      description:
        'Isprobajte interaktivne simulatore za zakazivanje u salonu i prijavu članova u teretani direktno u svom pretraživaču.',
    },
    pricing: {
      title: 'Transparentne cene (€250–€750) bez pretplate — Pena Tools',
      description:
        'Fiksna cena od €250 do €750. Bez mesečne pretplate i zaključavanja. Potpuno vlasništvo nad kodom i bazom klijenata.',
    },
    faq: {
      title: 'Česta pitanja i odgovori — Pena Tools',
      description:
        'Iskreni odgovori o roku od 24h, troškovima hostinga, izmenama, privatnosti podataka i radu bez tehničkog znanja.',
    },
    contact: {
      title: 'Kontaktirajte nas i zakažite demo — Pena Tools',
      description:
        'Javite se direktno na WhatsApp ili pošaljite kratak opis vašeg posla. Skiciraćemo aplikaciju za par sati.',
    },
  },
  tr: {
    hero: {
      title: 'Pena Tools — 1 Günde Hazır Sade İşletme Uygulamaları',
      description:
        'Kuaförler, spor salonları ve atölyeler için sade özel işletme uygulamaları. 1 günde teslim, sabit fiyat, aylık abonelik yok.',
    },
    problems: {
      title: 'Yaygın İşletme Sorunları ve Karışıklık — Pena Tools',
      description:
        'Karışık randevu defterleri, unutulan WhatsApp mesajları ve bozulan Excel tabloları işinizi yavaşlatmasın.',
    },
    'how-it-works': {
      title: 'Nasıl çalışır: önce tasarım, sonra yapım — Pena Tools',
      description:
        '30 dakikalık görüşme, ardından onaylayacağınız veya değiştireceğiniz iki üç bitmiş ekran tasarımı. Ancak siz onayladıktan sonra kodlanır ve ertesi gün elinizde olur.',
    },
    demos: {
      title: 'İnteraktif Canlı Demolar (Kuaför & Spor Salonu) — Pena Tools',
      description:
        'Kuaför randevu ve spor salonu üye kartı simülatörlerini doğrudan tarayıcınızda canlı deneyin.',
    },
    pricing: {
      title: 'Şeffaf Fiyatlandırma (€250–€750) ve Sahiplik — Pena Tools',
      description:
        'Sabit ücret €250 - €750. Aylık abonelik yok, bağımlılık yok. Kodlarınız ve müşteri verileriniz tamamen size ait.',
    },
    faq: {
      title: 'Sıkça Sorulan Sorular — Pena Tools',
      description:
        '24 saatte teslim, barındırma masrafları, güncellemeler ve teknik gereksinimler hakkında dürüst yanıtlar.',
    },
    contact: {
      title: 'Bize ulaşın & ücretsiz demo — Pena Tools',
      description:
        'WhatsApp üzerinden doğrudan konuşun veya işletmeniz hakkında kısa bir mesaj bırakın.',
    },
  },
};

interface DynamicSeoProps {
  lang: Language;
  demoRoute?: 'salon' | 'gym' | null;
}

const DEMO_META: Record<Language, Record<'salon' | 'gym', SectionMeta>> = {
  en: {
    salon: {
      title: 'Live salon appointment booking demo — Pena Tools',
      description:
        'Interactive counter schedule demo: weekly appointment book, reminder triggers, revenue totals and fast walk-in booking.',
    },
    gym: {
      title: 'Live gym front desk check-in demo — Pena Tools',
      description:
        'Interactive front desk demo: weekly attendance chart, renewal reminders and a member pass tracker.',
    },
  },
  sr: {
    salon: {
      title: 'Primer uživo: zakazivanje u salonu — Pena Tools',
      description:
        'Interaktivni prikaz rasporeda za pultom: nedeljni raspored termina, podsetnici, dnevni pazar i brzo upisivanje klijenata.',
    },
    gym: {
      title: 'Primer uživo: prijava članova u teretani — Pena Tools',
      description:
        'Interaktivni prikaz recepcije: nedeljni pregled dolazaka, podsetnici za obnovu i evidencija članarina.',
    },
  },
  tr: {
    salon: {
      title: 'Canlı kuaför randevu demosu — Pena Tools',
      description:
        'Etkileşimli kasa üstü program demosu: haftalık randevu defteri, hatırlatmalar, ciro toplamı ve hızlı randevu kaydı.',
    },
    gym: {
      title: 'Canlı spor salonu üye girişi demosu — Pena Tools',
      description:
        'Etkileşimli resepsiyon demosu: haftalık katılım grafiği, yenileme hatırlatmaları ve üyelik takibi.',
    },
  },
};

export const DynamicSeo: React.FC<DynamicSeoProps> = ({ lang, demoRoute }) => {
  const activeSectionRef = useRef<string>('hero');

  // Update HTML lang attribute and ensure absolute OG image URLs
  useEffect(() => {
    document.documentElement.lang = lang;

    // Ensure OpenGraph images have absolute URL for social crawlers
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      // The app is served from a subpath, so BASE_URL (not the bare origin)
      // is what makes the OG image resolvable for social crawlers.
      const absoluteOgImageUrl = `${origin}${import.meta.env.BASE_URL}og-image.png`;

      const updateMetaContent = (selector: string, attr: 'content' | 'href', val: string) => {
        const el = document.querySelector(selector);
        if (el) {
          el.setAttribute(attr, val);
        }
      };

      updateMetaContent('meta[property="og:image"]', 'content', absoluteOgImageUrl);
      updateMetaContent('meta[property="og:image:secure_url"]', 'content', absoluteOgImageUrl);
      updateMetaContent('meta[name="twitter:image"]', 'content', absoluteOgImageUrl);
    }
  }, [lang]);

  // Track active section to dynamically adjust metadata
  useEffect(() => {
    // Helper function to update or create meta tags
    const setMetaTag = (attribute: string, name: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (demoRoute) {
      const info = DEMO_META[lang][demoRoute];
      document.title = info.title;
      setMetaTag('name', 'description', info.description);
      setMetaTag('property', 'og:title', info.title);
      setMetaTag('property', 'og:description', info.description);
      setMetaTag('name', 'twitter:title', info.title);
      setMetaTag('name', 'twitter:description', info.description);
      setMetaTag(
        'property',
        'og:url',
        `${window.location.origin}${import.meta.env.BASE_URL}demo/${demoRoute}`,
      );
      return;
    }

    const updateMetadataForSection = (sectionId: string) => {
      activeSectionRef.current = sectionId;
      const sectionInfo =
        SECTION_METADATA[lang][sectionId] || SECTION_METADATA[lang].hero;

      // Update page title
      document.title = sectionInfo.title;

      setMetaTag('name', 'description', sectionInfo.description);
      setMetaTag('property', 'og:title', sectionInfo.title);
      setMetaTag('property', 'og:description', sectionInfo.description);
      setMetaTag('name', 'twitter:title', sectionInfo.title);
      setMetaTag('name', 'twitter:description', sectionInfo.description);

      if (typeof window !== 'undefined') {
        const canonicalUrl =
          sectionId === 'hero'
            ? window.location.origin + window.location.pathname
            : `${window.location.origin}${window.location.pathname}#${sectionId}`;
        setMetaTag('property', 'og:url', canonicalUrl);

        // Update URL hash smoothly if appropriate
        if (sectionId !== 'hero' && window.location.hash !== `#${sectionId}`) {
          window.history.replaceState(null, '', `#${sectionId}`);
        } else if (sectionId === 'hero' && window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
    };

    // Immediately trigger with current active section
    updateMetadataForSection(activeSectionRef.current);

    const sectionIds = [
      'hero',
      'problems',
      'how-it-works',
      'demos',
      'pricing',
      'faq',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry intersecting near upper viewport
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersecting.length > 0) {
          const targetId = intersecting[0].target.id;
          if (targetId && targetId !== activeSectionRef.current) {
            updateMetadataForSection(targetId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [lang, demoRoute]);

  return null;
};
