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
* splice(başlangıç indeksi ,kaç tane dilimleyeceği): diziyi istenilen yerden bölüp yeni bir dizi oluşturur
* lenght: dizinin uzunluğunu verir
* reserve(): dizinin elemanlarını(indexlerini) ters çevirir
* split(separator): belirli bir ifadeye göre böler
* indexOf(): elemanın index numarasını verir yoksa -1 döner
* includes(): verilen elemanı içeriyor mu ona bakar, true false döner
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
arabalar.toString();
console.log("toString() => " + arabalar);

console.error("JOİN");
let arabalar2 = arabalar.join("-");
console.log("join('-') => " + arabalar2);

let meyveler = ["elma", "armut", "karpuz", "ayva", "çilek", "portakal"];
console.error("CONCAT");
let birlesmis = arabalar.concat(meyveler);
console.log("concat('meyveler) => " + birlesmis);

console.error("SPLİCE")
let ayridizi = birlesmis.splice(2, 7);
console.log("splice(2,7) => " + ayridizi);

console.error("LENGHT");
console.log("lenght => " + birlesmis.length);

console.error("RESERVE");
arabalar.reverse();
console.log("reserve() => " + arabalar);

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
