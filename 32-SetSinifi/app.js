//? Set Sınıfı Kullanımı
//! En önemli özelliği bir değer bir kere eklenir , tekrar tekrar eklenemez, eklenirse hata vermez ama yok sayar
//* add(): Ekler, set() gibi 
//* size: uzunluk(içinde kaç değer olduğu), lenght gibi
//* delete(): Değeri siler
//* has(): Değer var mı diye bakar
//* Array.from(): Array'a çevirir

const set = new Set();
set.add(true);
set.add(3.14);
set.add("Enes");
set.add(7);
set.add({ username: "veysel", password: "1" });
set.add([1, 2, 3, 4]);

console.log(set.size);

console.log(set.delete("Enes"));

console.log(set.has("Enes"));

const array = Array.from(set);

array.forEach((value) => {
    console.log(value);
})
