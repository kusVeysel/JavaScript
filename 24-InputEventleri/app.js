//? İnput Eventleri
/*
* focus: inputa tıklanıldığında çalışır 
* blur: input odağını kaybettiğinde çalışır, antifocus gibi
* copy: input içindeki bir veri copyalandığında çalışır(ctrl + C dahil)
* paste: input içine bir veri yapıştırıldığında çalışır(ctrl + V dahil)
* cut: input içindeki bir veri kesildiğinde çalışır(ctrl + X dahil)
* select: input içindeki bir veri seçildiğinde çalışır(shift + sağ/sol ok tuşları ve ctrl + A dahil)
*/

let input = document.getElementById("inp");

let a =["focus", "blur", "copy", "paste", "cut", "select"]
a.forEach((eventName) => {
    input.addEventListener(eventName, (e) => {
        console.log(`${e.type}: ${e.target.value}`);
    });
});