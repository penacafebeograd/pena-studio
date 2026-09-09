import { Language, TranslationContent } from './types';

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      problem: 'The Problem',
      howItWorks: 'How it works',
      demos: 'Live Demos',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      whatsappQuick: 'WhatsApp',
    },
    hero: {
      badge: 'Built for independent local businesses',
      headline: 'Your business, one simple app, built in a day.',
      subheadline:
        'No monthly subscriptions you don’t need. No software with 50 buttons you never touch. Just a clean, custom tool built specifically for your salon, gym, or workshop — delivered tomorrow for a single fixed price.',
      ctaPrimary: 'Get a free demo',
      ctaSecondary: 'Try live demos',
      trustPoints: [
        'Delivered in 24 hours',
        'Fixed fee €250 – €750',
        'You own it — 100% no lock-in',
      ],
      appMockup: {
        businessName: 'Studio Milena — Hair & Nails',
        tagline: 'Staff Schedule & Daily Appointments',
        todaySummary: 'Wednesday Schedule',
        confirmedBookings: '11 of 12 slots filled',
        revenueToday: '€340 expected',
        nextAppointment: 'Next in 20 min',
        statusConfirmed: 'Confirmed',
        statusInProgress: 'In chair',
        newBookingBtn: '+ Add Appointment',
        clientName1: 'Jelena Nikolić',
        service1: 'Balayage & Blowdry • Ana (Chair 1)',
        clientName2: 'Marko Petrović',
        service2: 'Men’s Cut & Beard • MiloÅ¡ (Chair 2)',
        clientName3: 'Sara Jovanović',
        service3: 'Gel Manicure • Milica (Station 3)',
      },
    },
    problems: {
      eyebrow: 'Common Frustrations',
      title: 'Tools that waste your time instead of saving it',
      subtitle:
        'Most small businesses don’t need complex enterprise software. They just need something that doesn’t lose appointments or confuse staff.',
      cards: [
        {
          title: 'Paper appointment books',
          description:
            'Stained pages, crossed-out times, and double bookings when two staff members take phone calls at the same time.',
          realQuote: '“Who erased this 4 PM slot?”',
          iconType: 'paper',
        },
        {
          title: 'WhatsApp order chaos',
          description:
            'Customer requests buried under family chats, missed messages, and voice notes you have to re-listen to three times.',
          realQuote: '“Wait, did you want Friday or Saturday?”',
          iconType: 'whatsapp',
        },
        {
          title: 'Spreadsheets nobody updates',
          description:
            'Started with good intentions, now broken on mobile, formulas deleted by accident, and abandoned six weeks ago.',
          realQuote: '“The sheet is frozen on my phone again.”',
          iconType: 'spreadsheet',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Clear 3-Step Process',
      title: 'How it works: from idea to live tool in 24 hours',
      subtitle:
        'No endless meetings. No 40-page requirement documents. You show me what you track, I build it.',
      steps: [
        {
          stepNumber: '01',
          title: 'We talk (30 min)',
          timeframe: 'Morning or afternoon call',
          description:
            'A 30-minute phone call or WhatsApp screen share. You show me your notebook, your chat, or your sheet and tell me what drives you crazy.',
          details: [
            'No technical preparation required',
            'I ask about your daily routine',
            'We agree on exactly what belongs on the screen',
          ],
        },
        {
          stepNumber: '02',
          title: 'We build it that night',
          timeframe: 'Overnight delivery',
          description:
            'I code a clean, fast web app tailored to your exact business workflow. Only the buttons and fields you actually use.',
          details: [
            'Optimized for mobile, tablet, and counter PC',
            'Fast loading, no slow bloated menus',
            'Automatic backups and simple data view',
          ],
        },
        {
          stepNumber: '03',
          title: 'You use it tomorrow',
          timeframe: 'Next day morning',
          description:
            'You get a private link. Tap "Add to Home Screen" on your phone or tablet and start using it immediately with your staff.',
          details: [
            'Short 3-minute video showing how it works',
            '14 days of free minor adjustments included',
            'Your data is private and owned entirely by you',
          ],
        },
      ],
    },
    demos: {
      eyebrow: 'Real Working Examples',
      title: 'Clickable live demos',
      subtitle:
        'Test real applications built with this exact approach. Simple, fast, and obvious to anyone on their first try.',
      tryLiveBtn: 'Try it live',
      closeDemo: 'Close demo',
      items: [
        {
          id: 'salon',
          title: 'Salon & Studio Booking',
          category: 'Hair, Nails & Beauty Salons',
          description:
            'Daily chair timeline, fast client appointment logging, automated SMS reminder trigger, and quick staff earnings tally.',
          keyFeatures: [
            '1-tap appointment logging',
            'Visual chair timeline (no double booking)',
            'Client history with previous formulas & notes',
            'Works directly on counter iPad or phone',
          ],
          previewStats: [
            { label: 'Time to log a client', value: '15 seconds' },
            { label: 'Staff training required', value: '0 minutes' },
          ],
        },
        {
          id: 'gym',
          title: 'Gym & Club Member Passes',
          category: 'Fitness Centers, Martial Arts & Crossfit',
          description:
            'Member check-in terminal, session countdown passes, automatic renewal alerts, and daily attendance records.',
          keyFeatures: [
            'Search member by name or phone in 2 keystrokes',
            '1-tap check-in with remaining pass countdown',
            'Red flag warning for expired memberships',
            'Offline-resilient cash & card register',
          ],
          previewStats: [
            { label: 'Check-in speed', value: '2 taps' },
            { label: 'Lost pass disputes', value: 'Eliminated' },
          ],
        },
      ],
    },
    pricing: {
      eyebrow: 'Transparent Pricing',
      title: 'One flat fee. No subscriptions. No surprises.',
      subtitle:
        'Most software vendors charge you €40-€120 every single month forever. With Pena Tools, you pay once and own your tool.',
      feeRange: '€250 – €750',
      feeLabel: 'One-time flat investment (depends on app scope)',
      reassuranceTitle: 'You own it, no lock-in.',
      reassuranceText:
        'Your tool runs on standard, reliable web infrastructure. Hosting costs are typically €0 (free tier) or €10-€15/year for your own custom domain. You will never receive a recurring monthly software invoice from Pena Tools.',
      includedItems: [
        'Complete custom web application tailored to your business',
        'Works seamlessly on iPhone, Android, iPad, and counter PC',
        'Personal 30-minute kickoff & 1-day turnaround',
        '3-minute custom staff video tutorial',
        '14 days of free minor tweaks and text adjustments',
        'Full export of all your customer & appointment data anytime',
      ],
      noHiddenCosts: [
        'No per-user licensing fees',
        'No monthly software subscription',
        'No forced software update lockouts',
        'No third-party advertising or trackers',
      ],
      cta: 'Talk about your tool',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Straight answers to common questions',
      subtitle:
        'Honest details so you know exactly what to expect before we even speak.',
      items: [
        {
          question: 'How can you realistically build an app in a single day?',
          answer:
            'Because we don’t build giant, bloated systems with features you will never use. We build hyper-focused tools designed solely for your specific daily routine. Since I do not carry corporate overhead or agency bureaucracy, a focused 8-hour sprint is more than enough to deliver a clean, battle-tested tool.',
        },
        {
          question: 'What if I need changes or extra features later on?',
          answer:
            'Every project includes 14 days of free minor tweaks (e.g., adding a new staff member, modifying a service duration, adjusting receipt text). If you want major new features months down the line, I charge a modest, agreed-upon fixed fee per change — no surprise invoices.',
        },
        {
          question: 'Do I or my staff need to be tech-savvy?',
          answer:
            'Not at all. The entire philosophy of Pena Tools is making apps that feel as simple as sending a text message. If your staff knows how to use WhatsApp or take a phone picture, they will understand the app in two minutes without reading a manual.',
        },
        {
          question: 'What happens after it’s delivered? Who hosts it?',
          answer:
            'I set up your app on rock-solid cloud hosting (like Cloudflare, Netlify, or Vercel). For 95% of small businesses, this is completely free under standard usage tiers. If you want a custom domain (e.g., app.yourgym.com), domain registration is usually around €10 per year.',
        },
        {
          question: 'Where does my customer and sales data live?',
          answer:
            'Your data is private to you. It is stored in an encrypted database that only you and your designated staff can access. You can download your full records to Excel or CSV at any time with a single button press.',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Contact',
      title: 'Tell me what you need to track',
      subtitle:
        'No sales pitch, no automated phone trees. You will talk directly with the person who actually builds your app.',
      whatsappBtn: 'Message me on WhatsApp',
      whatsappSub: 'Typical reply time: under 1 hour during business hours',
      formTitle: 'Or send a quick note here',
      formSubtitle: 'Fill this out if you prefer an email or callback first.',
      fields: {
        name: 'Your Name',
        namePlaceholder: 'e.g. Maria Novak',
        businessType: 'Type of Business',
        businessTypePlaceholder: 'e.g. Hair Salon, CrossFit Box, Auto Repair...',
        trackingNow: 'What are you tracking now?',
        trackingNowPlaceholder:
          'e.g. Appointments in a paper book, gym passes in Excel...',
        contactMethod: 'Phone / WhatsApp or Email',
        contactMethodPlaceholder: '+381 64 ... or name@example.com',
        notes: 'Any specific headache? (Optional)',
        notesPlaceholder:
          'Tell me in 1-2 sentences what annoys you most about your current setup.',
        submitBtn: 'Send inquiry',
      },
      successMessage:
        'Thank you! I have your inquiry and will reply shortly (usually within 2-3 hours).',    },
    footer: {
      tagline:
        'Pena Tools — simple, honest custom business software built in 1 day.',
      rights: 'All rights reserved.',
      locationNote: 'Built with care in Belgrade for local businesses everywhere.',
    },
  },

  sr: {
    nav: {
      problem: 'Problem',
      howItWorks: 'Kako funkcioniše',
      demos: 'Primeri uživo',
      pricing: 'Cene',
      faq: 'Česta pitanja',
      contact: 'Kontakt',
      whatsappQuick: 'WhatsApp',
    },
    hero: {
      badge: 'Napravljeno za lokalne preduzetnike i zanatlije',
      headline: 'Vaš biznis, jedna jednostavna aplikacija, gotova za 1 dan.',
      subheadline:
        'Bez skupih mesečnih pretplata. Bez programa sa 50 dugmića koje niko ne koristi. Samo jednostavan, namenski softver za vaš salon, teretanu ili radionicu — isporučen sutra po fiksnoj ceni.',
      ctaPrimary: 'Zatražite besplatan demo',
      ctaSecondary: 'Pogledajte primere uživo',
      trustPoints: [
        'Isporuka za 24 sata',
        'Fiksna cena €250 – €750',
        'Aplikacija je vaša — bez pretplate i ugovora',
      ],
      appMockup: {
        businessName: 'Studio Milena — Frizerski i kozmetički salon',
        tagline: 'Dnevni raspored i zakazani termini',
        todaySummary: 'Raspored za sredu',
        confirmedBookings: '11 od 12 termina popunjeno',
        revenueToday: '€340 očekivano',
        nextAppointment: 'Sledeći za 20 min',
        statusConfirmed: 'Potvrđeno',
        statusInProgress: 'U stolici',
        newBookingBtn: '+ Upiši termin',
        clientName1: 'Jelena Nikolić',
        service1: 'Pramenovi i feniranje • Ana (Stolica 1)',
        clientName2: 'Marko Petrović',
        service2: 'Muško šišanje i brada • MiloÅ¡ (Stolica 2)',
        clientName3: 'Sara Jovanović',
        service3: 'Gel lak i manikir • Milica (Sto 3)',
      },
    },
    problems: {
      eyebrow: 'Svakodnevne muke',
      title: 'Alati koji vam troše vreme umesto da ga štede',
      subtitle:
        'Malim preduzećima ne treba komplikovan korporativni softver. Treba im samo nešto gde se termini ne gube i gde se radnici ne zbunjuju.',
      cards: [
        {
          title: 'Sveske i rokovnici za zakazivanje',
          description:
            'Precrtani termini, iscepan papir i preklapanje klijenata kada dvoje radnika u isto vreme zakažu preko telefona.',
          realQuote: '„Ko je precrtao termin u 16h?”',
          iconType: 'paper',
        },
        {
          title: 'Haos u WhatsApp i Viber porukama',
          description:
            'Zahtevi klijenata zatrpani među privatnim porukama, propušteni upiti i glasovne poruke koje morate slušati tri puta.',
          realQuote: '„Čekaj, jesi li rekla petak ili subota?”',
          iconType: 'whatsapp',
        },
        {
          title: 'Eksel tabele koje niko ne ažurira',
          description:
            'Počeli ste sa dobrom namerom, ali na telefonu ništa ne može da se klikne, formule su obrisane i odustali ste.',
          realQuote: '„Tabela mi ponovo koči telefon.”',
          iconType: 'spreadsheet',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Jasna 3 koraka',
      title: 'Kako funkcioniše: od ideje do gotovog alata za 24h',
      subtitle:
        'Bez beskrajnih sastanaka i bez nerazumljivih tehničkih termina. Pokažete mi šta vodite, a ja to napravim.',
      steps: [
        {
          stepNumber: '01',
          title: 'Čujemo se (30 min)',
          timeframe: 'Jutarnji ili popodnevni razgovor',
          description:
            'Kratak poziv ili WhatsApp razgovor. Pokažete mi vašu svesku, tabelu ili poruke i kažete mi šta vas najviše usporava.',
          details: [
            'Nije vam potrebno nikakvo tehničko predznanje',
            'Pričamo normalnim jezikom o vašem radnom danu',
            'Zajedno definišemo samo ono što vam stvarno treba',
          ],
        },
        {
          stepNumber: '02',
          title: 'Pravim aplikaciju preko noći',
          timeframe: 'Izrada u toku večeri',
          description:
            'Pišem čist i brz veb program prilagođen tačno vašim koracima. Samo ona dugmad i polja koja koristite.',
          details: [
            'Prilagođeno za telefon, tablet i računar na pultu',
            'Otvara se u sekundi, bez komplikovanih menija',
            'Automatsko čuvanje podataka i jednostavan pregled',
          ],
        },
        {
          stepNumber: '03',
          title: 'Koristite je već sutra',
          timeframe: 'Sledećeg jutra',
          description:
            'Dobijate vaš privatni link. Sačuvate ga na početni ekran telefona ili tableta i odmah počinjete sa radom.',
          details: [
            'Kratak video od 3 minuta koji objašnjava sve',
            '14 dana besplatnih sitnih izmena uključeno',
            'Podaci su u potpunosti vaši i privatni',
          ],
        },
      ],
    },
    demos: {
      eyebrow: 'Pravi primeri',
      title: 'Isprobajte uživo',
      subtitle:
        'Isprobajte prave aplikacije napravljene na ovaj način. Brze, jednostavne i jasne svakome iz prvog pokušaja.',
      tryLiveBtn: 'Isprobaj uživo',
      closeDemo: 'Zatvori primer',
      items: [
        {
          id: 'salon',
          title: 'Zakazivanje za salone',
          category: 'Frizerski, kozmetički i barber saloni',
          description:
            'Dnevni raspored po stolicama/radnicima, brzo upisivanje klijenata jednim dodirom i pregled današnjeg pazara.',
          keyFeatures: [
            'Upisivanje termina za 15 sekundi',
            'Pregled po stolicama (nema preklapanja)',
            'Istorijat klijenta sa formulama i beleškama',
            'Radi direktno na telefonu ili tabletu salona',
          ],
          previewStats: [
            { label: 'Vreme za upis klijenta', value: '15 sekundi' },
            { label: 'Potrebna obuka osoblja', value: '0 minuta' },
          ],
        },
        {
          id: 'gym',
          title: 'Evidencija članarina za teretane',
          category: 'Teretane, borilački klubovi i joga studiji',
          description:
            'Brzo prijavljivanje na ulazu, brojač preostalih treninga, upozorenje za istekle članarine i dnevni spisak dolazaka.',
          keyFeatures: [
            'Pronalaženje člana po imenu ili broju za 2 sekunde',
            '1 dodir za ček-in i automatsko skidanje termina',
            'Jasno crveno upozorenje ako je članarina istekla',
            'Evidencija plaćanja u gotovini i karticom',
          ],
          previewStats: [
            { label: 'Brzina prijave', value: '2 dodira' },
            { label: 'Rasprave oko uplata', value: 'Rešeno' },
          ],
        },
      ],
    },
    pricing: {
      eyebrow: 'Poštene i jasne cene',
      title: 'Jednokratna fiksna cena. Bez pretplate. Bez iznenađenja.',
      subtitle:
        'Većina softverskih firmi naplaćuje 40€ do 120€ svakog meseca zauvek. Kod Pena Tools plaćate jednom i softver je vaš.',
      feeRange: '€250 – €750',
      feeLabel: 'Jednokratno ulaganje (u zavisnosti od obima aplikacije)',
      reassuranceTitle: 'Vi ste vlasnik, nema vezivanja.',
      reassuranceText:
        'Aplikacija radi na pouzdanoj globalnoj infrastrukturi. Trošak održavanja je najčešće 0€ (besplatni paketi) ili oko 10€ godišnje za vaš domen. Pena Tools vam nikada neće poslati mesečni račun za licencu.',
      includedItems: [
        'Kompletna aplikacija napravljena tačno po vašem poslu',
        'Savršeno radi na mobilnom, tabletu i računaru',
        'Uvodni razgovor od 30 min i isporuka za 1 dan',
        'Kratak 3-minutni video za vas i vaše zaposlene',
        '14 dana besplatnih sitnih dorada i prilagođavanja',
        'Preuzimanje svih vaših podataka u Eksel kad god poželite',
      ],
      noHiddenCosts: [
        'Nema plaćanja po broju radnika',
        'Nema mesečne softverske pretplate',
        'Nema blokiranja aplikacije',
        'Nema skrivenih troškova instalacije',
      ],
      cta: 'Porazgovarajte o vašoj aplikaciji',
    },
    faq: {
      eyebrow: 'Česta pitanja',
      title: 'Otvoreni odgovori na uobičajena pitanja',
      subtitle:
        'Iskreni detalji kako biste tačno znali šta dobijate pre nego što se uopšte čujemo.',
      items: [
        {
          question: 'Kako je moguće napraviti aplikaciju za samo jedan dan?',
          answer:
            'Zato što ne pravimo prekomplikovane programe sa stotinu funkcija koje nikada nećete otvoriti. Pravimo precizan, čist alat fokusiran samo na vašu dnevnu rutinu. Kako ne radim kroz birokratiju velikih agencija, fokusiran rad od jednog dana je sasvim dovoljan za stabilan i brz program.',
        },
        {
          question: 'Šta ako mi kasnije zatrebaju izmene ili nove funkcije?',
          answer:
            'Svaki projekat uključuje 14 dana besplatnih sitnih podešavanja (dodavanje novog radnika, promena naziva usluge, prilagođavanje teksta). Ako za par meseci poželite novu veliku funkciju, dogovaramo skroman fiksni iznos — bez skrivenih troškova.',
        },
        {
          question: 'Da li ja ili moji radnici moramo da znamo rad na računaru?',
          answer:
            'Apsolutno ne. Suština Pena Tools-a je da aplikacija bude jednostavna kao slanje poruke. Ako vi i vaši radnici znate da koristite Viber ili WhatsApp, znaćete da koristite i ovu aplikaciju za manje od dva minuta.',
        },
        {
          question: 'Šta se dešava nakon isporuke? Gde aplikacija stoji?',
          answer:
            'Aplikaciju postavljam na vrhunsku bezbednu cloud platformu (Cloudflare ili Vercel). Za 95% malih biznisa to je potpuno besplatno u okviru standardnih paketa. Ako želite svoj domen (npr. salon.rs), registracija domena je oko 10-15€ godišnje kod zvaničnog registra.',
        },
        {
          question: 'Gde se čuvaju podaci o mojim klijentima i pazaru?',
          answer:
            'Podaci su isključivo vaši i privatni. Nalaze se u bezbednoj bazi kojoj pristupate samo vi i zaposleni kojima date pristup. U svakom trenutku možete jednim klikom preuzeti celu bazu u Eksel ili CSV formatu.',
        },
      ],
    },
    contact: {
      eyebrow: 'Direktan kontakt',
      title: 'Kažite mi šta želite da pratite',
      subtitle:
        'Bez prodajnih agenata i čekanja. Pričate direktno sa osobom koja će zaista napraviti vašu aplikaciju.',
      whatsappBtn: 'Pišite mi na WhatsApp',
      whatsappSub: 'Odgovor obično u roku od 1 sata tokom radnog vremena',
      formTitle: 'Ili pošaljite poruku ovde',
      formSubtitle: 'Popunite ako više volite odgovor na mejl ili poziv.',
      fields: {
        name: 'Vaše ime',
        namePlaceholder: 'npr. Jelena Marković',
        businessType: 'Delatnost',
        businessTypePlaceholder: 'npr. Frizerski salon, Teretana, Auto-servis...',
        trackingNow: 'Šta trenutno koristite za evidenciju?',
        trackingNowPlaceholder: 'npr. Papirna sveska, poruke na telefonu, Eksel...',
        contactMethod: 'Telefon / WhatsApp ili E-mail',
        contactMethodPlaceholder: '+381 64 ... ili ime@domen.rs',
        notes: 'Šta vas trenutno najviše usporava? (Opciono)',
        notesPlaceholder: 'Napišite ukratko šta vam zadaje najviše glavobolje.',
        submitBtn: 'Pošaljite upit',
      },
      successMessage:
        'Hvala na poruci! Primio sam vaš upit i javiću vam se uskoro (najčešće u roku od 2-3 sata).',    },
    footer: {
      tagline:
        'Pena Tools — jednostavan i pošten softver za lokalne preduzetnike, gotov za 1 dan.',
      rights: 'Sva prava zadržana.',
      locationNote: 'Napravljeno u Beogradu za lokalne biznise širom sveta.',
    },
  },

  tr: {
    nav: {
      problem: 'Sorun',
      howItWorks: 'Nasıl Çalışır',
      demos: 'Canlı Demolar',
      pricing: 'Fiyatlandırma',
      faq: 'SSS',
      contact: 'İletişim',
      whatsappQuick: 'WhatsApp',
    },
    hero: {
      badge: 'Yerel ve bağımsız işletmeler için özel geliştirildi',
      headline: 'İşletmeniz için sade tek bir uygulama, 1 günde hazır.',
      subheadline:
        'Gereksiz aylık abonelikler yok. Hiç dokunmadığınız 50 butonlu karmaşık yazılımlar yok. Kuaförünüz, spor salonunuz veya atölyeniz için tam ihtiyacınıza göre yazılmış pratik bir araç — sabit tek fiyatla yarın teslim.',
      ctaPrimary: 'Ücretsiz demo isteyin',
      ctaSecondary: 'Canlı demoları deneyin',
      trustPoints: [
        '24 saatte teslim',
        'Sabit fiyat: €250 – €750',
        'Yazılım tamamen sizin — aylık aidat yok',
      ],
      appMockup: {
        businessName: 'Studio Milena — Kuaför & Tırnak',
        tagline: 'Personel Takvimi ve Günlük Randevular',
        todaySummary: 'Çarşamba Programı',
        confirmedBookings: '12 randevudan 11’i dolu',
        revenueToday: '€340 beklenen ciro',
        nextAppointment: 'Sıradaki: 20 dk sonra',
        statusConfirmed: 'Onaylandı',
        statusInProgress: 'Koltukta',
        newBookingBtn: '+ Randevu Ekle',
        clientName1: 'Elif Yılmaz',
        service1: 'Balyaj & Fön • Koltuk 1 (Ayşe)',
        clientName2: 'Murat Kaya',
        service2: 'Saç & Sakal Tıraşı • Koltuk 2 (Can)',
        clientName3: 'Zeynep Demir',
        service3: 'Kalıcı Oje & Manikür • Masa 3 (Derya)',
      },
    },
    problems: {
      eyebrow: 'Günlük Sıkıntılar',
      title: 'Zaman kazandırmak yerine zaman çalan yöntemler',
      subtitle:
        'Küçük işletmelerin karmaşık kurumsal yazılımlara ihtiyacı yoktur. Sadece randevuları kaçırmayan ve personelin kafasını karıştırmayan sade bir araca ihtiyaçları vardır.',
      cards: [
        {
          title: 'Kağıt randevu defterleri',
          description:
            'Karalanmış sayfalar, silinen saatler ve iki çalışan aynı anda telefonda randevu aldığında çakışan müşteriler.',
          realQuote: '“Saat 4’teki randevuyu kim sildi?”',
          iconType: 'paper',
        },
        {
          title: 'WhatsApp sipariş karmaşası',
          description:
            'Kişisel mesajların arasında kaybolan müşteri talepleri, unutulan randevular ve üç kez dinlemek zorunda kaldığınız ses kayıtları.',
          realQuote: '“Cuma mı demiştin cumartesi mi?”',
          iconType: 'whatsapp',
        },
        {
          title: 'Kimsenin güncellemediği Excel tabloları',
          description:
            'İyi niyetle başlanmış, mobilde açılmayan, formülleri yanlışlıkla silinmiş ve 6 hafta önce terk edilmiş tablolar.',
          realQuote: '“Tablo yine telefonda dondu.”',
          iconType: 'spreadsheet',
        },
      ],
    },
    howItWorks: {
      eyebrow: '3 Adımlı Net Süreç',
      title: 'Nasıl çalışır: Fikirden çalışan uygulamaya 24 saat',
      subtitle:
        'Uzayıp giden toplantılar yok. Teknik jargona boğulmak yok. Neyin takibini yaptığınızı gösterirsiniz, ben de kodlarım.',
      steps: [
        {
          stepNumber: '01',
          title: 'Konuşuruz (30 dk)',
          timeframe: 'Sabah veya öğleden sonra görüşmesi',
          description:
            '30 dakikalık telefon veya WhatsApp görüşmesi. Defterinizi, mesajlarınızı veya tablonuzu gösterirsiniz; sizi en çok neyin yorduğunu anlatırsınız.',
          details: [
            'Hiçbir teknik hazırlık yapmanıza gerek yok',
            'Günlük iş akışınızı sade bir dille konuşuruz',
            'Ekranda sadece gerçekten gerekenleri belirleriz',
          ],
        },
        {
          stepNumber: '02',
          title: 'O gece kodlarım',
          timeframe: 'Gece boyu geliştirme',
          description:
            'Tam olarak sizin iş yapış biçiminize göre optimize edilmiş, hızlı ve temiz bir web uygulaması yazarım. Sadece kullandığınız butonlar yer alır.',
          details: [
            'Telefon, tablet ve kasa bilgisayarına tam uyumlu',
            'Hızlı açılır, hantal menüler içermez',
            'Otomatik veri güvenliği ve basit raporlama',
          ],
        },
        {
          stepNumber: '03',
          title: 'Yarın kullanmaya başlarsınız',
          timeframe: 'Ertesi sabah',
          description:
            'Size özel linkinizi alırsınız. Telefonunuza veya tabletinize "Ana Ekrana Ekle" diyerek personelinizle hemen kullanmaya başlarsınız.',
          details: [
            'Nasıl çalıştığını gösteren 3 dakikalık video rehber',
            '14 gün boyunca ücretsiz ufak düzenleme hakkı',
            'Tüm verileriniz tamamen size aittir',
          ],
        },
      ],
    },
    demos: {
      eyebrow: 'Gerçek Çalışan Örnekler',
      title: 'Tıklanabilir canlı demolar',
      subtitle:
        'Bu yöntemle hazırlanmış gerçek uygulamaları deneyin. Hızlı, sade ve herkesin ilk seferde anlayabileceği kadar net.',
      tryLiveBtn: 'Canlı dene',
      closeDemo: 'Demoyu kapat',
      items: [
        {
          id: 'salon',
          title: 'Kuaför & Salon Randevu Takibi',
          category: 'Kuaför, Güzellik Merkezi ve Berberler',
          description:
            'Koltuk bazlı günlük zaman çizelgesi, tek dokunuşla randevu kaydı, SMS hatırlatma butonu ve günlük ciro özeti.',
          keyFeatures: [
            '15 saniyede randevu kaydetme',
            'Koltuklara göre görünüm (çakışma sıfır)',
            'Müşteri notları ve geçmiş işlemler listesi',
            'Kasadaki tablette veya cep telefonunda anında çalışır',
          ],
          previewStats: [
            { label: 'Kayıt süresi', value: '15 saniye' },
            { label: 'Gereken eğitim', value: '0 dakika' },
          ],
        },
        {
          id: 'gym',
          title: 'Spor Salonu & Kulüp Üyelik Takibi',
          category: 'Fitness, Dövüş Kulübü, Pilates ve Yoga',
          description:
            'Hızlı üye giriş ekranı, seans sayaçlı paketler, süresi dolan üyelik uyarıları ve günlük yoklama listesi.',
          keyFeatures: [
            'İsim veya telefonla 2 harfte anında üye bulma',
            'Tek dokunuşla giriş ve seans düşümü',
            'Süresi dolmuş üyeliklerde net kırmızı uyarı',
            'Nakit ve kart tahsilat kaydı',
          ],
          previewStats: [
            { label: 'Giriş onay hızı', value: '2 dokunuş' },
            { label: 'Kayıp seans tartışması', value: 'Sıfırlandı' },
          ],
        },
      ],
    },
    pricing: {
      eyebrow: 'Şeffaf Fiyatlandırma',
      title: 'Tek sabit fiyat. Abonelik yok. Sürpriz yok.',
      subtitle:
        'Çoğu yazılım firması sizden her ay düzenli olarak €40–€120 talep eder. Pena Tools ile tek seferlik ödersiniz ve uygulama sizin olur.',
      feeRange: '€250 – €750',
      feeLabel: 'Tek seferlik sabit yatırım (uygulamanın kapsamına göre)',
      reassuranceTitle: 'Yazılım tamamen size aittir, kilitlenme yok.',
      reassuranceText:
        'Uygulamanız standart ve güvenilir bulut altyapısında barınır. Barındırma maliyeti genelde 0€ (ücretsiz paketler) veya kendi özel alan adınız için yılda yaklaşık €10 civarıdır. Pena Tools’tan asla aylık fatura almazsınız.',
      includedItems: [
        'İşinize özel kodlanmış eksiksiz web uygulaması',
        'iPhone, Android, iPad ve bilgisayarda kusursuz çalışma',
        '30 dakikalık başlangıç görüşmesi ve 24 saatte teslim',
        'Ekibiniz için 3 dakikalık özel video anlatım',
        '14 gün boyunca ücretsiz ufak düzenleme desteği',
        'İstediğiniz an tüm verilerinizi Excel olarak dışa aktarma',
      ],
      noHiddenCosts: [
        'Kullanıcı/personel başına ek ücret yok',
        'Aylık yazılım aidatı yok',
        'Zorunlu güncelleme kilidi yok',
        'Gizli kurulum veya aktivasyon masrafı yok',
      ],
      cta: 'Uygulamanızı konuşalım',
    },
    faq: {
      eyebrow: 'Sık Sorulan Sorular',
      title: 'Merak edilenlere açık ve dürüst yanıtlar',
      subtitle:
        'Görüşmemizden önce tam olarak neyle karşılaşacağınızı bilmeniz için açık detaylar.',
      items: [
        {
          question: 'Gerçekten 1 günde bir uygulama nasıl yapılabiliyor?',
          answer:
            'Çünkü asla kullanmayacağınız yüzlerce gereksiz özellikle dolu devasa yazılımlar yapmıyoruz. Sadece günlük rutininize odaklanmış, net ve hızlı araçlar üretiyoruz. Büyük ajans hantallığı ve toplantı trafiği olmadığı için, odaklanmış bir günlük çalışma kaliteli bir araç için fazlasıyla yeterlidir.',
        },
        {
          question: 'Daha sonra değişiklik veya yeni özellik istersem ne olur?',
          answer:
            'Her proje teslimden sonra 14 günlük ücretsiz ufak düzenleme süresi içerir (yeni personel ekleme, hizmet süresi değiştirme, metin düzeltme vb.). Aylar sonra büyük yeni bir modül isterseniz, sürpriz faturalar olmadan önceden anlaştığımız makul bir sabit ücretle yaparız.',
        },
        {
          question: 'Benim veya çalışanlarımın teknik bilgisi olması gerekir mi?',
          answer:
            'Kesinlikle hayır. Pena Tools’un felsefesi, uygulamayı mesaj göndermek kadar kolay yapmaktır. Ekibiniz WhatsApp kullanabiliyorsa, bu uygulamayı kılavuz okumadan 2 dakika içinde rahatça kullanacaktır.',
        },
        {
          question: 'Teslimden sonra ne oluyor? Uygulama nerede barınıyor?',
          answer:
            'Uygulamanızı dünyanın en güvenilir bulut platformlarına (Cloudflare / Vercel) kuruyorum. Küçük işletmelerin %95’i için bu servisler standart kullanımda tamamen ücretsizdir. Kendi alan adınızı (örn. salonunuz.com) bağlamak isterseniz yıllık tescil ücreti sadece 10-15€ civarındadır.',
        },
        {
          question: 'Müşteri ve ciro verilerim nerede saklanıyor?',
          answer:
            'Verileriniz sadece size aittir. Yalnızca sizin ve yetki verdiğiniz çalışanlarınızın erişebileceği şifreli bir veritabanında saklanır. İstediğiniz an tek tıkla tüm listenizi Excel veya CSV olarak bilgisayarınıza indirebilirsiniz.',
        },
      ],
    },
    contact: {
      eyebrow: 'Doğrudan İletişim',
      title: 'Neyi takip etmek istediğinizi anlatın',
      subtitle:
        'Satış temsilcileri yok, otomatik sekreterler yok. Doğrudan uygulamanızı kodlayacak kişiyle konuşursunuz.',
      whatsappBtn: "WhatsApp'tan yazın",
      whatsappSub: 'Çalışma saatlerinde ortalama yanıt süresi: 1 saatten az',
      formTitle: 'Veya buradan hızlı bir not bırakın',
      formSubtitle: 'E-posta veya telefonla aranmayı tercih ediyorsanız doldurun.',
      fields: {
        name: 'Adınız Soyadınız',
        namePlaceholder: 'örn. Ayşe Yılmaz',
        businessType: 'İşletme Türü',
        businessTypePlaceholder: 'örn. Kuaför, Spor Salonu, Oto Servis...',
        trackingNow: 'Şu an ne ile takip yapıyorsunuz?',
        trackingNowPlaceholder: 'örn. Ajanda defteri, telefon mesajları, Excel...',
        contactMethod: 'Telefon / WhatsApp veya E-posta',
        contactMethodPlaceholder: '+90 532 ... veya adiniz@eposta.com',
        notes: 'Sizi en çok ne yoruyor? (İsteğe bağlı)',
        notesPlaceholder: 'Mevcut düzeninizde canınızı en çok sıkan şeyi 1-2 cümleyle yazın.',
        submitBtn: 'Talebi gönder',
      },
      successMessage:
        'Teşekkürler! Mesajınızı aldım, en kısa sürede (genellikle 2-3 saat içinde) size dönüş yapacağım.',    },
    footer: {
      tagline:
        'Pena Tools — yerel işletmeler için dürüst, sade ve 1 günde teslim edilen özel iş yazılımları.',
      rights: 'Tüm hakları saklıdır.',
      locationNote: 'Belgrad’dan tüm dünyadaki bağımsız işletmeler için özenle üretildi.',
    },
  },
};
