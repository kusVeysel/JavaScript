//? Asenkron Yapısı

/*
* JavaScript senkron çalışan bir programlama dilidir(Biri bitmeden diğer kod çalışmaz)

* JavaScript'in asenkron çalıştığı yerler:
* 1-Timing
* 2-Event(Olay)
* 3-Http İsteklerinde

*/

//? Örnek asenkron(timing)
console.log("Veysel");
setTimeout(() => {
    console.log("Süresi  doldu ve çalıştı");
}, 1000);
console.log("Kuş");
//! Normalde önce Veysel sonra, 1s sonra Süresi  doldu ve çalıştı, sonra Kuş yazması beklenir ama askenron çalıştığı için, önce Veysel ,sonra Kuş ,sonra Süresi  doldu ve çalıştı ,yazar 

