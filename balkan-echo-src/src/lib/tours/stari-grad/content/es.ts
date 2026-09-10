import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const es: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Paseo histórico por Stari Grad",
  tagline: "De las murallas a las mesas bohemias.",
  note: "Seis lugares. Un paseo. Con tiempo de sobra para un café, un desvío o unas buenas vistas.",
  stops: {
    kalemegdan: {
      title: "Kalemegdan y la Fortaleza de Belgrado",
      kicker: "Empieza aquí",
      landmark: "Entrada al parque, al final de Knez Mihailova",
      direction:
        "Entra en el parque y deja las murallas a tu izquierda. Sigue el camino ancho hacia las vistas abiertas de los ríos.",
      script:
        "Bienvenido a Kalemegdan, la altura desde la que Belgrado lleva vigilando más de dos mil años. Debajo de ti, el Sava se encuentra con el Danubio; detrás, la ciudad vieja asciende por la loma. Por eso todos quisieron esta colina. Los romanos levantaron aquí un campamento militar, los gobernantes serbios medievales la reforzaron y los ejércitos otomano y habsburgo se la disputaron una y otra vez. El nombre Kalemegdan viene de las palabras turcas para fortaleza y campo de batalla, un recordatorio de que este parque tranquilo fue el borde de un imperio. No busques un castillo perfecto: busca las capas en la piedra. Las puertas, los baluartes y los muros que siguen en pie pertenecen a siglos y a gobernantes distintos. A principios del siglo quince, el déspota Stefan Lazarević reconstruyó Belgrado y la convirtió en capital serbia. Más tarde la fortaleza se rehízo para la artillería y después pasó lentamente de zona militar a parque favorito de la ciudad. Hoy es el libro de historia de Belgrado con las páginas dejadas al aire libre. Antes de seguir, fíjate un momento en los ríos: son la razón de que este lugar exista.",
    },
    victor: {
      title: "Monumento al Vencedor",
      kicker: "El mirador",
      landmark: "Terraza del Pobednik",
      direction:
        "Ponte de cara al Vencedor y toma el camino de vuelta hacia la ciudad. Sal de Kalemegdan por la puerta principal y sigue recto por Knez Mihailova.",
      script:
        "Esta figura de bronce es Pobednik, el Vencedor, uno de los símbolos inconfundibles de Belgrado. El escultor Ivan Meštrović creó la estatua para marcar las victorias serbias en las guerras balcánicas y en la Primera Guerra Mundial. Se inauguró aquí en 1928, mirando a la confluencia con una espada en una mano y una paloma en la otra. Desde esta terraza el gesto resulta casi teatral: la ciudad mira hacia los ríos, hacia la llanura del otro lado y hacia las rutas por las que llegaron ejércitos y comerciantes. La colocación del monumento importa tanto como la escultura. En lugar de estar en una plaza, se alza sobre la muralla y convierte un punto de vigilancia militar en uno civil. Los belgradenses llevan casi un siglo discutiendo, bromeando y haciendo fotos alrededor de esta figura, pero las vistas mantienen el significado con los pies en la tierra. El Sava a tu izquierda y el Danubio enfrente hicieron de Belgrado un punto de encuentro y también un objetivo. Antes de seguir, gírate despacio hacia el centro. La animada calle peatonal que tienes delante unía este extremo amurallado con el corazón comercial del Belgrado moderno.",
    },
    knez: {
      title: "Calle Knez Mihailova",
      kicker: "El paseo de Belgrado",
      landmark: "Zona peatonal de Knez Mihailova",
      direction:
        "Baja por Knez Mihailova. Al final de la zona peatonal llegarás a la estatua ecuestre de la Plaza de la República.",
      script:
        "Knez Mihailova es el salón de Belgrado: una calle peatonal donde queda la gente, se instalan los músicos y parece pasar la ciudad entera a todos sus ritmos. Sigue el trazado de una calle romana anterior, pero los edificios elegantes que ves son sobre todo de finales del siglo diecinueve, cuando Belgrado se convertía en una capital europea moderna. La calle lleva el nombre del príncipe Mihailo Obrenović III, recordado por lograr la retirada de las guarniciones otomanas de las ciudades serbias. Levanta la vista mientras caminas. Muchas fachadas se construyeron para comerciantes, bancos y familias adineradas que querían demostrar que Belgrado pertenecía al nuevo siglo. Esto no es un pasillo de museo: sigue siendo un sitio para recados, cafés, citas y paseos largos. Esa mezcla es justamente el sentido. Una fortaleza te cuenta quién luchó por una ciudad; Knez Mihailova te enseña en qué quería convertirse: segura de sí misma, sociable y conectada con el mundo. Sigue bajando y deja que la calle te lleve hasta la plaza que se ha convertido en el lugar de encuentro favorito de Belgrado.",
    },
    republic: {
      title: "Plaza de la República",
      kicker: "Nos vemos en el caballo",
      landmark: "Monumento al príncipe Mihailo",
      direction:
        "Con el caballo a tu espalda, toma la calle de la izquierda, Francuska. Gira a la derecha por Skadarska y sube por los adoquines.",
      script:
        "Estás en la Plaza de la República, el cruce entre el Belgrado antiguo y el moderno. La estatua ecuestre del centro honra al príncipe Mihailo Obrenović III, y su brazo alzado señala hacia ciudades que aún estaban bajo control otomano cuando se concibió el monumento. Durante generaciones la gente ha quedado aquí diciendo simplemente: nos vemos en el caballo. La plaza está enmarcada por dos pesos pesados culturales. El Museo Nacional guarda arte y arqueología de Serbia y de mucho más lejos, y el Teatro Nacional lleva desde el siglo diecinueve siendo escenario central de teatro, ópera y ballet. Esta parte de la ciudad cambió deprisa después de la época otomana, cuando las murallas y las puertas dejaron paso a bulevares, instituciones y plazas públicas. Por eso la Plaza de la República resulta solemne pero nunca vacía: es un lugar construido para reunirse. Haz una foto si quieres y luego dirígete a otro tipo de referencia belgradense. Skadarlija está a unas pocas calles: allí los escritores, actores y conversadores nocturnos de la ciudad crearon su propia tradición.",
    },
    skadarlija: {
      title: "Skadarlija",
      kicker: "La calle bohemia",
      landmark: "Calle adoquinada Skadarska",
      direction:
        "Sigue subiendo por Skadarska y luego camina hacia el oeste por Dorćol hasta llegar al patio y el minarete de la mezquita Bajrakli.",
      script:
        "Los adoquines bajo tus pies marcan Skadarlija, el barrio bohemio más conocido de Belgrado. A finales del siglo diecinueve y principios del veinte, esta calle atrajo a escritores, pintores, periodistas, actores y músicos que preferían una noche larga de conversación a acostarse pronto. Creció junto al antiguo barrio cervecero de la ciudad, y sus tabernas se convirtieron en una prolongación informal de los teatros y las redacciones cercanas. Hoy los restaurantes y la música en directo hacen de Skadarlija una de las calles más visitadas, pero su ambiente viene de una tradición real de vida artística y no de un invento temático. Imagina humo, poesía, discusiones políticas y un cantante que va de mesa en mesa con una tamburica. Belgrado siempre ha tenido espacios formales para la cultura, como el teatro por el que acabas de pasar; Skadarlija representa la versión informal, donde la cultura ocurre entre la cena y el desacuerdo. Camina despacio sobre la piedra irregular y mira dónde pisas. Cuando estés listo, sigue la ruta hacia Dorćol, uno de los barrios más antiguos, para una parte más tranquila pero igual de importante de la historia por capas de Belgrado.",
    },
    dorcol: {
      title: "Mezquita Bajrakli y Dorćol",
      kicker: "Un barrio de capas",
      landmark: "Mezquita Bajrakli, Gospodar Jevremova",
      direction:
        "Has llegado a la última parada. Desde aquí hay diez minutos fáciles de vuelta a Knez Mihailova, o un paseo tranquilo por los cafés de Dorćol.",
      script:
        "La mezquita Bajrakli es un recordatorio pequeño pero potente de que Belgrado nunca ha pertenecido a un solo capítulo de la historia. Construida en época otomana, es la única mezquita que sobrevive de cuando Belgrado era una ciudad fronteriza otomana importante. Su nombre alude al estandarte, el bajrak, que se izaba aquí para señalar la hora de la oración a las demás mezquitas. El edificio ha sobrevivido a conflictos, a cambios y a largos periodos en los que la ciudad a su alrededor era muy distinta. Alrededor tienes Dorćol, un barrio cuyo nombre viene de una expresión turca que significa cruce de caminos. Es apropiado. Durante siglos esta zona reunió a comerciantes, artesanos, comunidades religiosas y viajeros que se movían entre el Danubio, la fortaleza y la ciudad. Tu paseo ha ido de murallas y monumentos a paseos, teatros, tabernas y un lugar de culto vivo. Esa es la forma útil de recordar Belgrado: no como una ciudad congelada en un pasado glorioso, sino como capas de gente que hacen sitio para la capa siguiente. La ruta piloto termina aquí. Tómate tu tiempo y sigue escuchando la ciudad.",
    },
  },
  paths: {
    "kalemegdan>victor": {
      main: {
        label: "Recto por la avenida",
        blurb: "El camino directo por la avenida principal hasta la terraza.",
      },
      ruzica: {
        label: "Bajando por la iglesia Ružica",
        blurb:
          "Un rodeo por la Puerta Zindan hasta la iglesita encajada en la muralla, y de vuelta arriba.",
      },
    },
    "victor>knez": {
      main: {
        label: "Por la puerta principal",
        blurb: "De vuelta por el parque y directo a la calle peatonal.",
      },
      riverside: {
        label: "Río y catedral",
        blurb:
          "Bajando por las murallas occidentales hacia el Sava y entrando junto a la catedral.",
      },
    },
    "knez>republic": {
      main: {
        label: "Todo el paseo",
        blurb: "Knez Mihailova entera, tal como la describe la narración.",
      },
      obilicev: {
        label: "Por Obilićev venac",
        blurb: "Una manzana más allá: terrazas de café en vez de escaparates.",
      },
    },
    "republic>skadarlija": {
      main: {
        label: "Subiendo por Francuska",
        blurb: "El camino corto, tal como lo describe la narración.",
      },
      cetinjska: {
        label: "Por el patio de Cetinjska",
        blurb: "Pasando por el mercado Bajloni hasta el patio de la antigua fábrica de cerveza.",
      },
    },
    "skadarlija>dorcol": {
      main: {
        label: "Calles tranquilas",
        blurb: "El camino calmado por el Dorćol residencial.",
      },
      strahinja: {
        label: "Por Strahinjića Bana",
        blurb: "La calle de bares de Belgrado: más animada y algo más larga.",
      },
    },
  },
  detours: {
    ruzica: {
      name: "Iglesia Ružica y Santa Petka",
      blurb: "Una iglesia encajada en la muralla, con lámparas hechas de armas usadas.",
    },
    terrace: {
      name: "La Gran Terraza",
      blurb: "Las mejores vistas del encuentro del Sava y el Danubio, a un minuto del Vencedor.",
    },
    cathedral: {
      name: "Catedral y la taberna ?",
      blurb: "La taberna más antigua de Belgrado, aún frente a la iglesia.",
    },
    ethnographic: {
      name: "Museo Etnográfico",
      blurb: "Vida rural, trajes y artesanía, en Studentski trg.",
    },
    nationalmuseum: {
      name: "Museo Nacional",
      blurb: "En la propia plaza: arqueología abajo, pintura arriba.",
    },
    bajloni: {
      name: "Mercado Bajloni y Cetinjska",
      blurb: "Un mercado de mañana junto al patio que de noche es el ocio de Belgrado.",
    },
    turbe: {
      name: "Türbe de Sheikh Mustafa",
      blurb: "Un pequeño mausoleo otomano en una calle tranquila de Dorćol.",
    },
  },
  variants: {
    full: { label: "Paseo completo", blurb: "Seis paradas, de la fortaleza a Dorćol." },
    short: {
      label: "Paseo corto",
      blurb: "Cuatro paradas, de la fortaleza a la Plaza de la República.",
    },
  },
  directions: {
    forward: {
      label: "Fortaleza primero",
      blurb: "Empieza en Kalemegdan y termina en Dorćol.",
    },
    reverse: {
      label: "Dorćol primero",
      blurb: "Hazlo al revés y acaba en la fortaleza.",
    },
  },
};
