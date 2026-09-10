import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const es: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Vračar: santos e inventores",
  tagline: "La iglesia más grande de los Balcanes y el hombre que iluminó el mundo.",
  note: "Cinco lugares, casi todo cuesta abajo, y una parada de café que te debe un descuento.",
  stops: {
    temple: {
      title: "Templo de San Sava",
      kicker: "Empieza aquí",
      landmark: "Svetosavski plato, la explanada del templo",
      direction:
        "Sal de la explanada por el lado opuesto a la biblioteca y baja por las calles de Vračar hacia la rotonda que oirás antes de verla.",
      script:
        "Estás bajo una de las iglesias ortodoxas más grandes del mundo, y no está terminada. Esa combinación te cuenta casi todo sobre Belgrado. La explanada se eligió por un motivo: en 1595, durante una insurrección serbia, un comandante otomano hizo traer aquí las reliquias de San Sava y las quemó en público. San Sava había sido Rastko Nemanjić, un príncipe que dejó la corte de su padre por un monasterio y volvió como primer arzobispo de una iglesia serbia independiente. Quemarlo tres siglos después de su muerte pretendía cerrar algo. Tres siglos más tarde, los serbios levantaron en ese mismo punto la iglesia más grande que pudieron imaginar. Hubo un concurso en 1905. Las obras empezaron en 1935, se detuvieron por la Segunda Guerra Mundial y luego quedaron décadas a medias, mientras el estado socialista usaba el armazón como almacén y la explanada como aparcamiento. Se reanudaron en 1985. El enorme mosaico del interior solo se completó en nuestro siglo. Así que míralo como un edificio que tardó cuatro generaciones y sobrevivió a tres estados, no como un monumento que simplemente se erigió. Entra si está abierto; la cúpula compensa el dolor de cuello. Después sal y baja la cuesta, porque la siguiente parada es lo contrario de solemne.",
    },
    slavija: {
      title: "Slavija",
      kicker: "La rotonda",
      landmark: "La fuente de Slavija y el anillo que la rodea",
      direction:
        "Usa los pasos de peatones alrededor del círculo y sube hacia el norte por la avenida Kralja Milana, hasta que se abra en una plaza pequeña llena de flores.",
      script:
        "Slavija es la plaza de la que todo belgradense tiene una queja, y el nombre es un accidente histórico. En la década de 1880 esto era un terreno pantanoso al borde de la ciudad, y lo compró un escocés llamado Francis Mackenzie, un evangélico que llegó a Belgrado, aprendió serbio, compró la ciénaga, la drenó, trazó calles y vendió parcelas. Construyó aquí un salón para reuniones paneslavas y lo llamó Slavija. El salón desapareció hace mucho; el nombre sobrevivió al hombre, al reino, a dos Yugoslavias y a la costumbre socialista de llamar a la plaza Dimitrije Tucović. Lo que ves ahora es una rotonda con una fuente en el centro, instalada en 2017, que hace espectáculos de luz y música para un público en su mayoría atrapado en coches. Los belgradenses te dirán que es imposible cruzarla. Exageran, aunque poco: usa los pasos y tómate tu tiempo. Fíjate en cómo los edificios del contorno no se ponen de acuerdo en nada: un hotel socialista, oficinas de cristal, fachadas antiguas que aún resisten. Esa discusión es justamente el asunto. Aquí acabó el Belgrado del siglo diecinueve y al veinte se le permitió hacer lo que quisiera.",
    },
    cvetni: {
      title: "Cvetni trg",
      kicker: "Plaza de las Flores",
      landmark: "Los puestos de flores al principio de Njegoševa",
      direction:
        "Sal de la plaza por Krunska, la calle tranquila de villas antiguas, y sigue al este hasta el número 51.",
      script:
        "Cvetni trg significa Plaza de las Flores y, cosa rara en un nombre del centro, es literalmente cierto: los floristas trabajan esta esquina desde hace más de un siglo y siguen aquí. La plaza es pequeña, vagamente triangular, y funciona como el salón menos oficial de Belgrado. En un lado está el Teatro Dramático Yugoslavo, reconstruido en cristal tras un incendio en los noventa, donde se hace la interpretación más seria del país; en todos los demás lados la gente toma café y mira el teatro de la acera. Durante buena parte del periodo socialista esto fue la plaza Ivan Milutinović, por un comandante partisano, y los belgradenses mayores todavía se equivocan y la llaman así. Al final ganaron las flores. Aquí empieza también Njegoševa, una de las calles más agradables de la ciudad para caminar, y la frontera donde el bulevar ruidoso que dejas atrás cede el paso a un barrio de villas bajas, plátanos y silencio. No compres nada; siéntate diez minutos si los tienes. Luego toma Krunska hacia el este, porque a unos cientos de metros, en una villa que parece igual que las demás, está el archivo de un hombre que imaginó el siglo veinte antes de que llegara.",
    },
    tesla: {
      title: "Museo Nikola Tesla",
      kicker: "El archivo",
      landmark: "Krunska 51, una villa de 1929",
      direction:
        "Sigue por Krunska y luego hacia el norte, pasando los ministerios, hasta la iglesia de ladrillo oscuro junto a un gran parque.",
      script:
        "Esta villa, construida en 1929 para una familia belgradense, guarda las cenizas de Nikola Tesla y unos ciento sesenta mil de sus documentos. Las dos cosas suenan raras dichas en voz alta. Tesla nació en 1856 en un pueblo de la actual Croacia, en una familia serbia, estudió en Graz y Praga, trabajó en Budapest y París, y se hizo un nombre en Nueva York, donde murió solo en una habitación de hotel en 1943. Nunca vivió en Belgrado. Vino una vez, en 1892, y lo recibieron como a un héroe que regresa. Su sobrino trajo el legado aquí en los años cincuenta, y la urna está en la sala delantera desde entonces, lo que a algunos visitantes conmueve y a otros les resulta francamente extraño. El museo es pequeño y las demostraciones son teatrales: una bobina de Tesla que lanza chispas, el huevo giratorio con el que mostraba el campo magnético rotatorio. Pero el verdadero tesoro es el papel. Sus cuadernos, patentes y correspondencia entraron en el registro Memoria del Mundo de la Unesco en 2003, porque aquí se ve cómo la corriente alterna —la razón de que funcione la luz allí donde estés leyendo esto— se discutió realmente sobre el papel.",
    },
    stmark: {
      title: "Iglesia de San Marcos y Tašmajdan",
      kicker: "Última parada",
      landmark: "Crkva Svetog Marka, al borde del parque Tašmajdan",
      direction:
        "Has llegado a la última parada. El parque detrás de la iglesia es un buen sitio para dejar de andar; el centro está a quince minutos cuesta abajo.",
      script:
        "San Marcos es de ladrillo rojo oscuro, deliberadamente anticuada y mucho más joven de lo que parece. Se construyó entre 1931 y 1940, siguiendo de cerca la iglesia del monasterio de Gračanica, del siglo catorce: un edificio levantado en un reino moderno con la forma de uno medieval, que era exactamente la intención. Dentro está la tumba del emperador Stefan Dušan, que llevó a Serbia a su máxima extensión en el siglo catorce y cuyos restos se trajeron aquí en 1968. En el patio, busca la pequeña iglesia rusa de detrás: la Iglesia de la Santísima Trinidad, construida por refugiados de la guerra civil rusa, donde está enterrado el general del Ejército Blanco Piotr Wrangel. Dos imperios derrotados, un jardín pequeño. El parque de al lado es Tašmajdan, y el nombre vuelve a ser turco: taş meydan, la plaza de piedra. Los romanos extraían aquí piedra de construcción, los otomanos conservaron el nombre y los túneles que quedaron debajo se usaron como refugios en tiempos que aún se recuerdan. Belgrado hace esto continuamente: un parque donde juegan niños, una cantera debajo, un nombre de un imperio que se fue. Tu paseo termina aquí. Siéntate y deja que la ciudad siga hablando.",
    },
  },
  paths: {
    "temple>slavija": {
      main: {
        label: "Recto cuesta abajo",
        blurb: "El camino directo por las calles de Vračar.",
      },
      kalenic: {
        label: "Por el mercado de Kalenić",
        blurb:
          "Un rodeo largo hacia el este hasta el mercado más querido de Belgrado, y vuelta al oeste. Merece la pena antes del mediodía.",
      },
    },
    "slavija>cvetni": {
      main: {
        label: "Subiendo por Kralja Milana",
        blurb: "La avenida principal, con sus tiendas y su tráfico.",
      },
      njegoseva: {
        label: "Por Njegoševa",
        blurb: "Una calle más al este: villas, plátanos y mucho menos ruido.",
      },
    },
    "cvetni>tesla": {
      main: {
        label: "Por Krunska",
        blurb: "La calle de villas donde está el propio museo.",
      },
      boulevard: {
        label: "Por el bulevar",
        blurb: "Salir al Bulevar kralja Aleksandra y volver: más ruido, más largo, más ciudad.",
      },
    },
    "tesla>stmark": {
      main: {
        label: "Por los ministerios",
        blurb: "Hacia el norte por el barrio administrativo hasta la iglesia.",
      },
      tasmajdan: {
        label: "Por el parque Tašmajdan",
        blurb: "Entrar bajo los árboles y salir junto a la iglesia, llegando por el lado del parque.",
      },
    },
  },
  detours: {
    penacafe: {
      name: "Pena Art Cafe",
      blurb:
        "Nuestro propio café, a treinta segundos de la ruta, en Deligradska 1: tómalo como una invitación y no como una recomendación. Café, pastel y un sitio donde sentarse a mitad de camino.",
      offer: { code: "ECHO10", terms: "10% de descuento en la cuenta, una vez por visita." },
    },
    library: {
      name: "Biblioteca Nacional de Serbia",
      blurb:
        "Junto al templo: un edificio de los setenta hecho de cajas de hormigón suspendidas que la gente adora o se niega a comentar.",
    },
    manjez: {
      name: "Parque Manjež",
      blurb:
        "Un parque pequeño con el nombre de la escuela de equitación que estuvo aquí. Sombra, bancos y uno de los mejores kioscos de la ciudad.",
    },
    parliament: {
      name: "Casa de la Asamblea Nacional",
      blurb:
        "El parlamento serbio, terminado en 1936 tras treinta años de obras. Los caballos de bronce de la entrada ya justifican el desvío.",
    },
  },
  variants: {
    full: { label: "Paseo completo", blurb: "Cinco paradas, del templo a Tašmajdan." },
    short: {
      label: "Paseo corto",
      blurb: "Tres paradas, del templo a la Plaza de las Flores.",
    },
  },
  directions: {
    forward: {
      label: "Templo primero",
      blurb: "Empieza en San Sava y termina en Tašmajdan.",
    },
    reverse: {
      label: "Tašmajdan primero",
      blurb: "Hazlo cuesta arriba y acaba en el templo.",
    },
  },
};
