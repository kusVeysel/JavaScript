//? Dizi Methodları
/*
* push(): dizinin sonuna eleman ekler , dizini uzunluğunu döner
* unshift(): dizinin başına eleman ekler , eleman sayısını geri döner

* pop(): dizinin sonundan eleman siler , silinen elemanı geri döner
* shift(): dizinin başından eleman siler , silinen elemanı geri döner

* splice(elemanın eklenecek index numarası , kendisinden sonra silinecek eleman sayısı , eklenecek eleman): eleman eklemek veya silmek için kullanılır

* toString(): diziyi stringe çevirir
* join(): diziyi stringe çevirir, toStringden farkı ,araya eleman ekleyebiliriz

* concat(): dizileri birleştirmek için kullanılır
* slice(başlangıç indeksi, bitiş indeksi): orijinali değiştirmeden bir bölümün kopyasını oluşturur
* length: dizinin uzunluğunu verir
* reverse(): dizinin elemanlarını(indexlerini) ters çevirir
* split(separator): string metodudur; metni belirli bir ifadeye göre diziye böler
* indexOf(): elemanın index numarasını verir yoksa -1 döner
* includes(): verilen elemanı içeriyor mu ona bakar, true false döner

* map(): forEach gibi her elemanı döner.
* filter(): Koşula uyan elemanları getirir.
* find(): Koşula uyan ilk elemanı getirir.
* some(): Koşula uyan en az 1 eleman var mı.
* every(): Koşula tüm elemanlar uyuyor mu.
* reduce(): Dizideki elemanları bir yere toplar, map gibi ama sonuçta tekil bir sonuç olur
* → dizi.reduce((biriktirici, item) => {...}, başlangıç_değeri);
* sort(): Varsayılan olarak metin sıralaması yapar, sayılar için karşılaştırıcı verilir.
*/
let arabalar = ["bmw", "toyota", "reamult", "mercedes", "porshe"];

console.log("arabalar => " + arabalar);

console.error("PUSH");
arabalar.push("opel");
console.log("push('opel') => " + arabalar);

console.error("UNSHİFT");
arabalar.unshift("hundai");
console.log("unshift('hundai') => " + arabalar);

console.error("POP");
let silineneleman = arabalar.pop();
console.log("pop() => " + arabalar);
console.log("silinen eleman => " + silineneleman);

console.error("SHİFT");
let silineneleman2 = arabalar.shift();
console.log("shift() => " + arabalar);
console.log("silinen eleman => " + silineneleman2);

console.error("SPLİCE");
arabalar.splice(0, 0, "turbo");
console.log("splice(0,0,'turbo') => " + arabalar)

console.error("TOSTRİNG");
let arabalarMetin = arabalar.toString();
console.log("toString() => " + arabalarMetin);

console.error("JOİN");
let arabalar2 = arabalar.join("-");
console.log("join('-') => " + arabalar2);

let meyveler = ["elma", "armut", "karpuz", "ayva", "çilek", "portakal"];
console.error("CONCAT");
let birlesmis = arabalar.concat(meyveler);
console.log("concat('meyveler) => " + birlesmis);

console.error("SLİCE")
let ayridizi = birlesmis.slice(2, 9);
console.log("slice(2,9) => " + ayridizi);

console.error("LENGTH");
console.log("length => " + birlesmis.length);

console.error("REVERSE");
arabalar.reverse();
console.log("reverse() => " + arabalar);

let isimler = "ali,veli,deli";
console.error("SPLİT");
let degisken = isimler.split(",");
console.log("split(',') => " + degisken);

console.error("INDEXOF");
let index = meyveler.indexOf("karpuz");
console.log("indexOf('karpuz') => " + index);

console.error("INCLUDES");
let sonuc = arabalar.includes("porshe");
console.log("includes('porche') => " + sonuc);

//? Fonksiyonel dizi metotları yeni bir sonuç üretir; kaynak diziyi değiştirmez.
const fiyatlar = [10, 25, 40, 60];
console.error("MAP");
console.log("map() =>", fiyatlar.map((fiyat) => fiyat * 2));

console.error("FILTER");
console.log("filter() =>", fiyatlar.filter((fiyat) => fiyat >= 25));

console.error("FIND");
console.log("find() =>", fiyatlar.find((fiyat) => fiyat > 30));

console.error("SOME");
console.log("some() =>", fiyatlar.some((fiyat) => fiyat > 50));

console.error("EVERY");
console.log("every() =>", fiyatlar.every((fiyat) => fiyat > 0));

console.error("REDUCE");
console.log("reduce() =>", fiyatlar.reduce((toplam, fiyat) => toplam + fiyat, 0));

console.error("SORT");
console.log("sort() =>", [...fiyatlar].sort((birinci, ikinci) => birinci - ikinci));
