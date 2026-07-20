let urunler = [
    {
        id: 1,
        isim: "ACER Swift",
        kategori: "Teknoloji",
        fiyat: 6.219
    },
    {
        id: 2,
        isim: "ACER Nitro 5",
        kategori: "Teknoloji",
        fiyat: 15.475
    },
    {
        id: 3,
        isim: "ACER Gaming",
        kategori: "Teknoloji",
        fiyat: 13.999
    },
    {
        id: 4,
        isim: "LENOVO V15",
        kategori: "Tekmoloji",
        fiyat: 10.999
    },
    {
        id: 5,
        isim: "LENOVO Idepad",
        kategori: "Teknoloji",
        fiyat: 4.510
    },
    {
        id: 6,
        isim: "LENOVO V14",
        kategori: "Teknoloji",
        fiyat: 4.399
    }
]

let kullaniciUrunIsmi = prompt("Bir Ürün İsmi Giriniz").toUpperCase();
FiltreliUrunleriDoldur(urunler);


function FiltreliUrunleriDoldur(urunler) {
    let filtreliUrunler = [];
    urunler.forEach((urun) => {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi)) {
            filtreliUrunler.push(urun);
        }
    });
    if (filtreliUrunler.length > 0) {
        FiltreliUrunleriYazdir(filtreliUrunler);
    }
    else {
        alert("Girdiğiniz Ürüne Ait Bilgi Bulunmamaktadır");
    }
}

function FiltreliUrunleriYazdir(urunler) {
    urunler.forEach((urun) => {
        console.log("-------------------------------------------");
        console.log(`| ${urun.isim} | ${urun.kategori} | ${urun.fiyat}₺`);
        console.log("-------------------------------------------");
    });
}
