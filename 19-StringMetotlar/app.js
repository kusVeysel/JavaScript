//? String Metotlar
/*
* charAt(): Metnin içinden karakter döner
* concat(): iki ya da daha fazla stringi birleştirir
* indexOf(): Karakterin indexini döner ,concat'ın tersi
* lastindexof(): indexOf'tan pek farkı yok
* toUpperCase(): Stringi Büyük Harflere Çevirmek için kullanılır
* toLowerCase(): Stringi Küçük Harflere Çevirmek için kullanılır
* trim(): sağdan ve soldan boşlukları kaldırır
* slice(kaçıncı indekste başlayacak, kaçıncı indekste bitecek): stringi böler 
* substring(kaçıncı indeksten başlayacak, kaçıncı indekste bitecek): negatif değerleri 0 kabul eder
* replace(Değişecek Veri,Yerine Gelecek Veri): Yer Değiştirir
* split(): Stringi diziye çevirir
* valueOf(): string ilkel değerini döner
* startsWith(): Belirtilen stringle mi başlıyor diye kontrol eder
* endsWith(): Belirtilen stringle mi bitiyor diye kontrol eder, true false döner
*/

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2026";

let karakter = kurs.charAt(5);
console.log(`kurs.charAt(5) => ${karakter}`);

let sonuc = kurs.concat(tarih);
console.log(`kurs.concat(tarih) => ${sonuc}`);

let index = kurs.indexOf('u');
console.log(`kurs.indexOf('u') => ${index}`);

let index2 = kurs.lastIndexOf("Kursu");
console.log(`kurs.lastIndexOf("Kursu") => ${index2}`);

let buyuk = kurs.toUpperCase();
console.log(`kurs.toUpperCase() => ${buyuk}`);

let kucuk = kurs.toLowerCase();
console.log(`kurs.toLowerCase() => ${kucuk}`);

let bos = kurs.trim();
console.log(`kurs.trim() => ${bos}`);

let dilimleyici = kurs.slice(7, 12);
console.log(`kurs.slice(7,12) => ${dilimleyici}`);

let subs = kurs.substring(7, 12);
console.log(`kurs.substring(7,12) => ${subs}`);

let degis = kurs.replace("Modern", "Guncel");
console.log(`kurs.replace("Modern","Guncel") => ${degis}`);

let dizi = kurs.split(" ");
console.log(dizi);

console.log(`kurs.valueOf() => ${kurs.valueOf()}`);

console.log(`kurs.startsWith("Mode") => ${kurs.startsWith("Mode")}`);

console.log(`kurs.endsWith("Kursu") => ${kurs.endsWith("Kursu")}`);

