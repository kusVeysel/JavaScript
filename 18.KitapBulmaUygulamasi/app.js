let bookTableBody = document.getElementById("bookTableBody");
let kitaptut = [];
let say = false;


const kitapbul = kitapisim => {
    bookTableBody.innerHTML = "";

    if (kitapisim.trim() === "") {
        alert("Lütfen aramak istediğiniz kitap adını giriniz!");
        return;
    }

    kitaplar.forEach((kitap) => {
        if (kitap.isim.toLocaleLowerCase().includes(kitapisim.toLocaleLowerCase())) {

            if (!bookTableBody.innerHTML.includes(kitap.id)) {
                kitaptut.push(kitap);
            }
            else {
                if (kitaptut.length === 0) {
                    say = true;
                }
            }
        }
    });

    if (say === true) {
        alert("Aradığınız Kitap Zaten Listede Bulunmaktadır");
    }

    if (kitaptut.length > 0) {
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

    kitaptut.splice(0);
};

document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        kitapbul(document.getElementById('ara').value);
    }
})
