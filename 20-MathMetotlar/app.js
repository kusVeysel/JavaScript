//? Math Metotlar

/*
* floor(): Sayıyı aşağı yuvarlar; negatiflerde daha küçük tam sayıya gider.
* ceil(): Sayıyı yukarı yuvarlar.
* round(): En yakın tam sayıya yuvarlar.
* trunc(): Ondalık kısmı siler.

* max(): Sayıların içindeki en büyüğü döner
* min(): Sayıların içindeki en küçüğü döner

* abs(): Sayının mutlak değerini alır
* sqrt(): Karekök alır
* pow(): Üs alır
* random(): 0 (dahil) ile 1 (hariç) arasında sayı üretir
* ------> PI Sayisi:
*/


console.log(`Math.floor(3.9) => ${Math.floor(3.9)}`);
console.log(`Math.ceil(3.1) => ${Math.ceil(3.1)}`);
console.log(`Math.round(3.5) => ${Math.round(3.5)}`);
console.log(`Math.trunc(3.4) => ${Math.trunc(3.4)}`);

console.log(`Math.max(0,10,20,13,45,4) =>  ${Math.max(0, 10, 20, 13, 45, 4)}`);
console.log(`Math.min(0,10,20,13,45,4) =>  ${Math.min(0, 10, 20, 13, 45, 4)}`);

console.log(`Math.abs(-2) => ${Math.abs(-2)}`);
console.log(`Math.sqrt(4) => ${Math.sqrt(4)}`);
console.log(`Math.pow(2,3) => ${Math.pow(2, 3)}`);
console.log(`Math.PI => ${Math.PI}`);

console.log(`Math.trunc(Math.random()*100+100) => ${Math.trunc(Math.random() * 100 + 100)}`);

console.log(Math.random());

console.log(`Math.floor(-2.4) => ${Math.floor(-2.4)}`);
console.log(`Math.sign(-8) => ${Math.sign(-8)}`);
console.log(`Math.cbrt(27) => ${Math.cbrt(27)}`);

// min dahil, max hariç aralıkta rastgele tam sayı üretme formülü.
const rastgeleTamSayi = Math.floor(Math.random() * 10 + 10);
console.log(`10-19 arası sayı => ${rastgeleTamSayi}`);
