import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const tr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Stari Grad tarih yürüyüşü",
  tagline: "Kale duvarlarından bohem masalara.",
  note: "Altı yer. Bir yürüyüş. Bir kahveye, bir sapmaya ya da güzel bir manzaraya bolca yer var.",
  stops: {
    kalemegdan: {
      title: "Kalemegdan ve Belgrad Kalesi",
      kicker: "Buradan başla",
      landmark: "Knez Mihailova'nın tepesindeki park girişi",
      direction:
        "Parka gir ve kale duvarlarını solunda tut. Nehir manzarasına açılan geniş yolu izle.",
      script:
        "Kalemegdan'a hoş geldin: Belgrad'ın iki bin yıldan uzun süredir nöbet tuttuğu yüksek zemin. Aşağında Sava, Tuna ile buluşuyor; arkanda eski şehir sırt boyunca yükseliyor. Bu tepeyi herkesin istemesinin sebebi işte bu. Romalılar buraya bir askerî kamp kurdu, Orta Çağ Sırp hükümdarları burayı güçlendirdi, Osmanlı ve Habsburg orduları defalarca burası için savaştı. Kalemegdan adı Türkçedeki kale ve meydan kelimelerinden gelir; etrafındaki bu huzurlu parkın bir zamanlar imparatorluk sınırı olduğunu hatırlatır. Tek bir kusursuz şato aramak yerine taştaki katmanlara bak: kapılar, surlar ve ayakta kalan duvarlar farklı yüzyıllara ve farklı hükümdarlara ait. On beşinci yüzyılın başında Despot Stefan Lazareviç Belgrad'ı yeniden inşa etti ve burayı Sırp başkenti yaptı. Kale sonradan topçu savaşına göre yeniden şekillendirildi, ardından yavaş yavaş askerî bir bölgeden şehrin en sevdiği parka dönüştü. Bugün burası Belgrad'ın açık havada bırakılmış tarih kitabı. Devam etmeden önce nehirlere bir bak: bu yerin var olma sebebi onlar.",
    },
    victor: {
      title: "Zafer Anıtı (Pobednik)",
      kicker: "Manzara noktası",
      landmark: "Pobednik seyir terası",
      direction:
        "Yüzünü Pobednik'e dön, sonra şehre doğru geri giden yolu tut. Kalemegdan'dan ana kapıdan çık ve Knez Mihailova boyunca dümdüz devam et.",
      script:
        "Bu bronz figür Pobednik, yani Zafer; Belgrad'ın en tanınan simgelerinden biri. Heykeltıraş Ivan Meştroviç bu heykeli Sırbistan'ın Balkan Savaşları ve Birinci Dünya Savaşı'ndaki zaferleri için yaptı. 1928'de burada açıldı; bir elinde kılıç, diğerinde güvercinle nehirlerin birleştiği noktaya bakıyor. Bu terastan bakınca jest neredeyse teatral geliyor: şehir nehirlere, ötedeki ovalara ve bir zamanlar orduların ve tüccarların geldiği yollara bakıyor. Anıtın konumu en az heykel kadar önemli. Bir meydanda durmak yerine kale duvarından yükseliyor ve askerî bir gözetleme noktasını sivil bir bakış noktasına çeviriyor. Belgradlılar yaklaşık bir yüzyıldır bu figürün etrafında tartıştı, şakalaştı ve sayısız fotoğraf çekti; ama manzara anlamı hep yerinde tutuyor. Solundaki Sava ve karşındaki Tuna, Belgrad'ı hem bir buluşma noktası hem de bir hedef yaptı. Yürümeye devam etmeden önce yavaşça şehir merkezine dön. İleride gördüğün canlı yaya caddesi, bir zamanlar şehrin bu surlu ucunu modern Belgrad'ın ticari kalbine bağlıyordu.",
    },
    knez: {
      title: "Knez Mihailova Caddesi",
      kicker: "Belgrad'ın gezinti caddesi",
      landmark: "Knez Mihailova yaya bölgesi",
      direction:
        "Knez Mihailova boyunca yokuş aşağı yürü. Yaya caddesinin sonunda Cumhuriyet Meydanı'ndaki at heykeline varacaksın.",
      script:
        "Knez Mihailova, Belgrad'ın oturma odası: yerlilerin buluştuğu, müzisyenlerin kurulduğu, şehrin her temposunun önünden geçtiği bir yaya caddesi. Daha eski bir Roma sokak hattını izliyor, ama gördüğün o gösterişli binalar çoğunlukla on dokuzuncu yüzyılın sonundan, Belgrad'ın modern bir Avrupa başkentine dönüştüğü dönemden kalma. Cadde, Sırp kasabalarındaki Osmanlı garnizonlarının çekilmesini sağlamasıyla hatırlanan on dokuzuncu yüzyıl hükümdarı Prens Mihailo Obrenoviç III'ün adını taşıyor. Yürürken yukarı bak. Cephelerin çoğu, Belgrad'ın yeni yüzyıla ait olduğunu göstermek isteyen tüccarlar, bankalar ve varlıklı aileler için yapıldı. Burası bir müze koridoru değil; hâlâ alışverişin, kahvenin, buluşmaların ve uzun yürüyüşlerin yeri. Asıl mesele de bu karışım. Bir kale sana bir şehir için kimin savaştığını anlatır; Knez Mihailova ise şehrin ne olmak istediğini gösterir: kendine güvenen, sosyal ve dünyaya bağlı. Yokuş aşağı devam et ve caddenin seni Belgrad'ın en sevdiği buluşma meydanına götürmesine izin ver.",
    },
    republic: {
      title: "Cumhuriyet Meydanı",
      kicker: "Atın orada buluşalım",
      landmark: "Prens Mihailo anıtı",
      direction:
        "At arkanda kalacak şekilde soldaki caddeye, Francuska'ya gir. Skadarska'ya sağa dön ve arnavut kaldırımını yokuş yukarı takip et.",
      script:
        "Cumhuriyet Meydanı'ndasın: eski ve modern Belgrad'ın kesişme noktası. Ortadaki atlı heykel Prens Mihailo Obrenoviç III'ü onurlandırıyor ve kalkık kolu, anıt tasarlandığında hâlâ Osmanlı yönetiminde olan kasabaları işaret ediyor. Nesillerdir insanlar burada buluşmayı sadece şunu söyleyerek ayarlıyor: atın orada buluşalım. Meydanı iki kültür ağırlığı çerçeveliyor. Ulusal Müze Sırbistan'dan ve çok ötesinden sanat ve arkeoloji barındırıyor; Ulusal Tiyatro ise on dokuzuncu yüzyıldan beri tiyatronun, operanın ve balenin merkez sahnesi. Şehrin bu kısmı Osmanlı döneminden sonra hızla değişti; surlar ve kapılar yerini bulvarlara, kurumlara ve meydanlara bıraktı. Cumhuriyet Meydanı'nın tören havasında ama hiç boş hissettirmemesinin sebebi bu: burası toplanmak için yapılmış bir yer. İstersen bir fotoğraf için dur, sonra bambaşka türde bir Belgrad simgesine doğru ilerle. Skadarlija sadece birkaç sokak ötede; şehrin yazarlarının, oyuncularının ve gece geç saate kadar konuşanlarının kendi geleneklerini kurduğu yer.",
    },
    skadarlija: {
      title: "Skadarlija",
      kicker: "Bohem sokak",
      landmark: "Skadarska arnavut kaldırımı",
      direction:
        "Skadarska'da yokuş yukarı devam et, sonra Dorćol boyunca batıya yürüyerek Bayraklı Camii'nin avlusuna ve minaresine ulaş.",
      script:
        "Ayaklarının altındaki taşlar Skadarlija'yı işaretliyor: Belgrad'ın en bilinen bohem mahallesi. On dokuzuncu yüzyılın sonu ve yirminci yüzyılın başında bu sokak, erken yatmak yerine uzun bir sohbet gecesini tercih eden yazarları, ressamları, gazetecileri, oyuncuları ve müzisyenleri çekti. Şehrin eski bira fabrikası bölgesinin yanında büyüdü ve meyhaneleri, yakındaki tiyatroların ve gazete bürolarının resmî olmayan bir uzantısı hâline geldi. Bugün restoranlar ve canlı müzik Skadarlija'yı şehrin en çok ziyaret edilen sokaklarından biri yapıyor; ama atmosferi, uydurma bir tema parkından değil, gerçek bir sanatsal yaşam geleneğinden geliyor. Dumanı, şiiri, siyaset tartışmalarını ve masadan masaya dolaşan tamburicalı bir şarkıcıyı hayal et. Belgrad'ın kültür için her zaman resmî mekânları oldu — az önce geçtiğin tiyatro gibi; Skadarlija ise kültürün yemek ve tartışma üzerinden yaşandığı gayriresmî versiyonu temsil ediyor. Düzensiz taşlarda yavaş yürü ve adımına dikkat et. Hazır olduğunda rotayı şehrin en eski mahallelerinden Dorćol'a doğru takip et; Belgrad'ın katmanlı hikâyesinin daha sakin ama bir o kadar önemli bir parçası için.",
    },
    dorcol: {
      title: "Bayraklı Camii ve Dorćol",
      kicker: "Katman katman bir mahalle",
      landmark: "Bayraklı Camii, Gospodar Jevremova",
      direction:
        "Son durağa ulaştın. Buradan Knez Mihailova'ya 10 dakikalık kolay bir yürüyüş var, ya da Dorćol'un kafelerinde keyifle dolaşabilirsin.",
      script:
        "Bayraklı Camii, Belgrad'ın hiçbir zaman tarihin tek bir bölümüne ait olmadığını hatırlatan küçük ama güçlü bir yapı. Osmanlı döneminde inşa edilen bu cami, Belgrad'ın önemli bir Osmanlı sınır şehri olduğu dönemden ayakta kalan tek cami. Adı, namaz vaktini diğer camilere bildirmek için bir zamanlar burada çekilen bayraktan geliyor. Bina çatışmalara, değişimlere ve etrafındaki şehrin çok farklı göründüğü uzun dönemlere tanıklık etti. Etrafında Dorćol var; adı Türkçede kavşak anlamına gelen dört yol ifadesinden geliyor. Çok da yerinde bir isim. Yüzyıllar boyunca bu bölge Tuna, kale ve şehir arasında hareket eden tüccarları, zanaatkârları, dinî toplulukları ve yolcuları bir araya getirdi. Yürüyüşün duvarlardan ve anıtlardan gezinti caddelerine, tiyatrolara, meyhanelere ve hâlâ yaşayan bir ibadet yerine uzandı. Belgrad'ı hatırlamanın işe yarar yolu da bu: görkemli tek bir geçmişte donmuş bir şehir olarak değil, bir sonraki katmana yer açan insan katmanları olarak. Pilot tur burada bitiyor. Acele etme ve şehri dinlemeye devam et.",
    },
  },
  paths: {
    "kalemegdan>victor": {
      main: {
        label: "Ana yoldan dosdoğru",
        blurb: "Terasa çıkan ana yol boyunca doğrudan giden yol.",
      },
      ruzica: {
        label: "Ruzica Kilisesi'nden aşağı",
        blurb:
          "Zindan Kapısı'ndan geçip sura gömülü küçük kiliseye inen, sonra geri çıkan bir tur.",
      },
    },
    "victor>knez": {
      main: {
        label: "Ana kapıdan",
        blurb: "Parkı geri geçip doğrudan gezinti caddesine.",
      },
      riverside: {
        label: "Nehir kıyısı ve Katedral",
        blurb:
          "Batı surlarından Sava'ya doğru inip Katedral Kilisesi'nin önünden şehre giriş.",
      },
    },
    "knez>republic": {
      main: {
        label: "Gezinti caddesi boyunca",
        blurb: "Knez Mihailova'nın tamamı — anlatımdaki tarifin aynısı.",
      },
      obilicev: {
        label: "Obiliçev venac üzerinden",
        blurb: "Bir blok yandan: vitrinler yerine kafe terasları.",
      },
    },
    "republic>skadarlija": {
      main: {
        label: "Francuska'dan yukarı",
        blurb: "Kısa yol — anlatımdaki tarifin aynısı.",
      },
      cetinjska: {
        label: "Cetinjska avlusundan",
        blurb: "Bajloni pazarının önünden eski bira fabrikasının avlusuna.",
      },
    },
    "skadarlija>dorcol": {
      main: {
        label: "Sakin arka sokaklar",
        blurb: "Dorćol'un konut dokusundan geçen sakin yol.",
      },
      strahinja: {
        label: "Strahinjiça Bana üzerinden",
        blurb: "Belgrad'ın kafe sokağı — daha kalabalık ve biraz daha uzun.",
      },
    },
  },
  detours: {
    ruzica: {
      name: "Ruzica Kilisesi ve Aziz Petka",
      blurb: "Sura gömülü bir kilise; avizeleri kullanılmış silahlardan yapılmış.",
    },
    terrace: {
      name: "Büyük Teras",
      blurb: "Sava ile Tuna'nın buluşmasının en iyi manzarası, Pobednik'e bir dakika.",
    },
    cathedral: {
      name: "Katedral Kilisesi ve ? meyhanesi",
      blurb: "Belgrad'ın en eski meyhanesi, hâlâ karşısındaki kiliseye bakıyor.",
    },
    ethnographic: {
      name: "Etnografya Müzesi",
      blurb: "Köy yaşamı, kıyafet ve zanaat; Studentski trg'de.",
    },
    nationalmuseum: {
      name: "Ulusal Müze",
      blurb: "Tam meydanda: altta arkeoloji, üstte resim.",
    },
    bajloni: {
      name: "Bajloni pazarı ve Cetinjska",
      blurb: "Belgrad'ın gece hayatına dönüşen avlunun yanındaki sabah pazarı.",
    },
    turbe: {
      name: "Şeyh Mustafa Türbesi",
      blurb: "Sessiz bir Dorćol ara sokağına sıkışmış küçük bir Osmanlı türbesi.",
    },
  },
  variants: {
    full: { label: "Tam yürüyüş", blurb: "Altı durak, kaleden Dorćol'a." },
    short: { label: "Kısa yürüyüş", blurb: "Dört durak, kaleden Cumhuriyet Meydanı'na." },
  },
  directions: {
    forward: { label: "Önce kale", blurb: "Kalemegdan'dan başla, Dorćol'da bitir." },
    reverse: { label: "Önce Dorćol", blurb: "Tersten yürü ve kalede bitir." },
  },
};
