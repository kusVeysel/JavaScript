//? Değer ve Referans Tipler

//* string , number , boolean , undefined , null, symbol: ilkel veri tipleri : değer tipli

//* object , array , function : ilkel olmayan veri tipleri : referans tipli

let a = 5;
let b = a;
b = 10;

console.log(`a => ${a}`);
console.log(`b => ${b}`);

//! ilkel tipler birbirini etkilemez , değeri atar gider

let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];

if (dizi1 == dizi2) {
    console.log("eşittir");
}
else {
    console.log("eşit değildir");
}
//! else çalışır
dizi2 = dizi1;

dizi2.push(12);
console.log(dizi1);
//! atama olmamasına rağmen 12 dizinin sonunda yer alır , çünkü bunlar referans tipli , dizi2=dizi1 diyerek aynı referansı aldılar ve dizi2'ye eklenen değer otomatik dizi1'e de gelmiş olur (aynı masaya oturan iki kişi gibi düşünülebilir , biri su isterse diğeri istemese bile o masaya su gelir)


