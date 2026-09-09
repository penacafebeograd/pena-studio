export type Language = 'en' | 'sr' | 'tr';
export type Theme = 'light' | 'dark';

export interface TranslationContent {
  nav: {
    problem: string;
    howItWorks: string;
    demos: string;
    pricing: string;
    faq: string;
    contact: string;
    whatsappQuick: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPoints: string[];
    appMockup: {
      businessName: string;
      tagline: string;
      todaySummary: string;
      confirmedBookings: string;
      revenueToday: string;
      nextAppointment: string;
      statusConfirmed: string;
      statusInProgress: string;
      newBookingBtn: string;
      clientName1: string;
      service1: string;
      clientName2: string;
      service2: string;
      clientName3: string;
      service3: string;
    };
  };
  problems: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      realQuote: string;
      iconType: 'paper' | 'whatsapp' | 'spreadsheet';
    }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      stepNumber: string;
      title: string;
      timeframe: string;
      description: string;
      details: string[];
    }[];
  };
  demos: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tryLiveBtn: string;
    closeDemo: string;
    items: {
      id: 'salon' | 'gym';
      title: string;
      category: string;
      description: string;
      keyFeatures: string[];
      previewStats: { label: string; value: string }[];
    }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    feeRange: string;
    feeLabel: string;
    reassuranceTitle: string;
    reassuranceText: string;
    includedItems: string[];
    noHiddenCosts: string[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsappBtn: string;
    whatsappSub: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      businessType: string;
      businessTypePlaceholder: string;
      trackingNow: string;
      trackingNowPlaceholder: string;
      contactMethod: string;
      contactMethodPlaceholder: string;
      notes: string;
      notesPlaceholder: string;
      submitBtn: string;
    };
    successMessage: string;
  };
  footer: {
    tagline: string;
    rights: string;
    locationNote: string;
  };
}
