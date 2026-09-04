
document.writeln("<h1>Merhaba Dünya!</h1>");
document.writeln("<p>Bu bir örnek JavaScript kodudur.</p>");


console.clear();
console.log("Bu bir konsol mesajıdır.Hata ayıklama için kullanışlıdır");
console.error("Bu bir hata mesajıdır.");
console.warn("Bu bir uyarı mesajıdır.");

console.group("Konsol Grubu");
console.log("Grup içindeki mesaj 1");
console.log("Grup içindeki mesaj 2");
console.groupEnd();

console.table([
    { isim: "Ali", puan: 80 },
    { isim: "Ayşe", puan: 95 }
]);

console.time("hesaplama");
console.log("Ölçülen işlem");
console.timeEnd("hesaplama");

console.count("mesaj");
console.count("mesaj");
console.groupCollapsed("Detaylar");
console.log("Başlangıçta kapalı bir grup");
console.groupEnd();

//* document.writeln(): HTML belgesine içerik eklemek için kullanılır. Bu metod, sayfa yüklendikten sonra çağrıldığında mevcut içeriği siler ve yeni içerik ekler. Bu nedenle, genellikle sayfa yüklenmeden önce kullanılması önerilir.

//* console.clear(): Konsola yazılan tüm mesajları temizler.
//* console.log(): Konsola mesaj yazdırmak için kullanılır.
//* console.error(): Konsola hata mesajı yazdırmak için kullanılır.
//* console.warn(): Konsola uyarı mesajı yazdırmak için kullanılır.

//* console.group(): Konsola mesaj için grup oluşturur
//* console.groupEnd(): Oluşturulan grubun sonunu belirtir.

//* console.table(): Dizi veya nesneleri tablo olarak gösterir.

//* console.timeEnd(): Aynı etiketle geçen süreyi gösterir.
//* console.count(): Aynı etiketin kaç kez yazdırıldığını sayar.