//? Session Stroge Ve Local Stroge
//todo projeyi çalıştır => f12 => >> => Application


let dizi = ['elma', 'karpuz', 'yumurta', 'ekmek'];

sessionStorage.setItem("key1", "value1")
sessionStorage.setItem("key2", "value2")
sessionStorage.setItem("key3", "value3")
sessionStorage.setItem("key4", JSON.stringify(dizi)) //! array olarak gider

let deger = sessionStorage.getItem("key2");
console.log(deger);

let a = JSON.parse(sessionStorage.getItem("key4")); //! array olarak gelir
console.log(a);


// sessionStorage.clear();

//* clear(): Temizler
//* setItem(): Günceller
//* getItem(): Seçer

//* localStorage sessionStroge ile aynı'dır

//! Veriler ne girersen gir string olar gider ve gelir