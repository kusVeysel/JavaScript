//? AJAX

function prepareURL(url, id) {
    if (id == null || id === "") {
        return url;
    }
    else {
        return `${url}?postId=${id}`
    }
}

function getComments(url, id) {
    let newURL = prepareURL(url, id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                console.log(JSON.parse(xhr.responseText));
            }
            catch (error) {
                console.error("JSON okunamadı:", error);
            }
        }
        else if (xhr.readyState === 4) {
            console.error(`İstek başarısız: ${xhr.status}`);
        }
    })
    xhr.addEventListener("error", () => console.error("Ağ hatası oluştu"));
    xhr.open("GET", newURL);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments", null);
