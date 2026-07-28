//? Promiseler

/*
* 1-pending: işleme(bekleme)
* 2-fullfiiled(resolve): işlem başarılı(veri alındı) , then() ile yakalanır
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
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    try {
                        const students = JSON.parse(xhr.responseText);
                        resolve(students);
                    } catch (error) {
                        console.log("Jsonda problem var " + error);
                        reject(error); 
                    }
                }
            });
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    });
}

readStudents("students.json")
    .then((data) => { console.log(data); })
    .catch((err) => { console.log(err); })

