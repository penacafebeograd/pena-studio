import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const tr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Vračar: azizler ve mucitler",
  tagline: "Balkanlar'ın en büyük kilisesi ve dünyayı aydınlatan adam.",
  note: "Beş yer, çoğu yokuş aşağı, ve sana indirim borçlu bir kahve molası.",
  stops: {
    temple: {
      title: "Aziz Sava Tapınağı",
      kicker: "Buradan başla",
      landmark: "Svetosavski plato, tapınak platosu",
      direction:
        "Platodan kütüphanenin ters tarafından çık ve görmeden önce duyacağın kavşağa doğru Vračar sokaklarından yokuş aşağı in.",
      script:
        "Dünyanın en büyük Ortodoks kiliselerinden birinin altında duruyorsun ve bu kilise hâlâ bitmedi. Bu ikili Belgrad hakkında bilmen gereken neredeyse her şeyi anlatıyor. Plato bir sebeple seçildi: 1595'te bir Sırp ayaklanması sırasında bir Osmanlı komutanı Aziz Sava'nın kutsal emanetlerini buraya getirtip halkın önünde yaktırdı. Aziz Sava, babasının sarayını bırakıp manastıra giden ve bağımsız bir Sırp kilisesinin ilk başpiskoposu olarak dönen Rastko Nemanjiç'ti. Ölümünden üç yüzyıl sonra onu yakmak bir şeyi bitirmek içindi. Ondan üç yüzyıl sonra Sırplar tam o noktaya hayal edebildikleri en büyük kiliseyi diktiler. 1905'te yarışma açıldı. İnşaat 1935'te başladı, İkinci Dünya Savaşı'yla durdu, sonra onlarca yıl yarım kaldı; sosyalist devlet kabuğu depo, platoyu otopark olarak kullandı. Çalışmalar 1985'te yeniden başladı. İçerideki o devasa mozaik ancak bizim yüzyılımızda tamamlandı. Yani buna dikilmiş bir anıt olarak değil, dört nesil süren ve üç devletten uzun yaşayan bir bina olarak bak. Açıksa içine gir; kubbe boyun ağrısına değer. Sonra dışarı çık ve yokuş aşağı dön, çünkü sıradaki durak ciddiyetin tam tersi.",
    },
    slavija: {
      title: "Slavija",
      kicker: "Kavşak",
      landmark: "Slavija fıskiyesi ve etrafındaki döner yol",
      direction:
        "Kavşağın çevresindeki yaya geçitlerini kullan ve kuzeye, geniş cadde Kralja Milana boyunca, çiçek dolu küçük bir meydana açılana kadar yürü.",
      script:
        "Slavija her Belgradlının bir şikâyeti olduğu meydan ve adı bir tarih kazası. 1880'lerde burası şehrin kıyısında bataklık bir araziydi ve onu Francis Mackenzie adında bir İskoç satın aldı; Belgrad'a gelip Sırpça öğrenen, bataklığı alıp kurutan, sokaklar açıp parseller satan bir evanjelik. Burada Slav birliği toplantıları için bir salon yaptırdı ve adını Slavija koydu. Salon çoktan yok; ama isim adamdan, krallıktan, iki Yugoslavya'dan ve meydana Dimitrije Tucoviç adını verme alışkanlığından uzun yaşadı. Şimdi gördüğün şey ortasında 2017'de kurulan bir fıskiyesi olan bir döner kavşak; ışık ve müzik gösterisi yapıyor ve seyircisinin çoğu arabalarda mahsur. Belgradlılar sana burayı geçmenin imkânsız olduğunu söyleyecek. Abartıyorlar, ama çok da değil: geçitleri kullan ve acele etme. Kavşağı çevreleyen binaların birbiriyle tamamen anlaşamadığına dikkat et — sosyalist bir otel, cam ofisler, tutunmaya çalışan eski cepheler. Bu kavga zaten mevzunun kendisi. On dokuzuncu yüzyıl Belgrad'ı burada bitti ve yirminci yüzyıla canı ne isterse yapma izni verildi.",
    },
    cvetni: {
      title: "Cvetni trg",
      kicker: "Çiçek Meydanı",
      landmark: "Njegoševa'nın başındaki çiçek tezgâhları",
      direction:
        "Meydandan eski villaların sessiz sokağı Krunska boyunca çık ve 51 numaraya varana kadar doğuya devam et.",
      script:
        "Cvetni trg Çiçek Meydanı demek ve şehir merkezi isimleri için alışılmadık biçimde bu tam anlamıyla doğru: çiçekçiler bu köşede yüz yılı aşkın süredir çalışıyor ve hâlâ buradalar. Meydan küçük, hafif üçgen ve Belgrad'ın en resmiyetsiz oturma odası gibi işliyor. Bir tarafında 1990'lardaki yangından sonra camla yeniden yapılan Yugoslav Drama Tiyatrosu var — ülkenin en ciddi oyunculuğu orada olur; diğer bütün taraflarda ise insanlar kahve içip kaldırımın tiyatrosunu izliyor. Sosyalist dönemin büyük bölümünde burası Partizan komutanı adına Trg Ivana Milutinoviça'ydı ve yaşlı Belgradlılar hâlâ dili sürçüp öyle diyor. Sonunda çiçekler kazandı. Burası aynı zamanda şehrin en hoş yürüyüş sokaklarından biri olan Njegoševa'nın başı ve arkandaki kalabalık bulvarın alçak villalara, çınarlara ve sessizliğe bıraktığı sınır. Hiçbir şey almasan da olur, vaktin varsa on dakika otur. Sonra Krunska'dan doğuya git, çünkü birkaç yüz metre ötede, dışardan diğerlerinden farksız görünen bir villada, yirminci yüzyılı gelmeden önce hayal etmiş bir adamın arşivi duruyor.",
    },
    tesla: {
      title: "Nikola Tesla Müzesi",
      kicker: "Arşiv",
      landmark: "Krunska 51, 1929 yapımı bir villa",
      direction:
        "Krunska boyunca devam et, sonra bakanlıkların önünden kuzeye, büyük bir parkın kenarında duran koyu tuğlalı kiliseye git.",
      script:
        "1929'da bir Belgrad ailesi için yapılan bu villa, Nikola Tesla'nın küllerini ve yaklaşık yüz altmış bin belgesini barındırıyor. İkisi de yüksek sesle söylendiğinde tuhaf geliyor. Tesla 1856'da bugün Hırvatistan'da olan bir köyde Sırp bir aileye doğdu, Graz ve Prag'da okudu, Budapeşte ve Paris'te çalıştı ve adını New York'ta duyurdu; 1943'te orada bir otel odasında yalnız öldü. Belgrad'da hiç yaşamadı. Bir kez, 1892'de geldi ve dönen bir kahraman gibi karşılandı. Yeğeni mirası 1950'lerde buraya getirdi ve küp o zamandan beri ön odada duruyor; bazı ziyaretçiler bunu dokunaklı, bazıları açıkça garip buluyor. Müze küçük ve gösteriler teatral: kıvılcım savuran bir Tesla bobini, döner manyetik alanı göstermek için kullandığı dönen yumurta. Ama gerçek hazine kâğıt. Not defterleri, patentleri ve yazışmaları 2003'te UNESCO Dünya Belleği listesine alındı; çünkü alternatif akımın — bunu nerede okuyorsan oradaki ışıkların çalışma sebebinin — kâğıt üstünde nasıl tartışıldığını görmek için gidilecek yer burası.",
    },
    stmark: {
      title: "Aziz Marko Kilisesi ve Tašmajdan",
      kicker: "Son durak",
      landmark: "Crkva Svetog Marka, Tašmajdan parkının kenarında",
      direction:
        "Son durağa ulaştın. Kilisenin arkasındaki park yürümeyi bırakmak için iyi bir yer; şehir merkezi buradan on beş dakika yokuş aşağı.",
      script:
        "Aziz Marko koyu kırmızı tuğladan, bilinçli olarak eski moda ve göründüğünden çok daha genç. 1931 ile 1940 arasında, on dördüncü yüzyıldan kalma Graçanitsa manastır kilisesi yakından örnek alınarak yapıldı — modern bir krallıkta ortaçağ biçiminde dikilen bir bina, ki asıl mesele de buydu. İçinde on dördüncü yüzyılda Sırbistan'ı en geniş sınırlarına taşıyan İmparator Stefan Duşan'ın mezarı var; kalıntıları 1968'de buraya getirildi. Kilise bahçesinde arkadaki küçük Rus kilisesini ara: Rus iç savaşından kaçan mültecilerin yaptığı Kutsal Üçlü Kilisesi; Beyaz Ordu komutanı Pyotr Wrangel orada gömülü. İki yenilmiş imparatorluk, tek küçük bahçe. Yanındaki park Tašmajdan ve isim yine Türkçe — taş meydan. Romalılar burada yapı taşı çıkardı, Osmanlılar ismi korudu ve altta kalan tüneller yaşayan hafızada sığınak olarak kullanıldı. Belgrad bunu sürekli yapıyor: çocukların oynadığı bir park, altında bir taş ocağı, gitmiş bir imparatorluktan kalan bir isim. Yürüyüşün burada bitiyor. Otur ve şehrin konuşmaya devam etmesine izin ver.",
    },
  },
  paths: {
    "temple>slavija": {
      main: {
        label: "Dümdüz yokuş aşağı",
        blurb: "Vračar sokaklarından doğrudan giden yol.",
      },
      kalenic: {
        label: "Kalenić pazarından",
        blurb:
          "Belgrad'ın en sevilen semt pazarına doğuya uzun bir tur, sonra batıya dönüş. Öğleden önce değer.",
      },
    },
    "slavija>cvetni": {
      main: {
        label: "Kralja Milana boyunca",
        blurb: "Ana bulvar; dükkânlar, trafik, hepsi dahil.",
      },
      njegoseva: {
        label: "Njegoševa üzerinden",
        blurb: "Bir sokak doğuda: villalar, çınarlar ve çok daha az gürültü.",
      },
    },
    "cvetni>tesla": {
      main: {
        label: "Krunska boyunca",
        blurb: "Müzenin kendisinin de üstünde durduğu villa sokağı.",
      },
      boulevard: {
        label: "Bulvardan",
        blurb: "Bulevar kralja Aleksandra'ya çıkıp geri dönüş — daha kalabalık, daha uzun, daha şehir.",
      },
    },
    "tesla>stmark": {
      main: {
        label: "Bakanlıkların önünden",
        blurb: "Devlet dairelerinin arasından kuzeye, kiliseye.",
      },
      tasmajdan: {
        label: "Tašmajdan parkının içinden",
        blurb: "Ağaçların altına girip kilisenin yanından çıkış; park tarafından varıyorsun.",
      },
    },
  },
  detours: {
    penacafe: {
      name: "Pena Art Cafe",
      blurb:
        "Bizim kendi kafemiz, rotadan otuz saniye sapmayla Deligradska 1'de — yani bunu tavsiye değil davet say. Kahve, tatlı ve yolun yarısında oturacak bir yer.",
      offer: { code: "ECHO10", terms: "Hesabında %10 indirim, ziyaret başına bir kez." },
    },
    library: {
      name: "Sırbistan Ulusal Kütüphanesi",
      blurb:
        "Tapınağın yanında: 1970'lerden, havada duran beton kutulardan oluşan, insanların ya çok sevdiği ya da konuşmayı reddettiği bir bina.",
    },
    manjez: {
      name: "Manjež parkı",
      blurb:
        "Adını bir zamanlar burada olan binicilik okulundan alan küçük bir park. Gölge, bank ve şehrin daha iyi büfelerinden biri.",
    },
    parliament: {
      name: "Ulusal Meclis Binası",
      blurb:
        "Sırbistan parlamentosu; otuz yıllık inşaattan sonra 1936'da bitti. Öndeki bronz atlar tek başına sapmaya değer.",
    },
  },
  variants: {
    full: { label: "Tam yürüyüş", blurb: "Beş durak, tapınaktan Tašmajdan'a." },
    short: { label: "Kısa yürüyüş", blurb: "Üç durak, tapınaktan Çiçek Meydanı'na." },
  },
  directions: {
    forward: {
      label: "Önce tapınak",
      blurb: "Aziz Sava'dan başla, Tašmajdan'da bitir.",
    },
    reverse: {
      label: "Önce Tašmajdan",
      blurb: "Yokuş yukarı yürü ve tapınakta bitir.",
    },
  },
};
