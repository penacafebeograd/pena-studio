import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const es: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Savamala y la ribera",
  tagline: "Almacenes, un gran hotel apagado y una discusión sobre el río.",
  note: "Cinco lugares en un barrio pequeño y denso: el paseo más corto, y el que lleva más opiniones dentro.",
  stops: {
    zelenivenac: {
      title: "Zeleni venac",
      kicker: "Empieza aquí",
      landmark: "El mercado y las paradas de autobús",
      direction:
        "Baja hacia el oeste, alejándote del mercado. Las calles caen rápido hacia el río; busca una casa baja y antigua con balcón de madera.",
      script:
        "Zeleni venac significa corona verde, que es un nombre muy amable para la esquina más ruidosa de Belgrado. Hay mercado aquí desde el siglo diecinueve y sigue siendo donde la ciudad compra el perejil. Alrededor hay una terminal de autobuses, un paso subterráneo, varios kioscos y un estado permanente de caos moderado del que los belgradenses se quejan sin parar y que defenderían con uñas y dientes. Este es el borde alto de Savamala, el barrio que baja de aquí hasta el Sava. Durante casi todo el siglo pasado Savamala fue el lugar por donde entraban las mercancías y donde nadie elegía vivir: almacenes, playas de carga, casetas de aduana y el tráfico entre el puerto y la ciudad. Después quedó abandonada durante décadas. Y luego, brevemente, alrededor de 2010, se convirtió en las calles más interesantes de los Balcanes. Estás a punto de atravesar las tres versiones a la vez. Baja la cuesta. Cuanto más te acercas al agua, más antiguos y más raros son los edificios.",
    },
    manak: {
      title: "La Casa de Manak",
      kicker: "La superviviente",
      landmark: "Gavrila Principa 5, casa de estilo balcánico",
      direction:
        "Sigue bajando y gira hacia el río. El siguiente edificio es un hotel grande, cansado y antaño magnífico, en la esquina de la avenida ribereña.",
      script:
        "Esta casa baja, con el piso superior volado y el balcón de madera, tiene unos doscientos años y es una de las últimas de su especie en Belgrado. Se construyó en la década de 1830 para un comerciante llamado Manak Mihailović, un arrumano del sur de los Balcanes, en el estilo que tenían antes todas las casas de esta ciudad: planta baja de piedra para la tienda y el almacén, planta alta de entramado de madera saliendo sobre la calle, alero profundo. Casi todas se derribaron. Belgrado pasó el final del siglo diecinueve esforzándose mucho por parecer vienesa, y la arquitectura popular de época otomana fue lo primero en caer: no porque estuviera mal construida, sino porque parecía del imperio equivocado. Esta sobrevivió porque siguió siendo útil. Hoy alberga una colección etnográfica, que es una forma cortés de decir que el edificio mismo es la pieza expuesta. Fíjate en las proporciones antes de seguir: así era toda la ladera que baja al río.",
    },
    bristol: {
      title: "Hotel Bristol",
      kicker: "El gran hotel",
      landmark: "Karađorđeva 50, de 1912",
      direction:
        "Camina hacia el norte por la avenida ribereña, con el agua a tu izquierda, hasta un largo almacén de ladrillo que queda algo aparte de todo lo demás.",
      script:
        "El Bristol abrió en 1912, dos años antes de la Primera Guerra Mundial, lo que dice bastante sobre su oportunidad. Lo diseñó Nikola Nestorović para una ciudad que esperaba convertirse en metrópoli fluvial: esta calle era la arteria del puerto del Sava hacia el centro, y un gran hotel junto al puerto tenía una lógica comercial evidente. Mira la fachada: es realmente buena, segura de sí misma y algo recargada, hecha para pasajeros que bajaban de un vapor del Danubio y querían quedar impresionados. Y luego mira su estado. El puerto se mudó, el tráfico pasó a ser de camiones, los huéspedes dejaron de venir, y el Bristol pasó décadas siendo un hotel que Belgrado olvidó que tenía. Ha cerrado, reabierto, vuelto a cerrar y ha sido objeto de muchísimos anuncios de remodelación. Es el símbolo más honesto de Savamala: un edificio que acertó con el futuro y se equivocó con el momento. Sigue hacia el norte, porque la siguiente parada es la que durante un rato hizo que el futuro llegara.",
    },
    spanska: {
      title: "La Casa Española",
      kicker: "El centro cultural",
      landmark: "Braće Krsmanović, antiguo almacén",
      direction:
        "Continúa al norte por la calle que va por encima del río. Son unos quince minutos y acaba en una fila de arcos bajos frente al agua.",
      script:
        "Este almacén de estructura de hierro se llama la Casa Española y nadie se pone de acuerdo en por qué. La versión más probable es que su estructura metálica se compró a una empresa española, o se recuperó de un pabellón de exposición español; las versiones menos probables son más divertidas. Lo que importa es lo que le pasó hace poco. En 2009 abrió dentro un centro cultural y durante unos años Savamala fue realmente famosa: galerías, estudios de diseño, festivales, bares en almacenes y muchos periodistas de visita escribiendo que esto era el próximo Berlín. Parte era ruido. Parte era real, y cambió cómo Belgrado piensa su propia ribera. Después llegó la remodelación. En 2016 se demolieron de noche edificios de una calle cercana, a manos de hombres enmascarados, en un episodio que nunca se explicó de forma satisfactoria y que se convirtió en escándalo nacional. El distrito de diseño se vació; las grúas subieron hacia el sur. Si eso es progreso o pérdida es la pregunta más discutida de esta ciudad, y estás justo en medio. Camina al norte hasta el agua y decide por tu cuenta.",
    },
    betonhala: {
      title: "Beton Hala",
      kicker: "Última parada",
      landmark: "La nave de hormigón y el paseo del Sava",
      direction:
        "Has llegado a la última parada. La fortaleza está justo encima si quieres seguir andando, o el paseo sigue hacia el sur junto al agua todo lo que quieras.",
      script:
        "Beton Hala significa, sin ninguna poesía, nave de hormigón. Se construyó en los años treinta como almacén ribereño del puerto: una simple hilera de arcos cuyo único propósito era mantener seca la carga. Por eso está aquí, justo sobre el agua, y por eso tiene la mejor posición de cualquier edificio de Belgrado. Hoy es una fila de restaurantes con mantel blanco y precios a juego, y la terraza mira de frente, cruzando el Sava, a las torres de Nuevo Belgrado. Vale la pena pensar en lo que se ve desde aquí. Detrás y encima de ti se levanta Kalemegdan, donde empieza el paseo por el casco antiguo: dos mil años de fortificación. Delante, un río junto al cual la ciudad pasó casi toda su historia defendiéndose, y al lado del cual ahora vende cenas. A tu izquierda, la obra nueva. Belgrado siempre ha sido una ciudad sobre un río que no acabó de decidir cómo usar. Siéntate junto al agua y deja que siga la discusión.",
    },
  },
  paths: {
    "zelenivenac>manak": {
      main: { label: "Recto cuesta abajo", blurb: "La bajada directa hacia el río." },
      brankova: {
        label: "Por Brankova",
        blurb: "Una calle más allá, junto a las vías del tranvía y el paso subterráneo. Más ruidoso, pero ves el tráfico para el que se hizo Savamala.",
      },
    },
    "manak>bristol": {
      main: { label: "Bajar a la avenida ribereña", blurb: "Dos minutos, todo cuesta abajo." },
    },
    "bristol>spanska": {
      main: { label: "Por Karađorđeva", blurb: "La avenida ribereña principal, con almacenes a ambos lados." },
      obala: {
        label: "Más cerca del agua",
        blurb: "Por el lado de la orilla, pasando los edificios de carga.",
      },
    },
    "spanska>betonhala": {
      main: {
        label: "Al norte junto al río",
        blurb: "El tramo largo del paseo. Sigue la calle por encima del agua hasta los arcos.",
      },
      karadjordjeva: {
        label: "Subiendo por Karađorđeva",
        blurb: "La versión de calle: algo más larga, con más fachadas del viejo puerto.",
      },
    },
  },
  detours: {
    savapromenada: {
      name: "Vista de Belgrade Waterfront",
      blurb:
        "Unos minutos al sur para ver bien las torres nuevas que suben junto al Sava: la operación que remodeló este barrio y la discusión que abrió.",
    },
    kosancicev: {
      name: "Kosančićev venac",
      blurb:
        "Cuesta arriba: el trazado de calles más antiguo que se conserva en Belgrado, empedrado y tranquilo, con el solar vacío donde ardió la Biblioteca Nacional en el bombardeo de abril de 1941.",
    },
    brankovmost: {
      name: "Puente de Branko",
      blurb:
        "Sal al puente para la vista clásica hacia la fortaleza. El puente actual es de 1956 y se apoya en las pilas del de antes de la guerra.",
    },
  },
  variants: {
    full: { label: "Paseo completo", blurb: "Cinco paradas, del mercado al agua." },
    short: {
      label: "Paseo corto",
      blurb: "Tres paradas, del hotel al agua: la mitad ribereña.",
    },
  },
  directions: {
    forward: { label: "Mercado primero", blurb: "Empieza en Zeleni venac y baja hasta el Sava." },
    reverse: { label: "Río primero", blurb: "Empieza en el agua y sube de vuelta al mercado." },
  },
};
