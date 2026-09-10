import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const en: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Dorćol food walk",
  tagline: "A market, a brewery yard, a river, and the oldest tavern in Belgrade.",
  note: "Five stops and a lot of eating. Do this one hungry, and start before noon if you want the market.",
  stops: {
    bajloni: {
      title: "Bajloni market",
      kicker: "Start hungry",
      landmark: "Skadarlijska pijaca, off Cetinjska",
      direction:
        "Leave the market heading north-west, uphill through Dorćol's grid, until you reach a broad street of old shopfronts.",
      script:
        "Start here, and start early. This is Bajloni market, named after the Bajloni family, Czech brewers who set up in Belgrade in the nineteenth century and whose brewery stood right beside these stalls. The market is what you want to see first because it explains everything you will eat later. Look for ajvar in jars — roasted red pepper relish, made in autumn in enormous quantities by people who will tell you their recipe is the only correct one. Look for kajmak, a fresh dairy fat somewhere between clotted cream and young cheese, which goes on bread, on grilled meat, and on anything else within reach. There will be cheese sold from buckets of brine, honey sold by the beekeeper, and in season, raspberries that make the imported ones look like a joke. Nothing here is styled for photographs. Buy something small and eat it standing up, which is the correct way. Then walk north-west, because the street you are heading for is where Belgrade's traders have been selling food and everything else for two centuries.",
    },
    dusanova: {
      title: "Cara Dušana",
      kicker: "The trading street",
      landmark: "The old shopfronts of upper Dorćol",
      direction:
        "Head north-east and downhill toward the Danube. The streets end at a broad quay along the water.",
      script:
        "Cara Dušana is one of Belgrade's oldest working commercial streets, and it still looks it: narrow shopfronts, hand-painted signs, tools and leather and haberdashery and spice. Dorćol's name comes from a Turkish expression for crossroads, and that is what this district was — Sephardic Jewish, Greek, Aromanian, Armenian and Serbian merchant families living on top of each other and trading in everything the Danube brought upriver. That mixture is why Belgrade food is the way it is. The grilled meat comes from one tradition, the pastry from another, the coffee ritual from a third, and the arguments about which is authentic from all of them at once. Look for a spice shop if one is open: paprika in three grades of heat, dried peppers on strings, vegeta, bay leaves in paper bags. This is also burek territory. Burek here means a coil of flaky pastry with cheese or meat, eaten in the morning with a yoghurt drink, and it is not a snack — it is a serious breakfast that ends conversations. Then walk down to the river.",
    },
    dunavskikej: {
      title: "The Danube quay",
      kicker: "The river",
      landmark: "Dorćol's Danube waterfront",
      direction:
        "Turn back inland, south-west, into Dorćol proper, and look for the street lined on both sides with café terraces.",
      script:
        "The Danube at Dorćol is a working river with a summer habit. In winter this quay is empty, grey and enormous. In summer it fills with open-air bars, sound systems, people swimming off the concrete, and the smell of fish being grilled. That is the other half of Belgrade eating: not the kafana with the tablecloth, but the plastic chair by the water with a beer and a plate of small fried fish. If you see the word riblja on a sign, that is fish. If you see smuđ, that is pikeperch from the river, and it is the good one. Belgrade's relationship with its two rivers has always been strange — for most of its history the water was a defensive line and a border, so the city turned its back on both and built up the ridge instead. Only in the last few decades has anyone thought of the riverbank as somewhere to sit down. You are on the newer, more relaxed side of that history. Then head back inland, because the next street is where the city drinks its coffee.",
    },
    strahinja: {
      title: "Strahinjića Bana",
      kicker: "The café row",
      landmark: "Dorćol's terrace street",
      direction:
        "Continue south-west, downhill, until you reach one of the city's oldest streets and a tavern with a question mark for a name.",
      script:
        "In the early 2000s Belgrade nicknamed this street Silicon Valley, which had nothing to do with technology. It was a joke about the clientele, and it stuck hard enough that people still use it slightly apologetically. What is actually here is Belgrade's densest run of café terraces: several blocks where the entire point is to sit outside for two hours over one coffee and watch who walks past. This deserves explaining, because it is the local meal you are most likely to get wrong. Coffee here is not a transaction. Ordering a domaća kafa gets you unfiltered coffee in a small cup with grounds at the bottom, served with a glass of water, and the expectation is that you will stay. Nobody will bring you the bill until you ask, and asking early is mildly rude. Sit down. Order one thing. Do not check your phone for twenty minutes. This is the part of the food culture that has no ingredients. Then walk on downhill, because the last stop has been arguing with a church since 1823.",
    },
    kraljapetra: {
      title: "Kralja Petra and the ? tavern",
      kicker: "Last stop",
      landmark: "Opposite the Cathedral Church",
      direction:
        "You have reached the last stop. Knez Mihailova and the fortress are both five minutes away, and you have earned a sit-down.",
      script:
        "The tavern across from the cathedral has a question mark for a sign, and the reason is a two-hundred-year-old dispute. It opened in the 1820s and at some point traded under a name that referred to the cathedral opposite. The church objected to a drinking establishment using its name. While the argument continued, the owner painted a question mark on the front as a placeholder. The placeholder won, and it has been the ? ever since — the oldest surviving tavern in Belgrade, low-ceilinged, wooden, and still serving. This is a kafana, and a kafana is not a restaurant. It is a room where you are expected to stay for hours: grilled meat, beans, cabbage, rakija poured in small glasses, and at some point, if the night goes properly, music. Order pljeskavica if you want the famous thing, or prebranac if you want to understand what people actually ate. Either way, sit. Your walk ends at a table, which for a food walk through Dorćol is the only honest place to end it.",
    },
  },
  paths: {
    "bajloni>dusanova": {
      main: { label: "Uphill through the grid", blurb: "The direct climb north-west through Dorćol." },
      dobracina: {
        label: "Via Dobračina",
        blurb: "One street over, quieter and residential, past the old courtyards.",
      },
    },
    "dusanova>dunavskikej": {
      main: { label: "Down to the Danube", blurb: "Straight downhill to the quay. Six minutes." },
    },
    "dunavskikej>strahinja": {
      main: { label: "Back up into Dorćol", blurb: "The direct way back inland from the water." },
      jevremova: {
        label: "Via Gospodar Jevremova",
        blurb: "Through the antique and junk shops — slower, and worth it if anything is open.",
      },
    },
    "strahinja>kraljapetra": {
      main: { label: "Straight down", blurb: "The short way to the cathedral corner." },
      dositejeva: {
        label: "Via Dositejeva",
        blurb: "The old cobbled block: bakeries, a couple of small kitchens, less traffic.",
      },
    },
  },
  detours: {
    cetinjska: {
      name: "Cetinjska yard",
      blurb:
        "The old Bajloni brewery courtyard, now a dozen bars in the former production halls. Dead until dark, then the busiest yard in the city.",
    },
    jevremova: {
      name: "Gospodar Jevremova antiques",
      blurb:
        "A short run of junk and antique shops. Nothing to eat, everything to look at, and a good place to buy an old rakija glass.",
    },
  },
  variants: {
    full: { label: "Full walk", blurb: "Five stops, market to tavern." },
    short: { label: "Short walk", blurb: "Three stops, river to tavern — the drinking half." },
  },
  directions: {
    forward: { label: "Market first", blurb: "Start at the market and finish at the tavern." },
    reverse: { label: "Tavern first", blurb: "Start at the tavern and finish at the market." },
  },
};
