//? Break - Continue

//? Break
//* Şart sağlanmasa bile döngüyü sonlandırır.
console.error("----Break----")
let sayac1 = 0;
while (sayac1 < 10) {
    if (sayac1 === 8) {
        break;
    }
    console.log(sayac1);
    sayac1++;
}


//? Continue
//* Mevcut iterasyonun kalanını atlar ve sonraki iterasyona geçer.
console.error("----Continue----")
let sayac2 = 0;
while (sayac2 < 10) {
    sayac2++;
    if (sayac2 === 8) {
        continue; //* Bu iterasyonda aşağıdaki console.log çalışmaz.
    }
    console.log(sayac2);
}

//* for döngüsünde continue, güncelleme ifadesinden sonra sonraki tura geçer.
for (let sayac3 = 0; sayac3 < 5; sayac3++) {
    if (sayac3 === 2) continue;
    console.log(`for: ${sayac3}`);
}