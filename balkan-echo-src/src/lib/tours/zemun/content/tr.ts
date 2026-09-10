import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const tr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Zemun ve Gardoš",
  tagline: "Kaleden yarım saat uzakta, öteki imparatorluğun kasabası.",
  note: "Beş yer, sonda bir yokuş ve tırmanmaya değer bir kule.",
  stops: {
    kej: {
      title: "Kej oslobođenja",
      kicker: "Buradan başla",
      landmark: "Zemun rıhtımı, Tuna kıyısı",
      direction:
        "Nehre arkanı dön ve eski kasabaya doğru iki blok yukarı, pazar hallerinin olduğu meydana yürü.",
      script:
        "Başka bir ülkede duruyorsun — ya da son üç yüz yılın büyük bölümünde öyle olurdu. 1918'e kadar bu kıyı Habsburg İmparatorluğu'na, karşı kıyı Osmanlılara ve sonra Sırbistan'a aitti. Sınır tam önündeki sudan geçiyordu. Zemun imparatorluk tarafındaki sınır kasabasıydı: gümrük binaları, garnizon ve Osmanlı topraklarından gelen yolcuların Avrupa'nın içine geçmeden önce haftalarca tutulduğu bir karantina istasyonu vardı. Belgrad ile Zemun yüzyıllarca birbirini nehirlerin ötesinden gördü ama aynı devlette değildi. Zemun'un hâlâ Belgrad'a benzememesinin sebebi bu. Sokaklar daha alçak, daha geniş ve daha sakin, evler tek katlı ve Orta Avrupalı; bütün yer, yanına bir başkent yapışmış küçük bir Avusturya-Macarya nehir kasabası gibi. Karşıdaki yeşil düz adaya bak: Veliko ratno ostrvo, yani Büyük Savaş Adası. Hâlâ insansız, hâlâ doğa koruma alanı ve tam Sava'nın Tuna'yla buluştuğu yerde. Sonra içeriye yürü, çünkü bir sınır kasabasının ne işe yaradığını sana asıl pazar meydanı gösterir.",
    },
    pijaca: {
      title: "Zemun pazarı",
      kicker: "Pazar",
      landmark: "Masarikov trg ve pazar halleri",
      direction:
        "Meydandan batıya çık; ya dükkânlı yaya caddesinden ya da arka sokaklardan, yüksek çan kuleli büyük kiliseye varana kadar yürü.",
      script:
        "Ciddi her Balkan mahallesi pazarıyla ölçülür ve Zemun'unki iyilerden: gürültülü, ucuz, mevsimlik ve turistlerle hiç ilgilenmiyor. Ağustosta bir domates ve biber duvarı, sonbaharda ayva kokuyor; kenarlarda elle yazılmış etiketli plastik şişelerde bal, peynir ve rakı satanlar var. Bu restore edilmiş bir miras pazarı değil. Çalışan türden. Etrafındaki meydan, Habsburg yönetimi kasabayı on sekizinci yüzyılda ızgara planla kurduğundan beri Zemun'un ticari merkezi; sokakların burada dik açıyla kesişmesinin, Belgrad'ın eski şehrinin ise kıvrılmasının sebebi de bu. Yakında Gospodska uzanıyor — beyefendiler caddesi. Yaya alışveriş güzergâhı ve kimse ona gezinti caddesi demeye başlamadan çok önce görülmesi gereken yerdi. Koyacak yerin varsa meyve al. Sonra batıya yönel, çünkü sıradaki bina kasabanın sınırın hangi tarafında olduğunu taşa yazarak kabul ettiği yer.",
    },
    bogorodica: {
      title: "Meryem Ana Kilisesi",
      kicker: "Cemaat kilisesi",
      landmark: "Bogorodičina crkva, Njegoševa sokağı",
      direction:
        "Kuzeydoğuya yönel ve tırmanmaya başla. Sokaklar daralıp eğimlenir; çok daha küçük ve çok daha eski bir kiliseye varana kadar yukarı devam et.",
      script:
        "Bu, Zemun'un ana Ortodoks kilisesi; 1780'de bitti ve azınlıkların inşa etmeye izinli ama göze batmaya izinsiz olduklarında nasıl inşa ettiklerinin dersi. Habsburglar Katolikti ve Ortodoks Sırp tebaaları hoş karşılanmaktan çok tahammül ediliyordu; dolayısıyla mimari bir uzlaşma: Orta Avrupa barok kıyafeti giymiş bir Ortodoks kilisesi. Çan kulesi yüksek ve Avusturyalı; içerideki plan ve ikonostasis ise açıkça Bizanslı. Girebilirsen ikona perdesine bak — şehirdeki on sekizinci yüzyıl resminin en iyi örneklerinden biri ve onu yapan insanlar aynı zamanda bir kimlik pazarlığı yürütüyordu. Zemun'un Sırpları parası ve ayrıcalıkları olan tüccarlar ve zanaatkârlardı; ikisini de her zaman yüksek sesle söylemelerine izin verilmeyen şeyi taşa yazmak için kullandılar. Buradan sonra zemin yükselmeye başlıyor ve binalar eskidikçe küçülüyor. Eski bir kasabada olağan yön budur: tepeye doğru ne kadar çıkarsan, zamanda o kadar geriye yürürsün.",
    },
    nikolajevska: {
      title: "Aziz Nikola Kilisesi",
      kicker: "En eski kilise",
      landmark: "Nikolajevska crkva, 1731 yapımı",
      direction:
        "Tırmanmaya devam et. Yukarıdaki sırttaki kule son durak; sokak sola kıvrılıp seni oraya bırakıyor.",
      script:
        "Bu, Belgrad'da ayakta kalan en eski kilise ve Belgradlıların çoğu içine hiç girmedi. 1731'de bitti; yani nehirlerin karşısındaki her kiliseden daha eski. Osmanlı yönetimi Belgrad'ın kendisinde yeni Ortodoks yapı yapılmasına izin vermiyordu, bu yüzden modern şehrin en eski kilisesi karşı kıyıda, o zamanki yabancı bir imparatorlukta. Küçük, badanalı ve sokak seviyesinin altında; aşağı doğru inşa etmek, izin verilecek kadar alçakgönüllü inşa etmenin bir yoluydu. İçinde Dimitrije Baçeviç'in barok ikonostasisi var — yaldızlı, kalabalık ve oda için biraz fazla görkemli; zengin bir sınır cemaatinin sipariş edeceği şeyin tam olarak kendisi. Etrafındaki mezarlıkta, adları iki imparatorluğun gümrük kayıtlarında geçen Zemun tüccarları yatıyor. Son tırmanıştan önce burada bir an dur, çünkü yukarıdaki kuleden sınırın iki tarafını birden görebileceksin — ve tek bir şehir gibi görünecek; bunun gerçek olması 1934'ü bekledi.",
    },
    gardos: {
      title: "Gardoš ve Milenyum Kulesi",
      kicker: "Kule",
      landmark: "Gardoš, Zemun kalesinin kalıntıları üzerinde",
      direction:
        "Son durağa ulaştın. Buradan aşağı inen yol belli; yürüyüşü suyun kenarında bitirmek istersen rıhtım on dakika.",
      script:
        "İnsanların Gardoš'a gelme sebebi bu kule ve ziyaretçilerin ona dair inandığı neredeyse her şey yanlış. Belgradlılar ona Sibinjanin Janko'nun kulesi diyor; Macar general Janos Hunyadi gerçekten 1456'da Osmanlı ilerleyişine karşı bölgeyi savunurken Zemun'da öldü. Kulenin onunla hiçbir ilgisi yok. 1896'da, dört yüz kırk yıl sonra, Macarların Pannonia ovasına yerleşmesinin bininci yılını işaretleyen anıtlardan biri olarak yapıldı — seyir terası kılığına sokulmuş bir sahiplik beyanı; yeni imparatorluk eskisinin tam üstünde dursun diye bilinçli olarak ortaçağ kalesinin kalıntılarına kondu. Yirmi yıl sonra o imparatorluk yoktu ve kule resmî anlamı yerine yerel takma adı korudu. Çık yukarı. Tepeden Sava soldan, Tuna sağdan geliyor, Büyük Savaş Adası tartışmanın ortasında duruyor ve Belgrad'ın kalesi karşı kıyıdan sana bakıyor. İki kasaba, iki imparatorluk, tek manzara. Yürüyüşün burada bitiyor.",
    },
  },
  paths: {
    "kej>pijaca": {
      main: {
        label: "Rıhtımdan dosdoğru yukarı",
        blurb: "İki blok içeri, pazar meydanına en kısa yol.",
      },
      obala: {
        label: "Önce rıhtım boyunca",
        blurb: "Bağlı restoranların önünden kuzeye, sonra içeri. Daha yavaş, manzarası daha iyi.",
      },
    },
    "pijaca>bogorodica": {
      main: { label: "Arka sokaklardan", blurb: "Izgara plan içinden kısa yol." },
      gospodska: {
        label: "Gospodska boyunca",
        blurb: "Yaya alışveriş caddesi — daha kalabalık, ve Zemun'un gezinti caddesi olma sebebi.",
      },
    },
    "bogorodica>nikolajevska": {
      main: { label: "Doğrudan tırmanış", blurb: "Sokaklardan dümdüz yukarı. Yer yer dik." },
      padina: {
        label: "Yamacın etrafından",
        blurb: "Eğimi dolanan daha yumuşak bir hat; çatıların üstünden manzarayla.",
      },
    },
    "nikolajevska>gardos": {
      main: { label: "Doğrudan kuleye", blurb: "Son birkaç yüz metre, tamamı yokuş yukarı." },
      stepenice: {
        label: "Gardoš merdivenlerinden",
        blurb: "Eski yamaç evlerinin arasından basamaklı yol. Daha yavaş, çok daha güzel.",
      },
    },
  },
  detours: {
    magistrat: {
      name: "Zemun Magistratı",
      blurb:
        "1823 yapımı eski belediye binası; Zemun'un serbest kraliyet kasabası olarak kendini yönettiği ve bunu belgeleyecek evrakı olduğu on yıllardan kalma.",
    },
    ratnoostrvo: {
      name: "Büyük Savaş Adası seyir noktası",
      blurb:
        "Rıhtım boyunca birkaç dakika daha; iki nehrin birleştiği yerdeki insansız adanın ve orayı sahiplenmiş balıkçılların en net göründüğü yer.",
    },
    sinagoga: {
      name: "Eski sinagog",
      blurb:
        "Zemun'un Aşkenaz sinagog binası Dubrovačka'da hâlâ ayakta. Theodor Herzl'in dedesi burada ibadet etti; bu da bu küçük sokağı Siyonizm tarihine bir dipnot yapıyor.",
    },
  },
  variants: {
    full: { label: "Tam yürüyüş", blurb: "Beş durak, rıhtımdan kuleye." },
    short: { label: "Kısa yürüyüş", blurb: "Üç durak, kiliseden kuleye — yokuşlu yarısı." },
  },
  directions: {
    forward: { label: "Önce rıhtım", blurb: "Tuna kıyısından başla, kuleye tırman." },
    reverse: { label: "Önce kule", blurb: "Yukarıdan başla, suyun kenarında bitir." },
  },
};
