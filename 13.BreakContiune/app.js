//* Break - Contiune

//? Break
//* Şart sağlanmasada(döngü bitmesede) dögüyü sonlandırır
console.error("----Break----")
let sayac1 = 0;
while (sayac1 < 10) {
    if (sayac1 == 8) {
        break;
    }
    console.log(sayac1);
    sayac1++;
}


//? Contiune
//* Döngüyü 1kereye mahsus pass geçer(1 kere atlayıp döngüye devam eder)
console.error("----Contiune----")
let sayac2 = 0;
while (sayac2 < 10) {
    sayac2++;
    if (sayac2 == 8) {
        continue; //* altındaki hiçbir kod çalışmaz(while kapanış kırlangıçına kadar)
    }
    console.log(sayac2);
}