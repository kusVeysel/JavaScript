// Bu dosya, çalışma alanındaki 45 app.js dosyasının konu bazlı özetidir.
// Her kayıtta değişken/property, fonksiyon/metot, class, DOM/event ve async davranışları ayrı tutulur.
const appOzetleri = [
    {
        dosya: "01-ConsoleMetotlari/app.js",
        konu: "document ve console metotları",
        degiskenler: "Açıkça tanımlı değişken yoktur.",
        metotlar: "document.writeln() belgeye HTML yazar; console.clear() konsolu temizler; console.log(), error() ve warn() farklı seviyelerde çıktı verir; group(), groupCollapsed() ve groupEnd() mesajları gruplar; table() dizi/nesneleri tabloya çevirir; time() ve timeEnd() süre ölçer; count() etiket sayar.",
        yapilar: "Kullanıcı fonksiyonu, class veya event listener yoktur. DOM tarafında yalnızca writeln kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "document.writeln() sayfa yüklendikten sonra çağrılırsa mevcut belgeyi silebilir. console.count('mesaj') iki çağrıda 2 değerini gösterir."
    },
    {
        dosya: "02-Scope/app.js",
        konu: "var, let, const ve scope",
        degiskenler: "degiskenIsmi global var; method1 içindeki sayi function-scope var; if içindeki a da var olduğu için blok dışından erişilebilir; blokDegiskeni let olduğu için yalnızca if bloğunda yaşar.",
        metotlar: "method1() parametre almaz ve a ile sayi değerlerini konsola yazar.",
        yapilar: "var function scope, let/const block scope örnekleridir. Class, DOM ve event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "let değişkenine bloğun dışından erişmek ReferenceError üretir; const yeniden atanamaz."
    },
    {
        dosya: "03-VeriTipleri/app.js",
        konu: "JavaScript veri tipleri",
        degiskenler: "String, Number (tam ve ondalıklı), Boolean, null, undefined, object ve function örnekleri vardır. degisken5 isim, soyisim ve yas property'lerine sahip nesnedir; degisken6 arrow function'dır.",
        metotlar: "degisken6() kendi typeof sonucunu yazdırır; typeof veri tipini kontrol eder.",
        yapilar: "Template literal kullanılır; class, DOM ve event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "typeof null tarihsel nedenle object döndürür. Nesnedeki yas değeri stringdir; degisken3 > 4 sonucu Boolean üretir."
    },
    {
        dosya: "04-Operatorler/app.js",
        konu: "Aritmetik, atama, mantıksal ve karşılaştırma operatörleri",
        degiskenler: "dort ve iki artırma/azaltma için; sayi1 +=, -=, *=, /=, %= ve **= ile ardışık değiştirilir.",
        metotlar: "Kullanıcı metodu veya class yoktur; console.log() ve console.error() çıktı için kullanılır.",
        yapilar: "+, -, *, /, %, **; ++,--; = ve bileşik atamalar; &&, ||, !; >, <, >=, <=, ==, !=, === gösterilir.",
        async: "Asenkron akış yoktur.",
        dikkat: "== tür dönüşümüne izin verirken === hem türü hem değeri karşılaştırır."
    },
    {
        dosya: "05-DiyalogKutular/app.js",
        konu: "Tarayıcı diyalog kutuları",
        degiskenler: "kullaniciAdi prompt sonucunu, sonuc confirm sonucunu tutar.",
        metotlar: "alert() bilgi gösterir; prompt() string veya iptalde null döndürür; confirm() true/false üretir.",
        yapilar: "Class, DOM ve event yoktur.",
        async: "Bu API'ler senkron ve bloklayıcıdır.",
        dikkat: "prompt sonucu sayısal işlemden önce Number() ile çevrilmelidir."
    },
    {
        dosya: "06-KosulYapilari/app.js",
        konu: "if/else ve ternary",
        degiskenler: "not prompt ile alınır ve Number() ile çevrilir; bool true'dur; sonuc ternary sonucunu tutar.",
        metotlar: "Number() dönüşüm yapar; template literal çıktı oluşturur.",
        yapilar: "if, else if, else, && aralık kontrolü ve koşullu ? : operatörü kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "Kodda 60 üstü AA, 50-60 arası CC, diğerleri FF olarak değerlendirilir; ilk doğru blok çalışır."
    },
    {
        dosya: "07-BenzinIstasyon/app.js",
        konu: "Yakıt seçimi ve bakiye hesabı",
        degiskenler: "dizel, benzin ve lpg birim fiyatları; YakitTipi, YakitLitresi, Bakiye ve OdenecekTutar hesap değişkenleridir; newline diyalog satır sonudur.",
        metotlar: "prompt(), alert(), Number() ve toLocaleLowerCase() kullanılır; bakiye -= OdenecekTutar ile güncellenir.",
        yapilar: "if/else if/else, || ve template literal kullanılır; class, DOM ve event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "Yakıt sayıyla veya metinle seçilebilir. Negatif litre/bakiye doğrulaması yoktur; bakiye yetmezse eksik miktar gösterilir."
    },
    {
        dosya: "08-SwitchCase/app.js",
        konu: "switch-case ve fall-through",
        degiskenler: "sayi prompt ile alınıp Number() ile çevrilir; ikinci switch doğrudan 'uyarı' değerini kullanır.",
        metotlar: "prompt(), Number(), console.log() ve console.error() kullanılır.",
        yapilar: "switch, case, default ve break örneklenir.",
        async: "Asenkron akış yoktur.",
        dikkat: "'uyarı' case'inde break olmadığı için sonraki çıktı da çalışır; buna fall-through denir."
    },
    {
        dosya: "09-AtmUygulamasi/app.js",
        konu: "ATM menüsü",
        degiskenler: "Bakiye başlangıç parasını; NewLine menü satırını; Metin seçenekleri; Secim, CekilecekTutar ve YatirilacakTutar kullanıcı girdilerini tutar.",
        metotlar: "prompt(), alert(), Number(); Bakiye -= ve += ile güncellenir.",
        yapilar: "while menüyü tekrarlar; switch-case seçenekleri yönetir; class, DOM ve event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "Secim 4 olmadıkça döngü sürer. Negatif para yatırma/çekme kontrolü yoktur; != yerine === daha katı olurdu."
    },
    {
        dosya: "10-TurDonusumleri/app.js",
        konu: "Veri tipi dönüşümleri",
        degiskenler: "a Number('5'), b parseInt('5px'), c parseFloat('5.5'), x String(55), y toString() ve bool Boolean('2') sonucudur.",
        metotlar: "Number(), parseInt(), parseFloat(), String(), toString(), Boolean() ve typeof kullanılır.",
        yapilar: "Class, DOM, event ve kullanıcı fonksiyonu yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "parseInt('5px') 5 verir; geçersiz Number dönüşümü NaN üretir; dolu string Boolean olarak true'dur."
    },
    {
        dosya: "11-DebuggerVeTooltip/app.js",
        konu: "debugger ve açıklama yorumları",
        degiskenler: "a=10, b=15; c=a+b; d=a+b+c; e=a+b+c+d; sonuc tüm toplamdır ve 305 olur.",
        metotlar: "console.log() çıktı verir; debugger yürütmeyi geliştirici araçlarında durdurur.",
        yapilar: "Class, DOM, event ve async yoktur; yorumlar tooltip/açıklama amaçlıdır.",
        async: "Asenkron akış yoktur.",
        dikkat: "debugger yalnızca geliştirici araçları uygun durumdaysa yürütmeyi durdurur."
    },
    {
        dosya: "12-Donguler/app.js",
        konu: "for, while, do-while ve forEach",
        degiskenler: "sayac1/2/3 döngü sayaçlarıdır; dizi [1,2,3,4,5,6,7] değerlerini taşır.",
        metotlar: "forEach((eleman, index, array) => ...) her eleman için callback çağırır; console.log/error çıktı verir.",
        yapilar: "for, while, do...while ve Array.prototype.forEach() kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "do-while gövdesi en az bir kere çalışır; forEach diziyi kendiliğinden değiştirmez."
    },
    {
        dosya: "13-BreakContiune/app.js",
        konu: "break ve continue",
        degiskenler: "sayac1 ve sayac2 while, sayac3 for döngüsü sayacıdır.",
        metotlar: "Kullanıcı fonksiyonu, class ve DOM yoktur.",
        yapilar: "break döngüyü bitirir; continue yalnızca mevcut iterasyonun kalanını atlar; while/for kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "8 değeri break örneğinde yazdırılmadan çıkılır, continue örneğinde atlanır; for güncelleme ifadesi yine çalışır."
    },
    {
        dosya: "14-Fonksiyonlar/app.js",
        konu: "Fonksiyon, parametre ve return",
        degiskenler: "a metot2() sonucunu, yenideger metot4(3) sonucunu tutar.",
        metotlar: "metot1() değer döndürmeden yazar; metot2() 5 döndürür; metot3(isim, soyisim) yazar; metot4(deger) deger+7 döndürür; selamla(isim='Ziyaretçi') varsayılan parametreli metindir.",
        yapilar: "function bildirimi, parametre/argüman, return, default parameter ve template literal kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "metot4(3) 10 döndürür; fonksiyonun çıktı yazması ile değer döndürmesi farklı davranışlardır."
    },
    {
        dosya: "15-Diziler/app.js",
        konu: "Dizi, indeks ve matris",
        degiskenler: "sayilar sayıları; karisik farklı veri tiplerini; matris iç içe diziyi taşır.",
        metotlar: "length property'si uzunluğu verir; matris[1][0] iç diziye erişir.",
        yapilar: "Diziler sıfır tabanlıdır; sayilar[sayilar.length-1] son elemana erişir; class/DOM/event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "sayilar içindeki son değer 'veysel' ile değiştirilir; JavaScript dizileri farklı türleri birlikte taşıyabilir."
    },
    {
        dosya: "16-DiziMetotlari/app.js",
        konu: "Dizi değiştirme, arama ve fonksiyonel metotlar",
        degiskenler: "arabalar, meyveler ve fiyatlar dizileri; silinen elemanlar; arabalarMetin/join sonucu; birlesmis, ayridizi, degisken, index ve sonuc ara değerleridir.",
        metotlar: "push/unshift ekler; pop/shift siler; splice değiştirir; toString/join metne çevirir; concat birleştirir; slice kesit kopyalar; reverse ters çevirir; split parçalar; indexOf/includes arar; map, filter, find, some, every, reduce ve sort callback ile çalışır.",
        yapilar: "map(fiyat*2), filter(fiyat>=25), find(fiyat>30), some(>50), every(>0), reduce(toplam+fiyat), sort((a,b)=>a-b) ve [...fiyatlar] kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "slice kaynak diziyi değiştirmez; reverse değiştirir. sort sayılarda karşılaştırıcı olmadan metin gibi sıralar."
    },
    {
        dosya: "17-UrunArama/app.js",
        konu: "Ürün arama",
        degiskenler: "urunler id/isim/kategori/fiyat property'lerine sahip nesne dizisidir; kullaniciGirisi, normalize edilmiş kullaniciUrunIsmi ve filtreliUrunler arama durumudur.",
        metotlar: "FiltreliUrunleriDoldur(urunler) trim/toUpperCase/filter/includes ile arar; FiltreliUrunleriYazdir(urunler) forEach ve template literal ile yazar.",
        yapilar: "prompt(), alert(), filter(), forEach(), length ve DOM dışı konsol çıktısı kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "Boş/iptal arama ve eşleşme yokluğu alert ile bildirilir; karşılaştırma büyük-küçük harf duyarsız yapılır."
    },
    {
        dosya: "18-KitapBulmaUygulamasi/app.js",
        konu: "Kitap arama ve HTML tablo üretimi",
        degiskenler: "bookTableBody DOM elementi; kitaptut sonuç dizisi; kitaplar data.js'den beklenen kitap nesneleri dizisidir.",
        metotlar: "kitapbul(kitapisim) trim/toLocaleLowerCase/includes ile arar; splice(0) sonuçları temizler; forEach ile satır üretir.",
        yapilar: "getElementById(), addEventListener(), innerHTML ve keydown/Enter kullanılır.",
        async: "Asenkron akış yoktur; data.js yükleme sırasına bağlıdır.",
        dikkat: "kitaplar bu dosyada tanımlı değildir. innerHTML dış veriye uygulanırsa XSS riski vardır; önce tablo temizlenir."
    },
    {
        dosya: "19-StringMetotlar/app.js",
        konu: "String metotları",
        degiskenler: "kurs ve tarih temel stringlerdir; karakter, sonuc, index, buyuk, kucuk, bos, dilimleyici, subs, degis ve dizi metot sonuçlarını taşır.",
        metotlar: "charAt, concat, indexOf, lastIndexOf, toUpperCase, toLowerCase, trim, slice, substring, replace, split, valueOf, startsWith ve endsWith kullanılır.",
        yapilar: "String değerleri immutable'dır; class, DOM, event ve async yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "replace ilk eşleşmeyi değiştirir; split(' ') dizi üretir; substring negatif indeksleri 0 kabul eder."
    },
    {
        dosya: "20-MathMetotlar/app.js",
        konu: "Math sınıfı",
        degiskenler: "rastgeleTamSayi Math.floor(Math.random()*10+10) sonucudur.",
        metotlar: "floor, ceil, round, trunc yuvarlar/keser; max/min sınır bulur; abs mutlak değer; sqrt karekök; pow üs; sign işaret; cbrt küpkök verir. PI sabit, random rastgele sayı üretir.",
        yapilar: "Math statik class olarak new olmadan kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "random 0 dahil 1 hariçtir; formül 10-19 üretir. floor negatif sayıda aşağı yuvarlar, trunc ondalığı doğrudan atar."
    },
    {
        dosya: "21-DateSinifi/app.js",
        konu: "Date sınıfı",
        degiskenler: "tarih = new Date() mevcut tarih-saat instance'ıdır.",
        metotlar: "getTime, getFullYear, getDate, getDay, getHours, getMilliseconds, getMinutes, getMonth, getSeconds; toLocaleDateString, toLocaleTimeString ve toLocaleString kullanılır.",
        yapilar: "Date class ve new constructor kullanılır; DOM/event/async yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "getMonth 0-11, getDay 0-6 döndürür; yerel çıktı işletim sistemi ayarlarına bağlıdır; getTime milisaniyedir."
    },
    {
        dosya: "22-DegerVeReferansTipler/app.js",
        konu: "Değer/referans ve sığ kopya",
        degiskenler: "a/b ilkel sayı kopyası; dizi1/dizi2 referanslar; kopyaDizi spread kopyası; ogrenci ve ogrenciKopyasi iç içe adres property'li nesnelerdir.",
        metotlar: "push() diziye ekler; === referans eşitliği kontrol eder; ... spread ilk seviyeyi kopyalar.",
        yapilar: "İlkel değerler bağımsız, dizi/nesneler referans tipidir; class/DOM/event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "dizi2=dizi1 aynı referansı paylaşır. Spread sığ olduğundan ogrenciKopyasi.adres.il değişikliği asıl nesneyi de etkiler."
    },
    {
        dosya: "23-KlavyeEventleri/app.js",
        konu: "Klavye olayları",
        degiskenler: "e KeyboardEvent nesnesidir.",
        metotlar: "document.addEventListener('keydown', callback) kullanılır; callback e.key, e.code, e.ctrlKey, e.shiftKey ve e.altKey okur.",
        yapilar: "DOM elementi değiştirilmez; document seviyesinde event listener vardır.",
        async: "Kullanıcı etkileşimi callback'i daha sonra çalıştırır; Promise tabanlı async yoktur.",
        dikkat: "key karakteri, code fiziksel tuşu verir. keydown/keyup tercih edilir; keypress eski yaklaşımdır."
    },
    {
        dosya: "24-InputEventleri/app.js",
        konu: "Input focus, blur ve clipboard eventleri",
        degiskenler: "input inp elementi; a olay adları dizisi; eventName olay adı; e Event nesnesidir.",
        metotlar: "getElementById, forEach ve addEventListener kullanılır; callback e.type ve e.target.value okur.",
        yapilar: "focus, blur, copy, paste, cut ve select listener'ları aynı forEach ile bağlanır.",
        async: "Olay callback'leri kullanıcı etkileşimiyle çalışır.",
        dikkat: "DOM içeriği değiştirilmez; yalnızca input değeri ve olay türü konsola yazılır."
    },
    {
        dosya: "25-Session,LocalStroge/app.js",
        konu: "sessionStorage/localStorage ve JSON",
        degiskenler: "dizi saklanacak liste; deger string; kayitliDizi JSON metni; a JSON.parse sonucu dizidir.",
        metotlar: "setItem/getItem key ile veri yazar/okur; key(index) anahtar adı verir; clear() tüm session verisini siler; JSON.stringify/parse dizi serileştirir.",
        yapilar: "Web Storage string tabanlıdır; DOM, class ve event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "sessionStorage sekme kapanınca, localStorage açıkça silinene kadar yaşar. JSON olmayan veri parse hatası doğurabilir."
    },
    {
        dosya: "26-TodoListProje/app.js",
        konu: "Todo CRUD, filtreleme ve localStorage",
        degiskenler: "form, addInput, todoList, firstCardBody, secondCardBody, clearButton ve filterInput DOM property referanslarıdır; todos dizi; li/a/i/div dinamik elementlerdir.",
        metotlar: "runEvents listener kurar; pageLoaded yükler; filter arar; allTodosDeleteFromEveryWhere temizler; removeTodoToUI ve removeTodoToStroge siler; addTodo ve addTodoToUI ekler; addTodoToStroge/checkTodosFromStroge storage yönetir; showAlert geçici uyarı üretir.",
        yapilar: "querySelector/All, addEventListener, createElement, appendChild, textContent, className, href, style, setAttribute, remove, JSON parse/stringify, setTimeout ve includes kullanılır.",
        async: "DOMContentLoaded sonrası veriler yüklenir; showAlert 2500 ms sonra setTimeout ile kaldırılır.",
        dikkat: "submit preventDefault ile durdurulur. textContent XSS'i önler; JSON bozuksa parse hata verebilir. Silme kontrolü className'e sıkı bağlıdır."
    },
    {
        dosya: "27-ArrowFunction/app.js",
        konu: "Arrow function",
        degiskenler: "yazdir parametresiz; yazdir2 firstname/lastname parametreli arrow function sabitleridir.",
        metotlar: "yazdir() merhaba, yazdir2(firstname, lastname) isim-soyisim yazdırır.",
        yapilar: "const ile () => {} sözdizimi kullanılır; class/DOM/event yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "Arrow function kendi this bağlamını oluşturmaz; bu, klasik function'dan önemli farkıdır."
    },
    {
        dosya: "28-Destructing/app.js",
        konu: "Array ve object destructuring",
        degiskenler: "langs dizisi lang1-4'e sıra ile ayrılır; person nesnesi firstName, lastName, country, age property'lerine sahiptir; isim/soyisim/ulke/yas yeniden adlandırılmış alanlardır.",
        metotlar: "Özel kullanıcı metodu yoktur; destructuring atama sözdizimidir.",
        yapilar: "let [a,b] dizi sırasına; let {property} nesne property adına göre çalışır; class/DOM/event/async yoktur.",
        async: "Asenkron akış yoktur.",
        dikkat: "firstName: isim, firstName alanını isim değişkenine bağlar; array ve object destructuring kuralları farklıdır."
    },
    {
        dosya: "29-SpreadOperator/app.js",
        konu: "Spread ve rest",
        degiskenler: "numbers add'e yayılır; diller1/diler2 birleştirilir; diller3 sonuçtur; sayilar a,b ve kalansayilar olarak ayrılır; array1/array2 kopyalama örneğidir.",
        metotlar: "add(a,b,c,d) dört sayıyı toplar; push(...array1) elemanları tek tek ekler.",
        yapilar: "add(...numbers), [...diller1,...diler2] spread; [...kalansayilar] rest destructuring'dir.",
        async: "Asenkron akış yoktur.",
        dikkat: "Spread iterable'ı açar; nested nesnelerde yine sığ kopya davranışı vardır."
    },
    {
        dosya: "30-ForIn,ForOf/app.js",
        konu: "for...in ve for...of",
        degiskenler: "names isim dizisi, name döngü değişkenidir.",
        metotlar: "Kullanıcı metodu/class/DOM/event yoktur; names[name] ile indeks üzerinden değer okunur.",
        yapilar: "for...in indeks/key, for...of doğrudan değer üretir.",
        async: "Asenkron akış yoktur.",
        dikkat: "Dizi değerini almak için for...of daha doğrudandır; for...in indeks döndürür."
    },
    {
        dosya: "31-MapSinifi/app.js",
        konu: "Map sınıfı",
        degiskenler: "map1 şehir kodu/adı eşlemesi; keys/values iterator; array Array.from sonucu; map2 ve [1,2,3] array key örneğidir.",
        metotlar: "set ekler/günceller; get okur; delete siler; has kontrol eder; keys/values iterator verir; Array.from diziye çevirir.",
        yapilar: "new Map() ve referans tipli key kullanımı gösterilir.",
        async: "Asenkron akış yoktur.",
        dikkat: "map2.get([1,2,3]) undefined'dır; yeni dizi aynı içerikte olsa da aynı referans değildir."
    },
    {
        dosya: "32-SetSinifi/app.js",
        konu: "Set sınıfı",
        degiskenler: "set farklı tipte değerler; array Set'in Array.from sonucu; value forEach elemanıdır.",
        metotlar: "add ekler; size eleman sayısını verir; delete siler; has kontrol eder; forEach her benzersiz değer için çalışır.",
        yapilar: "new Set() benzersiz değer koleksiyonudur; Array.from dönüşümü kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "Aynı ilkel değer ikinci kez eklenmez; nesne ve diziler içerik değil referans ile ayırt edilir."
    },
    {
        dosya: "33-OOP/app.js",
        konu: "Class, constructor, property, method ve instance",
        degiskenler: "Insan class'ı isim, soyisim, yas, maas property'leri tanımlar; insan1 ve insan2 instance'lardır.",
        metotlar: "constructor(isim, soyisim, yas, maas) property'leri başlatır; bilgileriGoster() instance bilgilerini yazar.",
        yapilar: "class, constructor, this, new ve instanceof kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "this çağrılan instance'ı temsil eder; insan1 instanceof Insan true verir."
    },
    {
        dosya: "34-OopStatic/app.js",
        konu: "Static property ve method",
        degiskenler: "Matematik.a static property'dir; matematik new Matematik() ile instance olur.",
        metotlar: "writeinfo() static a'yı yazar; static topla(a,b) class üzerinden toplar; cikar, carp ve bol instance metotlarıdır.",
        yapilar: "static üyeler instance'a değil class'a aittir; Matematik.topla geçerli, matematik.topla geçersizdir.",
        async: "Asenkron akış yoktur.",
        dikkat: "Instance methodu static property'ye class adıyla erişebilir."
    },
    {
        dosya: "35-OopInheritance/app.js",
        konu: "Kalıtım ve super",
        degiskenler: "Person üst class; Student Person'dan; GraduateStudent Student'dan miras alır; student1 instance'tır; firstname üst property'dir.",
        metotlar: "Person.write() yazar; Student.write() override eder ve super.write() çağırır; GraduateStudent constructor(firstname,department) üst constructor'ı çağırır; describe() bilgi gösterir.",
        yapilar: "extends, super, super(), constructor ve method override kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "Alt class constructor'ı this kullanmadan önce super() çağırmalıdır; super üst class metot/constructor'ına erişir."
    },
    {
        dosya: "36-OopThis,Super,Super()/app.js",
        konu: "this, super ve constructor kalıtımı",
        degiskenler: "Person firstname, lastname, salary property'lerine sahiptir; Student school property'si ekler; student1 instance'tır.",
        metotlar: "Person constructor ve writeInfo(); Student constructor super(firstname,lastname,salary) ve write() içinde super.writeInfo() kullanır.",
        yapilar: "this, extends, super(), constructor ve üst metot çağrısı kullanılır.",
        async: "Asenkron akış yoktur.",
        dikkat: "Student constructor'ında super() çağrılmadan this kullanılamaz; school yalnızca alt class'a aittir."
    },
    {
        dosya: "37-Asenkron/app.js",
        konu: "setTimeout ve event loop",
        degiskenler: "Açık değişken yoktur.",
        metotlar: "setTimeout(callback, 1000) callback'i yaklaşık bir saniye sonra çalıştırır.",
        yapilar: "Senkron satırlar ve event loop/zamanlayıcı kuyruğu gösterilir.",
        async: "Önce Veysel, sonra Kuş yazılır; timeout callback'i daha sonra çalışır.",
        dikkat: "1000 ms kesin bitiş zamanı değil, callback için en erken yaklaşık süredir."
    },
    {
        dosya: "38-AsenkronExample/app.js",
        konu: "Asenkron return hatası",
        degiskenler: "users userId/post property'li dizidir; userId = getUserId() sonucu mevcut kodda undefined olur.",
        metotlar: "getUserId() timeout içinde 5 döndürmeye çalışır; getPostByUserId(userId) timeout içinde eşleşen postları forEach ile yazar.",
        yapilar: "setTimeout, forEach ve if kullanılır; callback içindeki return dış fonksiyona dönmez.",
        async: "getUserId() sonucu undefined olduğu için getPostByUserId(undefined) eşleşme bulamaz.",
        dikkat: "Çözüm callback, Promise veya async/await kullanmaktır; mevcut == karşılaştırması yerine === tercih edilir."
    },
    {
        dosya: "39-Callback/app.js",
        konu: "Callback ile sıralı asenkron işlemler",
        degiskenler: "getName name='Veysel'; getSurname surname='Kuş'; getNumber callback sonucu number=5'tir.",
        metotlar: "getName(callback) 1000 ms; getSurname(callback) 500 ms; getNumber(callback) 300 ms sonra callback(null,5) çağırır.",
        yapilar: "İç içe callback ve error-first callback (callback(error, result)) modeli kullanılır.",
        async: "getName tamamlanınca getSurname, o tamamlanınca çıktı çalışır; işlem sırası korunur.",
        dikkat: "İç içe callback yapısı büyüdükçe callback hell oluşturabilir; null ilk argüman hata olmadığını belirtir."
    },
    {
        dosya: "40-AJAXGiris/app.js",
        konu: "Temel XMLHttpRequest",
        degiskenler: "xhr XMLHttpRequest nesnesidir.",
        metotlar: "open('GET', url) isteği kurar; send() gönderir; onreadystatechange callback readyState, status ve responseText okur.",
        yapilar: "XMLHttpRequest, onreadystatechange, readyState 4 ve 200-299 status kontrolü kullanılır.",
        async: "students.json'a GET yapılır; yanıt tamamlanınca başarılıysa responseText işlenir.",
        dikkat: "readyState 4 tamamlanmayı, 200-299 başarılı HTTP yanıtını belirtir; yol ../42-Promise/students.json'dır."
    },
    {
        dosya: "41-AJAX/app.js",
        konu: "XHR ile yorum alma",
        degiskenler: "newURL hazırlanmış URL; xhr XHR nesnesi; url/id getComments parametreleri; error hata nesnesidir.",
        metotlar: "prepareURL(url,id) query string ekler; getComments(url,id) GET gönderir; JSON.parse yanıtı çözer; try/catch parse hatasını yakalar.",
        yapilar: "addEventListener('readystatechange'/'error'), open(), send(), JSON.parse() kullanılır.",
        async: "jsonplaceholder yorum endpoint'ine istek yapılır; readyState 4 ve status 200 sonrası JSON yazdırılır.",
        dikkat: "HTTP hatası, ağ hatası ve JSON parse hatası ayrı durumlardır; fonksiyon Promise döndürmez."
    },
    {
        dosya: "42-Promise/app.js",
        konu: "Promise ile XMLHttpRequest",
        degiskenler: "xhr, students, error, data ve err sırasıyla istek, parse sonucu, hata ve Promise zinciri değerleridir.",
        metotlar: "readStudents(url) Promise döndürür; executor resolve/reject çağırır; then başarıyı, catch hatayı, finally her durumu işler.",
        yapilar: "new Promise, resolve, reject, then/catch/finally, XHR, JSON.parse ve try/catch kullanılır.",
        async: "students.json GET edilir; HTTP/ağ/parse/open-send hataları reject, başarılı veri resolve olur.",
        dikkat: "XHR'de HTTP status manuel kontrol edilir; finally başarı veya hata fark etmeksizin çalışır."
    },
    {
        dosya: "43-FetchApi/app.js",
        konu: "Fetch API",
        degiskenler: "getStudents url alır; response Response; data response.json sonucu; err catch değeridir.",
        metotlar: "getStudents(url) fetch zinciri döndürür; response.ok kontrol eder; response.json() JSON Promise'i üretir; then/catch zinciri sonucu işler.",
        yapilar: "fetch, Promise, response.ok, response.json, Error ve catch kullanılır.",
        async: "students.json alınır, ok false ise manuel Error fırlatılır, JSON çözülünce konsola yazılır.",
        dikkat: "fetch 404/500'de otomatik reject olmaz; response.ok kontrolü bu yüzden zorunludur."
    },
    {
        dosya: "44-AsyncAwait/app.js",
        konu: "async/await ile ardışık Fetch",
        degiskenler: "responsePost/post ilk istek; responseComments/comments ikinci istek; error catch değişkenidir.",
        metotlar: "#button click callback'i async'tir; fetch sonrası response.json() await edilir; post.id ile yorum URL'i kurulur.",
        yapilar: "async, await, fetch, response.ok, response.json, try/catch/finally, querySelector ve click listener kullanılır.",
        async: "Buton tıklanınca post/1 alınır; başarılı posttan sonra post.id yorumları alınır; hata catch, son durum finally ile ele alınır.",
        dikkat: "İki isteğin ikisinde de response.ok kontrol edilir; ikinci istek birincinin sonucuna bağımlıdır."
    },
    {
        dosya: "deneme/app.js",
        konu: "Kullanıcı kayıt ve giriş kontrolü",
        degiskenler: "giriscontrol içindeki has/key/values; kayitol içindeki name, surname, username, password, email, phone DOM referansları; gec doğrulama sayacı; yeniKullanici ve id kayıt nesnesidir.",
        metotlar: "giriscontrol(kullaniciadi,sifre) localStorage kayıtlarını karşılaştırır; kayitol() alanları doğrular, nesne oluşturur ve saklar; setTimeout yönlendirir; toastr.warning/success/error bildirim verir.",
        yapilar: "localStorage.length/key/getItem/setItem, JSON.parse, getElementById, getElementsByTagName, style.setProperty, window.location.replace/href ve setTimeout kullanılır.",
        async: "Başarılı giriş 1000 ms sonra Anasayfa.html'e, kayıt 1000 ms sonra index.html'e yönlendirir.",
        dikkat: "Şifre düz metin localStorage'da tutulur; gerçek uygulama için güvenli değildir. length+1 benzersiz id garantilemez; e-posta/telefon biçimi doğrulanmaz; toastr'ın script sırası doğru olmalıdır."
    }
];

function ozetSayfasiniOlustur() {
    const maddeListesineAyir = (metin, kategori) => {
        if (!metin) {
            return ["Bu başlık altında ayrıca bir örnek yoktur."];
        }

        let maddeler = metin
            .split(/;\s*/)
            .map((madde) => madde.trim())
            .filter(Boolean);

        if (kategori === "metotlar") {
            maddeler = maddeler.flatMap((madde) => madde.split(/(?:,\s*|\s+ve\s+)(?=[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?\s*\([^)]*\))/));
        }

        return maddeler;
    };

    const kategoriOlustur = (baslikMetni, metin, kategori) => {
        const bolum = document.createElement("section");
        const baslik = document.createElement("h3");
        baslik.textContent = baslikMetni;
        const liste = document.createElement("ul");

        maddeListesineAyir(metin, kategori).forEach((madde) => {
            const satir = document.createElement("li");
            satir.textContent = madde;
            liste.appendChild(satir);
        });

        bolum.append(baslik, liste);
        return bolum;
    };

    const baslik = document.createElement("header");
    baslik.innerHTML = "<h1>JavaScript Genel Özet</h1><p>45 app.js dosyasındaki her değişken, property, fonksiyon, metot, class, event ve asenkron akışın açıklaması.</p>";

    const arama = document.createElement("input");
    arama.type = "search";
    arama.placeholder = "Dosya veya konu ara...";
    arama.setAttribute("aria-label", "Özetlerde ara");

    const liste = document.createElement("main");
    const kartlariGoster = (metin = "") => {
        liste.innerHTML = "";
        const aranacak = metin.toLocaleLowerCase("tr-TR");
        appOzetleri
            .filter((ozet) => `${ozet.dosya} ${ozet.konu} ${ozet.metotlar}`.toLocaleLowerCase("tr-TR").includes(aranacak))
            .forEach((ozet, index) => {
                const kart = document.createElement("article");
                const kartBasligi = document.createElement("h2");
                kartBasligi.textContent = `${index + 1}. ${ozet.dosya}`;
                kart.appendChild(kartBasligi);
                kart.appendChild(kategoriOlustur("Konu", ozet.konu, "konu"));
                kart.appendChild(kategoriOlustur("Değişkenler / Property'ler", ozet.degiskenler, "degiskenler"));
                kart.appendChild(kategoriOlustur("Fonksiyonlar / Metotlar / API'ler", ozet.metotlar, "metotlar"));
                kart.appendChild(kategoriOlustur("Class / JavaScript Yapıları / DOM / Event", ozet.yapilar, "yapilar"));
                kart.appendChild(kategoriOlustur("Asenkron Akış", ozet.async, "async"));
                kart.appendChild(kategoriOlustur("Dikkat Edilecekler", ozet.dikkat, "dikkat"));
                liste.appendChild(kart);
            });
    };

    arama.addEventListener("input", (event) => kartlariGoster(event.target.value));
    document.body.replaceChildren(baslik, arama, liste);
    kartlariGoster();
}

if (typeof document !== "undefined") {
    ozetSayfasiniOlustur();
}
