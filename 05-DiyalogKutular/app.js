// * alert() metodu, kullanıcıya bir uyarı mesajı göstermek için kullanılır. Bu metod, kullanıcıdan herhangi bir giriş almaz ve sadece bilgilendirme amaçlıdır.

alert("Bu bir uyarı mesajıdır.");
alert("Kullanıcıya bilgi vermek için kullanılır.");

// * prompt() metodu, kullanıcıdan giriş almak için kullanılır. Bu metod, bir metin kutusu açar ve kullanıcıdan veri girmesini ister. Kullanıcı veri girdikten sonra, bu veri bir değişkene atanabilir.

let kullaniciAdi = prompt("Lütfen adınızı girin:");
console.log("Kullanıcı Adı: " + kullaniciAdi);

//* confirm() metodu, kullanıcıdan onay almak için kullanılır. Bu metod, bir onay kutusu açar ve kullanıcıya "Tamam" veya "İptal" seçeneklerini sunar. Kullanıcı "Tamam" seçeneğini seçerse true, "İptal" seçeneğini seçerse false döner.

let sonuc = confirm("Bu bir onay mesajıdır. Devam etmek istiyor musunuz?");
console.log("sonuc:" + sonuc);