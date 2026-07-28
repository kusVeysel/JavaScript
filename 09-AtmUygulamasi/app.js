//* ATM Uygulama

let Bakiye = Number(prompt("Bakiyenizi Giriniz"));
const NewLine = "\r\n";

const Metin = `1-Bakiye Görüntüleme ${NewLine} 2-Para Çekme ${NewLine} 3-Para Yatırma ${NewLine} 4-Çıkış ${NewLine} Lütfen Bir Değer Seçiniz`

let Secim = Number(prompt(Metin));

while (Secim != 4) {
    switch (Secim) {
        case 1:
            alert(`Bakiyeniz: ${Bakiye}`);
            break;
        case 2:
            let CekilecekTutar = Number(prompt("Çekmek İstediğiniz Tutarı Giriniz"));
            if (CekilecekTutar > Bakiye) {
                alert("Bankada Yeteri Kadar Paranız Bulunmamaktadır");
            }
            else {
                Bakiye -= CekilecekTutar;
                alert(`Kalan Bakiye: ${Bakiye}`);
            }
            break;
        case 3:
            let YatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz"));
            Bakiye += YatirilacakTutar;
            alert(`Güncel Bakiyeniz: ${Bakiye}`);
            break;
        default:
            alert("1 ile 4 Arası Değer Giriniz");
            break;
    }
    Secim = Number(prompt(Metin));
}
if (Secim == 4) {
    alert("Sistemden Çıkış Yapılmıştır");
}