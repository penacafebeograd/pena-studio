import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const fr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Balade historique de Stari Grad",
  tagline: "Des remparts aux tables bohèmes.",
  note: "Six lieux. Une balade. Largement de quoi caser un café, un détour ou une très belle vue.",
  stops: {
    kalemegdan: {
      title: "Kalemegdan et la forteresse de Belgrade",
      kicker: "Départ ici",
      landmark: "Entrée du parc, en haut de Knez Mihailova",
      direction:
        "Entrez dans le parc en gardant les remparts à votre gauche. Suivez la large allée vers les vues dégagées sur les fleuves.",
      script:
        "Bienvenue à Kalemegdan, la hauteur d'où Belgrade monte la garde depuis plus de deux mille ans. En contrebas, la Save rejoint le Danube ; derrière vous, la vieille ville s'élève le long de la crête. C'est pour cela que tout le monde a voulu cette colline. Les Romains y ont installé un camp militaire, les souverains serbes du Moyen Âge l'ont renforcée, et les armées ottomane et habsbourgeoise s'y sont affrontées à répétition. Le nom Kalemegdan vient des mots turcs pour forteresse et champ de bataille : un rappel que ce parc paisible fut la lisière d'un empire. Ne cherchez pas un château parfait, cherchez les couches dans la pierre : portes, bastions et murs conservés appartiennent à des siècles et à des maîtres différents. Au début du quinzième siècle, le despote Stefan Lazarević a reconstruit Belgrade et en a fait la capitale serbe. La forteresse a ensuite été remodelée pour l'artillerie, avant de passer lentement de zone militaire au parc préféré de la ville. C'est aujourd'hui le livre d'histoire de Belgrade, pages laissées en plein air. Avant de repartir, prenez un instant pour regarder les fleuves : ils sont la raison d'être de ce lieu.",
    },
    victor: {
      title: "Monument au Vainqueur",
      kicker: "Le belvédère",
      landmark: "Terrasse du Pobednik",
      direction:
        "Placez-vous face au Vainqueur, puis reprenez le chemin vers la ville. Sortez de Kalemegdan par la porte principale et continuez tout droit sur Knez Mihailova.",
      script:
        "Cette figure de bronze, c'est Pobednik, le Vainqueur, l'un des symboles les plus reconnaissables de Belgrade. Le sculpteur Ivan Meštrović l'a créée pour marquer les victoires serbes des guerres balkaniques et de la Première Guerre mondiale. Elle a été inaugurée ici en 1928, tournée vers le confluent, une épée dans une main et une colombe dans l'autre. Depuis cette terrasse, le geste paraît presque théâtral : la ville regarde vers les fleuves, la plaine au-delà et les routes par lesquelles sont arrivés armées et marchands. L'emplacement du monument compte autant que la sculpture. Au lieu de se dresser sur une place, il s'élève depuis le rempart et transforme un point de guet militaire en point de vue civique. Les Belgradois se disputent, plaisantent et photographient autour de cette figure depuis près d'un siècle, mais la vue garde le sens ancré. La Save à votre gauche et le Danube en face ont fait de Belgrade un point de rencontre et une cible. Avant de repartir, tournez-vous lentement vers le centre. La rue piétonne animée devant vous reliait autrefois ce bord fortifié au cœur commerçant du Belgrade moderne.",
    },
    knez: {
      title: "Rue Knez Mihailova",
      kicker: "La promenade de Belgrade",
      landmark: "Zone piétonne de Knez Mihailova",
      direction:
        "Descendez Knez Mihailova. Au bout de la zone piétonne, vous arrivez à la statue équestre de la place de la République.",
      script:
        "Knez Mihailova est le salon de Belgrade : une rue piétonne où l'on se retrouve, où les musiciens s'installent et où tous les rythmes de la ville semblent défiler. Elle suit le tracé d'une rue romaine plus ancienne, mais les beaux immeubles que vous voyez datent surtout de la fin du dix-neuvième siècle, quand Belgrade devenait une capitale européenne moderne. La rue porte le nom du prince Mihailo Obrenović III, retenu par l'histoire pour avoir obtenu le retrait des garnisons ottomanes des villes serbes. Levez les yeux en marchant. Beaucoup de façades ont été bâties pour des marchands, des banques et des familles fortunées désireuses de montrer que Belgrade appartenait au nouveau siècle. Ce n'est pas un couloir de musée : c'est toujours un lieu de courses, de cafés, de rendez-vous et de longues promenades. Ce mélange est justement le sujet. Une forteresse vous dit qui s'est battu pour une ville ; Knez Mihailova vous montre ce que la ville voulait devenir : sûre d'elle, sociable et reliée au monde. Continuez à descendre et laissez la rue vous déposer sur la place devenue le rendez-vous préféré de Belgrade.",
    },
    republic: {
      title: "Place de la République",
      kicker: "Rendez-vous au cheval",
      landmark: "Monument au prince Mihailo",
      direction:
        "Le cheval dans votre dos, prenez la rue à gauche, Francuska. Tournez à droite dans Skadarska et remontez les pavés.",
      script:
        "Vous êtes place de la République, le carrefour du Belgrade ancien et moderne. La statue équestre au centre honore le prince Mihailo Obrenović III, et son bras levé désigne des villes encore sous contrôle ottoman quand le monument a été conçu. Depuis des générations, on se donne rendez-vous ici en disant simplement : on se retrouve au cheval. La place est encadrée par deux poids lourds culturels. Le Musée national conserve art et archéologie de Serbie et de bien plus loin, tandis que le Théâtre national est depuis le dix-neuvième siècle une scène centrale pour le théâtre, l'opéra et le ballet. Ce quartier a changé vite après l'époque ottomane, quand murailles et portes ont cédé la place aux boulevards, aux institutions et aux places publiques. C'est pour cela que la place de la République paraît solennelle sans jamais être vide : elle est faite pour se rassembler. Faites une photo si vous voulez, puis dirigez-vous vers un tout autre repère belgradois. Skadarlija est à quelques rues : c'est là que les écrivains, les acteurs et les noctambules de la ville ont fabriqué leur propre tradition.",
    },
    skadarlija: {
      title: "Skadarlija",
      kicker: "La ruelle bohème",
      landmark: "Rue pavée Skadarska",
      direction:
        "Continuez à monter Skadarska, puis marchez vers l'ouest à travers Dorćol jusqu'à la cour et au minaret de la mosquée Bajrakli.",
      script:
        "Les pavés sous vos pieds marquent Skadarlija, le quartier bohème le plus connu de Belgrade. À la fin du dix-neuvième et au début du vingtième siècle, cette ruelle attirait écrivains, peintres, journalistes, acteurs et musiciens qui préféraient une longue nuit de conversation à un coucher raisonnable. Elle a grandi à côté de l'ancien quartier des brasseries, et ses tavernes sont devenues le prolongement informel des théâtres et des rédactions voisines. Aujourd'hui, restaurants et musique live font de Skadarlija l'une des rues les plus visitées de la ville, mais son atmosphère vient d'une vraie tradition de vie artistique, pas d'une invention de parc à thème. Imaginez la fumée, la poésie, les disputes politiques et un chanteur passant de table en table avec une tamburica. Belgrade a toujours eu des lieux formels pour la culture, comme le théâtre que vous venez de longer ; Skadarlija en est la version informelle, où la culture se joue autour d'un dîner et d'un désaccord. Marchez lentement sur ces pierres irrégulières et regardez où vous posez le pied. Quand vous serez prêt, suivez l'itinéraire vers Dorćol, l'un des plus vieux quartiers, pour un pan plus calme mais tout aussi important de l'histoire en couches de Belgrade.",
    },
    dorcol: {
      title: "Mosquée Bajrakli et Dorćol",
      kicker: "Un quartier en couches",
      landmark: "Mosquée Bajrakli, Gospodar Jevremova",
      direction:
        "Vous êtes à la dernière étape. D'ici, dix minutes faciles ramènent à Knez Mihailova, ou flânez dans les cafés de Dorćol.",
      script:
        "La mosquée Bajrakli est un rappel petit mais puissant que Belgrade n'a jamais appartenu à un seul chapitre de l'histoire. Bâtie à l'époque ottomane, c'est la seule mosquée subsistante du temps où Belgrade était une importante ville frontière ottomane. Son nom renvoie à l'étendard, le bajrak, autrefois hissé ici pour signaler l'heure de la prière aux autres mosquées. Le bâtiment a traversé les conflits, les changements et de longues périodes où la ville alentour avait un tout autre visage. Autour de vous, Dorćol, un quartier dont le nom vient d'une expression turque signifiant carrefour. C'est bien vu. Pendant des siècles, ce secteur a rassemblé marchands, artisans, communautés religieuses et voyageurs circulant entre le Danube, la forteresse et la ville. Votre balade est passée des murailles et des monuments aux promenades, aux théâtres, aux tavernes et à un lieu de culte vivant. C'est la bonne manière de retenir Belgrade : non comme une ville figée dans un grand passé, mais comme des couches d'habitants qui font de la place à la couche suivante. Le parcours pilote s'achève ici. Prenez votre temps, et continuez à écouter la ville.",
    },
  },
  paths: {
    "kalemegdan>victor": {
      main: {
        label: "Tout droit par l'allée",
        blurb: "Le chemin direct le long de l'allée principale jusqu'à la terrasse.",
      },
      ruzica: {
        label: "Par l'église Ružica",
        blurb:
          "Une boucle par la porte Zindan jusqu'à la petite église encastrée dans le rempart, puis retour.",
      },
    },
    "victor>knez": {
      main: {
        label: "Par la porte principale",
        blurb: "Retour à travers le parc et directement dans la rue piétonne.",
      },
      riverside: {
        label: "Bord de Save et cathédrale",
        blurb:
          "Descente le long des remparts ouest vers la Save, puis entrée en ville devant la cathédrale.",
      },
    },
    "knez>republic": {
      main: {
        label: "Toute la promenade",
        blurb: "Knez Mihailova sur toute sa longueur, comme le décrit la narration.",
      },
      obilicev: {
        label: "Par Obilićev venac",
        blurb: "Une rue plus loin : des terrasses de café au lieu des vitrines.",
      },
    },
    "republic>skadarlija": {
      main: {
        label: "Par Francuska",
        blurb: "Le chemin court, exactement comme le décrit la narration.",
      },
      cetinjska: {
        label: "Par la cour de Cetinjska",
        blurb: "Devant le marché Bajloni jusqu'à la cour de l'ancienne brasserie.",
      },
    },
    "skadarlija>dorcol": {
      main: {
        label: "Petites rues tranquilles",
        blurb: "Le chemin calme à travers le Dorćol résidentiel.",
      },
      strahinja: {
        label: "Par Strahinjića Bana",
        blurb: "La rue des cafés de Belgrade : plus animée, un peu plus longue.",
      },
    },
  },
  detours: {
    ruzica: {
      name: "Église Ružica et Sainte-Petka",
      blurb: "Une église encastrée dans le rempart, aux lustres faits d'armes usagées.",
    },
    terrace: {
      name: "La Grande Terrasse",
      blurb: "La meilleure vue sur le confluent Save-Danube, à une minute du Vainqueur.",
    },
    cathedral: {
      name: "Cathédrale et la taverne ?",
      blurb: "La plus vieille taverne de Belgrade, toujours face à l'église.",
    },
    ethnographic: {
      name: "Musée ethnographique",
      blurb: "Vie rurale, costumes et artisanat, sur Studentski trg.",
    },
    nationalmuseum: {
      name: "Musée national",
      blurb: "Sur la place même : archéologie en bas, peinture en haut.",
    },
    bajloni: {
      name: "Marché Bajloni et Cetinjska",
      blurb: "Un marché du matin à côté de la cour qui devient la nuit belgradoise.",
    },
    turbe: {
      name: "Türbe de Cheikh Mustafa",
      blurb: "Un petit mausolée ottoman glissé dans une rue calme de Dorćol.",
    },
  },
  variants: {
    full: { label: "Balade complète", blurb: "Six étapes, de la forteresse à Dorćol." },
    short: {
      label: "Balade courte",
      blurb: "Quatre étapes, de la forteresse à la place de la République.",
    },
  },
  directions: {
    forward: {
      label: "Forteresse d'abord",
      blurb: "Départ à Kalemegdan, arrivée à Dorćol.",
    },
    reverse: {
      label: "Dorćol d'abord",
      blurb: "À l'envers, avec la forteresse pour finir.",
    },
  },
};
