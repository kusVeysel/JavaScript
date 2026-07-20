//? Collback Yapısı
//? Collback: Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz

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

//* callback=getSurname

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

getName((name)=>{
    getSurname((surname)=>{
        console.log(name ,surname);
    })
})