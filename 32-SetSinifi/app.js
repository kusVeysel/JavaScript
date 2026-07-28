//? Set Sınıfı Kullanımı
//! En önemli özelliği bir değer bir kere eklenir , tekrar tekrar eklenemez,hata vermez ama yok sayar
const set = new Set();
set.add(true);
set.add(3.14);
set.add("Enes");
set.add(7);
set.add({username:"veysel",password:"1"});
set.add([1,2,3,4]);

console.log(set.size);
//* size: uzunluk(içinde kaç değer olduğu)

console.log(set.delete("Enes"));
//* delete: Değeri siler

console.log(set.has("Enes"));
//* has: Değer var mı diye bakar

const array = Array.from(set);

array.forEach((value)=>{
    console.log(value);
})
