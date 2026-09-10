import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const en: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Savamala & the riverfront",
  tagline: "Warehouses, a faded grand hotel, and an argument about the river.",
  note: "Five places in a small, dense quarter — the shortest walk, and the one with the most opinions in it.",
  stops: {
    zelenivenac: {
      title: "Zeleni venac",
      kicker: "Start here",
      landmark: "The market and the bus stands",
      direction:
        "Head downhill, west, away from the market. The streets drop quickly toward the river; look for a low old house with a wooden balcony.",
      script:
        "Zeleni venac means green wreath, which is a very gentle name for the loudest corner in Belgrade. There has been a market here since the nineteenth century, and it is still where the city buys its parsley. Wrapped around it is a bus terminus, an underpass, several kiosks and a permanent state of mild chaos that Belgraders complain about constantly and would riot to defend. This is the top of Savamala, the quarter that runs downhill from here to the Sava. For most of the last century Savamala was where goods came in and nobody chose to live: warehouses, freight yards, customs sheds and the traffic between the port and the city. Then it was neglected for decades, and then — briefly, around 2010 — it became the most interesting few streets in the Balkans. You are about to walk through all three versions of it at once. Go downhill. The further you drop toward the water, the older and stranger the buildings get.",
    },
    manak: {
      title: "Manak's House",
      kicker: "The survivor",
      landmark: "Gavrila Principa 5, a Balkan-style house",
      direction:
        "Continue downhill and turn toward the river. The next building is a large, tired, once-magnificent hotel on the corner of the riverside road.",
      script:
        "This low house with the overhanging upper floor and the wooden balcony is roughly two hundred years old, and it is one of the last of its kind in Belgrade. It was built in the 1830s for a merchant named Manak Mihailović, an Aromanian from the southern Balkans, in the style that every house in this city used to be: ground floor of stone for the shop and the storage, timber-framed upper floor jutting out over the street, deep eaves. Almost all of them were pulled down. Belgrade spent the late nineteenth century trying very hard to look Viennese, and the Ottoman-era vernacular was the first thing to go — not because it was bad building, but because it looked like the wrong empire. This one survived because it kept being useful. It now holds an ethnographic collection, which is a polite way of saying the building itself is the exhibit. Look at the proportions before you carry on: this is what the whole slope down to the river once looked like.",
    },
    bristol: {
      title: "Hotel Bristol",
      kicker: "The grand hotel",
      landmark: "Karađorđeva 50, built 1912",
      direction:
        "Walk north along the riverside road, keeping the water on your left, until you reach a long brick warehouse standing slightly apart from everything else.",
      script:
        "The Bristol opened in 1912, two years before the First World War, which tells you how well-timed it was. It was designed by Nikola Nestorović for a city that expected to become a river metropolis: this road was the artery from the Sava port into town, and a grand hotel at the port made obvious commercial sense. Look up at the façade — it is genuinely good, confident and slightly ornate, built for arriving passengers who would step off a Danube steamer and want to be impressed. Then look at the state of it. The port moved, the traffic became lorries, the guests stopped coming, and the Bristol spent decades as a hotel that Belgrade forgot it had. It has closed, reopened, closed again, and been the subject of a great many redevelopment announcements. It is the honest symbol of Savamala: a building that was right about the future and wrong about the timing. Keep walking north, because the next stop is the one that briefly made the future arrive.",
    },
    spanska: {
      title: "The Spanish House",
      kicker: "The cultural centre",
      landmark: "Braće Krsmanović, a former warehouse",
      direction:
        "Continue north along the road above the river. It takes about fifteen minutes, and it ends in a row of low arches facing the water.",
      script:
        "This iron-framed warehouse is called the Spanish House, and nobody agrees why. The likeliest story is that its metal structure was bought from a Spanish firm, or salvaged from a Spanish exhibition pavilion; the less likely stories are more entertaining. What matters is what happened to it recently. In 2009 a cultural centre opened inside, and for a few years Savamala became genuinely famous: galleries, design studios, festivals, bars in warehouses, and a lot of visiting journalists writing that this was the next Berlin. Some of it was hype. Some of it was real, and it changed how Belgrade thought about its own riverbank. Then the redevelopment came. In 2016, buildings on a nearby street were demolished at night by masked men in an incident that was never satisfactorily explained and became a national scandal. The design district thinned out; the cranes went up to the south. Whether that is progress or loss is the single most argued-about question in this city, and you are standing in the middle of it. Walk north to the water and decide for yourself.",
    },
    betonhala: {
      title: "Beton Hala",
      kicker: "The last stop",
      landmark: "The concrete hall and the Sava promenade",
      direction:
        "You have reached the last stop. The fortress is directly above you if you want to keep walking, or the promenade runs south along the water for as long as you like.",
      script:
        "Beton Hala means, with no poetry at all, the concrete hall. It was built in the 1930s as riverside storage for the port — a plain row of arches whose entire purpose was to keep cargo dry. That is why it is here, right on the water, and why it has the best position of any building in Belgrade. Today it is a row of restaurants with white tablecloths and prices to match, and the terrace looks straight across the Sava to New Belgrade's towers. It is worth thinking about what you can see from this spot. Behind and above you rises Kalemegdan, where the walk through the old town starts: two thousand years of fortification. In front of you is a river the city spent most of its history defending itself along, and now sells dinner beside. To your left, the new development. Belgrade has always been a city about a river it could not quite decide how to use. Sit down at the water, and let it argue.",
    },
  },
  paths: {
    "zelenivenac>manak": {
      main: { label: "Straight downhill", blurb: "The direct drop toward the river." },
      brankova: {
        label: "Via Brankova",
        blurb: "One street over, past the tram lines and the underpass. Louder, but you see the traffic Savamala was built for.",
      },
    },
    "manak>bristol": {
      main: { label: "Down to the riverside road", blurb: "Two minutes, all downhill." },
    },
    "bristol>spanska": {
      main: { label: "Along Karađorđeva", blurb: "The main riverside road, warehouses on both sides." },
      obala: {
        label: "Closer to the water",
        blurb: "Down along the riverbank side, past the freight buildings.",
      },
    },
    "spanska>betonhala": {
      main: {
        label: "North along the river",
        blurb: "The long leg of the walk. Follow the road above the water to the arches.",
      },
      karadjordjeva: {
        label: "Up Karađorđeva",
        blurb: "The street version: slightly longer, more of the old port façades.",
      },
    },
  },
  detours: {
    savapromenada: {
      name: "Belgrade Waterfront view",
      blurb:
        "A few minutes south for a clear look at the new towers going up along the Sava — the development that reshaped this quarter, and the argument it started.",
    },
    kosancicev: {
      name: "Kosančićev venac",
      blurb:
        "Up the slope: the oldest surviving street layout in Belgrade, cobbled and quiet, with the empty plot where the National Library burned in the bombing of April 1941.",
    },
    brankovmost: {
      name: "Brankov most",
      blurb:
        "Out onto the bridge for the classic view back at the fortress. The current bridge is from 1956, standing on the piers of the pre-war one.",
    },
  },
  variants: {
    full: { label: "Full walk", blurb: "Five stops, market to the water." },
    short: { label: "Short walk", blurb: "Three stops, hotel to the water — the riverside half." },
  },
  directions: {
    forward: { label: "Market first", blurb: "Start at Zeleni venac and walk down to the Sava." },
    reverse: { label: "River first", blurb: "Start at the water and climb back up to the market." },
  },
};
