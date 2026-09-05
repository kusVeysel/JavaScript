//? Diziler
//* Dizi, sıralı değerler koleksiyonudur ve sıfır tabanlı indeks kullanır.
//* Dizi tanımı: const/let diziAdi = [deger1, deger2, ...];

let sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sayilar[6]);

sayilar[sayilar.length - 1] = "veysel";

console.log(sayilar[10]);

let karisik = [1, "veysel", 2.3, true, 'A'];
//! JavaScriptte bir dizide farklı tipler(number,string,boolean...) olabilir , bu özellik her dilde yoktur.
console.log(karisik[3]);


//? İç içe dizilerde her eleman başka bir dizi olabilir.
const matris = [[1, 2], [3, 4]];
console.log(matris[1][0]);