//? Static
//!! Bir function veya özellik static ise classa özeldir, değilse nesneye özeldir, static olunca referans tipli düşünülebilir, yani o sınıftan oluşan tüm nesneleri etkiler

class Matematik {
static a = 5;
writeinfo(){
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
//! staticlere nesne referansı üzerinden erişilemez,sınıf ismi üzerinde erişilir
matematik.writeinfo()

Matematik.topla(10,5);

