//* Debugger(Breakpoint) ve Tooltip
//? Yazılımcıyı bilgilendiren açıklama satırlarına tooltip denir

let a = 10;
let b = 15;
debugger; //? Breakpoint
let c = a + b;
let d = a + b + c;
let e = a + b + c + d;

let sonuc = a + b + c + d + e;
console.log(`Sonuc: ${sonuc}`);

