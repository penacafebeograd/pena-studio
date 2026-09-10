import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const sr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Istorijska šetnja Starim gradom",
  tagline: "Od bedema do boemskih stolova.",
  note: "Šest mesta. Jedna šetnja. Dovoljno prostora za kafu, skretanje ili odličan pogled.",
  stops: {
    kalemegdan: {
      title: "Kalemegdan i Beogradska tvrđava",
      kicker: "Počni ovde",
      landmark: "Ulaz u park na vrhu Knez Mihailove",
      direction:
        "Uđi u park i drži bedeme sa leve strane. Prati široku stazu ka otvorenom pogledu na reke.",
      script:
        "Dobro došao na Kalemegdan, uzvišenje sa kojeg Beograd stražari više od dve hiljade godina. Ispod tebe Sava se uliva u Dunav; iza tebe stari grad se penje uz greben. Zato je svima trebalo ovo brdo. Rimljani su ovde podigli vojni logor, srednjovekovni srpski vladari su ga ojačali, a osmanske i habzburške vojske su se oko njega borile iznova i iznova. Ime Kalemegdan dolazi od turskih reči za tvrđavu i bojno polje — podsetnik da je ovaj mirni park nekada bio ivica carstva. Ne traži jedan savršen zamak, nego slojeve u kamenu: kapije, bedemi i sačuvani zidovi pripadaju različitim vekovima i različitim vladarima. Početkom petnaestog veka despot Stefan Lazarević obnovio je Beograd i učinio ga srpskom prestonicom. Tvrđava je kasnije preoblikovana za artiljeriju, a onda se polako iz vojne zone pretvorila u omiljeni gradski park. Danas je to istorija Beograda sa stranicama ostavljenim napolju. Zastani na trenutak i pogledaj reke pre nego što kreneš dalje: one su razlog zašto ovo mesto uopšte postoji.",
    },
    victor: {
      title: "Spomenik Pobedniku",
      kicker: "Vidikovac",
      landmark: "Terasa kod Pobednika",
      direction:
        "Okreni se ka Pobedniku, pa kreni stazom nazad ka gradu. Izađi sa Kalemegdana na glavnoj kapiji i nastavi pravo Knez Mihailovom.",
      script:
        "Ova bronzana figura je Pobednik, jedan od nepogrešivih simbola Beograda. Vajar Ivan Meštrović napravio je kip da obeleži srpske pobede u balkanskim ratovima i Prvom svetskom ratu. Otkriven je ovde 1928. godine, okrenut ka ušću, sa mačem u jednoj i golubom u drugoj ruci. Sa ove terase gest deluje gotovo pozorišno: grad gleda ka rekama, ravnici iza njih i putevima kojima su nekada stizale vojske i trgovci. Položaj spomenika je važan koliko i sama skulptura. Umesto da stoji na trgu, on se uzdiže sa bedema i pretvara vojnu osmatračnicu u građansku. Beograđani se skoro vek oko ove figure svađaju, šale i fotografišu, ali pogled drži značenje na zemlji. Sava sa tvoje leve strane i Dunav ispred učinili su Beograd i sastajalištem i metom. Pre nego što kreneš, polako se okreni ka centru grada. Živa pešačka ulica ispred tebe nekada je spajala ovaj utvrđeni kraj varoši sa trgovačkim srcem modernog Beograda.",
    },
    knez: {
      title: "Knez Mihailova ulica",
      kicker: "Beogradski korzo",
      landmark: "Pešačka zona Knez Mihailove",
      direction:
        "Idi nizbrdo Knez Mihailovom. Na kraju pešačke zone stižeš do konjaničkog spomenika na Trgu republike.",
      script:
        "Knez Mihailova je beogradska dnevna soba: pešačka ulica u kojoj se ljudi sreću, muzičari se postavljaju i čini se da svaki tempo grada prođe pored tebe. Prati stariju rimsku uličnu liniju, ali lepe zgrade koje vidiš uglavnom su s kraja devetnaestog veka, kada je Beograd postajao moderna evropska prestonica. Ulica nosi ime kneza Mihaila Obrenovića III, vladara upamćenog po tome što je izdejstvovao povlačenje osmanskih posada iz srpskih gradova. Podigni pogled dok hodaš. Mnoge fasade građene su za trgovce, banke i imućne porodice koje su želele da pokažu da Beograd pripada novom veku. Ovo nije muzejski hodnik; i dalje je mesto za obaveze, kafu, sastanke i duge šetnje. Upravo je ta mešavina poenta. Tvrđava ti govori ko se borio za grad, a Knez Mihailova pokazuje šta je grad želeo da postane: samouveren, društven i povezan sa svetom. Nastavi nizbrdo i pusti da te ulica isporuči na trg koji je postao omiljeno beogradsko sastajalište.",
    },
    republic: {
      title: "Trg republike",
      kicker: "Nađemo se kod konja",
      landmark: "Spomenik knezu Mihailu",
      direction:
        "Sa konjem iza sebe, kreni ulicom levo, Francuskom. Skreni desno u Skadarsku i prati kaldrmu uzbrdo.",
      script:
        "Stojiš na Trgu republike, raskrsnici starog i modernog Beograda. Konjanički spomenik u sredini odaje počast knezu Mihailu Obrenoviću III, a njegova podignuta ruka pokazuje ka gradovima koji su još bili pod osmanskom vlašću kada je spomenik zamišljen. Generacijama se ljudi ovde dogovaraju za sastanak jednostavnom rečenicom: nađemo se kod konja. Trg uokviruju dva kulturna teškaša. Narodni muzej čuva umetnost i arheologiju iz Srbije i mnogo šire, dok je Narodno pozorište od devetnaestog veka centralna scena za dramu, operu i balet. Ovaj deo grada se brzo menjao posle osmanskog perioda, kada su zidine i kapije ustupile mesto bulevarima, institucijama i javnim trgovima. Zato Trg republike deluje svečano, ali nikada prazno: napravljen je za okupljanje. Zastani za fotografiju ako želiš, pa kreni ka sasvim drugačijoj vrsti beogradskog obeležja. Skadarlija je samo nekoliko ulica dalje — tamo su gradski pisci, glumci i noćni sagovornici stvorili sopstvenu tradiciju.",
    },
    skadarlija: {
      title: "Skadarlija",
      kicker: "Boemska ulica",
      landmark: "Kaldrma Skadarske ulice",
      direction:
        "Nastavi uzbrdo Skadarskom, pa kreni na zapad kroz Dorćol dok ne stigneš do dvorišta i minareta Bajrakli džamije.",
      script:
        "Kaldrma pod tvojim nogama obeležava Skadarliju, najpoznatiji beogradski boemski kraj. Krajem devetnaestog i početkom dvadesetog veka ova ulica privlačila je pisce, slikare, novinare, glumce i muzičare koji su više voleli dugu noć razgovora nego uredan odlazak na spavanje. Rasla je uz staru pivarsku četvrt, a njene kafane postale su neformalni produžetak obližnjih pozorišta i novinskih redakcija. Danas restorani i živa muzika čine Skadarliju jednom od najposećenijih ulica u gradu, ali njena atmosfera dolazi iz stvarne tradicije umetničkog života, a ne iz izmišljenog tematskog parka. Zamisli dim, poeziju, svađe o politici i pevača koji ide od stola do stola sa tamburicom. Beograd je oduvek imao formalne prostore za kulturu, poput pozorišta pored kojeg si upravo prošao; Skadarlija predstavlja onu neformalnu verziju, gde se kultura dešava uz večeru i neslaganje. Hodaj polako po neravnom kamenu i pazi gde staješ. Kada budeš spreman, prati rutu nazad ka Dorćolu, jednom od najstarijih gradskih kvartova, zbog tišeg ali jednako važnog dela beogradske slojevite priče.",
    },
    dorcol: {
      title: "Bajrakli džamija i Dorćol",
      kicker: "Kraj u slojevima",
      landmark: "Bajrakli džamija, Gospodar Jevremova",
      direction:
        "Stigao si do poslednje stanice. Odavde je lakih deset minuta hoda nazad do Knez Mihailove, ili opuštena šetnja kroz dorćolske kafiće.",
      script:
        "Bajrakli džamija je mali ali snažan podsetnik da Beograd nikada nije pripadao samo jednom poglavlju istorije. Podignuta u osmanskom periodu, to je jedina sačuvana džamija iz vremena kada je Beograd bio važna osmanska pogranična varoš. Ime dolazi od bajraka koji se ovde nekada podizao da drugim džamijama označi vreme molitve. Zgrada je preživela sukobe, promene i duge periode kada je grad oko nje izgledao sasvim drugačije. Oko tebe je Dorćol, kraj čije ime dolazi od turskog izraza za raskrsnicu. To i odgovara. Vekovima je ovaj deo grada spajao trgovce, zanatlije, verske zajednice i putnike koji su se kretali između Dunava, tvrđave i varoši. Tvoja šetnja išla je od zidina i spomenika do korzoa, pozorišta, kafana i živog bogomoljišta. To je i koristan način da se Beograd zapamti: ne kao grad zamrznut u jednoj velikoj prošlosti, nego kao slojevi ljudi koji prave mesta za sledeći sloj. Pilot tura se ovde završava. Ne žuri i nastavi da slušaš grad.",
    },
  },
  paths: {
    "kalemegdan>victor": {
      main: {
        label: "Pravo glavnom stazom",
        blurb: "Direktan put glavnom alejom do terase.",
      },
      ruzica: {
        label: "Niz Ružicu",
        blurb:
          "Krug kroz Zindan kapiju do crkvice ugrađene u bedem, pa nazad gore.",
      },
    },
    "victor>knez": {
      main: {
        label: "Kroz glavnu kapiju",
        blurb: "Nazad preko parka i pravo u pešačku zonu.",
      },
      riverside: {
        label: "Uz reku i Sabornu crkvu",
        blurb: "Niz zapadne bedeme ka Savi, pa u varoš pored Saborne crkve.",
      },
    },
    "knez>republic": {
      main: {
        label: "Celom Knez Mihailovom",
        blurb: "Cela dužina korzoa, tačno kako naracija opisuje.",
      },
      obilicev: {
        label: "Preko Obilićevog venca",
        blurb: "Blok dalje: kafanske terase umesto izloga.",
      },
    },
    "republic>skadarlija": {
      main: {
        label: "Uz Francusku",
        blurb: "Kratak put, tačno kako naracija opisuje.",
      },
      cetinjska: {
        label: "Kroz dvorište Cetinjske",
        blurb: "Pored Bajlonijeve pijace u staro pivarsko dvorište.",
      },
    },
    "skadarlija>dorcol": {
      main: {
        label: "Tihe sporedne ulice",
        blurb: "Mirniji put kroz stambeni Dorćol.",
      },
      strahinja: {
        label: "Preko Strahinjića Bana",
        blurb: "Beogradski kafanski red — življe i malo duže.",
      },
    },
  },
  detours: {
    ruzica: {
      name: "Crkva Ružica i Sveta Petka",
      blurb: "Crkva ugrađena u bedem, sa lusterima napravljenim od oružja.",
    },
    terrace: {
      name: "Velika terasa",
      blurb: "Najbolji pogled na ušće Save i Dunava, minut od Pobednika.",
    },
    cathedral: {
      name: "Saborna crkva i kafana ?",
      blurb: "Najstarija beogradska kafana, i dalje preko puta crkve.",
    },
    ethnographic: {
      name: "Etnografski muzej",
      blurb: "Seoski život, nošnja i zanat, na Studentskom trgu.",
    },
    nationalmuseum: {
      name: "Narodni muzej",
      blurb: "Odmah na trgu: arheologija dole, slikarstvo gore.",
    },
    bajloni: {
      name: "Bajlonijeva pijaca i Cetinjska",
      blurb: "Jutarnja pijaca pored dvorišta koje uveče postaje noćni život.",
    },
    turbe: {
      name: "Šejh-Mustafino turbe",
      blurb: "Malo osmansko turbe u tihoj dorćolskoj sporednoj ulici.",
    },
  },
  variants: {
    full: { label: "Cela šetnja", blurb: "Šest stanica, od tvrđave do Dorćola." },
    short: { label: "Kratka šetnja", blurb: "Četiri stanice, od tvrđave do Trga republike." },
  },
  directions: {
    forward: { label: "Prvo tvrđava", blurb: "Kreni s Kalemegdana, završi na Dorćolu." },
    reverse: { label: "Prvo Dorćol", blurb: "Idi obrnuto i završi na tvrđavi." },
  },
};
