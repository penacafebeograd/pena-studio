# balkan-echo-ack

Balkan Echo aboneliklerini Google'a onaylayan (acknowledge) küçük bir
Cloudflare Worker. Tek uç noktası var, veritabanı yok, durum tutmuyor.

## Neden var

Google Play, bir aboneliği **3 gün içinde "acknowledge" edilmezse otomatik
iade ediyor** ve bu onay yalnızca sunucu tarafından yapılabiliyor. Balkan
Echo ise GitHub Pages üzerinde statik bir site — sunucusu yok. Bu Worker o
boşluğu kapatan en küçük şey.

Uygulama, satın alma bittiğinde ve **her açılışta** bu uca satın alma
belirtecini gönderiyor. Onaylanmış bir aboneliği yeniden onaylamak zararsız,
o yüzden tekrar denemek güvenli — sokakta şebeke kesilirse bir sonraki açılış
işi tamamlıyor.

Worker ayrıca aboneliğin gerçekten aktif olup olmadığını **doğrudan
Google'dan** sorup dönüyor; bu, cihaza sormaktan daha güçlü bir cevap.

## Ne tutmuyor

Hesap yok, oturum yok, kişisel veri yok. Aldığı tek şey Play'in opak satın
alma belirteci; onu Google'a iletip unutuyor. Hiçbir şey loglanmıyor.

## Kurulum

**1. Play Developer API için servis hesabı**

Google Cloud Console'da bir servis hesabı aç, JSON anahtarını indir. Sonra
Play Console → Users and permissions → o servis hesabını davet et ve
**"View financial data"** ile **"Manage orders and subscriptions"** yetkisini
ver. (Play Console'un API erişimini Google Cloud projesine bağlaman da
gerekiyor: Play Console → Setup → API access.)

**2. Ayarlar**

`wrangler.toml` içindeki üç değeri kontrol et:

| Değişken | Ne olmalı |
| --- | --- |
| `PACKAGE_NAME` | Android uygulama kimliği (TWA paketlenirken belirlenecek) |
| `PRODUCT_ID` | Play Console'daki abonelik ürün kimliği — `balkan_echo_monthly` |
| `ALLOWED_ORIGIN` | `https://penastudio.cc` |

**3. Servis hesabı JSON'ını gizli olarak yükle**

```bash
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT_JSON
```

JSON dosyasının tamamını yapıştır. Repoya **girmez**.

**4. Yayınla**

```bash
npm install
npm run deploy
```

Wrangler bir URL veriyor (`https://balkan-echo-ack.<hesabın>.workers.dev`).

**5. Uygulamaya bağla**

`balkan-echo-src/.env.local` içine (ve CI'da aynı isimle) ekle:

```
NEXT_PUBLIC_ACK_ENDPOINT=https://balkan-echo-ack.<hesabın>.workers.dev
```

Bu değişken **yoksa uygulama abonelik satmayı reddediyor** — kaybedeceğimiz
parayı almak, henüz satmamaktan kötü. `src/lib/entitlement.ts` içinde
böyle yazılı.

## Kontrol

```bash
npm test          # JWT imzalama testleri (ağ gerektirmez)
npm run typecheck
curl https://balkan-echo-ack.<hesabın>.workers.dev/health
```

`npm test`, Google'a gidecek RS256 assertion'ının gerçek bir RSA anahtarıyla
imzalanıp bağımsız olarak doğrulanabildiğini kanıtlıyor. Bu kısım yanlış
olduğunda Google sadece `invalid_grant` diyor ve sebebini söylemiyor, o
yüzden ayrı test edildi.

## Maliyet

Cloudflare Workers ücretsiz katmanı günde 100.000 istek. Uygulama abone
başına günde en fazla birkaç istek yapıyor, yani sınıra yaklaşmak için
on binlerce abone gerekir.

## Test edilmemiş olan

JWT imzalama ve uç nokta mantığı yerelde test edildi. **Google'ın gerçek
API'sine karşı hiç çalıştırılmadı** — servis hesabı henüz yok. İlk gerçek
denemeyi Play'in kapalı test kanalında, test satın almasıyla yapmak lazım;
`/acknowledge` cevabında `acknowledged: true` görmen gerekiyor.
