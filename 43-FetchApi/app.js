//? FETCH APİ

// // ajax 

const getStudents = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`İstek başarısız oldu: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}
getStudents("students.json");

// fetch, 404/500 gibi HTTP hatalarında kendiliğinden reject olmaz;
// bu yüzden response.ok kontrolü yukarıdaki zincirde özellikle yapılır.
