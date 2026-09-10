import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const sr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Zemun i Gardoš",
  tagline: "Grad druge imperije, pola sata od tvrđave.",
  note: "Pet mesta, jedna uzbrdica na kraju, i kula koja vredi penjanja.",
  stops: {
    kej: {
      title: "Kej oslobođenja",
      kicker: "Počni ovde",
      landmark: "Zemunski kej, uz Dunav",
      direction:
        "Okreni se od reke i kreni u staru varoš, dva bloka, do trga sa pijačnim halama.",
      script:
        "Stojiš u drugoj državi — ili bi stajao, veći deo poslednjih tri stotine godina. Do 1918. ova obala je pripadala Habsburškoj monarhiji, a druga Osmanskom carstvu, pa kasnije Srbiji. Granica je išla kroz vodu pred tobom. Zemun je bio pogranični grad na imperijalnoj strani: imao je carinarnice, garnizon i kontumac, karantin u kojem su putnici koji dolaze sa osmanske teritorije držani nedeljama pre nego što bi im bilo dopušteno dalje u Evropu. Beograd i Zemun su se vekovima gledali preko reka, a da nisu bili u istoj državi. Zato Zemun i danas ne izgleda kao Beograd. Ulice su niže, šire i mirnije, kuće su jednospratne i srednjoevropske, a celo mesto deluje kao mala austrougarska varoš na reci kojoj se slučajno prikačila prestonica. Pogledaj ravno zeleno ostrvo naspram tebe: to je Veliko ratno ostrvo, i danas nenaseljeno, i danas rezervat, tačno na mestu gde se Sava uliva u Dunav. Zatim kreni u dubinu, jer pijačni trg je mesto na kojem pogranična varoš zaista pokazuje čemu je služila.",
    },
    pijaca: {
      title: "Zemunska pijaca",
      kicker: "Pijaca",
      landmark: "Masarikov trg i pijačne hale",
      direction:
        "Napusti trg u pravcu zapada, bilo pešačkom ulicom sa radnjama bilo kroz sokake, dok ne stigneš do velike crkve sa visokim zvonikom.",
      script:
        "Svaki ozbiljan balkanski kraj meri se svojom pijacom, a zemunska je jedna od dobrih: bučna, jeftina, sezonska i potpuno nezainteresovana za turiste. U avgustu je zid paradajza i paprika, u jesen miriše na tunje, a po obodu ljudi prodaju med, sir i rakiju iz plastičnih flaša sa rukom pisanim etiketama. Ovo nije restaurirana pijaca-spomenik. Ovo je radna. Trg oko nje je trgovački centar Zemuna od kada je habsburška uprava u osamnaestom veku isplanirala varoš u pravilnoj mreži — zato se ulice ovde seku pod pravim uglom, dok beogradska stara varoš vijuga. U blizini je Gospodska, pešačka trgovačka ulica i mesto gde se izlazi da bi se videlo i bilo viđeno, davno pre nego što je iko to nazvao korzom. Kupi voće ako imaš gde da ga staviš. Zatim kreni na zapad, jer sledeća građevina je mesto na kojem je varoš u kamenu priznala na kojoj je strani granice bila.",
    },
    bogorodica: {
      title: "Bogorodičina crkva",
      kicker: "Parohijska crkva",
      landmark: "Crkva Rođenja presvete Bogorodice, Njegoševa",
      direction:
        "Kreni ka severoistoku i počni da se penješ. Ulice se sužavaju i nagib raste; idi uz brdo dok ne stigneš do mnogo manje i mnogo starije crkve.",
      script:
        "Ovo je glavna pravoslavna crkva u Zemunu, dovršena 1780, i lekcija je o tome kako manjine grade kada im je dopušteno da grade ali ne i da budu upadljive. Habsburzi su bili katolici, a njihovi pravoslavni srpski podanici pre tolerisani nego dobrodošli, pa je arhitektura kompromis: pravoslavna crkva u srednjoevropskom baroknom odelu. Zvonik je visok i austrijski; plan i ikonostas unutra su nedvosmisleno vizantijski. Pogledaj ikonostas ako možeš da uđeš — jedno je od najlepših dela slikarstva osamnaestog veka u gradu, a radili su ga ljudi koji su istovremeno pregovarali o identitetu. Zemunski Srbi bili su trgovci i zanatlije sa parama i privilegijama, i koristili su i jedno i drugo da u kamenu izgrade ono što nisu uvek smeli naglas da kažu. Odavde tlo počinje da se penje, i što su građevine starije, to su manje. To je uobičajen smer u staroj varoši: što više ideš uzbrdo, to dalje u prošlost hodaš.",
    },
    nikolajevska: {
      title: "Nikolajevska crkva",
      kicker: "Najstarija crkva",
      landmark: "Nikolajevska crkva, podignuta 1731.",
      direction:
        "Nastavi da se penješ. Kula na grebenu iznad tebe je poslednja stanica; sokak se povija ulevo i izbacuje te pred nju.",
      script:
        "Ovo je najstarija sačuvana crkva u Beogradu, a većina Beograđana nikada nije bila unutra. Dovršena je 1731, što je čini starijom od svake crkve preko reka — osmanske vlasti nisu dopuštale novu pravoslavnu gradnju u samom Beogradu, pa je najstarija crkva današnjeg grada na drugoj obali, u tada stranoj imperiji. Mala je, okrečena i ukopana ispod nivoa ulice, jer je graditi nadole bio jedan od načina da se gradi dovoljno skromno da bude odobreno. Unutra je barokni ikonostas Dimitrija Bačevića, pozlaćen, prepun i malo previše veličanstven za prostoriju — tačno ono što bi bogata pogranična parohija naručila. Groblje oko nje čuva zemunske trgovce čija imena stoje u carinskim knjigama dve imperije. Zastani ovde na trenutak pre poslednjeg uspona, jer sa kule iznad videćeš obe strane granice odjednom — i izgledaće kao jedan grad, što je postalo istina tek 1934.",
    },
    gardos: {
      title: "Gardoš i Milenijumska kula",
      kicker: "Kula",
      landmark: "Gardoš, na ruševinama zemunske tvrđave",
      direction:
        "Stigao si do poslednje stanice. Odavde je put nadole očigledan, a kej je deset minuta dalje ako želiš da završiš šetnju kraj vode.",
      script:
        "Kula je razlog zbog kog ljudi dolaze na Gardoš, i gotovo sve što većina posetilaca o njoj veruje nije tačno. Beograđani je zovu kula Sibinjanin Janka, po ugarskom vojskovođi Janošu Hunjadiju, koji je zaista umro u Zemunu 1456. braneći ovaj kraj od osmanskog nadiranja. Kula sa njim nema nikakve veze. Podignuta je 1896, četiri stotine četrdeset godina kasnije, kao jedan od spomenika koji su obeležavali hiljadu godina mađarskog naseljavanja u Panonskoj niziji — izjava o vlasništvu prerušena u vidikovac, namerno postavljena na ruševine srednjovekovne tvrđave da bi nova imperija stajala bukvalno na staroj. Dve decenije kasnije te imperije nije bilo, a kula je zadržala lokalni nadimak umesto zvaničnog značenja. Popni se. Sa vrha Sava dolazi s leve strane, Dunav s desne, Veliko ratno ostrvo stoji u sredini spora, a beogradska tvrđava te gleda sa druge obale. Dve varoši, dve imperije, jedan pogled. Tvoja šetnja se ovde završava.",
    },
  },
  paths: {
    "kej>pijaca": {
      main: {
        label: "Pravo sa keja uzbrdo",
        blurb: "Dva bloka u dubinu, najkraće do pijačnog trga.",
      },
      obala: {
        label: "Prvo uz kej",
        blurb: "Na sever uz vodu, pored splavova i restorana, pa u varoš. Duže, lepši pogled.",
      },
    },
    "pijaca>bogorodica": {
      main: { label: "Kroz sokake", blurb: "Kratak put kroz pravilnu mrežu ulica." },
      gospodska: {
        label: "Gospodskom",
        blurb: "Pešačka trgovačka ulica — življa, i razlog zašto Zemun ima korzo.",
      },
    },
    "bogorodica>nikolajevska": {
      main: { label: "Direktan uspon", blurb: "Pravo uzbrdo sokacima. Mestimično strmo." },
      padina: {
        label: "Oko padine",
        blurb: "Blaži obilazak oko brda, sa pogledom preko krovova.",
      },
    },
    "nikolajevska>gardos": {
      main: { label: "Pravo do kule", blurb: "Poslednjih par stotina metara, sve uzbrdo." },
      stepenice: {
        label: "Gardoškim stepenicama",
        blurb: "Stepenasti sokak kroz stare kuće na padini. Sporije, mnogo lepše.",
      },
    },
  },
  detours: {
    magistrat: {
      name: "Zemunski magistrat",
      blurb:
        "Stara gradska kuća iz 1823, iz decenija kada je Zemun sam sobom upravljao kao slobodna kraljevska varoš i imao papire koji to dokazuju.",
    },
    ratnoostrvo: {
      name: "Vidikovac na Veliko ratno ostrvo",
      blurb:
        "Nekoliko minuta dalje uz kej, za najčistiji pogled na nenaseljeno ostrvo na ušću i čaplje koje ga drže.",
    },
    sinagoga: {
      name: "Stara sinagoga",
      blurb:
        "Zgrada zemunske aškenaske sinagoge još stoji u Dubrovačkoj. Deda Teodora Hercla se tu molio, što ovu malu ulicu čini fusnotom u istoriji cionizma.",
    },
  },
  variants: {
    full: { label: "Cela šetnja", blurb: "Pet stanica, od keja do kule." },
    short: { label: "Kratka šetnja", blurb: "Tri stanice, od crkve do kule — uzbrdna polovina." },
  },
  directions: {
    forward: { label: "Prvo kej", blurb: "Kreni kraj Dunava i popni se do kule." },
    reverse: { label: "Prvo kula", blurb: "Kreni s visine i završi kraj vode." },
  },
};
