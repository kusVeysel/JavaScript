//? Döngüler
/*
* for: koşul sağlanıncaya kadar devam eder
* while: koşul sağlanıncaya kadar devam eder
* do-while: koşul sağlamasa bile en az 1kere çalışır
* forEach: dizinin her elemanı için verilen fonksiyonu bir kez çalıştırır
*/

//? For Döngüsü
//! for(başlanıç değeri; şart; değişim)
console.error("----For----");
for (let sayac1 = 1; sayac1 <= 10; sayac1++) {
    console.log(sayac1);
}


//? Whie Dögüsü
//! başlangıç değeri while(şart){değişim miktarı}
console.error("----While----");
let sayac2 = 1;
while (sayac2 <= 10) {
    console.log(sayac2);
    sayac2++;
}


//? Do-While Döngüsü
//! başlangıç değeri do{artış miktarı} while(şart){}
console.error("----Do-While----");
let sayac3 = 1;
do {
    console.log(sayac3);
    sayac3++;
}
while (sayac3 <= 10) {
    console.log(sayac3);
}


//? forEach metodu: döngüden farklı olarak dizinin kendi metodudur.
//! array.forEach((eleman, index, array) => {})
console.error("----forEach----");
let dizi = [1, 2, 3, 4, 5, 6, 7];
dizi.forEach((eleman, index, array) => {
    console.log(`eleman: ${eleman}, index: ${index}, anası(array): ${array}`);
})