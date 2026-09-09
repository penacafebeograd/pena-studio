import { Language } from '../../types';

/**
 * Translations for the two demo apps.
 *
 * The demos ship with realistic sample data written in English. Rather than
 * rewriting every seed record, the sample values are looked up here at render
 * time and fall back to the original English string when a key is missing —
 * so an untranslated entry degrades to readable text instead of a blank.
 */

type Tri = Record<Language, string>;

/**
 * Serbian needs three count forms (1 termin / 2-4 termina / 5+ termina), so a
 * single "{n} termina" string is wrong for half the numbers it renders.
 */
export interface PluralForms {
  one: string;
  few?: string;
  other: string;
}

export const plural = (n: number, lang: Language, f: PluralForms): string => {
  if (lang === 'sr') {
    const m10 = n % 10;
    const m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return f.one;
    if (m10 >= 2 && m10 <= 4 && !(m100 >= 12 && m100 <= 14)) return f.few ?? f.other;
    return f.other;
  }
  if (lang === 'en') return n === 1 ? f.one : f.other;
  // Turkish uses one form with numerals.
  return f.other;
};

/** Look up a sample-data value, falling back to the raw English. */
export const sample = (
  table: Record<string, Tri>,
  value: string,
  lang: Language,
): string => table[value]?.[lang] ?? value;

/* ------------------------------------------------------------------ *
 * Salon: services, chairs
 * ------------------------------------------------------------------ */

const s = (en: string, sr: string, tr: string): Tri => ({ en, sr, tr });

export const SALON_SERVICES: Record<string, Tri> = {
  'Haircut & Styling': s('Haircut & Styling', 'Šišanje i stilizovanje', 'Saç kesimi ve şekillendirme'),
  'Haircut & Blowdry': s('Haircut & Blowdry', 'Šišanje i feniranje', 'Saç kesimi ve fön'),
  'Beard Trim & Fade': s('Beard Trim & Fade', 'Brada i fade', 'Sakal ve fade'),
  'Balayage & Blowdry': s('Balayage & Blowdry', 'Pramenovi i feniranje', 'Balyaj ve fön'),
  'Gel Manicure': s('Gel Manicure', 'Gel manikir', 'Kalıcı oje'),
  'Men’s Classic Cut': s('Men’s Classic Cut', 'Muško klasično šišanje', 'Klasik erkek kesimi'),
  'Full Color & Blowdry': s('Full Color & Blowdry', 'Farbanje i feniranje', 'Boya ve fön'),
  'Men’s Haircut & Beard': s('Men’s Haircut & Beard', 'Muško šišanje i brada', 'Erkek kesimi ve sakal'),
  'Wash & Volume Blowdry': s('Wash & Volume Blowdry', 'Pranje i feniranje za volumen', 'Yıkama ve hacimli fön'),
  'Gel Nails Refill': s('Gel Nails Refill', 'Dopuna gel noktiju', 'Tırnak dolgusu'),
  'Fade & Styling': s('Fade & Styling', 'Fade i stilizovanje', 'Fade ve şekillendirme'),
  'Keratin Smoothing Treatment': s('Keratin Smoothing Treatment', 'Keratinski tretman', 'Keratin bakımı'),
  'Keratin Treatment': s('Keratin Treatment', 'Keratinski tretman', 'Keratin bakımı'),
  'Men’s Cut & Beard Trim': s('Men’s Cut & Beard Trim', 'Muško šišanje i brada', 'Erkek kesimi ve sakal'),
  'Men’s Cut & Beard': s('Men’s Cut & Beard', 'Muško šišanje i brada', 'Erkek kesimi ve sakal'),
  'Gel Manicure & Polish': s('Gel Manicure & Polish', 'Gel manikir i lak', 'Kalıcı oje ve cila'),
  'Root Touchup & Style': s('Root Touchup & Style', 'Farbanje izrasta i stilizovanje', 'Dip boya ve şekillendirme'),
  'Full Restyle & Beard': s('Full Restyle & Beard', 'Novi look i brada', 'Komple değişim ve sakal'),
  'Highlights & Tone': s('Highlights & Tone', 'Pramenovi i toniranje', 'Röfle ve ton'),
  'Men’s Scissor Cut': s('Men’s Scissor Cut', 'Muško šišanje makazama', 'Makasla erkek kesimi'),
  'Color Correction': s('Color Correction', 'Korekcija boje', 'Renk düzeltme'),
  'Shellac Manicure': s('Shellac Manicure', 'Shellac manikir', 'Shellac manikür'),
  'Haircut & Beard': s('Haircut & Beard', 'Šišanje i brada', 'Saç ve sakal'),
  'Blowdry & Treatment': s('Blowdry & Treatment', 'Feniranje i tretman', 'Fön ve bakım'),
  'Fade & Wash': s('Fade & Wash', 'Fade i pranje', 'Fade ve yıkama'),
  'Full Balayage & Gloss': s('Full Balayage & Gloss', 'Kompletni pramenovi i sjaj', 'Komple balyaj ve parlaklık'),
  'Skin Fade & Hot Towel': s('Skin Fade & Hot Towel', 'Skin fade i topao peškir', 'Skin fade ve sıcak havlu'),
  'Haircut & Color Touchup': s('Haircut & Color Touchup', 'Šišanje i osvežavanje boje', 'Kesim ve renk tazeleme'),
  'Nail Art & Gel Extension': s('Nail Art & Gel Extension', 'Nadogradnja i nail art', 'Tırnak süsleme ve uzatma'),
  'Men’s Classic Haircut': s('Men’s Classic Haircut', 'Muško klasično šišanje', 'Klasik erkek kesimi'),
  'Blowdry & Curls (Event)': s('Blowdry & Curls (Event)', 'Feniranje i lokne (svečano)', 'Fön ve bukle (özel gün)'),
  'Cut & Beard Trim': s('Cut & Beard Trim', 'Šišanje i sređivanje brade', 'Kesim ve sakal düzeltme'),
  'Gloss & Silk Blowdry': s('Gloss & Silk Blowdry', 'Sjaj i svileno feniranje', 'Parlaklık ve ipeksi fön'),
  'Bridal Hair Styling & Veil': s('Bridal Hair Styling & Veil', 'Mladenačka frizura i veo', 'Gelin saçı ve duvak'),
  'Cut & Blowdry': s('Cut & Blowdry', 'Šišanje i feniranje', 'Kesim ve fön'),
  'Men’s Haircut & Wash': s('Men’s Haircut & Wash', 'Muško šišanje i pranje', 'Erkek kesimi ve yıkama'),
  'Full Color Treatment': s('Full Color Treatment', 'Kompletno farbanje', 'Komple boya'),
  'Gel Nails Extension': s('Gel Nails Extension', 'Nadogradnja noktiju', 'Tırnak uzatma'),
  'Fade & Full Beard': s('Fade & Full Beard', 'Fade i puna brada', 'Fade ve tam sakal'),
  'Wash, Deep Mask & Cut': s('Wash, Deep Mask & Cut', 'Pranje, maska i šišanje', 'Yıkama, maske ve kesim'),
  'Fade & Line Up': s('Fade & Line Up', 'Fade i konturisanje', 'Fade ve kontur'),
  'VIP Event Styling & Waves': s('VIP Event Styling & Waves', 'VIP stilizovanje i talasi', 'VIP şekillendirme ve dalga'),
  'Private Blowout & Manicure': s('Private Blowout & Manicure', 'Privatno feniranje i manikir', 'Özel fön ve manikür'),
};

export const SALON_CHAIRS: Record<string, Tri> = {
  'Chair 1 (Ana)': s('Chair 1 (Ana)', 'Stolica 1 (Ana)', 'Koltuk 1 (Ana)'),
  'Chair 2 (Miloš)': s('Chair 2 (Miloš)', 'Stolica 2 (Miloš)', 'Koltuk 2 (Miloš)'),
  'Nails (Milica)': s('Nails (Milica)', 'Nokti (Milica)', 'Tırnak (Milica)'),
};

/** Service options in the quick-add form, with the price kept in the label. */
export const SALON_SERVICE_OPTIONS: { key: string; price: number }[] = [
  { key: 'Haircut & Styling', price: 30 },
  { key: 'Full Color & Blowdry', price: 55 },
  { key: 'Balayage & Blowdry', price: 65 },
  { key: 'Men’s Cut & Beard', price: 25 },
  { key: 'Root Touchup & Style', price: 45 },
  { key: 'Keratin Treatment', price: 80 },
  { key: 'Gel Manicure', price: 35 },
];

/* ------------------------------------------------------------------ *
 * Gym: plans
 * ------------------------------------------------------------------ */

export const GYM_PLANS: Record<string, Tri> = {
  '12-Session Pass': s('12-Session Pass', 'Paket od 12 dolazaka', '12 seanslık paket'),
  '10-Session Pass': s('10-Session Pass', 'Paket od 10 dolazaka', '10 seanslık paket'),
  'Monthly Unlimited': s('Monthly Unlimited', 'Mesečna neograničena', 'Aylık sınırsız'),
  'Morning Pass (10-14h)': s('Morning Pass (10-14h)', 'Jutarnji paket (10–14h)', 'Sabah paketi (10–14)'),
};

export const GYM_PLAN_OPTIONS: { key: string; price: number; passes: number; days: number }[] = [
  { key: '12-Session Pass', price: 35, passes: 12, days: 45 },
  { key: 'Monthly Unlimited', price: 45, passes: 99, days: 30 },
  { key: '10-Session Pass', price: 30, passes: 10, days: 30 },
  { key: 'Morning Pass (10-14h)', price: 25, passes: 15, days: 30 },
];

/* ------------------------------------------------------------------ *
 * Dates and relative times inside sample data
 * ------------------------------------------------------------------ */

const MONTHS: Record<Language, Record<string, string>> = {
  en: {},
  sr: {
    Jan: 'jan', Feb: 'feb', Mar: 'mar', Apr: 'apr', May: 'maj', Jun: 'jun',
    Jul: 'jul', Aug: 'avg', Sep: 'sep', Oct: 'okt', Nov: 'nov', Dec: 'dec',
  },
  tr: {
    Jan: 'Oca', Feb: 'Şub', Mar: 'Mar', Apr: 'Nis', May: 'May', Jun: 'Haz',
    Jul: 'Tem', Aug: 'Ağu', Sep: 'Eyl', Oct: 'Eki', Nov: 'Kas', Dec: 'Ara',
  },
};

const PHRASES: Record<Language, [RegExp, string][]> = {
  en: [],
  sr: [
    [/\bYesterday\b/g, 'Juče'],
    [/\bToday\b/g, 'Danas'],
    [/\bJust now\b/g, 'Upravo sada'],
    [/\bRenewed just now\b/g, 'Upravo obnovljeno'],
    [/\bNew member \(never\)\b/g, 'Novi član (nije dolazio)'],
    [/\bMonday\b/g, 'Ponedeljak'],
    [/(\d+) days ago/g, 'pre $1 dana'],
    [/\bExpired\b/g, 'Isteklo'],
    [/\((\d+) days left\)/g, '(još $1 dana)'],
    [/\((\d+) day left\)/g, '(još $1 dan)'],
    [/missed without calling/g, 'nije došla, bez najave'],
  ],
  tr: [
    [/\bYesterday\b/g, 'Dün'],
    [/\bToday\b/g, 'Bugün'],
    [/\bJust now\b/g, 'Az önce'],
    [/\bRenewed just now\b/g, 'Az önce yenilendi'],
    [/\bNew member \(never\)\b/g, 'Yeni üye (hiç gelmedi)'],
    [/\bMonday\b/g, 'Pazartesi'],
    [/(\d+) days ago/g, '$1 gün önce'],
    [/\bExpired\b/g, 'Süresi doldu'],
    [/\((\d+) days left\)/g, '($1 gün kaldı)'],
    [/\((\d+) day left\)/g, '($1 gün kaldı)'],
    [/missed without calling/g, 'haber vermeden gelmedi'],
  ],
};

/** Localises the short dates and relative phrases baked into sample records. */
export const dateish = (value: string, lang: Language): string => {
  if (lang === 'en') return value;
  let out = value;
  for (const [re, to] of PHRASES[lang]) out = out.replace(re, to);

  // "Sep 16" reads as "16. sep" in Serbian and "16 Eyl" in Turkish, so the
  // month and day have to swap, not just get renamed.
  const months = Object.keys(MONTHS[lang]).join('|');
  out = out.replace(
    new RegExp(`\\b(${months})\\s+(\\d{1,2})\\b`, 'g'),
    (_m, mon: string, day: string) =>
      lang === 'sr'
        ? `${day}. ${MONTHS.sr[mon]}`
        : `${day} ${MONTHS.tr[mon]}`,
  );

  for (const [en, local] of Object.entries(MONTHS[lang])) {
    out = out.replace(new RegExp(`\\b${en}\\b`, 'g'), local);
  }
  return out;
};

/* ------------------------------------------------------------------ *
 * Weekday labels
 * ------------------------------------------------------------------ */

export const WEEKDAYS: Record<
  Language,
  { long: string[]; short: string[]; after: string[] }
> = {
  en: {
    long: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    after: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  sr: {
    long: ['Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja'],
    short: ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'],
    // Accusative, for "za ..." — "raspored za sredu", not "za Sreda".
    after: ['ponedeljak', 'utorak', 'sredu', 'četvrtak', 'petak', 'subotu', 'nedelju'],
  },
  tr: {
    long: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    short: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    after: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
  },
};

export const MONTH_SHORT: Record<Language, string> = {
  en: 'Sep',
  sr: 'sep',
  tr: 'Eyl',
};

/* ------------------------------------------------------------------ *
 * Demo chrome
 * ------------------------------------------------------------------ */

export interface DemoUi {
  salon: {
    weekTotal: string;
    slotsFilled: PluralForms;
    dailyAverage: string;
    perDay: string;
    monSun: string;
    dayTotal: string;
    appointments: PluralForms;
    today: string;
    scheduleFor: string;
    clients: PluralForms;
    toggleHint: string;
    toggleFlow: string;
    addAppointment: string;
    cancelForm: string;
    quickBooking: string;
    autoCalc: string;
    clientName: string;
    clientNamePlaceholder: string;
    phoneLabel: string;
    service: string;
    timeAndChair: string;
    cancel: string;
    saveTo: string;
    emptyDay: string;
    addFirst: string;
    statInChair: string;
    statCompleted: string;
    statConfirmed: string;
    pastNoShow: string;
    noShowAdvice: string;
    tapToChange: string;
    reminderSent: string;
    sendSms: string;
    resendSms: string;
    liveCounter: string;
    liveCounterText: string;
    noSubscription: string;
    toastAdded: string;
    toastSms: string;
    smsBody: string;
  };
  gym: {
    trafficTitle: string;
    trafficSub: string;
    weekTotal: string;
    visits: PluralForms;
    dailyAvg: string;
    visitsPerDay: string;
    peakShift: string;
    rushHour: string;
    peakSuffix: string;
    frontDeskHeading: string;
    scannerActive: string;
    searchHint: string;
    searchPlaceholder: string;
    collectPayment: string;
    noLicense: string;
    registerMember: string;
    cancelForm: string;
    registerTitle: string;
    fullName: string;
    namePlaceholder: string;
    phone: string;
    plan: string;
    startDate: string;
    cancel: string;
    save: string;
    noMembers: string;
    unlimited: string;
    visitsLeft: PluralForms;
    lastVisit: string;
    checkIn: string;
    renewPass: string;
    stActive: string;
    stExpiring: string;
    stExpired: string;
    sendRenewal: string;
    renewalSent: string;
    resendRenewal: string;
    expiredLockTitle: string;
    frontDesk: string;
    frontDeskText: string;
    toastBlocked: string;
    toastOk: string;
    toastOkUnlimited: string;
    toastRenewed: string;
    toastRegistered: string;
    toastReminder: string;
    reminderBody: string;
  };
}

export const demoUi: Record<Language, DemoUi> = {
  en: {
    salon: {
      weekTotal: 'This week total',
      slotsFilled: { one: '{n} slot filled', other: '{n} slots filled' },
      dailyAverage: 'Daily average',
      perDay: '/day',
      monSun: 'Mon – Sun',
      dayTotal: '{day} total',
      appointments: { one: '{n} appointment', other: '{n} appointments' },
      today: 'Today',
      scheduleFor: 'Studio Milena — {day} schedule',
      clients: { one: '{n} client', other: '{n} clients' },
      toggleHint: 'Click any appointment card to change status:',
      toggleFlow: 'Confirmed → In chair → Completed',
      addAppointment: '+ Add appointment',
      cancelForm: 'Cancel form',
      quickBooking: 'Quick 10-second booking ({day})',
      autoCalc: 'Daily and weekly earnings update automatically',
      clientName: 'Client name *',
      clientNamePlaceholder: 'e.g. Maja Popović',
      phoneLabel: 'Phone (for SMS reminder)',
      service: 'Service',
      timeAndChair: 'Time and chair',
      cancel: 'Cancel',
      saveTo: 'Save to {day}',
      emptyDay: 'No appointments booked for this day yet.',
      addFirst: '+ Add the first appointment',
      statInChair: 'In chair now',
      statCompleted: 'Completed and paid',
      statConfirmed: 'Confirmed',
      pastNoShow: '1 past no-show ({date})',
      noShowAdvice:
        'Client missed a previous slot without calling. Re-confirm before holding the chair.',
      tapToChange: 'Tap to change status →',
      reminderSent: 'Reminder sent',
      sendSms: 'Send SMS reminder',
      resendSms: 'Click to re-send the SMS reminder',
      liveCounter: 'Studio Milena live counter:',
      liveCounterText:
        'Changes sync instantly across the reception tablet and staff phones.',
      noSubscription: 'No monthly subscription • Fixed 1-day build',
      toastAdded: 'Appointment added for {name} on {day} at {time}',
      toastSms: 'SMS sent to {name} ({phone}): "{body}"',
      smsBody:
        'Studio Milena reminder: your appointment is {day} at {time} ({chair}). See you!',
    },
    gym: {
      trafficTitle: 'Weekly traffic • 7-day attendance',
      trafficSub: 'Check-ins per day. Tap a bar for peak hours.',
      weekTotal: 'Week total',
      visits: { one: '{n} visit', other: '{n} visits' },
      dailyAvg: 'Daily avg',
      visitsPerDay: '{n} visits/day',
      peakShift: 'Peak shift',
      rushHour: 'Rush hour',
      peakSuffix: '{day} ({n} visits)',
      searchPlaceholder: 'Search (e.g. Luka, 064)…',
      frontDeskHeading: 'Iron & Kettle — front desk terminal',
      scannerActive: 'Scanner active',
      searchHint: 'Search a member by name, phone or plan. One-tap check-in with a live visit countdown.',
      collectPayment: 'Collect payment at the counter',
      noLicense: 'No monthly licence • Built in 24 hours',
      registerMember: '+ Register member',
      cancelForm: 'Cancel form',
      registerTitle: 'Register a new member at the front desk (takes 15 seconds)',
      fullName: 'Full name *',
      namePlaceholder: 'e.g. Milan Vasić',
      phone: 'Phone',
      plan: 'Membership',
      startDate: 'Start date',
      cancel: 'Cancel',
      save: 'Register member',
      noMembers: 'No member matches that search.',
      unlimited: 'Unlimited',
      visitsLeft: { one: '{n} visit left', other: '{n} visits left' },
      lastVisit: 'Last:',
      checkIn: 'Check in',
      renewPass: 'Renew pass',
      stActive: 'ACTIVE',
      stExpiring: 'EXPIRING',
      stExpired: 'EXPIRED',
      sendRenewal: 'Send renewal reminder',
      renewalSent: 'Reminder sent',
      resendRenewal: 'Click to re-send the reminder',
      expiredLockTitle: 'Test the expired-membership block',
      frontDesk: 'Iron & Kettle front desk:',
      frontDeskText:
        'Ends lost paper-card arguments and stops expired members automatically.',
      toastBlocked:
        'Cannot check in {name}: membership expired. Collect the €35 renewal first.',
      toastOk: 'Checked in: {name}. {n} visits left.',
      toastOkUnlimited: 'Checked in: {name} (monthly unlimited active).',
      toastRenewed: 'Membership renewed for {name} (€35 collected). Ready to check in.',
      toastRegistered: 'New member registered: {name} ({plan}). Account active.',
      toastReminder: 'WhatsApp reminder sent to {name} ({phone}): "{body}"',
      reminderBody:
        'Hi {first}, your Iron & Kettle membership runs out soon. Renew at the desk to keep training.',
    },
  },

  sr: {
    salon: {
      weekTotal: 'Ukupno ove nedelje',
      slotsFilled: {
        one: '{n} popunjen termin',
        few: '{n} popunjena termina',
        other: '{n} popunjenih termina',
      },
      dailyAverage: 'Dnevni prosek',
      perDay: '/dan',
      monSun: 'pon – ned',
      dayTotal: 'Ukupno za {day}',
      appointments: { one: '{n} termin', few: '{n} termina', other: '{n} termina' },
      today: 'Danas',
      scheduleFor: 'Studio Milena — raspored za {day}',
      clients: { one: '{n} klijent', few: '{n} klijenta', other: '{n} klijenata' },
      toggleHint: 'Kliknite na termin da promenite status:',
      toggleFlow: 'Potvrđeno → U stolici → Završeno',
      addAppointment: '+ Upiši termin',
      cancelForm: 'Zatvori formu',
      quickBooking: 'Brzo upisivanje za 10 sekundi ({day})',
      autoCalc: 'Dnevna i nedeljna zarada se računaju automatski',
      clientName: 'Ime klijenta *',
      clientNamePlaceholder: 'npr. Maja Popović',
      phoneLabel: 'Telefon (za SMS podsetnik)',
      service: 'Usluga',
      timeAndChair: 'Vreme i stolica',
      cancel: 'Otkaži',
      saveTo: 'Sačuvaj — {day}',
      emptyDay: 'Za ovaj dan još nema zakazanih termina.',
      addFirst: '+ Upiši prvi termin',
      statInChair: 'Trenutno u stolici',
      statCompleted: 'Završeno i naplaćeno',
      statConfirmed: 'Potvrđeno',
      pastNoShow: '1 nedolazak ({date})',
      noShowAdvice:
        'Klijent prethodno nije došao i nije se javio. Potvrdite ponovo pre nego što držite stolicu.',
      tapToChange: 'Dodirnite za promenu statusa →',
      reminderSent: 'Podsetnik poslat',
      sendSms: 'Pošalji SMS podsetnik',
      resendSms: 'Kliknite da ponovo pošaljete SMS podsetnik',
      liveCounter: 'Studio Milena, uživo za pultom:',
      liveCounterText:
        'Izmene se odmah vide i na tabletu na recepciji i na telefonima radnika.',
      noSubscription: 'Bez mesečne pretplate • Fiksna izrada za 1 dan',
      toastAdded: 'Termin upisan: {name} — {day} u {time}',
      toastSms: 'SMS poslat: {name} ({phone}): „{body}”',
      smsBody:
        'Studio Milena podsetnik: vaš termin je u {day} u {time} ({chair}). Vidimo se!',
    },
    gym: {
      trafficTitle: 'Nedeljni promet • dolasci za 7 dana',
      trafficSub: 'Prijave po danu. Dodirnite stubić za termine najveće gužve.',
      weekTotal: 'Ukupno nedeljno',
      visits: { one: '{n} dolazak', few: '{n} dolaska', other: '{n} dolazaka' },
      dailyAvg: 'Dnevni prosek',
      visitsPerDay: '{n} dolazaka/dan',
      peakShift: 'Najveća gužva',
      rushHour: 'Špic',
      peakSuffix: '{day} ({n} dolazaka)',
      searchPlaceholder: 'Pretraga (npr. Luka, 064)…',
      frontDeskHeading: 'Iron & Kettle — terminal na recepciji',
      scannerActive: 'Čitač aktivan',
      searchHint: 'Pretražite člana po imenu, broju telefona ili paketu. Prijava jednim dodirom uz brojač preostalih dolazaka.',
      collectPayment: 'Naplata na pultu',
      noLicense: 'Bez mesečne licence • Napravljeno za 24 sata',
      registerMember: '+ Upiši člana',
      cancelForm: 'Zatvori formu',
      registerTitle: 'Upis novog člana na recepciji (traje 15 sekundi)',
      fullName: 'Ime i prezime *',
      namePlaceholder: 'npr. Milan Vasić',
      phone: 'Telefon',
      plan: 'Članarina',
      startDate: 'Datum početka',
      cancel: 'Otkaži',
      save: 'Upiši člana',
      noMembers: 'Nijedan član ne odgovara pretrazi.',
      unlimited: 'Neograničeno',
      visitsLeft: {
        one: 'još {n} dolazak',
        few: 'još {n} dolaska',
        other: 'još {n} dolazaka',
      },
      lastVisit: 'Poslednji put:',
      checkIn: 'Prijavi',
      renewPass: 'Obnovi članarinu',
      stActive: 'AKTIVNA',
      stExpiring: 'ISTIČE',
      stExpired: 'ISTEKLA',
      sendRenewal: 'Pošalji podsetnik za obnovu',
      renewalSent: 'Podsetnik poslat',
      resendRenewal: 'Kliknite da ponovo pošaljete podsetnik',
      expiredLockTitle: 'Isprobajte blokadu istekle članarine',
      frontDesk: 'Iron & Kettle recepcija:',
      frontDeskText:
        'Nema više rasprava oko izgubljenih kartona, a istekle članarine se automatski zaustavljaju.',
      // Personal names are not declined here on purpose - Serbian would need
      // the accusative ("prijaviti Nikolu Simića"), so the name is kept in the
      // nominative and the sentence is built around it instead.
      toastBlocked:
        'Prijava odbijena — {name}: članarina je istekla. Prvo naplatite obnovu od 35 €.',
      toastOk: 'Prijavljen: {name}. Preostalo dolazaka: {n}.',
      toastOkUnlimited: 'Prijavljen: {name} (mesečna neograničena je aktivna).',
      toastRenewed: 'Članarina obnovljena — {name} (naplaćeno 35 €). Može da se prijavi.',
      toastRegistered: 'Novi član upisan: {name} ({plan}). Nalog je aktivan.',
      toastReminder: 'WhatsApp podsetnik poslat: {name} ({phone}): „{body}”',
      reminderBody:
        'Zdravo {first}, tvoja članarina u Iron & Kettle ističe uskoro. Obnovi na pultu da nastaviš sa treninzima.',
    },
  },

  tr: {
    salon: {
      weekTotal: 'Bu hafta toplam',
      slotsFilled: { one: '{n} randevu dolu', other: '{n} randevu dolu' },
      dailyAverage: 'Günlük ortalama',
      perDay: '/gün',
      monSun: 'Pzt – Paz',
      dayTotal: '{day} toplamı',
      appointments: { one: '{n} randevu', other: '{n} randevu' },
      today: 'Bugün',
      scheduleFor: 'Studio Milena — {day} programı',
      clients: { one: '{n} müşteri', other: '{n} müşteri' },
      toggleHint: 'Durumu değiştirmek için randevu kartına tıklayın:',
      toggleFlow: 'Onaylandı → Koltukta → Tamamlandı',
      addAppointment: '+ Randevu ekle',
      cancelForm: 'Formu kapat',
      quickBooking: '10 saniyede hızlı randevu ({day})',
      autoCalc: 'Günlük ve haftalık kazanç otomatik hesaplanır',
      clientName: 'Müşteri adı *',
      clientNamePlaceholder: 'örn. Elif Yılmaz',
      phoneLabel: 'Telefon (SMS hatırlatma için)',
      service: 'Hizmet',
      timeAndChair: 'Saat ve koltuk',
      cancel: 'Vazgeç',
      saveTo: '{day} gününe kaydet',
      emptyDay: 'Bu gün için henüz randevu yok.',
      addFirst: '+ İlk randevuyu ekle',
      statInChair: 'Şu an koltukta',
      statCompleted: 'Tamamlandı ve ödendi',
      statConfirmed: 'Onaylandı',
      pastNoShow: '1 kez gelmedi ({date})',
      noShowAdvice:
        'Müşteri önceki randevusuna haber vermeden gelmedi. Koltuğu ayırmadan önce teyit alın.',
      tapToChange: 'Durumu değiştirmek için dokunun →',
      reminderSent: 'Hatırlatma gönderildi',
      sendSms: 'SMS hatırlatma gönder',
      resendSms: 'SMS hatırlatmayı tekrar göndermek için tıklayın',
      liveCounter: 'Studio Milena canlı kasa:',
      liveCounterText:
        'Değişiklikler resepsiyon tabletinde ve personel telefonlarında anında görünür.',
      noSubscription: 'Aylık abonelik yok • 1 günde sabit ücretle teslim',
      toastAdded: '{name} için randevu eklendi: {day}, saat {time}',
      toastSms: 'SMS gönderildi: {name} ({phone}): "{body}"',
      smsBody:
        'Studio Milena hatırlatma: randevunuz {day} günü saat {time} ({chair}). Görüşmek üzere!',
    },
    gym: {
      trafficTitle: 'Haftalık yoğunluk • 7 günlük katılım',
      trafficSub: 'Günlük girişler. Yoğun saatler için bir sütuna dokunun.',
      weekTotal: 'Hafta toplamı',
      visits: { one: '{n} giriş', other: '{n} giriş' },
      dailyAvg: 'Günlük ort.',
      visitsPerDay: 'günde {n} giriş',
      peakShift: 'En yoğun gün',
      rushHour: 'Yoğun saatler',
      peakSuffix: '{day} ({n} giriş)',
      searchPlaceholder: 'Ara (örn. Luka, 064)…',
      frontDeskHeading: 'Iron & Kettle — resepsiyon terminali',
      scannerActive: 'Okuyucu aktif',
      searchHint: 'Üyeyi ad, telefon veya paketle arayın. Tek dokunuşla giriş ve canlı kalan giriş sayacı.',
      collectPayment: 'Ödeme kasada alınır',
      noLicense: 'Aylık lisans yok • 24 saatte yapıldı',
      registerMember: '+ Üye kaydet',
      cancelForm: 'Formu kapat',
      registerTitle: 'Resepsiyonda yeni üye kaydı (15 saniye sürer)',
      fullName: 'Ad soyad *',
      namePlaceholder: 'örn. Milan Vasić',
      phone: 'Telefon',
      plan: 'Üyelik',
      startDate: 'Başlangıç tarihi',
      cancel: 'Vazgeç',
      save: 'Üyeyi kaydet',
      noMembers: 'Aramanızla eşleşen üye yok.',
      unlimited: 'Sınırsız',
      visitsLeft: { one: '{n} giriş kaldı', other: '{n} giriş kaldı' },
      lastVisit: 'Son giriş:',
      checkIn: 'Giriş yap',
      renewPass: 'Üyeliği yenile',
      stActive: 'AKTİF',
      stExpiring: 'BİTİYOR',
      stExpired: 'SÜRESİ DOLDU',
      sendRenewal: 'Yenileme hatırlatması gönder',
      renewalSent: 'Hatırlatma gönderildi',
      resendRenewal: 'Hatırlatmayı tekrar göndermek için tıklayın',
      expiredLockTitle: 'Süresi dolmuş üyelik engelini deneyin',
      frontDesk: 'Iron & Kettle resepsiyon:',
      frontDeskText:
        'Kaybolan kart tartışmalarını bitirir, süresi dolan üyeleri otomatik durdurur.',
      toastBlocked:
        '{name} giriş yapamaz: üyelik süresi dolmuş. Önce 35 € yenileme alın.',
      toastOk: 'Giriş yapıldı: {name}. Kalan giriş: {n}.',
      toastOkUnlimited: 'Giriş yapıldı: {name} (aylık sınırsız aktif).',
      toastRenewed: '{name} için üyelik yenilendi (35 € alındı). Giriş yapabilir.',
      toastRegistered: 'Yeni üye kaydedildi: {name} ({plan}). Hesap aktif.',
      toastReminder: 'WhatsApp hatırlatması gönderildi: {name} ({phone}): "{body}"',
      reminderBody:
        'Merhaba {first}, Iron & Kettle üyeliğin yakında bitiyor. Antrenmana devam etmek için resepsiyondan yenile.',
    },
  },
};
