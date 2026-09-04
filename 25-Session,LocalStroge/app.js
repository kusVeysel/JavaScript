//? sessionStorage ve localStorage
//todo projeyi çalıştır => f12 => >> => Application


let dizi = ['elma', 'karpuz', 'yumurta', 'ekmek'];

sessionStorage.setItem("key1", "value1")
sessionStorage.setItem("key2", "value2")
sessionStorage.setItem("key3", "value3")
sessionStorage.setItem("key4", JSON.stringify(dizi)) //! dizi olarak gider

let deger = sessionStorage.getItem("key2");
console.log(deger);

let kayitliDizi = sessionStorage.getItem("key4");
let a = kayitliDizi ? JSON.parse(kayitliDizi) : []; //! JSON metni diziye çevrilir
console.log(a);

console.log(sessionStorage.key(1));

// sessionStorage.clear();

//* clear(): Temizler
//* setItem(): Günceller yoksa ekler
//* getItem(): Seçer
//* key(): İndex gibi

//* localStorage API olarak benzerdir; sessionStorage sekme kapanınca,
//* localStorage ise silinene kadar veriyi saklar.

//! Veriler ne girersen gir string olarak gider ve gelir