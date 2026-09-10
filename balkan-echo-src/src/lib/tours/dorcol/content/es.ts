import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const es: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Dorćol, paseo de comer",
  tagline: "Un mercado, un patio de cervecería, un río y la taberna más antigua de Belgrado.",
  note: "Cinco paradas y mucho comer. Haz este con hambre, y empieza antes del mediodía si quieres ver el mercado.",
  stops: {
    bajloni: {
      title: "Mercado Bajloni",
      kicker: "Empieza con hambre",
      landmark: "Skadarlijska pijaca, junto a Cetinjska",
      direction:
        "Sal del mercado hacia el noroeste, cuesta arriba por la cuadrícula de Dorćol, hasta una calle ancha de escaparates antiguos.",
      script:
        "Empieza aquí, y empieza temprano. Este es el mercado Bajloni, llamado así por la familia Bajloni, cerveceros checos que se establecieron en Belgrado en el siglo diecinueve y cuya fábrica estaba justo al lado de estos puestos. El mercado es lo primero que hay que ver porque explica todo lo que vas a comer después. Busca ajvar en tarros: una crema de pimiento rojo asado que se hace en otoño en cantidades enormes y sobre la que cada persona te dirá que su receta es la única correcta. Busca kajmak, una grasa láctea fresca entre la nata cuajada y el queso joven, que se pone en el pan, sobre la carne a la brasa y sobre cualquier otra cosa a mano. Habrá queso vendido de cubos de salmuera, miel vendida por el propio apicultor y, en temporada, frambuesas que hacen parecer un chiste a las importadas. Aquí nada está montado para las fotos. Compra algo pequeño y cómelo de pie, que es la forma correcta. Después camina al noroeste, porque la calle a la que vas es donde los comerciantes de Belgrado llevan dos siglos vendiendo comida y todo lo demás.",
    },
    dusanova: {
      title: "Cara Dušana",
      kicker: "La calle del comercio",
      landmark: "Los escaparates antiguos del alto Dorćol",
      direction:
        "Ve hacia el noreste y baja hacia el Danubio. Las calles terminan en un muelle amplio junto al agua.",
      script:
        "Cara Dušana es una de las calles comerciales en activo más antiguas de Belgrado, y se le nota: escaparates estrechos, rótulos pintados a mano, herramientas, cuero, mercería y especias. El nombre Dorćol viene de una expresión turca que significa cruce de caminos, y eso es lo que fue este barrio: familias comerciantes sefardíes, griegas, arrumanas, armenias y serbias viviendo unas encima de otras y comerciando con todo lo que el Danubio traía río arriba. Esa mezcla es la razón de que la comida belgradense sea como es. La carne a la brasa viene de una tradición, la masa de otra, el ritual del café de una tercera, y las discusiones sobre qué es auténtico de todas a la vez. Asómate a una tienda de especias si está abierta: pimentón en tres grados de picante, pimientos secos en ristras, vegeta, laurel en bolsas de papel. Esto es además territorio de burek. Aquí burek es un rollo de hojaldre con queso o carne, se come por la mañana con una bebida de yogur, y no es un aperitivo: es un desayuno serio que da por terminadas las conversaciones. Después baja al río.",
    },
    dunavskikej: {
      title: "El muelle del Danubio",
      kicker: "El río",
      landmark: "La ribera danubiana de Dorćol",
      direction:
        "Vuelve hacia dentro, al suroeste, al Dorćol propiamente dicho, y busca la calle con terrazas de café a ambos lados.",
      script:
        "El Danubio en Dorćol es un río de trabajo con una costumbre veraniega. En invierno este muelle está vacío, gris y enorme. En verano se llena de bares al aire libre, equipos de sonido, gente que se tira al agua desde el hormigón y olor a pescado a la brasa. Esa es la otra mitad del comer belgradense: no la kafana con mantel, sino la silla de plástico junto al agua con una cerveza y un plato de pescaditos fritos. Si ves la palabra riblja en un cartel, es pescado. Si ves smuđ, es lucioperca del río, y es la buena. La relación de Belgrado con sus dos ríos siempre ha sido rara: durante casi toda su historia el agua fue línea defensiva y frontera, así que la ciudad les dio la espalda a los dos y creció hacia arriba por la loma. Solo en las últimas décadas se le ha ocurrido a alguien que la orilla es un sitio para sentarse. Estás en el lado más nuevo y relajado de esa historia. Después vuelve hacia dentro, porque la siguiente calle es donde la ciudad se toma el café.",
    },
    strahinja: {
      title: "Strahinjića Bana",
      kicker: "La calle de las terrazas",
      landmark: "La calle de terrazas de Dorćol",
      direction:
        "Sigue al suroeste, cuesta abajo, hasta una de las calles más antiguas de la ciudad y una taberna que se llama con un signo de interrogación.",
      script:
        "A principios de los 2000 Belgrado apodó a esta calle Silicon Valley, y no tenía nada que ver con la tecnología. Era una broma sobre la clientela, y cuajó lo bastante para que la gente aún la use con cierta vergüenza. Lo que hay aquí de verdad es la hilera de terrazas más densa de Belgrado: varias manzanas donde el objetivo entero es sentarse fuera dos horas con un solo café y mirar quién pasa. Esto merece una explicación, porque es la comida local que más probablemente harás mal. Aquí el café no es una transacción. Si pides una domaća kafa te traen café sin filtrar en taza pequeña con los posos en el fondo, acompañado de un vaso de agua, y se espera que te quedes. Nadie te traerá la cuenta hasta que la pidas, y pedirla pronto resulta un poco descortés. Siéntate. Pide una sola cosa. No mires el móvil durante veinte minutos. Esta es la parte de la cultura gastronómica que no tiene ingredientes. Después sigue cuesta abajo, porque la última parada lleva discutiendo con una iglesia desde 1823.",
    },
    kraljapetra: {
      title: "Kralja Petra y la taberna ?",
      kicker: "Última parada",
      landmark: "Frente a la Catedral",
      direction:
        "Has llegado a la última parada. Knez Mihailova y la fortaleza están a cinco minutos, y te has ganado el sentarte.",
      script:
        "La taberna de enfrente de la catedral tiene un signo de interrogación por rótulo, y la razón es una disputa de doscientos años. Abrió en la década de 1820 y en algún momento operó con un nombre que aludía a la catedral de enfrente. La iglesia se opuso a que un establecimiento de bebidas usara su nombre. Mientras la discusión seguía, el dueño pintó un signo de interrogación en la fachada como algo provisional. Lo provisional ganó, y desde entonces es el ?: la taberna más antigua que sobrevive en Belgrado, de techos bajos, de madera y todavía en servicio. Esto es una kafana, y una kafana no es un restaurante. Es una sala donde se espera que te quedes horas: carne a la brasa, judías, col, rakija en vasitos y, en algún momento, si la noche va como debe, música. Pide pljeskavica si quieres lo famoso, o prebranac si quieres entender qué comía la gente de verdad. En cualquier caso, siéntate. Tu paseo acaba en una mesa, que para un paseo de comer por Dorćol es el único final honesto.",
    },
  },
  paths: {
    "bajloni>dusanova": {
      main: { label: "Cuesta arriba por la cuadrícula", blurb: "La subida directa al noroeste por Dorćol." },
      dobracina: {
        label: "Por Dobračina",
        blurb: "Una calle más allá, más tranquila y residencial, junto a los patios antiguos.",
      },
    },
    "dusanova>dunavskikej": {
      main: { label: "Bajar al Danubio", blurb: "Recto cuesta abajo hasta el muelle. Seis minutos." },
    },
    "dunavskikej>strahinja": {
      main: { label: "Volver a Dorćol", blurb: "El camino directo desde el agua hacia dentro." },
      jevremova: {
        label: "Por Gospodar Jevremova",
        blurb: "Entre las tiendas de anticuarios y trastos: más lento, y vale la pena si hay algo abierto.",
      },
    },
    "strahinja>kraljapetra": {
      main: { label: "Recto para abajo", blurb: "El camino corto hasta la esquina de la catedral." },
      dositejeva: {
        label: "Por Dositejeva",
        blurb: "La manzana empedrada antigua: panaderías, un par de cocinas pequeñas, menos tráfico.",
      },
    },
  },
  detours: {
    cetinjska: {
      name: "El patio de Cetinjska",
      blurb:
        "El antiguo patio de la cervecería Bajloni, hoy una docena de bares en las naves de producción. Muerto hasta que anochece, y después el patio más animado de la ciudad.",
    },
    jevremova: {
      name: "Anticuarios de Gospodar Jevremova",
      blurb:
        "Una corta hilera de tiendas de trastos y antigüedades. Nada para comer, todo para mirar, y buen sitio para comprar un vasito viejo de rakija.",
    },
  },
  variants: {
    full: { label: "Paseo completo", blurb: "Cinco paradas, del mercado a la taberna." },
    short: {
      label: "Paseo corto",
      blurb: "Tres paradas, del río a la taberna: la mitad de beber.",
    },
  },
  directions: {
    forward: { label: "Mercado primero", blurb: "Empieza en el mercado y acaba en la taberna." },
    reverse: { label: "Taberna primero", blurb: "Empieza en la taberna y acaba en el mercado." },
  },
};
