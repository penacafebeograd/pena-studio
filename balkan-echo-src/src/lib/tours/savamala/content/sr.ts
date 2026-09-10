import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const sr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Savamala i obala",
  tagline: "Magacini, izbledeli veliki hotel i jedna rasprava o reci.",
  note: "Pet mesta u malom, gustom kvartu — najkraća šetnja, i ona sa najviše stavova u sebi.",
  stops: {
    zelenivenac: {
      title: "Zeleni venac",
      kicker: "Počni ovde",
      landmark: "Pijaca i autobuska okretnica",
      direction:
        "Kreni nizbrdo, na zapad, dalje od pijace. Ulice brzo padaju ka reci; traži nisku staru kuću sa drvenim doksatom.",
      script:
        "Zeleni venac je vrlo blago ime za najbučniji ćošak u Beogradu. Pijaca je tu od devetnaestog veka i grad i danas tu kupuje peršun. Oko nje su autobuska okretnica, podzemni prolaz, nekoliko kioska i trajno stanje blage pometnje na koje se Beograđani stalno žale, a koje bi branili do poslednjeg. Ovo je vrh Savamale, kvarta koji se odavde spušta do Save. Veći deo prošlog veka Savamala je bila mesto kroz koje roba ulazi i u kojem niko ne bira da živi: magacini, ranžirne stanice, carinske šupe i saobraćaj između luke i grada. Onda je decenijama bila zapuštena. A onda je — nakratko, oko 2010. — postala najzanimljivijih nekoliko ulica na Balkanu. Sada ćeš proći kroz sve tri verzije odjednom. Idi nizbrdo. Što više padaš ka vodi, to su zgrade starije i čudnije.",
    },
    manak: {
      title: "Manakova kuća",
      kicker: "Preživela",
      landmark: "Gavrila Principa 5, kuća balkanskog tipa",
      direction:
        "Nastavi nizbrdo i okreni ka reci. Sledeća zgrada je veliki, umorni, nekada veličanstveni hotel na uglu obalske ulice.",
      script:
        "Ova niska kuća sa isturenim gornjim spratom i drvenim doksatom stara je oko dve stotine godina i jedna je od poslednjih te vrste u Beogradu. Podignuta je tridesetih godina devetnaestog veka za trgovca Manaka Mihailovića, Cincara sa juga Balkana, u stilu u kojem je nekada bila svaka kuća u ovom gradu: donji sprat od kamena za dućan i magazu, gornji u drvenoj konstrukciji isturen nad ulicu, duboka streha. Gotovo sve su porušene. Beograd je kraj devetnaestog veka proveo trudeći se da izgleda bečki, a osmanska varoška arhitektura bila je prvo što je moralo da ide — ne zato što je bila loša gradnja, nego zato što je izgledala kao pogrešna imperija. Ova je ostala jer je nastavila da bude korisna. Danas u njoj stoji etnografska zbirka, što je uljudan način da se kaže da je sama zgrada eksponat. Pogledaj proporcije pre nego što kreneš dalje: tako je izgledala cela padina do reke.",
    },
    bristol: {
      title: "Hotel Bristol",
      kicker: "Veliki hotel",
      landmark: "Karađorđeva 50, podignut 1912.",
      direction:
        "Idi na sever obalskom ulicom, sa vodom sa leve strane, dok ne stigneš do dugačkog magacina od cigle koji stoji malo po strani od svega ostalog.",
      script:
        "Bristol je otvoren 1912, dve godine pre Prvog svetskog rata, što dovoljno govori o tajmingu. Projektovao ga je Nikola Nestorović za grad koji je očekivao da postane rečna metropola: ova ulica bila je arterija od savske luke ka centru, a veliki hotel kraj luke imao je očiglednu poslovnu logiku. Pogledaj fasadu — zaista je dobra, samouverena i blago raskošna, građena za putnike koji silaze sa dunavskog parobroda i žele da budu impresionirani. A onda pogledaj u kakvom je stanju. Luka se preselila, saobraćaj su postali kamioni, gosti su prestali da dolaze, i Bristol je decenijama bio hotel za koji je Beograd zaboravio da ga ima. Zatvarao se, otvarao, pa opet zatvarao, i bio predmet velikog broja najava o obnovi. To je najiskreniji simbol Savamale: zgrada koja je bila u pravu u vezi sa budućnošću i u krivu u vezi sa vremenom. Nastavi na sever, jer je sledeća stanica ona koja je nakratko učinila da budućnost stigne.",
    },
    spanska: {
      title: "Španska kuća",
      kicker: "Kulturni centar",
      landmark: "Braće Krsmanović, nekadašnji magacin",
      direction:
        "Nastavi na sever ulicom iznad reke. Traje petnaestak minuta i završava se nizom niskih svodova okrenutih vodi.",
      script:
        "Ovaj magacin sa gvozdenom konstrukcijom zove se Španska kuća i niko se ne slaže zašto. Najverovatnija priča je da je metalna konstrukcija kupljena od španske firme ili spasena sa španskog izložbenog paviljona; manje verovatne priče su zabavnije. Važno je ono što se s njom skoro dogodilo. Godine 2009. u njoj je otvoren kulturni centar i nekoliko godina Savamala je bila zaista slavna: galerije, dizajn studiji, festivali, barovi u magacinima i mnogo novinara koji su pisali da je ovo sledeći Berlin. Deo toga bio je pena. Deo je bio stvaran i promenio je način na koji Beograd misli o svojoj obali. Onda je došla obnova. Godine 2016. zgrade u obližnjoj ulici srušene su noću, od strane maskiranih ljudi, u događaju koji nikada nije zadovoljavajuće objašnjen i koji je postao nacionalni skandal. Dizajnerski kvart se proredio; kranovi su se digli na jugu. Da li je to napredak ili gubitak, najviše je sporeno pitanje u ovom gradu, a ti stojiš tačno u sredini. Idi na sever ka vodi i odluči sam.",
    },
    betonhala: {
      title: "Beton hala",
      kicker: "Poslednja stanica",
      landmark: "Beton hala i savska promenada",
      direction:
        "Stigao si do poslednje stanice. Tvrđava je pravo iznad tebe ako želiš da nastaviš, a promenada ide na jug uz vodu koliko god ti se hoda.",
      script:
        "Beton hala znači, bez ikakve poezije, beton hala. Podignuta je tridesetih godina dvadesetog veka kao skladište za luku — običan niz svodova čija je jedina svrha bila da roba ostane suva. Zato je tu, tačno na vodi, i zato ima najbolju poziciju od svih zgrada u Beogradu. Danas je to niz restorana sa belim stolnjacima i cenama koje im odgovaraju, a terasa gleda pravo preko Save na novobeogradske tornjeve. Vredi razmisliti šta se sa ovog mesta vidi. Iza i iznad tebe uzdiže se Kalemegdan, gde počinje šetnja kroz staru varoš: dve hiljade godina utvrđivanja. Pred tobom je reka uz koju se grad veći deo istorije branio, a kraj koje danas prodaje večeru. Levo, nova gradnja. Beograd je uvek bio grad o reci koju nije mogao da odluči kako da koristi. Sedi kraj vode i pusti da se spor nastavi.",
    },
  },
  paths: {
    "zelenivenac>manak": {
      main: { label: "Pravo nizbrdo", blurb: "Direktan pad ka reci." },
      brankova: {
        label: "Preko Brankove",
        blurb: "Jednu ulicu dalje, pored tramvajskih šina i podzemnog prolaza. Bučnije, ali vidiš saobraćaj zbog kojeg je Savamala nastala.",
      },
    },
    "manak>bristol": {
      main: { label: "Do obalske ulice", blurb: "Dva minuta, sve nizbrdo." },
    },
    "bristol>spanska": {
      main: { label: "Karađorđevom", blurb: "Glavna obalska ulica, magacini sa obe strane." },
      obala: {
        label: "Bliže vodi",
        blurb: "Niže, uz samu obalu, pored teretnih zgrada.",
      },
    },
    "spanska>betonhala": {
      main: {
        label: "Na sever uz reku",
        blurb: "Duga deonica šetnje. Prati ulicu iznad vode do svodova.",
      },
      karadjordjeva: {
        label: "Uz Karađorđevu",
        blurb: "Ulična verzija: malo duže, više starih lučkih fasada.",
      },
    },
  },
  detours: {
    savapromenada: {
      name: "Pogled na Beograd na vodi",
      blurb:
        "Nekoliko minuta na jug za jasan pogled na nove tornjeve uz Savu — gradnju koja je preoblikovala ovaj kvart i raspravu koju je pokrenula.",
    },
    kosancicev: {
      name: "Kosančićev venac",
      blurb:
        "Uz padinu: najstarija sačuvana ulična matrica u Beogradu, kaldrmisana i tiha, sa praznim placem na kojem je Narodna biblioteka izgorela u bombardovanju aprila 1941.",
    },
    brankovmost: {
      name: "Brankov most",
      blurb:
        "Izađi na most zbog klasičnog pogleda ka tvrđavi. Sadašnji most je iz 1956, stoji na pilonima onog pre rata.",
    },
  },
  variants: {
    full: { label: "Cela šetnja", blurb: "Pet stanica, od pijace do vode." },
    short: { label: "Kratka šetnja", blurb: "Tri stanice, od hotela do vode — obalska polovina." },
  },
  directions: {
    forward: { label: "Prvo pijaca", blurb: "Kreni sa Zelenog venca i spusti se do Save." },
    reverse: { label: "Prvo reka", blurb: "Kreni od vode i vrati se uzbrdo do pijace." },
  },
};
