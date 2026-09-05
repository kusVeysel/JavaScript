//? Callback Yapısı
//* Callback: Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz

//? 1.Kullanım

// function getName(callback) {
//     setTimeout(() => {
//         console.log("Veysel");
//         callback();
//     }, 1000);
// }

// function getSurname() {
//     setTimeout(() => {
//         console.log("Kuş");
//     }, 500);
// }

// getName(getSurname);

//* callback = getSurname

//// getName();
//// getSurname();


//? 2.Kullanım

function getName(callback) {
    let name = "Veysel";
    setTimeout(() => {
        callback(name);
    }, 1000);
}

function getSurname(callback) {
    let surname = "Kuş";
    setTimeout(() => {
        callback(surname);
    }, 500);
}

getName((name) => {
    getSurname((surname) => {
        console.log(name, surname);
    })
})

// Hata-ilk callback geleneğidir: ilk parametre hata, ikinci parametre sonuçtur.
function getNumber(callback) {
    setTimeout(() => callback(null, 5), 300);
}

getNumber((error, number) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`Callback sonucu: ${number}`);
});