//? Map Sınıfı Kullanımı

const map1 = new Map();

map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");
//* Set: Günceller(Ekler)

console.log(map1.get(34));
//* Get: Getirir

console.log(map1.delete(6));
//* Delete: Siler

console.log(map1.has(6));
//* Has: Var mı diye bakar

const keys = map1.keys();
console.log(keys);
//* Keys: Map'ın içindeki var olan objelerin keylerini döner

const values = map1.values();
console.log(values);
//* Keys: Map'ın içindeki var olan objelerin valuelerini döner

const array = Array.from(map1);
console.log(array);
//* map1 obzesini arraya çevirir


let map2 = new Map();
map2.set(34, "İstanbul");
map2.set(35, "İzmir");
map2.set(6, "Ankara");
map2.set(1, "Adana");
map2.set([1,2,3], "Array");

console.log(map2.get([1,2,3]));
//! undefined , array keyi referans tiplidir yani değere değil referansa bakar , get([1,2,3]) diyerek ram'de yeni bir yer açılır ve oraya yazılır bu yüzden undefined döner

//! let key = [1,2,3];
//! map2.set(key,"array");
//! console.log(map2.get(key));
//! Yapıldığında bu sefer keyin valuesini verir
