let sayi = Number(prompt("1 ile 5 arası sayı giriniz"))

switch (sayi) {
    case 1:
        console.log("Girilen sayı 1'dir");
        break;
    case 2:
        console.log("Girilen sayı 2'dir");
        break;
    case 3:
        console.log("Girilen sayı 3'tür");
        break;
    case 4:
        console.log("Girilen sayı 4'tür");
        break;
    case 5:
        console.log("Girilen sayı 5'tir");
        break;
    default:
        console.log("Girilen sayı 1 ile 5 arasında olmalıdır");
        break;
}

//* switch - case, tek bir ifadenin farklı sabit değerlerle karşılaştırılmasıdır. if - else gibidir.

//* break burada döngüden değil, switch bloğundan çıkar. Yazılmazsa fall-through olur.


// Fall-through: break kullanılmadığında sonraki case de çalışır.
switch ("uyarı") {
    case "uyarı":
        console.log("Kontrol gerekli");
    case "bilgi":
        console.log("Mesaj gösterildi");
        break;
}