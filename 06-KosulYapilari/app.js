//? Koşul Yapıları
//* if - else if - else

let not = Number(prompt("Notunuz:"));

if (not > 60) {
    console.log(`AA ile geçtiniz ,notunuz: ${not}`);
}
else if (not >= 50 && not <= 60) {
    console.log(`CC ile koşullu geçtiniz ,notunuz: ${not}`);
}
else {
    console.log(`FF ile kaldınız ,notunuz: ${not}`);
}
//* Bir karar yapısında birden fazla "else if" bloğu olabilir veya "else" bloğu olmayabilir ama "if" bloğu olmak zorunda direk "else if" veya "else" yazılamaz.
//* Şart(koşul) sağlanırsa o blok çalışır, diğer hiçbir blok çalışmaz.

//* Template Literals: `${değişken_adı}`; : string içinde değişken yazmamızı sağlayan çok kullanışlı bir yoldur

let bool = true;
const sonuc = bool ? "Değer true" : "Değer false";
console.log(sonuc);
//* Ternary operatör. Kısa if-else yazımıdır