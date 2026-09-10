import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const sr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Dorćol, šetnja za jelo",
  tagline: "Pijaca, pivarsko dvorište, reka i najstarija kafana u Beogradu.",
  note: "Pet stanica i mnogo jela. Kreni gladan, i pre podneva ako želiš pijacu.",
  stops: {
    bajloni: {
      title: "Bajlonijeva pijaca",
      kicker: "Kreni gladan",
      landmark: "Skadarlijska pijaca, uz Cetinjsku",
      direction:
        "Napusti pijacu ka severozapadu, uzbrdo kroz dorćolsku mrežu ulica, dok ne stigneš do široke ulice starih izloga.",
      script:
        "Počni ovde, i počni rano. Ovo je Bajlonijeva pijaca, nazvana po familiji Bajloni, češkim pivarima koji su se u devetnaestom veku nastanili u Beogradu i čija je pivara stajala tačno uz ove tezge. Pijacu treba videti prvu jer objašnjava sve što ćeš kasnije jesti. Traži ajvar u tegli — namaz od pečene paprike, koji se u jesen pravi u ogromnim količinama i za koji će ti svako reći da je samo njegov recept ispravan. Traži kajmak, mlečnu mast negde između skorupa i mladog sira, koji ide na hleb, na meso s ražnja i na sve ostalo u dohvatu ruke. Biće sira iz kofa sa salamurom, meda koji prodaje sam pčelar, i u sezoni malina zbog kojih uvezene izgledaju kao šala. Ništa ovde nije naštimovano za fotografiju. Kupi nešto malo i pojedi stojeći, što je i pravilan način. Zatim kreni na severozapad, jer ulica u koju ideš je mesto gde beogradski trgovci prodaju hranu i sve ostalo već dva veka.",
    },
    dusanova: {
      title: "Cara Dušana",
      kicker: "Trgovačka ulica",
      landmark: "Stari izlozi gornjeg Dorćola",
      direction:
        "Kreni ka severoistoku i nizbrdo ka Dunavu. Ulice se završavaju na širokom keju uz vodu.",
      script:
        "Cara Dušana je jedna od najstarijih beogradskih ulica koje i danas rade, i tako izgleda: uski izlozi, ručno ispisane firme, alat, koža, galanterija i začini. Ime Dorćol dolazi od turskog izraza za raskrsnicu, i to je ovaj kraj i bio — sefardske jevrejske, grčke, cincarske, jermenske i srpske trgovačke familije živele su jedne preko drugih i trgovale svim što je Dunav doneo uz vodu. Zbog te mešavine beogradska hrana i jeste takva kakva je. Meso sa žara dolazi iz jedne tradicije, testo iz druge, ritual kafe iz treće, a rasprave o tome šta je autentično iz svih odjednom. Zaviri u prodavnicu začina ako je otvorena: paprika u tri jačine, suve paprike na kanapu, vegeta, lovor u kesi. Ovo je i teritorija bureka. Burek je ovde uvijena kora sa sirom ili mesom, jede se ujutru sa jogurtom, i nije užina — to je ozbiljan doručak posle kojeg razgovor prestaje. Zatim se spusti do reke.",
    },
    dunavskikej: {
      title: "Dunavski kej",
      kicker: "Reka",
      landmark: "Dorćolska dunavska obala",
      direction:
        "Vrati se u dubinu, ka jugozapadu, u sam Dorćol, i traži ulicu sa kafanskim terasama sa obe strane.",
      script:
        "Dunav na Dorćolu je radna reka sa letnjom navikom. Zimi je ovaj kej prazan, siv i ogroman. Leti se puni baštama, zvučnicima, ljudima koji skaču u vodu sa betona i mirisom ribe sa žara. To je druga polovina beogradskog jela: ne kafana sa stolnjakom, nego plastična stolica kraj vode, pivo i tanjir sitne pržene ribe. Ako na tabli vidiš reč riblja, to je riba. Ako vidiš smuđ, to je rečni smuđ i to je onaj dobri. Odnos Beograda sa svoje dve reke uvek je bio čudan — veći deo istorije voda je bila odbrambena linija i granica, pa je grad okrenuo leđa i jednoj i drugoj i gradio se uz greben. Tek u poslednjih nekoliko decenija je nekome palo na pamet da je obala mesto na kojem se sedi. Ti si na novijoj, ležernijoj strani te istorije. Zatim se vrati u dubinu, jer sledeća ulica je ona u kojoj grad pije kafu.",
    },
    strahinja: {
      title: "Strahinjića Bana",
      kicker: "Kafanski red",
      landmark: "Dorćolska ulica terasa",
      direction:
        "Nastavi ka jugozapadu, nizbrdo, dok ne stigneš do jedne od najstarijih ulica u gradu i kafane sa znakom pitanja za ime.",
      script:
        "Ranih dvehiljaditih Beograd je ovu ulicu prozvao Silicijumska dolina, i to nije imalo nikakve veze sa tehnologijom. Bila je to šala o publici, i zalepila se dovoljno jako da je ljudi i danas koriste, blago se izvinjavajući. Ono što je tu zaista jeste najgušći niz kafanskih terasa u Beogradu: nekoliko blokova u kojima je cela poenta sedeti spolja dva sata uz jednu kafu i gledati ko prolazi. To zaslužuje objašnjenje, jer je ovo lokalni obed koji ćeš najverovatnije pogrešno odraditi. Kafa ovde nije transakcija. Ako naručiš domaću kafu, dobićeš nefiltriranu kafu u maloj šoljici sa talogom na dnu i čašom vode, a očekivanje je da ostaneš. Niko ti neće doneti račun dok ne pitaš, a pitati prerano je blago nepristojno. Sedi. Naruči jednu stvar. Ne gledaj u telefon dvadeset minuta. To je deo kulture jela koji nema sastojke. Zatim nastavi nizbrdo, jer se poslednja stanica sa crkvom spori od 1823.",
    },
    kraljapetra: {
      title: "Kralja Petra i kafana ?",
      kicker: "Poslednja stanica",
      landmark: "Preko puta Saborne crkve",
      direction:
        "Stigao si do poslednje stanice. Knez Mihailova i tvrđava su na pet minuta, a sedenje si zaslužio.",
      script:
        "Kafana preko puta Saborne crkve ima znak pitanja za firmu, a razlog je spor star dve stotine godina. Otvorena je dvadesetih godina devetnaestog veka i jedno vreme radila pod imenom koje se pozivalo na crkvu preko puta. Crkva se pobunila da ugostiteljski objekat koristi njeno ime. Dok je rasprava trajala, gazda je na fasadu privremeno nacrtao znak pitanja. Privremeno je pobedilo, i od tada je to \"?\" — najstarija sačuvana kafana u Beogradu, niskih plafona, drvena i još u pogonu. Ovo je kafana, a kafana nije restoran. To je prostorija u kojoj se očekuje da ostaneš satima: meso sa žara, pasulj, kupus, rakija u malim čašicama, i u nekom trenutku, ako noć ide kako treba, muzika. Naruči pljeskavicu ako želiš onu slavnu stvar, ili prebranac ako želiš da razumeš šta su ljudi zaista jeli. U svakom slučaju, sedi. Tvoja šetnja se završava za stolom, što je za šetnju kroz Dorćol jedino iskreno mesto za kraj.",
    },
  },
  paths: {
    "bajloni>dusanova": {
      main: { label: "Uzbrdo kroz mrežu", blurb: "Direktan uspon na severozapad kroz Dorćol." },
      dobracina: {
        label: "Preko Dobračine",
        blurb: "Jednu ulicu dalje, tiše i stambeno, pored starih dvorišta.",
      },
    },
    "dusanova>dunavskikej": {
      main: { label: "Do Dunava", blurb: "Pravo nizbrdo do keja. Šest minuta." },
    },
    "dunavskikej>strahinja": {
      main: { label: "Nazad u Dorćol", blurb: "Direktan put od vode u dubinu." },
      jevremova: {
        label: "Preko Gospodar Jevremove",
        blurb: "Kroz antikvarnice i starudije — sporije, i vredi ako je bilo šta otvoreno.",
      },
    },
    "strahinja>kraljapetra": {
      main: { label: "Pravo nizbrdo", blurb: "Kratak put do ćoška kod Saborne crkve." },
      dositejeva: {
        label: "Preko Dositejeve",
        blurb: "Stari kaldrmisani blok: pekare, par malih kuhinja, manje saobraćaja.",
      },
    },
  },
  detours: {
    cetinjska: {
      name: "Dvorište u Cetinjskoj",
      blurb:
        "Staro dvorište Bajlonijeve pivare, danas desetak barova u nekadašnjim proizvodnim halama. Mrtvo do mraka, pa najživlje dvorište u gradu.",
    },
    jevremova: {
      name: "Antikvarnice u Gospodar Jevremovoj",
      blurb:
        "Kratak niz starudija i antikvarnica. Nema šta da se jede, ima sve da se gleda, i dobro je mesto da kupiš staru čašicu za rakiju.",
    },
  },
  variants: {
    full: { label: "Cela šetnja", blurb: "Pet stanica, od pijace do kafane." },
    short: { label: "Kratka šetnja", blurb: "Tri stanice, od reke do kafane — ona polovina uz piće." },
  },
  directions: {
    forward: { label: "Prvo pijaca", blurb: "Kreni sa pijace i završi u kafani." },
    reverse: { label: "Prvo kafana", blurb: "Kreni iz kafane i završi na pijaci." },
  },
};
