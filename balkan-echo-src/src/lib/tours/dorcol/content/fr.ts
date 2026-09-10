import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const fr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Dorćol, balade gourmande",
  tagline: "Un marché, une cour de brasserie, un fleuve, et la plus vieille taverne de Belgrade.",
  note: "Cinq étapes et beaucoup à manger. Faites celle-ci le ventre vide, et partez avant midi si vous voulez le marché.",
  stops: {
    bajloni: {
      title: "Marché Bajloni",
      kicker: "Partez affamé",
      landmark: "Skadarlijska pijaca, près de Cetinjska",
      direction:
        "Quittez le marché vers le nord-ouest, en montant à travers le damier de Dorćol, jusqu’à une large rue de vieilles vitrines.",
      script:
        "Commencez ici, et commencez tôt. C’est le marché Bajloni, du nom de la famille Bajloni, brasseurs tchèques installés à Belgrade au dix-neuvième siècle et dont la brasserie se tenait juste à côté de ces étals. Le marché est ce qu’il faut voir en premier parce qu’il explique tout ce que vous mangerez ensuite. Cherchez de l’ajvar en bocal — une purée de poivrons rouges grillés, faite à l’automne en quantités énormes, et dont chacun vous assurera que sa recette est la seule correcte. Cherchez le kajmak, une matière grasse laitière fraîche entre la crème caillée et le fromage jeune, qui se met sur le pain, sur la viande grillée et sur tout ce qui passe à portée. Il y aura du fromage vendu au seau de saumure, du miel vendu par l’apiculteur lui-même, et en saison des framboises qui font passer les importées pour une plaisanterie. Rien ici n’est arrangé pour la photo. Achetez une petite chose et mangez-la debout, c’est la bonne façon. Puis marchez vers le nord-ouest : la rue où vous allez est celle où les marchands de Belgrade vendent de la nourriture et tout le reste depuis deux siècles.",
    },
    dusanova: {
      title: "Cara Dušana",
      kicker: "La rue du négoce",
      landmark: "Les vieilles vitrines du haut Dorćol",
      direction:
        "Prenez vers le nord-est et descendez vers le Danube. Les rues s’achèvent sur un large quai au bord de l’eau.",
      script:
        "Cara Dušana est l’une des plus anciennes rues commerçantes de Belgrade encore en activité, et cela se voit : vitrines étroites, enseignes peintes à la main, outillage, cuir, mercerie et épices. Le nom Dorćol vient d’une expression turque signifiant carrefour, et c’est exactement ce que fut ce quartier : des familles marchandes séfarades, grecques, aroumaines, arméniennes et serbes vivant les unes sur les autres et négociant tout ce que le Danube remontait. C’est ce mélange qui explique la cuisine belgradoise. La viande grillée vient d’une tradition, la pâte d’une autre, le rituel du café d’une troisième, et les disputes sur ce qui est authentique de toutes à la fois. Entrez dans une boutique d’épices si elle est ouverte : paprika en trois forces, poivrons séchés en guirlandes, vegeta, laurier en sachet. C’est aussi le territoire du burek. Ici, le burek est un rouleau de pâte feuilletée au fromage ou à la viande, mangé le matin avec une boisson au yaourt, et ce n’est pas un en-cas : c’est un petit-déjeuner sérieux qui met fin aux conversations. Puis descendez au fleuve.",
    },
    dunavskikej: {
      title: "Le quai du Danube",
      kicker: "Le fleuve",
      landmark: "La rive danubienne de Dorćol",
      direction:
        "Revenez vers l’intérieur, au sud-ouest, dans Dorćol même, et cherchez la rue bordée de terrasses de café des deux côtés.",
      script:
        "Le Danube à Dorćol est un fleuve de travail avec une habitude d’été. En hiver, ce quai est vide, gris et immense. En été, il se remplit de bars en plein air, de sonos, de gens qui se jettent à l’eau depuis le béton, et d’odeur de poisson grillé. C’est l’autre moitié du manger belgradois : pas la kafana à nappe, mais la chaise en plastique au bord de l’eau avec une bière et une assiette de petites fritures. Si vous voyez le mot riblja sur une pancarte, c’est du poisson. Si vous voyez smuđ, c’est de la sandre de rivière, et c’est la bonne. Le rapport de Belgrade à ses deux fleuves a toujours été étrange : pendant presque toute son histoire, l’eau fut une ligne de défense et une frontière, si bien que la ville leur a tourné le dos à tous les deux et s’est construite en hauteur sur la crête. Ce n’est que depuis quelques décennies que l’idée d’une berge où l’on s’assoit est venue à quelqu’un. Vous êtes du côté plus récent et plus détendu de cette histoire. Puis rentrez dans les terres : la rue suivante est celle où la ville prend son café.",
    },
    strahinja: {
      title: "Strahinjića Bana",
      kicker: "La rue des terrasses",
      landmark: "La rue à terrasses de Dorćol",
      direction:
        "Continuez au sud-ouest, en descente, jusqu’à l’une des plus vieilles rues de la ville et une taverne dont le nom est un point d’interrogation.",
      script:
        "Au début des années 2000, Belgrade a surnommé cette rue la Silicon Valley, et cela n’avait rien à voir avec la technologie. C’était une blague sur la clientèle, et elle a assez bien tenu pour qu’on l’emploie encore, un peu gêné. Ce qu’il y a réellement ici, c’est la plus dense enfilade de terrasses de Belgrade : plusieurs pâtés de maisons où tout l’objet est de rester assis dehors deux heures devant un seul café en regardant qui passe. Cela mérite une explication, car c’est le repas local que vous avez le plus de chances de rater. Ici, le café n’est pas une transaction. Commandez une domaća kafa et l’on vous apporte un café non filtré en petite tasse, marc au fond, avec un verre d’eau, et l’on attend que vous restiez. Personne ne vous apportera l’addition avant que vous ne la demandiez, et la demander tôt est légèrement impoli. Asseyez-vous. Commandez une seule chose. Ne regardez pas votre téléphone pendant vingt minutes. C’est la partie de la culture culinaire qui n’a pas d’ingrédients. Puis continuez à descendre : la dernière étape se dispute avec une église depuis 1823.",
    },
    kraljapetra: {
      title: "Kralja Petra et la taverne ?",
      kicker: "Dernière étape",
      landmark: "En face de la cathédrale",
      direction:
        "Vous êtes à la dernière étape. Knez Mihailova et la forteresse sont à cinq minutes, et vous avez mérité de vous asseoir.",
      script:
        "La taverne en face de la cathédrale a un point d’interrogation pour enseigne, et la raison est une querelle de deux cents ans. Elle a ouvert dans les années 1820 et a un temps porté un nom qui renvoyait à la cathédrale d’en face. L’Église s’est opposée à ce qu’un débit de boissons utilise son nom. Le temps que la dispute se règle, le patron a peint un point d’interrogation sur la façade à titre provisoire. Le provisoire a gagné, et depuis c’est le ? — la plus vieille taverne subsistante de Belgrade, plafond bas, boiseries, et toujours en service. C’est une kafana, et une kafana n’est pas un restaurant. C’est une salle où l’on attend que vous restiez des heures : viande grillée, haricots, chou, rakija en petits verres, et à un moment, si la soirée se passe bien, de la musique. Commandez une pljeskavica si vous voulez la chose célèbre, ou un prebranac si vous voulez comprendre ce que les gens mangeaient vraiment. Dans tous les cas, asseyez-vous. Votre balade s’achève à une table, ce qui, pour une balade gourmande dans Dorćol, est la seule fin honnête.",
    },
  },
  paths: {
    "bajloni>dusanova": {
      main: { label: "En montée dans le damier", blurb: "La montée directe vers le nord-ouest à travers Dorćol." },
      dobracina: {
        label: "Par Dobračina",
        blurb: "Une rue plus loin, plus calme et résidentielle, devant les vieilles cours.",
      },
    },
    "dusanova>dunavskikej": {
      main: { label: "Descendre au Danube", blurb: "Droit en descente jusqu’au quai. Six minutes." },
    },
    "dunavskikej>strahinja": {
      main: { label: "Remonter dans Dorćol", blurb: "Le chemin direct depuis l’eau vers l’intérieur." },
      jevremova: {
        label: "Par Gospodar Jevremova",
        blurb: "À travers les brocantes et les antiquaires — plus lent, et payant si quelque chose est ouvert.",
      },
    },
    "strahinja>kraljapetra": {
      main: { label: "Tout droit en bas", blurb: "Le chemin court jusqu’au coin de la cathédrale." },
      dositejeva: {
        label: "Par Dositejeva",
        blurb: "Le vieux pâté pavé : boulangeries, deux ou trois petites cuisines, moins de circulation.",
      },
    },
  },
  detours: {
    cetinjska: {
      name: "La cour de Cetinjska",
      blurb:
        "L’ancienne cour de la brasserie Bajloni, aujourd’hui une douzaine de bars dans les halles de production. Morte jusqu’à la nuit, puis la cour la plus animée de la ville.",
    },
    jevremova: {
      name: "Antiquaires de Gospodar Jevremova",
      blurb:
        "Une courte enfilade de brocantes et d’antiquaires. Rien à manger, tout à regarder, et le bon endroit pour acheter un vieux verre à rakija.",
    },
  },
  variants: {
    full: { label: "Balade complète", blurb: "Cinq étapes, du marché à la taverne." },
    short: {
      label: "Balade courte",
      blurb: "Trois étapes, du fleuve à la taverne — la moitié où l’on boit.",
    },
  },
  directions: {
    forward: { label: "Marché d’abord", blurb: "Départ au marché, arrivée à la taverne." },
    reverse: { label: "Taverne d’abord", blurb: "Départ à la taverne, arrivée au marché." },
  },
};
