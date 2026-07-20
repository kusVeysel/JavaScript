//? For in ve For of döngüleri

let names = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];

//* For in döngüsü
for (let name in names) {
    console.log(name);
}
//! For in döngüsü İndex döner ,dizi adı değil 
//! diziadı[değişkenadı] şeklide değerlere erişilebilir


for (let isim of names) {
    console.log(isim);
}
//! For of döngüsü değeri döner
//! diziadı.indexOf(değişkenadı) şeklinde indexlere erişilebilir
