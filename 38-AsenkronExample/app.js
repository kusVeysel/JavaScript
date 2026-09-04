//? Asenkron Problemi

//* Http istekleri
const users = [
    {
        userId: 5,
        post: "Veysel Pos1"
    },
    {
        userId: 5,
        post: "Veysel Pos2"
    },
    {
        userId: 5,
        post: "Veysel Pos3"
    },
    {
        userId: 6,
        post: "Veysel Pos1"
    },
    {
        userId: 7,
        post: "Veysel Pos1"
    }
]

function getUserId() {
    setTimeout(() => {
        return 5;
    }, 1000);
}

function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId == userId) {
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId);

//! consol bir şey yazmaz , çünkü settimeout asenkron çalışır , 43.satır çalışır fonksiyona gider ,içindeki settimeout çalışır çalışırken de bir alttaki kod (44.satır) çalışır(çünkü asenkron) ama settimeout dolmadı bir şey dönmedi , 44.satır çalışıp fonksiyona gider ve yapı çalışır aslında ama yapı undefined dolayısıyla sonuç vermez

//? Asenkronu Senkrona çevirmek için şu yapılar kullanılır:
//* callback
//* promise
//* async-await
