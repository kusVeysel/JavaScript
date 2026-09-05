//? Tür Dönüşümleri
//* string , number , boolean , undefined , null : ilkel değişkenler
//* object , function , array : ilkel olmayan değişkenler


//? Number
let a = Number("5");
console.log(`${typeof a} : ${a}`);

let b = parseInt("5px"); // Metnin başındaki tam sayıyı alır.
console.log(`${typeof b} : ${b}`);

let c = parseFloat("5.5");
console.log(`${typeof c} : ${c}`);

//? String
let x = String(55);
console.log(`${typeof x} : ${x}`); 

let y = (55).toString();
console.log(`${typeof y} : ${y}`);

//* Boolean
let bool = Boolean("2");
console.log(`${typeof bool} : ${bool}`);


//* Number(): number tipine çevirir
//* parseInt(): metnin başındaki tam sayıyı alır; ikinci parametre tabandır.
//* String(): string'e çevirir
//* toString(): string'e çevirir, sadece number'i string'e çevirir
//* Boolean(): boolean'a çevirir, 0 hariç her şey true'dur.