//? Math Metotlar

/*
* Floor(): Ondalıklı sayını noktadan sonrası kaç olursa olsun aşşağı yuvarlar
* Ceil(): Ondalıklı sayını noktadan sonrası kaç olursa olsun yukarı yuvarlar
* Round(): Normal matematik kurallarına göre sayıyı yuvarlar
* Trunc(): Ondalıklı sayının noktadan sonraki kısmını siler

* Max(): Sayıların içinde en büyük olanı döner
* Min(): Sayıların içinde en küçük olanı döner

* Abs(): Sayının mutlak değer almak için kullanılır
* Sqrt(): Sayının karakök almak için kullanılır
* Pow(): Sayının üssünü Almak için kullanılır
* Random(): 0 ile 1 arasında random sayılar üretir
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
console.log(`Math.pow(2,3) => ${Math.pow(2,3)}`);
console.log(`Math.PI => ${Math.PI}`);

console.log(`Math.trunc(Math.random()*100+100) => ${Math.trunc(Math.random()*100+100)}`);

console.log(Math.random());
