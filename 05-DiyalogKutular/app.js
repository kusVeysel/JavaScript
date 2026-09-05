// * alert() metodu, kullanıcıya bir uyarı mesajı göstermek için kullanılır. Bu metod, kullanıcıdan herhangi bir giriş almaz ve sadece bilgilendirme amaçlıdır.
alert("Bu bir uyarı mesajıdır. Kullanıcıya bilgi vermek için kullanılır.");


// * prompt(): her zaman string döner, iptal edilirse null döndürür; sayısal işlem için Number() gerekir.
let kullaniciAdi = prompt("Lütfen adınızı girin:");
console.log("Kullanıcı Adı: " + kullaniciAdi);


//* confirm(): bir onay kutusu açar ve Tamam için true, İptal için false döndürür.
let sonuc = confirm("Bu bir onay mesajıdır. Devam etmek istiyor musunuz?");
console.log("sonuc:" + sonuc);