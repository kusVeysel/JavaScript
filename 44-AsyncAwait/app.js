//? ASYNC AWAİT
//* Promise işlemlerini senkron görünümlü ve okunabilir biçimde yazmayı sağlar.

//// Colback
//// Promise

// async function hello() {
//     return "Hello World";    
// }
// console.log(hello());

// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) =>console.log(comments))
//     })

// })

document.querySelector("#button").addEventListener("click", async () => {
    try {
        const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!responsePost.ok) throw new Error(`Gönderi alınamadı: ${responsePost.status}`);
        const post = await responsePost.json();
        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        if (!responseComments.ok) throw new Error(`Yorumlar alınamadı: ${responseComments.status}`);
        const comments = await responseComments.json();
        console.log(comments);
        console.log(responsePost);
    }
    catch (error) {
        console.error("İstek sırasında hata oluştu:", error);
    }
    finally {
        console.log("İşlem tamamlandı");
    }
});


// document.querySelector("#button").addEventListener("click", async () => {
//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
//     console.log(post, comments);
// });