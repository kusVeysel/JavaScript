//? İnput Eventleri

/*
* focus: inputa tıklanıldığında çalışır 
* blur: antifocus
* copy: input içindeki bir veri copyalandığında çalışır(ctrl + C dahil)
* paste: input içine bir veri yapıştırıldığında çalışır(ctrl + V dahil)
* cut: input içindeki bir veri kesildiğinde çalışır(ctrl + X dahil)
* select: input içindeki bir veri seçildiğinde çalışır(shift + sağ/sol ok tuşları ve ctrl + A dahil)
*/

let input = document.getElementById("inp");

input.addEventListener('select', (e) => {
    console.log(e.type);
})