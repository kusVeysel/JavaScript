//? Static
//!! static üyeler class'a aittir; instance üzerinden erişilemez ve referans tipli değildir.

class Matematik {
    static a = 5;

    writeinfo() {
        console.log(`${Matematik.a}`);
    }
    static topla(a, b) {
        console.log(a + b);
    }
    cikar(a, b) {
        console.log(a - b);
    }
    carp(a, b) {
        console.log(a * b);
    }
    bol(a, b) {
        console.log(a / b);
    }
}

const matematik = new Matematik();
// matematik.topla(10,5); 
//! staticlere nesne referansı üzerinden erişilemez, sınıf ismi üzerinde erişilir
matematik.writeinfo()

Matematik.topla(10, 5);
matematik.cikar(10, 5);
matematik.carp(10, 5);
matematik.bol(10, 5);
// Matematik.a sınıf üzerinden, matematik.writeinfo() instance üzerinden erişilir.