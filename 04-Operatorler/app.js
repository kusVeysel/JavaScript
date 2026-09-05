//? Aritmetik Operatörler
/*
* +: toplama operatörü
* -: çıkarma operatörü
* *: çarpma operatörü
* /: bölme operatörü
* %: mod alma operatörü
* **: üssü operatörü
* ++: 1 arttırma operatörü
* --: 1 azaltma operatörü
*/

console.error("----Aritmetik Operatörler----")
console.log("4 + 2 =", (4 + 2))
console.log("4 - 2 =", (4 - 2))
console.log("4 * 2 =", (4 * 2))
console.log("4 / 2 =", (4 / 2))
console.log("4 % 2 =", (4 % 2))
console.log("4 ** 2 =", (4 ** 2))
let dort = 4;
let iki = 2;
dort++;
iki--;
console.log("dort++ =", dort);
console.log("iki-- =", iki);


console.error("----Atama Operatörler----")

//? Atama Operatöler
/*
* =: atama operatörü
* +=: a=a+4 => a+=4
* -=: a=a-4 => a-=4
* *=: a=a*4 => a*=4
* /=: a=a/4 => a/=4
* %=: a=a%4 => a%=4
* **=: a=a**4 => a**=4
*/

let sayi1 = 4;
console.log("sayi1 = 4 =", sayi1)
console.log("sayi1 += 4 =", sayi1 += 4)
console.log("sayi1 -= 4 =", sayi1 -= 4)
console.log("sayi1 *= 4 =", sayi1 *= 4)
console.log("sayi1 /= 4 =", sayi1 /= 4)
console.log("sayi1 %= 4 =", sayi1 %= 4)
console.log("sayi1 **= 4 =", sayi1 **= 4)


console.error("----Mantıksal Operatörler----")

//? Matıksal Operatörler
/*
* &&: ve
* ||: veya
* !: değil
*/

console.log("4 > 4 && 2 < 2 =", (4 > 4 && 2 < 2))
console.log("4 > 4 || 2 < 2 =", (4 > 4 || 2 < 2))
console.log("!sayi1 = " + (!sayi1))


console.error("----Karşılaştırma Operatörler----")

//? Karşılaştırma Operatöler
/*
* ==: eşit mi operatörü
* ===: eşit mi operatörü ama daha katı tip de aynı olmalı
! 4 === "4" false döner ama '==' bunda true döner 
* >: büyük mü operatörü
* <: küçük mü operatörü
* >=: büyük veya eşit mi operatörü
* <=: küçük veya eşit mi operatörü
* !=: eşit değil mi operatörü 
*/

console.log("4 > 2 =", (4 > 2))
console.log("4 < 2 =", (4 < 2))
console.log("4 <= 2 =", (4 <= 2))
console.log("4 >= 2 =", (4 >= 2))
console.log("4 == \"4\" =", (4 == "4"))
console.log("4 != 2 =", (4 != 2))
console.log("4 === \"4\" =", (4 === "4"))

//* Konsola değikenle beraber mesaj yazdırırken "," ya da "+"da kullanılabilir., Tek fark "," kullanılırsa stringten sonra otomatik bir boşluk atar