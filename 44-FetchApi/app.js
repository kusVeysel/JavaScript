//? FETCH APİ

// // ajax 

const getStudents = (url) => {
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getStudents("students.json");
