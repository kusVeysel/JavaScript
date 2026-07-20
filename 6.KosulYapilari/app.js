//? Koşul Yapıları
//* if - else if - else

let not = Number(prompt("Notunuz:"));

if (not > 60) {
    console.log("AA ile geçtiniz ,notunuz: " + not);
}
else if (not >= 50 && not <= 60) {
    console.log("CC ile koşullu geçtiniz ,notunuz: " + not);
}
else if (not < 50) {
    console.log("FF ile kaldınız ,notunuz: " + not);
}