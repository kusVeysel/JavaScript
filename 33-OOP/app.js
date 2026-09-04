//? OOP (Nesne Yönelimli Programlama) Giriş

class Insan {
    /*
    * Class Yapısında
    * 1 - Özellikler(property)
    * 2 - Yapıcı Metot(constructor)
    * 3 - Metot (class içinde tanımlanan fonksiyon)
    * olur
    */
    constructor(isim, soyisim, yas, maas) { //* Yapıcı Metot
        //? this.değişenadı = değer;
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster() {
        console.log(`İsim: ${this.isim}, Soyisim: ${this.soyisim}, Yas: ${this.yas}, Maaş: ${this.maas}`);
    }
}

const insan1 = new Insan("Veysel", "Kuş", 18, 0); // yeni nesne oluşturulur
const insan2 = new Insan("Abuzer", "Çaycı", 24, 10000); // yeni nesne oluşturulur

insan1.bilgileriGoster();
insan2.bilgileriGoster();

//* this, çağrılan mevcut nesneyi ifade eder; property tanımlamakla sınırlı değildir.
console.log(insan1 instanceof Insan); // Nesnenin bu class'tan üretilip üretilmediğe bakar.
//! Oluşturulan nesne çalıştırıldığında derleyici önce o nesnenin constructor'ına gider