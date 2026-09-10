import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const es: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Zemun y Gardoš",
  tagline: "La ciudad del otro imperio, a media hora de la fortaleza.",
  note: "Cinco lugares, una cuesta al final y una torre que compensa la subida.",
  stops: {
    kej: {
      title: "Kej oslobođenja",
      kicker: "Empieza aquí",
      landmark: "El muelle de Zemun, junto al Danubio",
      direction:
        "Da la espalda al río y sube hacia el casco antiguo, dos manzanas, hasta la plaza de los mercados cubiertos.",
      script:
        "Estás en otro país — o lo estarías, durante casi todos los últimos trescientos años. Hasta 1918 esta orilla pertenecía al Imperio de los Habsburgo y la de enfrente a los otomanos, y después a Serbia. La frontera pasaba por el agua que tienes delante. Zemun era la ciudad fronteriza del lado imperial: tenía aduanas, guarnición y una estación de cuarentena donde los viajeros que llegaban de territorio otomano quedaban retenidos semanas antes de poder seguir hacia Europa. Belgrado y Zemun se miraron a través de los ríos durante siglos sin estar en el mismo estado. Por eso Zemun sigue sin parecerse a Belgrado. Las calles son más bajas, más anchas y más tranquilas, las casas son de una planta y centroeuropeas, y el conjunto parece un pueblo fluvial austrohúngaro al que le han pegado una capital. Mira la isla verde y plana de enfrente: es Veliko ratno ostrvo, la Gran Isla de la Guerra, aún deshabitada, aún reserva natural, exactamente donde el Sava se junta con el Danubio. Después camina hacia el interior, porque la plaza del mercado es donde una ciudad fronteriza te enseña de verdad para qué servía.",
    },
    pijaca: {
      title: "Mercado de Zemun",
      kicker: "El mercado",
      landmark: "Masarikov trg y los mercados cubiertos",
      direction:
        "Sal de la plaza hacia el oeste, por la calle peatonal de tiendas o por las callejuelas, hasta llegar a la iglesia grande con el campanario alto.",
      script:
        "Todo barrio balcánico que se respete se juzga por su mercado, y el de Zemun es de los buenos: ruidoso, barato, de temporada y absolutamente desinteresado en los turistas. En agosto es un muro de tomates y pimientos, en otoño huele a membrillo, y en los bordes hay gente vendiendo miel, queso y rakija en botellas de plástico con etiquetas escritas a mano. Este no es un mercado restaurado para el patrimonio. Es de los que trabajan. La plaza que lo rodea es el centro comercial de Zemun desde que la administración habsbúrgica trazó la ciudad en cuadrícula en el siglo dieciocho, y por eso aquí las calles se cruzan en ángulo recto mientras el casco viejo de Belgrado serpentea. Cerca queda Gospodska, la calle de los señores, que es el paseo comercial peatonal y el lugar donde había que dejarse ver mucho antes de que a nadie se le ocurriera llamarlo promenade. Compra fruta si tienes dónde meterla. Después ve hacia el oeste, porque el siguiente edificio es donde la ciudad reconoció, en piedra, de qué lado de la frontera estaba.",
    },
    bogorodica: {
      title: "Iglesia de la Madre de Dios",
      kicker: "La parroquia",
      landmark: "Bogorodičina crkva, calle Njegoševa",
      direction:
        "Ve hacia el noreste y empieza a subir. Las calles se estrechan y se inclinan; sigue hacia arriba hasta una iglesia mucho más pequeña y mucho más antigua.",
      script:
        "Esta es la principal iglesia ortodoxa de Zemun, terminada en 1780, y es una lección sobre cómo construyen las minorías cuando se les permite construir pero no llamar la atención. Los Habsburgo eran católicos y sus súbditos serbios ortodoxos eran tolerados más que bienvenidos, así que la arquitectura es un compromiso: una iglesia ortodoxa vestida de barroco centroeuropeo. El campanario es alto y austriaco; la planta y el iconostasio del interior son claramente bizantinos. Mira el iconostasio si puedes entrar: es una de las mejores piezas de pintura del siglo dieciocho de la ciudad, y la hicieron personas que además estaban negociando una identidad. Los serbios de Zemun eran comerciantes y artesanos con dinero y privilegios, y usaron ambos para construir en piedra lo que no siempre podían decir en voz alta. A partir de aquí el terreno empieza a subir, y cuanto más antiguos son los edificios, más pequeños se vuelven. Esa es la dirección habitual en un casco antiguo: cuanto más subes la cuesta, más atrás caminas en el tiempo.",
    },
    nikolajevska: {
      title: "Iglesia de San Nicolás",
      kicker: "La más antigua",
      landmark: "Nikolajevska crkva, de 1731",
      direction:
        "Sigue subiendo. La torre en la loma de arriba es la última parada; la callejuela gira a la izquierda y te deja delante.",
      script:
        "Esta es la iglesia más antigua que se conserva en Belgrado, y la mayoría de los belgradenses nunca ha entrado. Se terminó en 1731, lo que la hace más antigua que cualquier iglesia al otro lado de los ríos: las autoridades otomanas no permitían nueva construcción ortodoxa en Belgrado mismo, así que la iglesia más antigua de la ciudad actual está en la orilla opuesta, en lo que entonces era un imperio extranjero. Es pequeña, encalada y está por debajo del nivel de la calle, porque construir hacia abajo era una forma de construir lo bastante modesto como para que lo autorizaran. Dentro hay un iconostasio barroco de Dimitrije Bačević, dorado, abarrotado y un poco demasiado grandioso para la sala, que es exactamente lo que encargaría una feligresía fronteriza con dinero. El cementerio de alrededor guarda a comerciantes de Zemun cuyos nombres aparecen en los registros aduaneros de dos imperios. Detente un momento antes de la última subida, porque desde la torre verás los dos lados de la frontera a la vez, y parecerá una sola ciudad: algo que no fue cierto hasta 1934.",
    },
    gardos: {
      title: "Gardoš y la Torre del Milenio",
      kicker: "La torre",
      landmark: "Gardoš, sobre las ruinas de la fortaleza de Zemun",
      direction:
        "Has llegado a la última parada. Desde aquí bajar es evidente, y el muelle está a diez minutos si quieres acabar el paseo junto al agua.",
      script:
        "La torre es el motivo por el que la gente sube a Gardoš, y casi todo lo que la mayoría de los visitantes cree sobre ella es falso. Los belgradenses la llaman la torre de Sibinjanin Janko, por el general húngaro Juan Hunyadi, que efectivamente murió en Zemun en 1456 defendiendo la región del avance otomano. La torre no tiene nada que ver con él. Se construyó en 1896, cuatrocientos cuarenta años después, como uno de varios monumentos que marcaban mil años de asentamiento húngaro en la llanura panónica: una declaración de propiedad disfrazada de mirador, colocada a propósito sobre las ruinas de la fortaleza medieval para que el imperio nuevo se alzara literalmente encima del viejo. Dos décadas más tarde ese imperio ya no existía, y la torre conservó el apodo local en lugar del significado oficial. Súbela. Desde arriba el Sava llega por la izquierda, el Danubio por la derecha, la Gran Isla de la Guerra queda en medio de la discusión y la fortaleza de Belgrado te mira desde la otra orilla. Dos ciudades, dos imperios, una vista. Tu paseo termina aquí.",
    },
  },
  paths: {
    "kej>pijaca": {
      main: {
        label: "Recto desde el muelle",
        blurb: "Dos manzanas hacia dentro, el camino directo a la plaza del mercado.",
      },
      obala: {
        label: "Primero por el muelle",
        blurb: "Hacia el norte junto al agua, pasando los restaurantes flotantes, y luego adentro. Más lento, mejores vistas.",
      },
    },
    "pijaca>bogorodica": {
      main: { label: "Por las callejuelas", blurb: "El camino corto por la cuadrícula." },
      gospodska: {
        label: "Por Gospodska",
        blurb: "La calle peatonal de tiendas: más animada, y la razón de que Zemun tenga paseo.",
      },
    },
    "bogorodica>nikolajevska": {
      main: { label: "Subida directa", blurb: "Recto cuesta arriba por las callejuelas. Empinado a tramos." },
      padina: {
        label: "Rodeando la ladera",
        blurb: "Un trazado más suave alrededor de la cuesta, con vistas por encima de los tejados.",
      },
    },
    "nikolajevska>gardos": {
      main: { label: "Directo a la torre", blurb: "Los últimos cientos de metros, todo cuesta arriba." },
      stepenice: {
        label: "Por las escaleras de Gardoš",
        blurb: "El callejón escalonado entre las casas viejas de la ladera. Más lento, mucho más bonito.",
      },
    },
  },
  detours: {
    magistrat: {
      name: "El Magistrado de Zemun",
      blurb:
        "El antiguo ayuntamiento de 1823, de las décadas en que Zemun se gobernaba como villa real libre y tenía los papeles para demostrarlo.",
    },
    ratnoostrvo: {
      name: "Mirador de la Gran Isla de la Guerra",
      blurb:
        "Unos minutos más por el muelle para la vista más limpia de la isla deshabitada en la confluencia, y de las garzas que la dominan.",
    },
    sinagoga: {
      name: "La antigua sinagoga",
      blurb:
        "El edificio de la sinagoga asquenazí de Zemun sigue en pie en Dubrovačka. El abuelo de Theodor Herzl rezaba aquí, lo que convierte esta callecita en una nota al pie de la historia del sionismo.",
    },
  },
  variants: {
    full: { label: "Paseo completo", blurb: "Cinco paradas, del muelle a la torre." },
    short: {
      label: "Paseo corto",
      blurb: "Tres paradas, de la iglesia a la torre: la mitad cuesta arriba.",
    },
  },
  directions: {
    forward: { label: "Muelle primero", blurb: "Empieza junto al Danubio y sube a la torre." },
    reverse: { label: "Torre primero", blurb: "Empieza arriba y acaba junto al agua." },
  },
};
