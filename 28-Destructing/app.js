//? Destructuring (parçalayarak atama) kullanımı

let langs = ["C#", "C++", "JavaScript", "Python"];

// let lang1, lang2, lang3, lang4;
// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

let [lang1, lang2, lang3, lang4] = langs;

console.log(lang1, lang2, lang3, lang4);

const person = {
    firstName: "Veysel",
    lastName: "Kuş",
    country: "Turkey",
    age: 18
}

let { firstName, lastName, country, age } = person;

console.log(firstName, lastName, country, age);

let { firstName: isim, lastName: soyisim, country: ulke, age: yas } = person;
console.log(isim, soyisim, ulke, yas);
