//? For in ve For of döngüleri

let names = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];

//* For in döngüsü
for (let name in names) {
    console.log(name);
}
//! For in döngüsü index döner, dizi adı değil 
//! dizi_adı[değişken_adı] şeklide değerlere erişilebilir

//* For of döngüsü
for (let name of names) {
    console.log(name);
}
//! For of döngüsü değeri döner
//! dizi_adı.indexOf(değişken_adı) şeklinde indexlere erişilebilir
