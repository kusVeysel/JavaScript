//? Map Sınıfı Kullanımı
//* Set(): Günceller yoksa ekler
//* Get(): Getirir
//* Delete(): Siler, geriye silinip silinmediğini döner
//* Has(): Var mı diye bakar
//* Keys(): Sınıf içindeki var olan objelerin keylerini döner
//* Values(): Sınıf içindeki var olan objelerin valuelerini döner
//* Array.from(): Arraya çevirir

const map1 = new Map();

map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");

console.log(map1.get(34));

console.log(map1.delete(6));

console.log(map1.has(6));

const keys = map1.keys();
console.log(keys);

const values = map1.values();
console.log(values);

const array = Array.from(map1);
console.log(array);


let map2 = new Map();
map2.set(34, "İstanbul");
map2.set(35, "İzmir");
map2.set(6, "Ankara");
map2.set(1, "Adana");
map2.set([1,2,3], "Array");

console.log(map2.get([1,2,3]));
//! undefined döner, array keyi referans tiplidir yani değere değil referansa bakar , get([1,2,3]) diyerek ram'de yeni bir yer açılır ve oraya yazılır bu yüzden undefined döner

//! let key = [1,2,3];
//! map2.set(key,"array");
//! console.log(map2.get(key));
//! Yapıldığında bu sefer keyin valuesini verir
