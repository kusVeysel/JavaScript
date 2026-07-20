//? Date Kullanımı

/*
?GET getirmek için

* getFullYear(): Yılı verir
* getDay(): Haftanın kaçıncı günde olduğunu verir
* getDate(): Ayın Kaçıncı gününde olduğunu verir, Günü verir
* getHours(): Saati verir
* getMilliSeconds(): Milisaniyeyi Verir
* getMinutes(): Dakikayı verir
* getMonth()+1: Ayı Verir
* getSeconds(): Saniyeyi verir
* toLocaleDateString(): Tarihi Gün.Ay.Yıl Olarak stringe çevirip local olarak verir
* toLocaleTimeString(): Saat.Dakika.Saniye'ye local olarak stringe çevirir
* toLocaleString():toLocaleDateString() toLocaleTimeString() beraber verir

?SET güncellemek için yukardakilerle aynı metotlar
*/

let tarih = new Date();
console.log(tarih);

console.log(tarih.getTime());
console.log(tarih.getFullYear());
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(tarih.getMonth()+1);
console.log(tarih.getSeconds());
console.log(tarih.toLocaleDateString());
console.log(tarih.toLocaleTimeString());
console.log(tarih.toLocaleString());


