//? Date Kullanımı

/*
? GET (getirmek için)

* getMilliSeconds(): Milisaniyeyi Verir
* getSeconds(): Saniyeyi verir.
* getMinutes(): Dakikayı verir.
* getHours(): Saati verir.
* getDay(): Haftanın kaçıncı günde olduğunu verir. 0 = Pazar ... 6 = Cumartesi olarak verir.
* getDate(): Ayın Kaçıncı gününde olduğunu verir.(0-31)
* getMonth(): Ayı Verir. Ocak 0, Aralık 11 olarak verir.
* getFullYear(): Yılı verir

* toLocaleDateString(): Tarihi Gün.Ay.Yıl Olarak stringe çevirip local olarak verir
* toLocaleTimeString(): Saat.Dakika.Saniye'ye local olarak stringe çevirir
* toLocaleString():toLocaleDateString() toLocaleTimeString() beraber verir

? SET (güncellemek için setFullYear, setMonth gibi metotlar)
*/

let tarih = new Date();
console.log(tarih);

console.log("------------------------------------");
console.log(`tarih.getTime() => ${tarih.getTime()}`);
console.log("------------------------------------");
console.log(`tarih.getFullYear() => ${tarih.getFullYear()}`);
console.log("------------------------------------");
console.log(`tarih.getDate() => ${tarih.getDate()}`);
console.log("------------------------------------");
console.log(`tarih.getDay() => ${tarih.getDay()}`);
console.log("------------------------------------");
console.log(`tarih.getHours() => ${tarih.getHours()}`);
console.log("------------------------------------");
console.log(`tarih.getMilliseconds() => ${tarih.getMilliseconds()}`);
console.log("------------------------------------");
console.log(`tarih.getMinutes() => ${tarih.getMinutes()}`);
console.log("------------------------------------");
console.log(`tarih.getMonth()+1 => ${tarih.getMonth() + 1}`);
console.log("------------------------------------");
console.log(`tarih.getSeconds() => ${tarih.getSeconds()}`);
console.log("------------------------------------");
console.log(`tarih.toLocaleDateString() => ${tarih.toLocaleDateString()}`);
console.log("------------------------------------");
console.log(`tarih.toLocaleTimeString() => ${tarih.toLocaleTimeString()}`);
console.log("------------------------------------");
console.log(`tarih.toLocaleString() => ${tarih.toLocaleString()}`);
console.log("------------------------------------");
