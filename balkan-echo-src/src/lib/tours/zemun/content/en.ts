import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const en: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Zemun & Gardoš",
  tagline: "The other empire's town, half an hour from the fortress.",
  note: "Five places, one hill at the end, and a tower worth the climb.",
  stops: {
    kej: {
      title: "Kej oslobođenja",
      kicker: "Start here",
      landmark: "The Zemun quay, along the Danube",
      direction:
        "Turn your back on the river and walk up into the old town, two blocks, to the square with the market halls.",
      script:
        "You are standing in a different country — or you would have been, for most of the last three hundred years. Until 1918 this bank belonged to the Habsburg Empire and the far bank to the Ottomans, and later to Serbia. The border ran through the water in front of you. Zemun was the frontier town on the imperial side: it had customs houses, a garrison, and a quarantine station where travellers arriving from Ottoman territory were held for weeks before being allowed further into Europe. Belgrade and Zemun could see each other across the rivers for centuries without being in the same state. That is why Zemun still does not look like Belgrade. The streets are lower, wider and calmer, the houses are one-storey and Central European, and the whole place feels like a small Austro-Hungarian river town that happens to have a capital city attached to it. Look out to the flat green island opposite: that is Veliko ratno ostrvo, the Great War Island, still uninhabited, still a nature reserve, sitting exactly where the Sava meets the Danube. Then walk inland, because the market square is where a frontier town actually shows you what it was for.",
    },
    pijaca: {
      title: "Zemun market",
      kicker: "The market",
      landmark: "Masarikov trg and the market halls",
      direction:
        "Leave the square heading west, either along the shop-lined pedestrian street or through the back lanes, until you reach the large church with the tall bell tower.",
      script:
        "Every serious Balkan neighbourhood is judged by its market, and Zemun's is one of the good ones: loud, cheap, seasonal, and entirely uninterested in tourists. In August it is a wall of tomatoes and peppers, in autumn it smells of quince, and at the edges there are people selling honey, cheese and rakija out of plastic bottles with hand-written labels. This is not a restored heritage market. It is the working kind. The square around it has been the commercial centre of Zemun since the Habsburg administration laid the town out on a grid in the eighteenth century, which is why the streets here meet at right angles while Belgrade's old town wanders. Nearby runs Gospodska, the gentlemen's street, which is the pedestrian shopping run and has been the place to be seen since long before anyone called it a promenade. Buy fruit if you have somewhere to put it. Then head west, because the next building is where the town admitted, in stone, which side of the border it was on.",
    },
    bogorodica: {
      title: "Church of the Mother of God",
      kicker: "The parish church",
      landmark: "Bogorodičina crkva, Njegoševa street",
      direction:
        "Head north-east and start climbing. The streets narrow and tilt; keep going up until you reach a much smaller, much older church.",
      script:
        "This is Zemun's main Orthodox church, finished in 1780, and it is a lesson in how minorities build when they are allowed to build but not to be obvious. The Habsburgs were Catholic and their Orthodox Serb subjects were tolerated rather than welcomed, so the architecture is a compromise: an Orthodox church wearing Central European baroque clothes. The bell tower is tall and Austrian; the plan and the iconostasis inside are firmly Byzantine. Look at the icon screen if you can get in — it is one of the finest pieces of eighteenth-century painting in the city, and it was made by people who were also negotiating an identity. Zemun's Serbs were merchants and craftsmen with money and privileges, and they used both to build in stone what they were not always allowed to say out loud. From here the ground begins to rise, and the older the buildings get, the smaller they become. That is the usual direction of travel in an old town: the further up the hill you go, the further back you are walking.",
    },
    nikolajevska: {
      title: "St Nicholas Church",
      kicker: "The oldest church",
      landmark: "Nikolajevska crkva, built 1731",
      direction:
        "Keep climbing. The tower on the ridge above you is the last stop; the lane bends left and delivers you to it.",
      script:
        "This is the oldest surviving church in Belgrade, and most people in Belgrade have never been inside it. It was finished in 1731, which makes it older than every church across the rivers — the Ottoman authorities did not permit new Orthodox building in Belgrade itself, so the oldest church in the modern city is on the far bank, in what was then a foreign empire. It is small, whitewashed, and set below the level of the street, because building down was one way of building modestly enough to be permitted. Inside is a baroque iconostasis by Dimitrije Bačević, gilded and crowded and slightly too grand for the room, which is exactly what a wealthy frontier congregation would commission. The graveyard around it holds Zemun merchants whose names appear on the customs registers of two empires. Stand here for a moment before the final climb, because from the tower above you will be able to see both sides of the border at once — and it will look like one city, which took until 1934 to become true.",
    },
    gardos: {
      title: "Gardoš and the Millennium Tower",
      kicker: "The tower",
      landmark: "Gardoš, on the ruins of the Zemun fortress",
      direction:
        "You have reached the last stop. From up here the way back down is obvious, and the quay is ten minutes away if you want to end the walk beside the water.",
      script:
        "The tower is the reason people come to Gardoš, and almost everything most visitors believe about it is wrong. Belgraders call it Sibinjanin Janko's tower, after the Hungarian general John Hunyadi, who really did die in Zemun in 1456 while defending the region against the Ottoman advance. The tower has nothing to do with him. It was built in 1896, four hundred and forty years later, as one of several monuments marking a thousand years of Hungarian settlement in the Pannonian plain — a statement of ownership dressed up as a viewing platform, put deliberately on the ruins of the medieval fortress so that the new empire stood literally on top of the old one. Two decades later that empire was gone, and the tower kept the local nickname instead of the official meaning. Climb it. From the top the Sava comes in from the left, the Danube from the right, Great War Island sits in the middle of the argument, and Belgrade's fortress looks back at you from the far bank. Two towns, two empires, one view. Your walk ends here.",
    },
  },
  paths: {
    "kej>pijaca": {
      main: {
        label: "Straight up from the quay",
        blurb: "Two blocks inland, the direct way to the market square.",
      },
      obala: {
        label: "Along the quay first",
        blurb: "North along the water past the moored restaurants, then in. Slower, better views.",
      },
    },
    "pijaca>bogorodica": {
      main: { label: "Through the back streets", blurb: "The short way through the grid." },
      gospodska: {
        label: "Along Gospodska",
        blurb: "The pedestrian shopping street — busier, and the reason Zemun has a promenade.",
      },
    },
    "bogorodica>nikolajevska": {
      main: { label: "The direct climb", blurb: "Straight up the lanes. Steep in places." },
      padina: {
        label: "Around the hillside",
        blurb: "A gentler contour around the slope, with views out over the roofs.",
      },
    },
    "nikolajevska>gardos": {
      main: { label: "Straight to the tower", blurb: "The last few hundred metres, all uphill." },
      stepenice: {
        label: "Up the Gardoš steps",
        blurb: "The stepped lane through the old hillside houses. Slower, much prettier.",
      },
    },
  },
  detours: {
    magistrat: {
      name: "The Zemun Magistrate",
      blurb:
        "The old town hall of 1823, from the decades when Zemun governed itself as a free royal town and had the paperwork to prove it.",
    },
    ratnoostrvo: {
      name: "Great War Island viewpoint",
      blurb:
        "A few minutes further along the quay for the clearest view of the uninhabited island at the confluence, and the herons that own it.",
    },
    sinagoga: {
      name: "The old synagogue",
      blurb:
        "Zemun's Ashkenazi synagogue building still stands on Dubrovačka. Theodor Herzl's grandfather prayed here, which makes this small street a footnote in the history of Zionism.",
    },
  },
  variants: {
    full: { label: "Full walk", blurb: "Five stops, quay to tower." },
    short: { label: "Short walk", blurb: "Three stops, church to tower — the uphill half." },
  },
  directions: {
    forward: { label: "Quay first", blurb: "Start by the Danube and climb to the tower." },
    reverse: { label: "Tower first", blurb: "Start high and finish beside the water." },
  },
};
