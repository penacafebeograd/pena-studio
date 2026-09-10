import type { TourText } from "@/lib/tours/types";

import type { DetourId, LegKey, StopId, VariantId } from "../geo";

export const tr: TourText<StopId, LegKey, DetourId, VariantId> = {
  name: "Dorćol yemek yürüyüşü",
  tagline: "Bir pazar, bir bira fabrikası avlusu, bir nehir ve Belgrad'ın en eski meyhanesi.",
  note: "Beş durak ve bol yemek. Buna aç başla; pazarı görmek istiyorsan öğleden önce çık.",
  stops: {
    bajloni: {
      title: "Bajloni pazarı",
      kicker: "Aç başla",
      landmark: "Skadarlijska pijaca, Cetinjska'nın yanında",
      direction:
        "Pazardan kuzeybatıya, Dorćol'un ızgara sokaklarından yokuş yukarı çık; eski dükkân cepheleriyle dolu geniş bir caddeye varana kadar.",
      script:
        "Buradan başla ve erken başla. Burası Bajloni pazarı; adını on dokuzuncu yüzyılda Belgrad'a yerleşen Çek biracı Bajloni ailesinden alıyor ve fabrikaları tam bu tezgâhların yanındaydı. Pazarı ilk görmen gerekiyor çünkü sonra yiyeceğin her şeyi o açıklıyor. Kavanozlarda ajvar ara — kavrulmuş kırmızı biber ezmesi; sonbaharda muazzam miktarlarda yapılıyor ve yapan herkes sana kendi tarifinin tek doğru tarif olduğunu söyleyecek. Kajmak ara — kaymak ile taze peyniri arasında bir yerde duran süt yağı; ekmeğe, ızgara etin üstüne ve elinin uzandığı her şeye sürülüyor. Salamura kovalarından satılan peynir, arıcının kendi sattığı bal ve mevsimindeyse ithal olanları şaka gibi gösteren ahududu olacak. Burada hiçbir şey fotoğraf için düzenlenmemiş. Küçük bir şey al ve ayakta ye — doğrusu bu. Sonra kuzeybatıya yürü, çünkü gittiğin cadde Belgrad tüccarlarının iki yüzyıldır yemek ve her şeyi sattığı yer.",
    },
    dusanova: {
      title: "Cara Dušana",
      kicker: "Ticaret caddesi",
      landmark: "Yukarı Dorćol'un eski dükkân cepheleri",
      direction:
        "Kuzeydoğuya, Tuna'ya doğru yokuş aşağı in. Sokaklar suyun kenarındaki geniş bir rıhtımda bitiyor.",
      script:
        "Cara Dušana, Belgrad'ın hâlâ çalışan en eski ticaret caddelerinden biri ve öyle de görünüyor: dar dükkân cepheleri, elle boyanmış tabelalar, hırdavat, deri, tuhafiye ve baharat. Dorćol adı Türkçedeki dört yol ifadesinden geliyor ve bu semt tam olarak buydu — Sefarad Yahudi, Rum, Aromen, Ermeni ve Sırp tüccar aileleri iç içe yaşıyor ve Tuna'nın yukarı taşıdığı her şeyin ticaretini yapıyordu. Belgrad mutfağının böyle olmasının sebebi bu karışım. Izgara et bir gelenekten, hamur işi başka birinden, kahve ritüeli üçüncüsünden geliyor; hangisinin \"gerçek\" olduğu tartışması ise hepsinden birden. Açıksa bir baharatçıya bak: üç kızgınlık derecesinde kırmızıbiber, iplere dizilmiş kuru biberler, vegeta, kese kâğıdında defne yaprağı. Burası aynı zamanda burek bölgesi. Burada burek, peynirli ya da etli, katmerli hamurdan bir kangal demek; sabah ayranla birlikte yeniyor ve atıştırmalık değil — sohbetleri bitiren ciddi bir kahvaltı. Sonra nehre in.",
    },
    dunavskikej: {
      title: "Tuna rıhtımı",
      kicker: "Nehir",
      landmark: "Dorćol'un Tuna kıyısı",
      direction:
        "İçeriye, güneybatıya, Dorćol'un göbeğine dön ve iki yanı kafe teraslarıyla dolu caddeyi ara.",
      script:
        "Dorćol'daki Tuna, yazın alışkanlık edinen çalışan bir nehir. Kışın bu rıhtım boş, gri ve kocaman. Yazın açık hava barları, ses sistemleri, betondan suya atlayan insanlar ve ızgara balık kokusuyla doluyor. Belgrad'ın yeme biçiminin öteki yarısı bu: masa örtülü kafana değil, suyun kenarındaki plastik sandalye, bir bira ve bir tabak küçük kızarmış balık. Tabelada \"riblja\" görürsen balık demek. \"Smuđ\" görürsen nehir levreği ve iyisi o. Belgrad'ın iki nehriyle ilişkisi hep tuhaf oldu — tarihinin çoğunda su bir savunma hattı ve sınırdı, o yüzden şehir ikisine de sırtını dönüp sırt boyunca yukarı doğru büyüdü. Nehir kıyısını oturulacak bir yer olarak düşünmek ancak son birkaç on yılda akla geldi. Sen o tarihin daha yeni, daha rahat tarafındasın. Sonra içeriye geri dön, çünkü sıradaki cadde şehrin kahvesini içtiği yer.",
    },
    strahinja: {
      title: "Strahinjića Bana",
      kicker: "Kafe sokağı",
      landmark: "Dorćol'un teras caddesi",
      direction:
        "Güneybatıya, yokuş aşağı devam et; şehrin en eski sokaklarından birine ve adı soru işareti olan bir meyhaneye varana kadar.",
      script:
        "2000'lerin başında Belgrad bu sokağa Silikon Vadisi adını taktı ve teknolojiyle hiçbir ilgisi yoktu. Müşteri kitlesine yapılmış bir şakaydı ve insanlar hâlâ hafif özür diler gibi kullanacak kadar tuttu. Burada gerçekten olan şey, Belgrad'ın en yoğun kafe terası dizisi: birkaç blok boyunca tek amaç, bir kahvenin başında iki saat dışarıda oturup kimin geçtiğini izlemek. Bunu açıklamak gerekiyor, çünkü yanlış yapmaya en yakın olduğun yerel öğün bu. Buradaki kahve bir alışveriş değil. \"Domaća kafa\" istersen sana küçük bir fincanda, dibinde telvesi olan filtresiz kahve ve yanında bir bardak su gelir; beklenti kalmandır. Sen istemeden kimse hesabı getirmez, erken istemek de hafif kabalıktır. Otur. Tek bir şey söyle. Yirmi dakika telefonuna bakma. Yemek kültürünün malzemesi olmayan kısmı bu. Sonra yokuş aşağı devam et, çünkü son durak 1823'ten beri bir kiliseyle tartışıyor.",
    },
    kraljapetra: {
      title: "Kralja Petra ve ? meyhanesi",
      kicker: "Son durak",
      landmark: "Katedral Kilisesi'nin karşısı",
      direction:
        "Son durağa ulaştın. Knez Mihailova ve kale beş dakika ötede; oturmayı da hak ettin.",
      script:
        "Katedralin karşısındaki meyhanenin tabelası bir soru işareti ve sebebi iki yüz yıllık bir anlaşmazlık. 1820'lerde açıldı ve bir dönem karşısındaki katedrale gönderme yapan bir adla çalıştı. Kilise, bir içki mekânının kendi adını kullanmasına itiraz etti. Tartışma sürerken sahibi cepheye geçici olarak bir soru işareti boyadı. Geçici olan kazandı ve o günden beri \"?\" — Belgrad'da ayakta kalan en eski meyhane; tavanı alçak, ahşap ve hâlâ servis yapıyor. Burası bir kafana ve kafana bir restoran değil. Saatlerce kalmanın beklendiği bir oda: ızgara et, fasulye, lahana, küçük bardaklarda rakı ve gece düzgün giderse bir noktada müzik. Ünlü olanı istiyorsan pljeskavica söyle; insanların gerçekten ne yediğini anlamak istiyorsan prebranac. Her hâlükârda otur. Yürüyüşün bir masada bitiyor; Dorćol'da bir yemek yürüyüşü için bitirilecek tek dürüst yer bu.",
    },
  },
  paths: {
    "bajloni>dusanova": {
      main: { label: "Izgara sokaklardan yukarı", blurb: "Dorćol içinden kuzeybatıya doğrudan tırmanış." },
      dobracina: {
        label: "Dobračina üzerinden",
        blurb: "Bir sokak yandan, daha sakin ve konut dokusundan; eski avluların önünden.",
      },
    },
    "dusanova>dunavskikej": {
      main: { label: "Tuna'ya in", blurb: "Rıhtıma dosdoğru yokuş aşağı. Altı dakika." },
    },
    "dunavskikej>strahinja": {
      main: { label: "Dorćol'a geri yukarı", blurb: "Sudan içeriye dönen doğrudan yol." },
      jevremova: {
        label: "Gospodar Jevremova üzerinden",
        blurb: "Antikacıların ve eskicilerin arasından — daha yavaş, açıksa değer.",
      },
    },
    "strahinja>kraljapetra": {
      main: { label: "Dümdüz aşağı", blurb: "Katedral köşesine kısa yol." },
      dositejeva: {
        label: "Dositejeva üzerinden",
        blurb: "Eski arnavut kaldırımlı blok: fırınlar, birkaç küçük mutfak, daha az trafik.",
      },
    },
  },
  detours: {
    cetinjska: {
      name: "Cetinjska avlusu",
      blurb:
        "Eski Bajloni bira fabrikasının avlusu; şimdi eski üretim hollerinde bir düzine bar. Hava kararana kadar ölü, sonra şehrin en kalabalık avlusu.",
    },
    jevremova: {
      name: "Gospodar Jevremova antikacıları",
      blurb:
        "Kısa bir eskici ve antikacı dizisi. Yiyecek bir şey yok, bakılacak her şey var; eski bir rakı bardağı almak için iyi yer.",
    },
  },
  variants: {
    full: { label: "Tam yürüyüş", blurb: "Beş durak, pazardan meyhaneye." },
    short: { label: "Kısa yürüyüş", blurb: "Üç durak, nehirden meyhaneye — içkili yarısı." },
  },
  directions: {
    forward: { label: "Önce pazar", blurb: "Pazardan başla, meyhanede bitir." },
    reverse: { label: "Önce meyhane", blurb: "Meyhaneden başla, pazarda bitir." },
  },
};
