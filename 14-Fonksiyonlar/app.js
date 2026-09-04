//? Fonksiyon parametre alabilir, değer döndürebilir veya yan etki üretebilir.
//? Parametresiz ve geriye değer döndürmeyen fonksiyon tanımlamak

function metot1() {
    console.log("Parametresiz ve değer döndürmeyen fonsiyon");
}
metot1();


//? Parametresiz ve geriye değer döndüren fonksiyon tanımlamak

function metot2() {
    return 5;
}
let a = metot2();
console.log(a);


//? Parametreli ve geriye değer döndürmeyen fonksiyon tanımlamak

function metot3(isim, soyisim) {
    console.log(`isim:${isim}, soyisim:${soyisim} `);
}
metot3("Veysel", "Kuş");


//? Parametreli ve geriye değer döndüren fonksiyon tanımlamak

function metot4(deger) {
    deger += 7;
    return deger
}
let yenideger = metot4(3);
console.log(yenideger);


//? Varsayılan parametre, değer verilmediğinde kullanılır.
function selamla(isim = "Ziyaretçi") {
    return `Merhaba ${isim}`;
}
console.log(selamla());
