import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const fr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Vračar : saints et inventeurs",
  tagline: "La plus grande église des Balkans, et l’homme qui a éclairé le monde.",
  note: "Cinq lieux, presque tout en descente, et une pause café qui vous doit une remise.",
  stops: {
    temple: {
      title: "Temple Saint-Sava",
      kicker: "Départ ici",
      landmark: "Svetosavski plato, l’esplanade du temple",
      direction:
        "Quittez l’esplanade du côté opposé à la bibliothèque et descendez par les rues de Vračar vers le rond-point que vous entendrez avant de le voir.",
      script:
        "Vous êtes sous l’une des plus grandes églises orthodoxes du monde, et elle n’est pas terminée. Cette combinaison dit presque tout de Belgrade. L’esplanade a été choisie pour une raison : en 1595, pendant une insurrection serbe, un commandant ottoman fit apporter ici les reliques de saint Sava et les brûla en public. Saint Sava avait été Rastko Nemanjić, un prince qui quitta la cour de son père pour un monastère et revint comme premier archevêque d’une église serbe indépendante. Le brûler trois siècles après sa mort devait clore quelque chose. Trois siècles plus tard, les Serbes ont élevé à cet endroit précis la plus grande église qu’ils pouvaient imaginer. Un concours eut lieu en 1905. Le chantier commença en 1935, s’arrêta pour la Seconde Guerre mondiale, puis resta inachevé pendant des décennies, l’État socialiste utilisant la carcasse comme entrepôt et l’esplanade comme parking. Les travaux reprirent en 1985. L’immense mosaïque intérieure n’a été achevée qu’à notre siècle. Regardez donc un bâtiment qui a demandé quatre générations et survécu à trois États, plutôt qu’un monument simplement érigé. Entrez si c’est ouvert ; la coupole vaut le torticolis. Puis ressortez et descendez, car l’étape suivante est l’inverse du solennel.",
    },
    slavija: {
      title: "Slavija",
      kicker: "Le rond-point",
      landmark: "La fontaine de Slavija et l’anneau autour",
      direction:
        "Empruntez les passages piétons autour du cercle et montez vers le nord par la large rue Kralja Milana, jusqu’à une petite place pleine de fleurs.",
      script:
        "Slavija est la place dont chaque Belgradois a quelque chose à dire, et son nom est un accident de l’histoire. Dans les années 1880, c’était un terrain marécageux en bordure de ville, acheté par un Écossais nommé Francis Mackenzie, un évangélique venu à Belgrade, qui apprit le serbe, acheta le marais, l’assainit, tira des rues et vendit des parcelles. Il fit bâtir ici une salle pour des rassemblements panslaves et l’appela Slavija. La salle a disparu depuis longtemps ; le nom a survécu à l’homme, au royaume, à deux Yougoslavies et à l’habitude socialiste de nommer la place d’après Dimitrije Tucović. Ce que vous voyez aujourd’hui est un giratoire avec une fontaine au centre, installée en 2017, qui donne des spectacles de lumière et de musique à un public en grande partie coincé en voiture. Les Belgradois vous diront qu’il est impossible de traverser. Ils exagèrent, mais à peine : prenez les passages et votre temps. Remarquez que les immeubles autour ne s’accordent sur rien — un hôtel socialiste, des bureaux de verre, des façades anciennes qui tiennent bon. Cette dispute est justement le sujet. Ici s’est arrêté le Belgrade du dix-neuvième siècle, et le vingtième a eu le droit de faire ce qu’il voulait.",
    },
    cvetni: {
      title: "Cvetni trg",
      kicker: "La place aux Fleurs",
      landmark: "Les étals de fleurs en haut de Njegoševa",
      direction:
        "Quittez la place par Krunska, la rue tranquille des vieilles villas, et continuez vers l’est jusqu’au numéro 51.",
      script:
        "Cvetni trg veut dire place aux Fleurs et, chose rare pour un nom de centre-ville, c’est littéralement vrai : les fleuristes tiennent ce coin depuis plus d’un siècle et ils y sont encore. La place est petite, vaguement triangulaire, et fait office de salon le moins officiel de Belgrade. D’un côté se trouve le Théâtre dramatique yougoslave, reconstruit en verre après un incendie dans les années 1990, où se joue le théâtre le plus sérieux du pays ; de tous les autres côtés, on boit un café en regardant le théâtre du trottoir. Pendant l’essentiel de la période socialiste, c’était la place Ivan Milutinović, du nom d’un commandant partisan, et les Belgradois âgés se trompent encore et l’appellent ainsi. Les fleurs ont fini par gagner. C’est aussi le départ de Njegoševa, l’une des plus belles rues à marcher de la ville, et la limite où le boulevard bruyant derrière vous cède la place à un quartier de villas basses, de platanes et de calme. N’achetez rien, asseyez-vous dix minutes si vous les avez. Puis prenez Krunska vers l’est, car à quelques centaines de mètres, dans une villa qui ressemble à toutes les autres, se trouvent les archives d’un homme qui a imaginé le vingtième siècle avant son arrivée.",
    },
    tesla: {
      title: "Musée Nikola Tesla",
      kicker: "Les archives",
      landmark: "Krunska 51, une villa de 1929",
      direction:
        "Continuez par Krunska puis vers le nord, en passant devant les ministères, jusqu’à l’église de brique sombre au bord d’un grand parc.",
      script:
        "Cette villa, bâtie en 1929 pour une famille belgradoise, conserve les cendres de Nikola Tesla et environ cent soixante mille de ses documents. Les deux faits sonnent étrangement à voix haute. Tesla est né en 1856 dans un village de l’actuelle Croatie, dans une famille serbe, a étudié à Graz et Prague, travaillé à Budapest et Paris, et s’est fait un nom à New York, où il est mort seul dans une chambre d’hôtel en 1943. Il n’a jamais vécu à Belgrade. Il y est venu une fois, en 1892, et fut reçu comme un héros de retour. Son neveu a rapporté le legs ici dans les années 1950, et l’urne est depuis dans la pièce du devant, ce que certains visiteurs trouvent émouvant et d’autres nettement bizarre. Le musée est petit et les démonstrations théâtrales : une bobine Tesla qui crache des étincelles, l’œuf tournant dont il se servait pour montrer le champ magnétique rotatif. Mais le vrai trésor, c’est le papier. Ses carnets, brevets et sa correspondance sont entrés au registre Mémoire du monde de l’Unesco en 2003, car c’est ici qu’on voit comment le courant alternatif — la raison pour laquelle la lumière fonctionne là où vous lisez ceci — a réellement été discuté sur la page.",
    },
    stmark: {
      title: "Église Saint-Marc et Tašmajdan",
      kicker: "Dernière étape",
      landmark: "Crkva Svetog Marka, au bord du parc Tašmajdan",
      direction:
        "Vous êtes à la dernière étape. Le parc derrière l’église est un bon endroit pour cesser de marcher ; le centre est à quinze minutes en descente.",
      script:
        "Saint-Marc est en brique rouge sombre, volontairement démodée, et beaucoup plus jeune qu’elle n’en a l’air. Elle a été construite entre 1931 et 1940, sur le modèle serré de l’église monastique de Gračanica, du quatorzième siècle : un édifice élevé dans un royaume moderne à la forme d’un royaume médiéval, ce qui était tout l’objet. À l’intérieur repose le tombeau de l’empereur Stefan Dušan, qui porta la Serbie à sa plus grande étendue au quatorzième siècle et dont les restes furent amenés ici en 1968. Dans l’enclos, cherchez la petite église russe à l’arrière : l’église de la Sainte-Trinité, bâtie par des réfugiés de la guerre civile russe, où est enterré le général de l’Armée blanche Piotr Wrangel. Deux empires vaincus, un petit jardin. Le parc à côté de vous est Tašmajdan, et le nom est encore turc — taş meydan, la place de pierre. Les Romains y extrayaient la pierre à bâtir, les Ottomans ont gardé le nom, et les tunnels laissés en dessous ont servi d’abris de mémoire d’homme. Belgrade fait cela sans cesse : un parc où jouent des enfants, une carrière dessous, un nom d’un empire parti. Votre balade s’achève ici. Asseyez-vous, et laissez la ville continuer à parler.",
    },
  },
  paths: {
    "temple>slavija": {
      main: {
        label: "Tout droit en descente",
        blurb: "Le chemin direct par les rues de Vračar.",
      },
      kalenic: {
        label: "Par le marché de Kalenić",
        blurb:
          "Une longue boucle vers l’est jusqu’au marché préféré des Belgradois, puis retour vers l’ouest. À faire avant midi.",
      },
    },
    "slavija>cvetni": {
      main: {
        label: "Par Kralja Milana",
        blurb: "Le grand boulevard, avec ses vitrines et sa circulation.",
      },
      njegoseva: {
        label: "Par Njegoševa",
        blurb: "Une rue plus à l’est : villas, platanes et beaucoup moins de bruit.",
      },
    },
    "cvetni>tesla": {
      main: {
        label: "Par Krunska",
        blurb: "La rue de villas où se trouve le musée lui-même.",
      },
      boulevard: {
        label: "Par le boulevard",
        blurb: "Sortir sur le Bulevar kralja Aleksandra et revenir : plus animé, plus long, plus urbain.",
      },
    },
    "tesla>stmark": {
      main: {
        label: "Devant les ministères",
        blurb: "Vers le nord à travers le quartier gouvernemental jusqu’à l’église.",
      },
      tasmajdan: {
        label: "À travers le parc Tašmajdan",
        blurb: "Sous les arbres puis sortie près de l’église, en arrivant côté parc.",
      },
    },
  },
  detours: {
    penacafe: {
      name: "Pena Art Cafe",
      blurb:
        "Notre propre café, à trente secondes de l’itinéraire, au 1 Deligradska — prenez-le donc comme une invitation et non comme une recommandation. Café, gâteau, et un endroit pour s’asseoir à mi-parcours.",
      offer: { code: "ECHO10", terms: "10 % sur l’addition, une fois par visite." },
    },
    library: {
      name: "Bibliothèque nationale de Serbie",
      blurb:
        "À côté du temple : un bâtiment des années 1970 fait de caissons de béton suspendus, que l’on adore ou dont on refuse de parler.",
    },
    manjez: {
      name: "Parc Manjež",
      blurb:
        "Un petit parc qui porte le nom du manège qui s’élevait ici. De l’ombre, des bancs, et l’un des meilleurs kiosques de la ville.",
    },
    parliament: {
      name: "Maison de l’Assemblée nationale",
      blurb:
        "Le parlement serbe, achevé en 1936 après trente ans de chantier. Les chevaux de bronze devant justifient à eux seuls le détour.",
    },
  },
  variants: {
    full: { label: "Balade complète", blurb: "Cinq étapes, du temple à Tašmajdan." },
    short: {
      label: "Balade courte",
      blurb: "Trois étapes, du temple à la place aux Fleurs.",
    },
  },
  directions: {
    forward: {
      label: "Temple d’abord",
      blurb: "Départ à Saint-Sava, arrivée à Tašmajdan.",
    },
    reverse: {
      label: "Tašmajdan d’abord",
      blurb: "À l’envers, en montée, avec le temple pour finir.",
    },
  },
};
