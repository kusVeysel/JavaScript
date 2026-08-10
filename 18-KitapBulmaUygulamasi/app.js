let bookTableBody = document.getElementById("bookTableBody");
let kitaptut = [];


const kitapbul = kitapisim => {

    if (kitapisim.trim() === "") {
        alert("Lütfen aramak istediğiniz kitap adını giriniz!");
        return;
    }

    kitaplar.forEach((kitap) => {
        if (kitap.isim.toLocaleLowerCase().includes(kitapisim.toLocaleLowerCase())) {
            kitaptut.push(kitap);
        }
    });


    if (kitaptut.length > 0) {
        bookTableBody.innerHTML = "";
        kitaptut.forEach((kitap) => {
            bookTableBody.innerHTML += `
            <tr>
                <td hidden>${kitap.id}</td>
                <td>${kitap.isim}</td>
                <td>${kitap.yazar}</td>
                <td>${kitap.fiyat} ₺</td>   
            </tr>
        `;
        })
    }

    if (kitaptut.length == 0) {
        alert("Aradığınız kitap bulunamadı");
    }
    
    document.getElementById("ara").value = "";
    kitaptut.splice(0);
};

document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        kitapbul(document.getElementById('ara').value);
    }
})
