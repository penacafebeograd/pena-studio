import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const fr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Savamala et les quais",
  tagline: "Des entrepôts, un grand hôtel fané, et une dispute au sujet du fleuve.",
  note: "Cinq lieux dans un quartier petit et dense — la balade la plus courte, et celle qui contient le plus d’opinions.",
  stops: {
    zelenivenac: {
      title: "Zeleni venac",
      kicker: "Départ ici",
      landmark: "Le marché et la gare de bus",
      direction:
        "Descendez vers l’ouest, en vous éloignant du marché. Les rues plongent vite vers le fleuve ; cherchez une maison basse et ancienne à balcon de bois.",
      script:
        "Zeleni venac veut dire couronne verte, ce qui est un nom très doux pour le coin le plus bruyant de Belgrade. Il y a un marché ici depuis le dix-neuvième siècle, et c’est toujours là que la ville achète son persil. Autour : un terminus de bus, un passage souterrain, plusieurs kiosques et un état permanent de léger chaos dont les Belgradois se plaignent sans cesse et qu’ils défendraient bec et ongles. Vous êtes en haut de Savamala, le quartier qui descend d’ici jusqu’à la Save. Pendant l’essentiel du siècle dernier, Savamala fut l’endroit par où entraient les marchandises et où personne ne choisissait d’habiter : entrepôts, gares de fret, hangars de douane, et le trafic entre le port et la ville. Puis elle a été négligée pendant des décennies. Et puis — brièvement, vers 2010 — elle est devenue les quelques rues les plus intéressantes des Balkans. Vous allez traverser les trois versions à la fois. Descendez. Plus vous approchez de l’eau, plus les bâtiments sont anciens et étranges.",
    },
    manak: {
      title: "La maison de Manak",
      kicker: "La survivante",
      landmark: "Gavrila Principa 5, maison de type balkanique",
      direction:
        "Continuez à descendre puis tournez vers le fleuve. Le bâtiment suivant est un grand hôtel fatigué, autrefois magnifique, à l’angle de la voie sur berge.",
      script:
        "Cette maison basse à étage en encorbellement et balcon de bois a environ deux cents ans, et c’est l’une des dernières de son espèce à Belgrade. Elle fut bâtie dans les années 1830 pour un marchand nommé Manak Mihailović, un Aroumain du sud des Balkans, dans le style qu’avaient jadis toutes les maisons de cette ville : rez-de-chaussée de pierre pour la boutique et le stock, étage à pans de bois avançant sur la rue, larges avant-toits. Presque toutes ont été démolies. Belgrade a passé la fin du dix-neuvième siècle à s’efforcer d’avoir l’air viennoise, et l’architecture vernaculaire d’époque ottomane a été la première à disparaître — non parce qu’elle était mal bâtie, mais parce qu’elle ressemblait au mauvais empire. Celle-ci a survécu parce qu’elle a continué de servir. Elle abrite aujourd’hui une collection ethnographique, ce qui est une manière polie de dire que le bâtiment lui-même est la pièce exposée. Regardez les proportions avant de repartir : voilà à quoi ressemblait toute la pente jusqu’au fleuve.",
    },
    bristol: {
      title: "Hôtel Bristol",
      kicker: "Le grand hôtel",
      landmark: "Karađorđeva 50, bâti en 1912",
      direction:
        "Marchez vers le nord le long de la voie sur berge, l’eau à votre gauche, jusqu’à un long entrepôt de brique un peu à l’écart de tout le reste.",
      script:
        "Le Bristol a ouvert en 1912, deux ans avant la Première Guerre mondiale, ce qui en dit long sur le calendrier. Nikola Nestorović l’a conçu pour une ville qui se croyait promise au statut de métropole fluviale : cette rue était l’artère qui reliait le port de la Save au centre, et un grand hôtel près du port relevait d’une logique commerciale évidente. Levez les yeux sur la façade — elle est vraiment bonne, assurée et légèrement ornée, faite pour des voyageurs qui descendaient d’un vapeur du Danube et voulaient être impressionnés. Puis regardez son état. Le port a déménagé, le trafic est devenu routier, les clients ont cessé de venir, et le Bristol a passé des décennies à être un hôtel que Belgrade avait oublié de posséder. Il a fermé, réouvert, refermé, et fait l’objet d’un très grand nombre d’annonces de réhabilitation. C’est le symbole le plus honnête de Savamala : un bâtiment qui avait raison sur l’avenir et tort sur la date. Continuez vers le nord, car l’étape suivante est celle qui a fait arriver l’avenir, un moment.",
    },
    spanska: {
      title: "La Maison espagnole",
      kicker: "Le centre culturel",
      landmark: "Braće Krsmanović, ancien entrepôt",
      direction:
        "Poursuivez vers le nord par la rue au-dessus du fleuve. Comptez un quart d’heure ; cela finit sur une rangée d’arcades basses face à l’eau.",
      script:
        "Cet entrepôt à ossature de fer s’appelle la Maison espagnole et personne ne s’accorde sur la raison. L’explication la plus probable est que sa structure métallique fut achetée à une firme espagnole, ou récupérée d’un pavillon d’exposition espagnol ; les moins probables sont plus amusantes. Ce qui compte, c’est ce qui lui est arrivé récemment. En 2009, un centre culturel s’y est installé, et pendant quelques années Savamala fut réellement célèbre : galeries, studios de design, festivals, bars dans des entrepôts, et beaucoup de journalistes de passage écrivant que c’était le prochain Berlin. Une partie était de l’emballement. Une partie était réelle, et a changé la façon dont Belgrade pense sa propre rive. Puis la réhabilitation est arrivée. En 2016, des bâtiments d’une rue voisine ont été démolis de nuit par des hommes masqués, dans un épisode jamais expliqué de façon satisfaisante et devenu un scandale national. Le quartier du design s’est vidé ; les grues se sont levées au sud. Progrès ou perte : c’est la question la plus disputée de cette ville, et vous êtes exactement au milieu. Marchez vers le nord jusqu’à l’eau et décidez vous-même.",
    },
    betonhala: {
      title: "Beton Hala",
      kicker: "Dernière étape",
      landmark: "La halle de béton et la promenade de la Save",
      direction:
        "Vous êtes à la dernière étape. La forteresse est juste au-dessus si vous voulez continuer, ou la promenade file vers le sud le long de l’eau aussi loin que vous voulez.",
      script:
        "Beton Hala signifie, sans la moindre poésie, la halle de béton. Elle fut bâtie dans les années 1930 comme entrepôt portuaire au bord de l’eau — une simple rangée d’arcades dont le seul but était de garder la cargaison au sec. C’est pourquoi elle est ici, juste sur l’eau, et pourquoi elle occupe la meilleure position de tous les bâtiments de Belgrade. C’est aujourd’hui une enfilade de restaurants à nappes blanches et prix assortis, dont la terrasse regarde droit, par-dessus la Save, les tours de Nouveau Belgrade. Il vaut la peine de réfléchir à ce que l’on voit d’ici. Derrière et au-dessus de vous s’élève Kalemegdan, où commence la balade dans la vieille ville : deux mille ans de fortification. Devant vous, un fleuve le long duquel la ville a passé presque toute son histoire à se défendre, et au bord duquel elle vend désormais des dîners. À votre gauche, la construction neuve. Belgrade a toujours été une ville au sujet d’un fleuve qu’elle n’a jamais tout à fait su comment utiliser. Asseyez-vous au bord de l’eau, et laissez la dispute continuer.",
    },
  },
  paths: {
    "zelenivenac>manak": {
      main: { label: "Droit en descente", blurb: "La plongée directe vers le fleuve." },
      brankova: {
        label: "Par Brankova",
        blurb: "Une rue plus loin, le long des rails de tram et du passage souterrain. Plus bruyant, mais on voit le trafic pour lequel Savamala fut bâtie.",
      },
    },
    "manak>bristol": {
      main: { label: "Jusqu’à la voie sur berge", blurb: "Deux minutes, tout en descente." },
    },
    "bristol>spanska": {
      main: { label: "Par Karađorđeva", blurb: "La grande voie sur berge, entrepôts des deux côtés." },
      obala: {
        label: "Plus près de l’eau",
        blurb: "En bas, côté berge, devant les bâtiments de fret.",
      },
    },
    "spanska>betonhala": {
      main: {
        label: "Vers le nord le long du fleuve",
        blurb: "La longue portion de la balade. Suivez la rue au-dessus de l’eau jusqu’aux arcades.",
      },
      karadjordjeva: {
        label: "Par Karađorđeva",
        blurb: "La version rue : un peu plus longue, davantage de façades du vieux port.",
      },
    },
  },
  detours: {
    savapromenada: {
      name: "Vue sur Belgrade Waterfront",
      blurb:
        "Quelques minutes vers le sud pour bien voir les tours neuves qui montent le long de la Save — l’opération qui a remodelé ce quartier, et la dispute qu’elle a ouverte.",
    },
    kosancicev: {
      name: "Kosančićev venac",
      blurb:
        "En haut de la pente : le tracé de rues le plus ancien conservé à Belgrade, pavé et calme, avec le terrain vide où la Bibliothèque nationale a brûlé sous les bombes d’avril 1941.",
    },
    brankovmost: {
      name: "Pont de Branko",
      blurb:
        "Avancez sur le pont pour la vue classique vers la forteresse. Le pont actuel date de 1956 et repose sur les piles de celui d’avant-guerre.",
    },
  },
  variants: {
    full: { label: "Balade complète", blurb: "Cinq étapes, du marché à l’eau." },
    short: {
      label: "Balade courte",
      blurb: "Trois étapes, de l’hôtel à l’eau — la moitié au bord du fleuve.",
    },
  },
  directions: {
    forward: { label: "Marché d’abord", blurb: "Départ à Zeleni venac, descente jusqu’à la Save." },
    reverse: { label: "Fleuve d’abord", blurb: "Départ au bord de l’eau, remontée vers le marché." },
  },
};
