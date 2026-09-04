//? Promise
/*
* 1-pending: işleme(bekleme)
* 2-fulfilled(resolve): işlem başarılı(veri alındı) , then() ile yakalanır
* 3-rejected: işlem reddedildi , catch() ile yakalanır
*/

// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if(check){
//         resolve("Promise Başarılı");
//     }
//     else{
//         reject("Promise Başarısız");
//     }

// });

// console.log(promise1);


// let check = true;
// function createPromise() {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promise'te herhangi bir sıkıntı yok");
//         }
//         else {
//             reject("Promise'te sıkıntı var");
//         }
//     })
// }

// createPromise()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Her zaman çalışır");
//     })


//? PROMİSE + XMLHTTPREQUEST

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                try {
                    const students = JSON.parse(xhr.responseText);
                    resolve(students);
                } catch (error) {
                    reject(error);
                }
            }
            else if (xhr.readyState === 4) {
                reject(new Error(`İstek başarısız oldu: ${xhr.status}`));
            }
        });
        xhr.addEventListener("error", () => reject(new Error("Ağ hatası oluştu")));

        try {
            xhr.open("GET", url);
            xhr.send();
        }
        catch (error) {
            reject(error);
        }
    });
}

readStudents("students.json")
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err); })
    .finally(() => { console.log("İstek tamamlandı"); });
