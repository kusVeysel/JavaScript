//? Aritmetik Operatörrler
/*
* +: toplama operatörü
* -: çıkarma operatörü
* *: çarpma operatörü
* /: bölmme operatörü
* %: mod alma operatörü
* **: üssü operatörü
* ++: 1 arttırma operatörü
* --: 1 azaltma operatörü
*/
let sayi1 = 4;
let sayi2 = 2;
console.error("----Aritmetik Operatörler----")
console.log("sayi1 + sayi2 =", (sayi1 + sayi2))
console.log("sayi1 - sayi2 =", (sayi1 - sayi2))
console.log("sayi1 * sayi2 =", (sayi1 * sayi2))
console.log("sayi1 / sayi2 =", (sayi1 / sayi2))
console.log("sayi1 % sayi2 =", (sayi1 % sayi2))
console.log("sayi1**sayi2 =", (sayi1 ** sayi2))
sayi1++;
sayi2--;
console.log("sayi1++=", sayi1);
console.log("sayi2--=", sayi2);


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
sayi1 = 4;
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
console.log("sayi1>4 && sayi2<2 =", (sayi1 > 4 && sayi2 < 2))
console.log("sayi1>4 || sayi2<2 =", (sayi1 > 4 || sayi2 < 2))
console.log("!sayi1 = " + (!sayi1))

console.error("----Karşılaştırma Operatörler----")
//? Karşılaştırma Operatöler
/*
* ==: eşit mi operatörü
* ===: eşit mi operatörü ama daha katı tip de aynı olmalı
! 4 ==="4" false döner ama '==' bunda true döner 
* >: büyük mü operatörü
* <: küçük mü operatörü
* >=: büyük veya eşit mi operatörü
* <=: küçük veya eşit mi operatörü
* !=: eşit değil mi operatörü 
*/
console.log("sayi1 > sayi2 =", (sayi1 > sayi2))
console.log("sayi1 < sayi2 =", (sayi1 < sayi2))
console.log("sayi1 <= sayi2 =", (sayi1 <= sayi2))
console.log("sayi1 >= sayi2 =", (sayi1 >= sayi2))
console.log("sayi1 == sayi2 =", (sayi1 == sayi2))
console.log("sayi1 === sayi2 =", (sayi1 === sayi2))
console.log("sayi1 != sayi2 =", (sayi1 != sayi2))



