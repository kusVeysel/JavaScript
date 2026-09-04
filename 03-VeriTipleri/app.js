//? Veri Tipleri
/*
* 1 - String
* 2 - Number
* 3 - Boolean
* 4 - Null
* 5 - Undefined
* 6 - Object
* 7 - Function

* typeof değişken_adı: Veri tipini verir
*/

//? String
let degisken = "Veysel";
console.log(`${typeof degisken}: ${degisken}`);

//? Number
let degisken1 = 10;
console.log(`${typeof degisken1}: ${degisken1}`);

//? Number
let degisken2 = 10.7;
console.log(`${typeof degisken2}: ${degisken2}`);

//? Boolean
let degisken3 = 4;
console.log(typeof (degisken3 > 4), degisken3 > 4)

//? Null
let degisken4 = null;
console.log(degisken4);

//? Undifined
let a;
console.log(typeof a, a);

//? Object
let degisken5 = {
    isim: "veysel",
    soyisim: "Kuş",
    yas: "18"
}
console.log(typeof degisken5);

console.log(typeof null); // Tarihsel bir JavaScript davranışı olarak "object" döner.

//? Function
const degisken6 = () => {
    console.log(typeof degisken6);
}
degisken6();