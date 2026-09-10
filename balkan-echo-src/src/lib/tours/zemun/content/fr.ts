import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const fr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Zemun et Gardoš",
  tagline: "La ville de l’autre empire, à une demi-heure de la forteresse.",
  note: "Cinq lieux, une montée à la fin, et une tour qui vaut l’effort.",
  stops: {
    kej: {
      title: "Kej oslobođenja",
      kicker: "Départ ici",
      landmark: "Le quai de Zemun, le long du Danube",
      direction:
        "Tournez le dos au fleuve et remontez dans la vieille ville, deux pâtés de maisons, jusqu’à la place des halles.",
      script:
        "Vous êtes dans un autre pays — ou vous l’auriez été, pendant l’essentiel des trois derniers siècles. Jusqu’en 1918, cette rive appartenait à l’Empire des Habsbourg et l’autre aux Ottomans, puis à la Serbie. La frontière passait dans l’eau devant vous. Zemun était la ville frontière du côté impérial : douanes, garnison, et une station de quarantaine où les voyageurs venus du territoire ottoman étaient retenus des semaines avant d’être autorisés à continuer vers l’Europe. Belgrade et Zemun se sont regardées par-dessus les fleuves pendant des siècles sans appartenir au même État. C’est pourquoi Zemun ne ressemble toujours pas à Belgrade. Les rues sont plus basses, plus larges et plus calmes, les maisons de un étage et d’Europe centrale, et l’ensemble a l’air d’une petite ville fluviale austro-hongroise à laquelle on aurait accroché une capitale. Regardez l’île verte et plate en face : c’est Veliko ratno ostrvo, la Grande Île de la Guerre, toujours inhabitée, toujours réserve naturelle, exactement là où la Save rejoint le Danube. Puis rentrez dans les terres, car la place du marché est l’endroit où une ville frontière montre vraiment à quoi elle servait.",
    },
    pijaca: {
      title: "Le marché de Zemun",
      kicker: "Le marché",
      landmark: "Masarikov trg et les halles",
      direction:
        "Quittez la place vers l’ouest, par la rue piétonne commerçante ou par les ruelles, jusqu’à la grande église au clocher élevé.",
      script:
        "Tout quartier balkanique sérieux se juge à son marché, et celui de Zemun est de la bonne espèce : bruyant, pas cher, saisonnier, et parfaitement indifférent aux touristes. En août, c’est un mur de tomates et de poivrons ; en automne, ça sent le coing ; et sur les bords, des gens vendent du miel, du fromage et de la rakija dans des bouteilles en plastique aux étiquettes manuscrites. Ce n’est pas un marché patrimonial restauré. C’est un marché qui travaille. La place autour est le centre commerçant de Zemun depuis que l’administration habsbourgeoise a tracé la ville en damier au dix-huitième siècle : voilà pourquoi les rues se coupent ici à angle droit alors que la vieille ville de Belgrade serpente. Tout près court Gospodska, la rue des messieurs, l’artère piétonne des boutiques et l’endroit où il fallait se montrer bien avant que quiconque parle de promenade. Achetez des fruits si vous avez où les mettre. Puis partez vers l’ouest, car le bâtiment suivant est celui où la ville a reconnu, dans la pierre, de quel côté de la frontière elle se trouvait.",
    },
    bogorodica: {
      title: "Église de la Mère de Dieu",
      kicker: "L’église paroissiale",
      landmark: "Bogorodičina crkva, rue Njegoševa",
      direction:
        "Prenez vers le nord-est et commencez à monter. Les rues se resserrent et s’inclinent ; continuez jusqu’à une église bien plus petite et bien plus ancienne.",
      script:
        "Voici la principale église orthodoxe de Zemun, achevée en 1780, et une leçon sur la façon dont les minorités bâtissent quand on leur permet de bâtir mais pas de se faire remarquer. Les Habsbourg étaient catholiques et leurs sujets serbes orthodoxes tolérés plutôt que bienvenus ; l’architecture est donc un compromis : une église orthodoxe habillée de baroque d’Europe centrale. Le clocher est haut et autrichien ; le plan et l’iconostase à l’intérieur sont franchement byzantins. Regardez l’iconostase si vous pouvez entrer — c’est l’une des plus belles peintures du dix-huitième siècle de la ville, réalisée par des gens qui négociaient aussi une identité. Les Serbes de Zemun étaient des marchands et des artisans avec de l’argent et des privilèges, et ils ont utilisé les deux pour bâtir en pierre ce qu’ils ne pouvaient pas toujours dire à voix haute. À partir d’ici le terrain se met à monter, et plus les bâtiments sont anciens, plus ils rapetissent. C’est le sens habituel de la marche dans une vieille ville : plus vous montez, plus vous remontez le temps.",
    },
    nikolajevska: {
      title: "Église Saint-Nicolas",
      kicker: "La plus ancienne",
      landmark: "Nikolajevska crkva, bâtie en 1731",
      direction:
        "Continuez à monter. La tour sur la crête au-dessus de vous est la dernière étape ; la ruelle tourne à gauche et vous y dépose.",
      script:
        "C’est la plus ancienne église conservée de Belgrade, et la plupart des Belgradois n’y sont jamais entrés. Elle a été achevée en 1731, ce qui la rend plus ancienne que toutes les églises de l’autre côté des fleuves : les autorités ottomanes n’autorisaient pas de nouvelle construction orthodoxe dans Belgrade même, si bien que la plus vieille église de la ville actuelle se trouve sur la rive opposée, dans ce qui était alors un empire étranger. Elle est petite, blanchie à la chaux, et posée sous le niveau de la rue, car bâtir vers le bas était une manière de bâtir assez modestement pour être autorisé. À l’intérieur, une iconostase baroque de Dimitrije Bačević, dorée, chargée et un peu trop somptueuse pour la pièce — exactement ce que commanderait une paroisse frontalière fortunée. Le cimetière alentour abrite des marchands de Zemun dont les noms figurent dans les registres douaniers de deux empires. Arrêtez-vous un instant avant la dernière montée : de la tour, vous verrez les deux côtés de la frontière d’un seul regard, et cela ressemblera à une seule ville — ce qui n’est devenu vrai qu’en 1934.",
    },
    gardos: {
      title: "Gardoš et la tour du Millénaire",
      kicker: "La tour",
      landmark: "Gardoš, sur les ruines de la forteresse de Zemun",
      direction:
        "Vous êtes à la dernière étape. La descente est évidente d’ici, et le quai est à dix minutes si vous voulez finir la balade au bord de l’eau.",
      script:
        "La tour est la raison pour laquelle on monte à Gardoš, et presque tout ce que la plupart des visiteurs croient à son sujet est faux. Les Belgradois l’appellent la tour de Sibinjanin Janko, du nom du général hongrois Jean Hunyadi, qui est effectivement mort à Zemun en 1456 en défendant la région contre l’avancée ottomane. La tour n’a rien à voir avec lui. Elle a été construite en 1896, quatre cent quarante ans plus tard, parmi plusieurs monuments marquant mille ans d’installation hongroise dans la plaine pannonienne — une déclaration de propriété déguisée en belvédère, posée exprès sur les ruines de la forteresse médiévale pour que le nouvel empire se tienne littéralement sur l’ancien. Deux décennies plus tard, cet empire n’existait plus, et la tour a gardé le surnom local plutôt que le sens officiel. Montez. Du sommet, la Save arrive par la gauche, le Danube par la droite, la Grande Île de la Guerre se tient au milieu de la dispute, et la forteresse de Belgrade vous regarde depuis l’autre rive. Deux villes, deux empires, une vue. Votre balade s’achève ici.",
    },
  },
  paths: {
    "kej>pijaca": {
      main: {
        label: "Droit depuis le quai",
        blurb: "Deux pâtés de maisons vers l’intérieur, le plus direct jusqu’au marché.",
      },
      obala: {
        label: "D’abord le long du quai",
        blurb: "Vers le nord au bord de l’eau, devant les restaurants sur barges, puis dans les terres. Plus lent, plus beau.",
      },
    },
    "pijaca>bogorodica": {
      main: { label: "Par les ruelles", blurb: "Le chemin court à travers le damier." },
      gospodska: {
        label: "Par Gospodska",
        blurb: "La rue piétonne commerçante — plus animée, et la raison pour laquelle Zemun a un corso.",
      },
    },
    "bogorodica>nikolajevska": {
      main: { label: "La montée directe", blurb: "Droit dans la pente par les ruelles. Raide par endroits." },
      padina: {
        label: "Autour du coteau",
        blurb: "Un contour plus doux autour de la pente, avec la vue par-dessus les toits.",
      },
    },
    "nikolajevska>gardos": {
      main: { label: "Droit à la tour", blurb: "Les derniers centaines de mètres, tout en montée." },
      stepenice: {
        label: "Par les escaliers de Gardoš",
        blurb: "La venelle en marches entre les vieilles maisons du coteau. Plus lent, bien plus joli.",
      },
    },
  },
  detours: {
    magistrat: {
      name: "Le Magistrat de Zemun",
      blurb:
        "L’ancien hôtel de ville de 1823, des décennies où Zemun s’administrait en ville royale libre et avait les papiers pour le prouver.",
    },
    ratnoostrvo: {
      name: "Belvédère sur la Grande Île de la Guerre",
      blurb:
        "Quelques minutes de plus le long du quai pour la vue la plus dégagée sur l’île inhabitée du confluent, et sur les hérons qui la possèdent.",
    },
    sinagoga: {
      name: "L’ancienne synagogue",
      blurb:
        "Le bâtiment de la synagogue ashkénaze de Zemun est toujours debout, rue Dubrovačka. Le grand-père de Theodor Herzl y priait, ce qui fait de cette petite rue une note de bas de page de l’histoire du sionisme.",
    },
  },
  variants: {
    full: { label: "Balade complète", blurb: "Cinq étapes, du quai à la tour." },
    short: {
      label: "Balade courte",
      blurb: "Trois étapes, de l’église à la tour — la moitié qui monte.",
    },
  },
  directions: {
    forward: { label: "Quai d’abord", blurb: "Départ au bord du Danube, montée jusqu’à la tour." },
    reverse: { label: "Tour d’abord", blurb: "Départ en haut, arrivée au bord de l’eau." },
  },
};
