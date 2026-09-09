import { Language } from './types';

/**
 * Chrome strings that the generated draft had hardcoded in English inside the
 * components, so they stayed English while the rest of the page switched to
 * Serbian or Turkish. Everything in the site shell now lives here.
 *
 * NOTE: the two demo apps themselves (src/components/demos/*) are still
 * English-only — see README "Known gaps".
 */
export interface UiContent {
  brandTagline: string;
  live: string;
  appearance: string;
  lightMode: string;
  darkMode: string;
  backToTop: string;
  languageLabel: string;
  toggleMenu: string;
  toLightMode: string;
  toDarkMode: string;
  skipToContent: string;

  heroSlotsFilled: string;
  heroExpected: string;
  heroNextInChair: string;
  heroStaffActive: string;
  heroPaidCard: string;
  heroCashOnVisit: string;
  heroWorksOn: string;
  heroTestDemo: string;

  noSetupTitle: string;
  noSetupText: string;
  startChat: string;

  demoBadge: string;
  salonSnapshot: string;
  gymSnapshot: string;
  tapToTest: string;
  snapInChair: string;
  snapConfirmed: string;
  snapExpired: string;
  snapVisitsLeft: string;
  snapPass12: string;
  snapPass10: string;
  snapBalayage: string;
  snapBeardCut: string;
  directUrl: string;

  fixedFeeBadge: string;
  freeKickoff: string;
  includedTitle: string;
  neverPayTitle: string;

  fastestResponse: string;
  directWhatsApp: string;
  whatsappBlurb: string;
  availability: string;
  inquiryReceived: string;
  sendAnother: string;
  sending: string;
  noSpam: string;
  formFallbackNote: string;
  formErrorText: string;

  demo: {
    salonTitle: string;
    gymTitle: string;
    close: string;
    openStandalone: string;
    footerTitle: string;
    footerText: string;
    closeAndBack: string;
  };

  standalone: {
    backToSite: string;
    salonTerminal: string;
    gymTerminal: string;
    salonSwitch: string;
    gymSwitch: string;
    salonBanner: string;
    gymBanner: string;
    bannerNote: string;
    returnLanding: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    backToPricing: string;
  };
}

export const uiStrings: Record<Language, UiContent> = {
  en: {
    brandTagline: '1-day custom business apps',
    live: 'Live',
    appearance: 'Appearance',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    backToTop: 'Back to top',
    languageLabel: 'Language:',
    toggleMenu: 'Toggle navigation menu',
    toLightMode: 'Switch to light mode',
    toDarkMode: 'Switch to dark mode',
    skipToContent: 'Skip to content',

    heroSlotsFilled: 'Slots filled',
    heroExpected: 'Expected',
    heroNextInChair: 'Next in chair',
    heroStaffActive: '3 staff active',
    heroPaidCard: 'Paid card',
    heroCashOnVisit: 'Cash on visit',
    heroWorksOn: 'Works on phone, tablet & counter PC',
    heroTestDemo: 'Click to test full demo',

    noSetupTitle: 'No technical setup required on your side:',
    noSetupText:
      'Your current paper notebook, phone messages, or spreadsheet is enough.',
    startChat: 'Start with a 30 min chat',

    demoBadge: 'Demo',
    salonSnapshot: 'Daily chair schedule',
    gymSnapshot: 'Front desk check-in',
    tapToTest: 'Tap to test live ↗',
    snapInChair: 'In chair',
    snapConfirmed: 'Confirmed',
    snapExpired: 'Expired',
    snapVisitsLeft: '5 visits left',
    snapPass12: '12-pass card',
    snapPass10: '10-pass card',
    snapBalayage: 'Balayage',
    snapBeardCut: 'Beard & cut',
    directUrl: 'Direct link',

    fixedFeeBadge: 'Fixed 1-day project fee',
    freeKickoff: 'Free 30-minute kickoff • No commitment',
    includedTitle: 'What is included in the price:',
    neverPayTitle: 'What you will never pay for:',

    fastestResponse: 'Fastest response',
    directWhatsApp: 'Direct WhatsApp',
    whatsappBlurb:
      'Send a quick voice note or text showing how you work today. I usually reply within minutes during the day.',
    availability: 'Available Mon – Sat, 08:30 – 19:30 (CET)',
    inquiryReceived: 'Inquiry received',
    sendAnother: 'Send another message',
    sending: 'Sending…',
    noSpam: 'No spam ever. Your details stay private.',
    formFallbackNote:
      'Sending opens WhatsApp with your answers already filled in, so nothing gets lost.',
    formErrorText: 'That did not go through. Please try WhatsApp instead.',

    demo: {
      salonTitle: 'LIVE DEMO: Salon booking — counter system',
      gymTitle: 'LIVE DEMO: Gym front desk — member check-in',
      close: 'Close demo',
      openStandalone: 'Open this demo on its own page',
      footerTitle: 'Notice how immediate this feels?',
      footerText:
        'No loading spinners, no nested menus. Built for real counter speed.',
      closeAndBack: 'Close and go back',
    },

    standalone: {
      backToSite: 'Back to Pena Tools',
      salonTerminal: 'Salon terminal',
      gymTerminal: 'Front desk terminal',
      salonSwitch: 'Salon booking',
      gymSwitch: 'Gym check-in',
      salonBanner: 'Live counter appointment terminal',
      gymBanner: 'Front desk member terminal',
      bannerNote: 'Full standalone view — test every action, no sign-up needed.',
      returnLanding: '← Return to the Pena Tools page',
      ctaTitle:
        'Want a tool built around your exact daily notebook or spreadsheet?',
      ctaText:
        'Delivered tomorrow for a single fixed fee of €250 – €750. No monthly subscriptions, no useless features, 100% owned by you.',
      ctaButton: 'Get yours in 24h',
      backToPricing: 'Back to full site & pricing',
    },
  },

  sr: {
    brandTagline: 'Aplikacije po meri, gotove za 1 dan',
    live: 'Uživo',
    appearance: 'Izgled',
    lightMode: 'Svetla tema',
    darkMode: 'Tamna tema',
    backToTop: 'Nazad na vrh',
    languageLabel: 'Jezik:',
    toggleMenu: 'Otvori ili zatvori meni',
    toLightMode: 'Pređi na svetlu temu',
    toDarkMode: 'Pređi na tamnu temu',
    skipToContent: 'Pređi na sadržaj',

    heroSlotsFilled: 'Popunjeno',
    heroExpected: 'Očekivano',
    heroNextInChair: 'Sledeći termin',
    heroStaffActive: '3 radnika na smeni',
    heroPaidCard: 'Plaćeno karticom',
    heroCashOnVisit: 'Gotovina na licu mesta',
    heroWorksOn: 'Radi na telefonu, tabletu i računaru na pultu',
    heroTestDemo: 'Kliknite za ceo primer',

    noSetupTitle: 'Ne morate ništa tehnički da pripremate:',
    noSetupText:
      'Dovoljna je vaša sveska, poruke sa telefona ili tabela koju već vodite.',
    startChat: 'Počnite razgovorom od 30 min',

    demoBadge: 'Primer',
    salonSnapshot: 'Dnevni raspored po stolicama',
    gymSnapshot: 'Prijava na recepciji',
    tapToTest: 'Dodirnite za probu ↗',
    snapInChair: 'U stolici',
    snapConfirmed: 'Potvrđeno',
    snapExpired: 'Isteklo',
    snapVisitsLeft: 'Još 5 dolazaka',
    snapPass12: 'Paket od 12',
    snapPass10: 'Paket od 10',
    snapBalayage: 'Pramenovi',
    snapBeardCut: 'Šišanje i brada',
    directUrl: 'Direktan link',

    fixedFeeBadge: 'Fiksna cena za jednodnevni projekat',
    freeKickoff: 'Besplatan uvodni razgovor od 30 min • Bez obaveze',
    includedTitle: 'Šta je uključeno u cenu:',
    neverPayTitle: 'Šta nikada nećete plaćati:',

    fastestResponse: 'Najbrži odgovor',
    directWhatsApp: 'Direktno na WhatsApp',
    whatsappBlurb:
      'Pošaljite kratku glasovnu ili običnu poruku o tome kako sada radite. Tokom dana odgovaram u roku od nekoliko minuta.',
    availability: 'Dostupan pon – sub, 08:30 – 19:30',
    inquiryReceived: 'Upit je primljen',
    sendAnother: 'Pošaljite još jednu poruku',
    sending: 'Šalje se…',
    noSpam: 'Bez neželjene pošte. Vaši podaci ostaju privatni.',
    formFallbackNote:
      'Slanje otvara WhatsApp sa već popunjenim odgovorima, tako da se ništa ne gubi.',
    formErrorText: 'Slanje nije uspelo. Pokušajte preko WhatsApp-a.',

    demo: {
      salonTitle: 'PRIMER UŽIVO: Zakazivanje u salonu',
      gymTitle: 'PRIMER UŽIVO: Recepcija teretane — prijava članova',
      close: 'Zatvori primer',
      openStandalone: 'Otvori ovaj primer na zasebnoj stranici',
      footerTitle: 'Primećujete koliko je ovo neposredno?',
      footerText:
        'Bez učitavanja, bez menija u meniju. Napravljeno za brzinu rada za pultom.',
      closeAndBack: 'Zatvori i vrati se',
    },

    standalone: {
      backToSite: 'Nazad na Pena Tools',
      salonTerminal: 'Terminal salona',
      gymTerminal: 'Terminal na recepciji',
      salonSwitch: 'Zakazivanje u salonu',
      gymSwitch: 'Prijava u teretani',
      salonBanner: 'Terminal za zakazivanje za pultom',
      gymBanner: 'Terminal za prijavu članova',
      bannerNote:
        'Pun prikaz na zasebnoj stranici — isprobajte sve, bez registracije.',
      returnLanding: '← Nazad na Pena Tools stranicu',
      ctaTitle:
        'Želite alat napravljen tačno po vašoj svesci ili tabeli?',
      ctaText:
        'Isporuka već sutra, po jednokratnoj fiksnoj ceni od €250 – €750. Bez mesečnih pretplata, bez nepotrebnih funkcija, 100% vaše.',
      ctaButton: 'Naručite za 24h',
      backToPricing: 'Nazad na sajt i cene',
    },
  },

  tr: {
    brandTagline: '1 günde teslim, işletmeye özel uygulamalar',
    live: 'Canlı',
    appearance: 'Görünüm',
    lightMode: 'Açık tema',
    darkMode: 'Koyu tema',
    backToTop: 'Başa dön',
    languageLabel: 'Dil:',
    toggleMenu: 'Menüyü aç veya kapat',
    toLightMode: 'Açık temaya geç',
    toDarkMode: 'Koyu temaya geç',
    skipToContent: 'İçeriğe geç',

    heroSlotsFilled: 'Dolu randevu',
    heroExpected: 'Beklenen ciro',
    heroNextInChair: 'Sıradaki randevu',
    heroStaffActive: '3 personel çalışıyor',
    heroPaidCard: 'Kartla ödendi',
    heroCashOnVisit: 'Gelince nakit',
    heroWorksOn: 'Telefon, tablet ve kasa bilgisayarında çalışır',
    heroTestDemo: 'Tam demoyu denemek için tıklayın',

    noSetupTitle: 'Sizin tarafınızda teknik hazırlık gerekmez:',
    noSetupText:
      'Şu an kullandığınız defter, telefon mesajlarınız veya Excel tablonuz yeterli.',
    startChat: '30 dakikalık görüşmeyle başlayın',

    demoBadge: 'Demo',
    salonSnapshot: 'Koltuk bazlı günlük program',
    gymSnapshot: 'Resepsiyon girişi',
    tapToTest: 'Denemek için dokunun ↗',
    snapInChair: 'Koltukta',
    snapConfirmed: 'Onaylandı',
    snapExpired: 'Süresi doldu',
    snapVisitsLeft: '5 giriş kaldı',
    snapPass12: '12 seanslık paket',
    snapPass10: '10 seanslık paket',
    snapBalayage: 'Balyaj',
    snapBeardCut: 'Saç & sakal',
    directUrl: 'Doğrudan bağlantı',

    fixedFeeBadge: 'Bir günlük proje için sabit ücret',
    freeKickoff: 'Ücretsiz 30 dakikalık başlangıç görüşmesi • Taahhüt yok',
    includedTitle: 'Fiyata dahil olanlar:',
    neverPayTitle: 'Asla ödemeyeceğiniz şeyler:',

    fastestResponse: 'En hızlı yanıt',
    directWhatsApp: 'Doğrudan WhatsApp',
    whatsappBlurb:
      'Şu an nasıl çalıştığınızı anlatan kısa bir sesli mesaj veya yazı gönderin. Gün içinde genelde birkaç dakika içinde dönüş yapıyorum.',
    availability: 'Pzt – Cmt, 08:30 – 19:30 arası ulaşabilirsiniz',
    inquiryReceived: 'Talebiniz alındı',
    sendAnother: 'Yeni bir mesaj gönder',
    sending: 'Gönderiliyor…',
    noSpam: 'Asla spam yok. Bilgileriniz gizli kalır.',
    formFallbackNote:
      'Gönderdiğinizde WhatsApp, yanıtlarınız doldurulmuş halde açılır; hiçbir şey kaybolmaz.',
    formErrorText: 'Gönderilemedi. Lütfen WhatsApp üzerinden deneyin.',

    demo: {
      salonTitle: 'CANLI DEMO: Kuaför randevu takibi',
      gymTitle: 'CANLI DEMO: Spor salonu resepsiyonu — üye girişi',
      close: 'Demoyu kapat',
      openStandalone: 'Bu demoyu kendi sayfasında aç',
      footerTitle: 'Ne kadar anında olduğunu fark ettiniz mi?',
      footerText:
        'Yükleniyor animasyonu yok, iç içe menü yok. Kasa hızına göre yapıldı.',
      closeAndBack: 'Kapat ve geri dön',
    },

    standalone: {
      backToSite: "Pena Tools'a dön",
      salonTerminal: 'Kuaför terminali',
      gymTerminal: 'Resepsiyon terminali',
      salonSwitch: 'Kuaför randevu',
      gymSwitch: 'Spor salonu girişi',
      salonBanner: 'Kasa üstü randevu terminali',
      gymBanner: 'Üye giriş terminali',
      bannerNote:
        'Tam bağımsız görünüm — her işlemi deneyin, kayıt gerekmez.',
      returnLanding: '← Pena Tools sayfasına dön',
      ctaTitle:
        'Tam olarak kendi defterinize veya tablonuza göre bir araç ister misiniz?',
      ctaText:
        'Yarın teslim, €250 – €750 arası tek seferlik sabit ücretle. Aylık abonelik yok, gereksiz özellik yok, %100 size ait.',
      ctaButton: '24 saatte sizin olsun',
      backToPricing: 'Siteye ve fiyatlara dön',
    },
  },
};
