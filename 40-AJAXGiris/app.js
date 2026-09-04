//? AJAX Giriş
/*
* status:
* 200 → OK
* 403 → Forbidden
* 404 → Page not Found

* readyState:
* 0: request not initalized
* 1: server connection established
* 2: request recevied
* 3: processing request
* 4: request finished and response is ready

* responseText: readyState'ten cevabı alabilmek için

* onreadystatechange: readyState değiştiğinde bir şeyler yapmak için kullanılır
*/

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    console.log(`readyState: ${xhr.readyState}`);
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.responseText);
        }
        else {
            console.error(`İstek başarısız: ${xhr.status}`);
        }
    }
};
xhr.open("GET", "../42-Promise/students.json");
xhr.send();
