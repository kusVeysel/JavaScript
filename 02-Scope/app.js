/* 
? var - let - const

* var/let/const değişkenismi = değişkenindeğeri;
! var: block scope değildir; function scope özelliğine sahiptir
! let/const: block scope özelliğine sahiptir
? const: sabittir
! const a=20; a=10; olmaz
? let: değişkendir 
! let a=20; a=10; olur


? ------- SCOPE(KAPSAM)-------

* → Global Scope
* → Function Scope
* → Block Scope
*/

var degiskenIsmi = 15; //? global scope

console.log(degiskenIsmi);

function method1() {
    var sayi = 10; //? function scope
    if (true) {
        var a = 5; //? var blok dışından da erişilebilir
        let blokDegiskeni = 6; //? let yalnızca bu blokta yaşar
    }
    console.log(a);
    console.log(sayi);
    // console.log(blokDegiskeni);  // ReferenceError: blok dışında erişilemez
}
//! console.log(sayi); Çalışmaz

method1();