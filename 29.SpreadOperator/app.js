//? Spread Operatörü   ...

const add = (a,b,c,d)=>{
    console.log(a+b+c+d);
}

// add(10,20,30,40);

let numbers = [10,20,30,40];

add(...numbers);



const diller1 = ["Python","Java"];
const diler2 = ["C#","C++"];
const diller3 = [...diller1, ...diler2];

console.log(diller3);



const sayilar = [1,2,3,4,5,6,7,8,9];

let [a,b,...kalansayilar] = sayilar;
console.log(a,b,kalansayilar);



const array1 = ["Elma","Armut","Muz","Kiraz"];
let array2 = [];

array2.push(...array1);
console.log(array2);


