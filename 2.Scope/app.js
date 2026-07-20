/* 
? var - let - const

* var/let/const değişkenismi = değişkenindeğeri;
! var: block scope olsa bile function scope gibi davranır
! let/const: block scope özelliğine sahiptir
? const: sabittir
! const a=20; a=10; olmaz
? let: değişkendir 
! let a=20; a=10; olur


? ------- SCOPE(KAPSAM)-------

* -> Global Scope
* -> Function Scope
* -> Block Scope
*/

var degiskenIsmi = 15; //? global scope

console.log(degiskenIsmi);

function method1() {
    var sayi = 10; //? function scope
    if (true) {
        var a = 5; //? block scope
    }
    console.log(a);
    console.log(sayi);
}
//! console.log(sayi); Çalışmaz

method1();