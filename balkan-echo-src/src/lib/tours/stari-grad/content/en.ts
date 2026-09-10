import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const en: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Stari Grad history walk",
  tagline: "From fortress walls to bohemian tables.",
  note: "Six places. One walk. Plenty of room for a coffee, a detour, or an excellent view.",
  stops: {
    kalemegdan: {
      title: "Kalemegdan & Belgrade Fortress",
      kicker: "Start here",
      landmark: "Park entrance at the top of Knez Mihailova",
      direction:
        "Enter the park and keep the fortress walls on your left. Follow the broad path toward the open river views.",
      script:
        "Welcome to Kalemegdan, the high ground where Belgrade has kept watch for more than two thousand years. Below you, the Sava meets the Danube; behind you, the old city rises along the ridge. This is why everyone wanted this hill. Romans built a military camp here, medieval Serbian rulers strengthened it, and Ottoman and Habsburg armies repeatedly fought over it. The name Kalemegdan comes from Turkish words for fortress and battlefield, a reminder that the peaceful park around you was once the edge of empire. Look for the layers in the stone rather than one perfect castle: gates, ramparts, and surviving walls belong to different centuries and different rulers. In the early fifteenth century, Despot Stefan Lazarević rebuilt Belgrade and made it the Serbian capital. The fortress was later reshaped for artillery, then slowly turned from a military zone into the city’s favourite park. Today it is Belgrade’s history book with the pages left outdoors. Take a moment to notice the rivers before you continue: they are the reason this place exists.",
    },
    victor: {
      title: "Victor Monument",
      kicker: "The lookout",
      landmark: "Pobednik viewing terrace",
      direction:
        "Face the Victor, then take the path back toward the city. Leave Kalemegdan at the main gate and continue straight along Knez Mihailova.",
      script:
        "This bronze figure is Pobednik, or The Victor, one of Belgrade’s unmistakable symbols. Sculptor Ivan Meštrović created the statue to mark Serbia’s victories in the Balkan Wars and the First World War. It was unveiled here in 1928, facing the confluence with a sword in one hand and a dove in the other. From this terrace, the gesture feels almost theatrical: the city looks toward the rivers, the flatlands beyond, and the routes by which armies and traders once arrived. The monument’s placement matters as much as the sculpture. Instead of standing in a square, it rises from the fortress wall, turning a military viewpoint into a civic one. Belgraders have argued, joked, and taken countless photographs around this figure for nearly a century, but the view keeps the meaning grounded. The Sava to your left and the Danube ahead made Belgrade a meeting point and a target. Before walking on, turn slowly toward the city centre. The lively pedestrian street ahead once connected this fortified edge of town with the commercial heart of modern Belgrade.",
    },
    knez: {
      title: "Knez Mihailova Street",
      kicker: "Belgrade’s promenade",
      landmark: "Knez Mihailova pedestrian zone",
      direction:
        "Walk downhill along Knez Mihailova. At the end of the pedestrian street, you will arrive at the horse statue in Republic Square.",
      script:
        "Knez Mihailova is Belgrade’s living room: a pedestrian street where locals meet, musicians set up, and every pace of the city seems to pass by. It follows an older Roman street line, but the handsome buildings you see are mostly from the late nineteenth century, when Belgrade was becoming a modern European capital. The street is named for Prince Mihailo Obrenović III, a nineteenth-century ruler remembered for helping secure the withdrawal of Ottoman garrisons from Serbian towns. Look up as you walk. Many façades were built for merchants, banks, and wealthy families eager to show that Belgrade belonged in the new century. This is not a museum corridor; it is still a place for errands, coffee, dates, and long walks. That mix is the point. A fortress can tell you who fought for a city, but Knez Mihailova shows you what the city wanted to become: confident, social, and connected to the world. Continue downhill and let the street deliver you to the square that has become Belgrade’s favourite meeting point.",
    },
    republic: {
      title: "Republic Square",
      kicker: "Meet me by the horse",
      landmark: "Prince Mihailo monument",
      direction:
        "With the horse behind you, take the street to your left, Francuska. Turn right onto Skadarska and follow the cobbles uphill.",
      script:
        "You are standing in Republic Square, the crossroads of old and modern Belgrade. The equestrian statue in the middle honours Prince Mihailo Obrenović III, and its raised arm points toward towns that were still under Ottoman control when the monument was conceived. For generations, people have arranged to meet here simply by saying, meet me by the horse. The square is framed by two cultural heavyweights. The National Museum holds art and archaeology from Serbia and far beyond, while the National Theatre has been a central stage for drama, opera, and ballet since the nineteenth century. This part of town changed rapidly after the Ottoman era, when walls and gates gave way to boulevards, institutions, and public squares. That is why Republic Square feels ceremonial but never empty: it is a place built for gathering. Pause for a photo if you like, then head toward a different kind of Belgrade landmark. Skadarlija is only a few streets away, where the city’s writers, actors, and late-night talkers made their own tradition.",
    },
    skadarlija: {
      title: "Skadarlija",
      kicker: "The bohemian lane",
      landmark: "Skadarska cobblestone street",
      direction:
        "Continue uphill on Skadarska, then head west through Dorćol until you reach the courtyard and minaret of the Bajrakli Mosque.",
      script:
        "The cobbles beneath your feet mark Skadarlija, Belgrade’s best-known bohemian quarter. In the late nineteenth and early twentieth centuries, this lane drew writers, painters, journalists, actors, and musicians who preferred a long night of conversation to a tidy bedtime. It grew beside the city’s old brewery district, and its taverns became an informal extension of nearby theatres and newspaper offices. Today, restaurants and live music make Skadarlija one of the city’s most visited streets, but its atmosphere comes from a real tradition of artistic life rather than a theme-park invention. Imagine smoke, poetry, arguments about politics, and a singer moving from table to table with a tamburica. Belgrade has always had formal spaces for culture, like the theatre you just passed; Skadarlija represents the less formal version, where culture happens over dinner and disagreement. Walk slowly on the uneven stones and watch your footing. When you are ready, follow the route back toward Dorćol, one of the city’s oldest neighbourhoods, for a quieter but equally important piece of Belgrade’s layered story.",
    },
    dorcol: {
      title: "Bajrakli Mosque & Dorćol",
      kicker: "A layered neighbourhood",
      landmark: "Bajrakli Mosque, Gospodar Jevremova",
      direction:
        "You have reached the final stop. From here, it is an easy 10-minute walk back to Knez Mihailova or a gentle wander through Dorćol’s cafés.",
      script:
        "Bajrakli Mosque is a small but powerful reminder that Belgrade has never belonged to only one chapter of history. Built in the Ottoman period, it is the city’s only surviving mosque from a time when Belgrade was an important Ottoman frontier town. Its name refers to the flag, or bajrak, once raised here to signal prayer time to other mosques. The building has survived conflict, change, and long stretches when the city around it looked very different. Around you is Dorćol, a neighbourhood whose name comes from a Turkish expression meaning crossroads. That is fitting. For centuries, this area brought together traders, craftspeople, religious communities, and travellers moving between the Danube, the fortress, and the town. Your walk has moved from walls and monuments to promenades, theatres, taverns, and a living place of worship. That is the useful way to remember Belgrade: not as a city frozen in one grand past, but as layers of people making room for the next layer. The pilot tour ends here. Take your time, and keep listening to the city.",
    },
  },
  paths: {
    "kalemegdan>victor": {
      main: {
        label: "Straight up the avenue",
        blurb: "The direct path along the main avenue to the terrace.",
      },
      ruzica: {
        label: "Down past Ružica Church",
        blurb:
          "A loop through the Zindan Gate to the little church built into the rampart, then back up.",
      },
    },
    "victor>knez": {
      main: {
        label: "Through the main gate",
        blurb: "Back across the park and straight into the promenade.",
      },
      riverside: {
        label: "Riverside & Cathedral",
        blurb:
          "Down the western ramparts toward the Sava, then in past the Cathedral church.",
      },
    },
    "knez>republic": {
      main: {
        label: "Down the promenade",
        blurb: "The full length of Knez Mihailova, exactly as the narration describes.",
      },
      obilicev: {
        label: "Via Obilićev venac",
        blurb: "One block over: café terraces instead of shop windows.",
      },
    },
    "republic>skadarlija": {
      main: {
        label: "Up Francuska",
        blurb: "The short way, exactly as the narration describes.",
      },
      cetinjska: {
        label: "Via the Cetinjska yard",
        blurb: "Past the Bajloni market into the old brewery courtyard.",
      },
    },
    "skadarlija>dorcol": {
      main: {
        label: "Quiet backstreets",
        blurb: "The calm way through Dorćol’s residential grid.",
      },
      strahinja: {
        label: "Via Strahinjića Bana",
        blurb: "Belgrade’s café row — busier, and a little longer.",
      },
    },
  },
  detours: {
    ruzica: {
      name: "Ružica Church & St Petka",
      blurb: "A church built into the rampart, with chandeliers made from spent weapons.",
    },
    terrace: {
      name: "The Grand Terrace",
      blurb: "The best view of the Sava and Danube meeting, a minute from the Victor.",
    },
    cathedral: {
      name: "Cathedral Church & the ? kafana",
      blurb: "Belgrade’s oldest tavern, still facing the church across the street.",
    },
    ethnographic: {
      name: "Ethnographic Museum",
      blurb: "Village life, costume and craft, on Studentski trg.",
    },
    nationalmuseum: {
      name: "National Museum",
      blurb: "Right on the square: archaeology downstairs, painting upstairs.",
    },
    bajloni: {
      name: "Bajloni market & Cetinjska",
      blurb: "A morning market beside the courtyard that becomes Belgrade’s nightlife.",
    },
    turbe: {
      name: "Sheikh Mustafa’s türbe",
      blurb: "A small Ottoman tomb tucked into a quiet Dorćol side street.",
    },
  },
  variants: {
    full: { label: "Full walk", blurb: "Six stops, fortress to Dorćol." },
    short: { label: "Short walk", blurb: "Four stops, fortress to Republic Square." },
  },
  directions: {
    forward: { label: "Fortress first", blurb: "Start at Kalemegdan, finish in Dorćol." },
    reverse: { label: "Dorćol first", blurb: "Walk it backwards and finish at the fortress." },
  },
};
