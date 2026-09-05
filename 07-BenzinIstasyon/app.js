//* Benzin İstasyonu

let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const newline = "\r\n";

const yakitMetni = `1-Dizel ${newline} 2-Benzin ${newline} 3-LPG ${newline} Yakıt Türü Seçiniz`;

let YakitTipi = prompt(yakitMetni).toLocaleLowerCase();

if (Number(YakitTipi) === 1 || YakitTipi === "dizel" || Number(YakitTipi) === 2 || YakitTipi === "benzin" || Number(YakitTipi) === 3 || YakitTipi === "lpg") {

    var YakitLitresi = Number(prompt("Yakıt Litresi Giriniz"));
    var Bakiye = Number(prompt("Bakiyenizi Giriniz"));

    if (Number(YakitTipi) === 1 || YakitTipi === "dizel") {
        let OdenecekTutar = dizel * YakitLitresi;
        if (OdenecekTutar <= Bakiye) {
            Bakiye -= OdenecekTutar;
            alert(`Yakıt Alma İşlemi Başarılı ${newline} Ödenen Miktar: ${OdenecekTutar + newline} Kalan Bakiye: ${Bakiye}`)
        }
        else {
            alert(`Bakiyeniz Yeterli Değil ${newline} Ödenecek Tutar: ${OdenecekTutar + newline} Bakiyeniz: ${Bakiye + newline} Eksik Tutar: ${OdenecekTutar - Bakiye}`);
        }
    }
    else if (Number(YakitTipi) === 2 || YakitTipi === "benzin") {
        let OdenecekTutar = benzin * YakitLitresi;
        if (OdenecekTutar <= Bakiye) {
            Bakiye -= OdenecekTutar;
            alert(`Yakıt Alma İşlemi Başarılı ${newline} Ödenen Miktar: ${OdenecekTutar + newline} Kalan Bakiye: ${Bakiye}`)
        } else {
            alert(`Bakiyeniz Yeterli Değil ${newline} Ödenecek Tutar: ${OdenecekTutar + newline} Bakiyeniz: ${Bakiye + newline} Eksik Tutar: ${OdenecekTutar - Bakiye}`);
        }
    }
    else if (Number(YakitTipi) === 3 || YakitTipi === "lpg") {
        let OdenecekTutar = lpg * YakitLitresi;
        if (OdenecekTutar <= Bakiye) {
            Bakiye -= OdenecekTutar;
             alert(`Yakıt Alma İşlemi Başarılı ${newline} Ödenen Miktar: ${OdenecekTutar + newline} Kalan Bakiye: ${Bakiye}`)
        } 
        else {
            alert(`Bakiyeniz Yeterli Değil ${newline} Ödenecek Tutar: ${OdenecekTutar + newline} Bakiyeniz: ${Bakiye + newline} Eksik Tutar: ${OdenecekTutar - Bakiye}`);
        }
    }
}
else {
    alert("Lütfen geçerli bir yakıt türü seçiniz");
}