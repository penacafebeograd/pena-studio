import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const en: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Vračar: saints and inventors",
  tagline: "The biggest church in the Balkans, and the man who lit the world.",
  note: "Five places, mostly downhill, with a coffee stop that owes you a discount.",
  stops: {
    temple: {
      title: "Temple of Saint Sava",
      kicker: "Start here",
      landmark: "Svetosavski plato, the temple plateau",
      direction:
        "Leave the plateau on the far side from the library and head downhill through the Vračar streets toward the roundabout you can hear before you see.",
      script:
        "You are standing under one of the largest Orthodox churches in the world, and it is not finished. That combination tells you almost everything about Belgrade. The plateau was chosen for a reason: in 1595, during a Serbian uprising, an Ottoman commander had the relics of Saint Sava brought here and burned in public. Saint Sava had been Rastko Nemanjić, a prince who left his father's court for a monastery and came back as the first archbishop of an independent Serbian church. Burning him three centuries after his death was meant to end something. Three centuries after that, Serbs put the largest church they could imagine on the spot. A competition was held in 1905. Construction began in 1935, stopped for the Second World War, and then sat unfinished for decades while the socialist state used the shell for storage and the plateau for parking. Work restarted in 1985. The vast mosaic inside was only completed in our own century. So look at it as a building that took four generations and outlived three states, rather than as a monument that was simply erected. Walk inside if it is open; the dome is worth the neck ache. Then come back out and turn downhill, because the next stop is the opposite of solemn.",
    },
    slavija: {
      title: "Slavija",
      kicker: "The roundabout",
      landmark: "Slavija fountain and the ring road around it",
      direction:
        "Take the pedestrian crossings around the circle and head north up the wide street, Kralja Milana, until it opens into a small square full of flowers.",
      script:
        "Slavija is the square every Belgrader has a complaint about, and the name is an accident of history. In the 1880s this was marshy ground on the edge of town, and it was bought by a Scotsman named Francis Mackenzie, an evangelical who came to Belgrade, learned Serbian, bought the swamp, drained it, laid out streets and sold plots. He built a hall here for pan-Slavic gatherings and called it Slavija. The hall is long gone; the name outlived the man, the kingdom, two Yugoslavias and the socialist habit of naming the square after Dimitrije Tucović instead. What you see now is a traffic circle with a fountain in the middle, installed in 2017, which performs light and music shows to an audience mostly stuck in cars. Belgraders will tell you it is impossible to cross. They are exaggerating, but only just: use the crossings and take your time. Notice how the buildings around the circle disagree with each other completely — a socialist hotel, glass offices, older façades hanging on. That argument is the point. This is where nineteenth-century Belgrade ended and the twentieth century was allowed to do whatever it liked.",
    },
    cvetni: {
      title: "Cvetni trg",
      kicker: "Flower Square",
      landmark: "The flower stalls at the top of Njegoševa",
      direction:
        "Leave the square along Krunska, the quiet street of old villas, and keep going east until you reach number 51.",
      script:
        "Cvetni trg means Flower Square, and unusually for a city-centre name, it is literally true: flower sellers have worked this corner for well over a century, and they are still here. The square is small, faintly triangular, and functions as Belgrade's least official living room. On one side sits the Yugoslav Drama Theatre, rebuilt in glass after a fire in the 1990s, which is where the country's most serious acting happens; on every other side, people are drinking coffee and watching the theatre of the pavement instead. For most of the socialist period this was Trg Ivana Milutinovića, named for a Partisan commander, and older Belgraders still slip and call it that. The flowers won in the end. This is also the head of Njegoševa, one of the loveliest walking streets in the city, and the boundary where the busy boulevard behind you gives way to a quarter of low villas, plane trees and quiet. Buy nothing, sit for ten minutes if you have them. Then take Krunska east, because a few hundred metres away, in a villa that looks like any other, sits the archive of a man who imagined the twentieth century before it arrived.",
    },
    tesla: {
      title: "Nikola Tesla Museum",
      kicker: "The archive",
      landmark: "Krunska 51, a 1929 villa",
      direction:
        "Continue along Krunska and then north, past the ministries, to the dark brick church that sits at the edge of a large park.",
      script:
        "This villa, built in 1929 for a Belgrade family, holds the ashes of Nikola Tesla and about a hundred and sixty thousand of his documents. Both facts are strange when you say them out loud. Tesla was born in 1856 in a village in what is now Croatia, to a Serbian family, studied in Graz and Prague, worked in Budapest and Paris, and made his name in New York, where he died alone in a hotel room in 1943. He never lived in Belgrade. He visited once, in 1892, and was received like a returning hero. His nephew brought the estate here in the 1950s, and the urn has been in the front room ever since, which some visitors find moving and others find distinctly odd. The museum is small and the demonstrations are theatrical: a Tesla coil that throws sparks, the spinning egg he used to show off the rotating magnetic field. But the real treasure is the paper. His notebooks, patents and correspondence were added to the UNESCO Memory of the World register in 2003, because this is where you go to see how alternating current — the reason the lights work wherever you are reading this — was actually argued out on the page.",
    },
    stmark: {
      title: "St Mark's Church & Tašmajdan",
      kicker: "The last stop",
      landmark: "Crkva Svetog Marka, at the edge of Tašmajdan park",
      direction:
        "You have reached the last stop. The park behind the church is a good place to stop walking; the city centre is fifteen minutes downhill from here.",
      script:
        "St Mark's is dark red brick, deliberately old-fashioned, and much younger than it looks. It was built between 1931 and 1940, modelled closely on the fourteenth-century monastery church at Gračanica — a building erected in a modern kingdom in the shape of a medieval one, which was very much the point. Inside lies the tomb of Stefan Dušan, the emperor who took Serbia to its greatest extent in the fourteenth century, and whose remains were brought here in 1968. In the churchyard, look for the small Russian church behind it: the Church of the Holy Trinity, built by refugees from the Russian civil war, where the White Army commander Pyotr Wrangel is buried. Two defeated empires, one small garden. The park beside you is Tašmajdan, and the name is Turkish again — taş meydan, the stone square. The Romans quarried building stone here, the Ottomans kept the name, and the tunnels left underneath were used as shelters within living memory. Belgrade keeps doing this: a park where children play, a quarry underneath, a name from an empire that left. Your walk ends here. Sit down, and let the city keep talking.",
    },
  },
  paths: {
    "temple>slavija": {
      main: {
        label: "Straight downhill",
        blurb: "The direct way through the Vračar streets.",
      },
      kalenic: {
        label: "Via the Kalenić market",
        blurb:
          "A long loop east to Belgrade's best-loved produce market, then back west. Worth it before noon.",
      },
    },
    "slavija>cvetni": {
      main: {
        label: "Up Kralja Milana",
        blurb: "The main boulevard, shops and traffic and all.",
      },
      njegoseva: {
        label: "Via Njegoševa",
        blurb: "One street east: villas, plane trees and far less noise.",
      },
    },
    "cvetni>tesla": {
      main: {
        label: "Along Krunska",
        blurb: "The villa street the museum itself stands on.",
      },
      boulevard: {
        label: "Via the boulevard",
        blurb: "Out onto Bulevar kralja Aleksandra and back in — busier, longer, more city.",
      },
    },
    "tesla>stmark": {
      main: {
        label: "Past the ministries",
        blurb: "North through the government quarter to the church.",
      },
      tasmajdan: {
        label: "Through Tašmajdan park",
        blurb: "In under the trees and out at the church, arriving from the park side.",
      },
    },
  },
  detours: {
    penacafe: {
      name: "Pena Art Cafe",
      blurb:
        "Our own café, thirty seconds off the route at Deligradska 1 — so treat this as an invitation rather than a recommendation. Coffee, cake, and somewhere to sit down halfway.",
      offer: { code: "ECHO10", terms: "10% off your bill, once per visit." },
    },
    library: {
      name: "National Library of Serbia",
      blurb:
        "Beside the temple: a 1970s building of hanging concrete boxes that people either love or refuse to discuss.",
    },
    manjez: {
      name: "Manjež park",
      blurb:
        "A small park named after the riding school that stood here. Shade, benches, and one of the city's better kiosks.",
    },
    parliament: {
      name: "House of the National Assembly",
      blurb:
        "Serbia's parliament, finished in 1936 after thirty years of building. The bronze horses out front are worth the detour on their own.",
    },
  },
  variants: {
    full: { label: "Full walk", blurb: "Five stops, temple to Tašmajdan." },
    short: { label: "Short walk", blurb: "Three stops, temple to Flower Square." },
  },
  directions: {
    forward: { label: "Temple first", blurb: "Start at Saint Sava, finish at Tašmajdan." },
    reverse: { label: "Tašmajdan first", blurb: "Walk it uphill and finish at the temple." },
  },
};
