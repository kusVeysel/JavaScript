//? Klavye Eventleri

document.addEventListener('keydown', (e) => {
    console.log(e.key); // Basılan tuşun karakteri veya adı (Enter gibi)
    console.log(e.code); // Fiziksel tuşun adı (KeyA, ArrowUp gibi)
    console.log(e.ctrlKey, e.shiftKey, e.altKey); // Modifier tuşları
})

//* keypress artık önerilmez; keydown ve keyup tercih edilir.
//* keydown: klavyeden basılan her şeyi okur
//* keyup: tuştan elini kaldırdığında çalışır
