let giriscontrol = (kullaniciadi, sifre) => {

    let has = false;

    if (kullaniciadi.trim() === "") {
        toastr.warning("Kullanıcı adı giriniz");
        return;
    }
    else if (sifre.trim() === "") {
        toastr.warning("Şifre giriniz");
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const values = JSON.parse(localStorage.getItem(key));
        if (values.username === kullaniciadi && values.password === sifre) {
            has = true
        }
    }

    if (has) {
        toastr.success("Giriş başarılı");
        document.getElementById("kullaniciadi").style.setProperty("border", "2px solid green", "important");
        document.getElementById("sifre").style.setProperty("border", "2px solid green", "important");
        document.getElementsByTagName("label")[0].style.setProperty("color", "green", "important");
        document.getElementsByTagName("label")[1].style.setProperty("color", "green", "important");
        setTimeout(() => {
            window.location.replace("Anasayfa.html");
        }, 1000);
    }
    else {
        toastr.error("Kullanıcı adı veya şifre hatalı");
        document.getElementById("kullaniciadi").style.setProperty("border", "2px solid red", "important");
        document.getElementById("sifre").style.setProperty("border", "2px solid red", "important");
        document.getElementsByTagName("label")[0].style.setProperty("color", "red", "important");
        document.getElementsByTagName("label")[1].style.setProperty("color", "red", "important");
    }
};

let kayitol = () => {
    let name = document.getElementById("isim");
    let surname = document.getElementById("soyisim");
    let username = document.getElementById("kullaniciadi");
    let password = document.getElementById("sifre");
    let email = document.getElementById("email");
    let phone = document.getElementById("telefon");
    let gec = 0;

    if (name.value.trim() === "") {
        toastr.warning("Adınızı giriniz");
        name.style.setProperty("border", "2px solid red", "important");
    }
    else {
        name.style.setProperty("border", "2px solid green", "important");
        gec++;
    }
    if (surname.value.trim() === "") {
        toastr.warning("Soyadınızı giriniz");
        surname.style.setProperty("border", "2px solid red", "important");
    }
    else {
        surname.style.setProperty("border", "2px solid green", "important");
        gec++;
    }
    if (username.value.trim() === "") {
        toastr.warning("Kullanıcı adınızı giriniz");
        username.style.setProperty("border", "2px solid red", "important");
    }
    else {
        username.style.setProperty("border", "2px solid green", "important");
        gec++;
    }
    if (password.value.trim() === "") {
        toastr.warning("Şifrenizi giriniz");
        password.style.setProperty("border", "2px solid red", "important");
    }
    else {
        password.style.setProperty("border", "2px solid green", "important");
        gec++;
    }
    if (phone.value.trim() === "") {
        toastr.warning("Telefon numaranızı giriniz");
        phone.style.setProperty("border", "2px solid red", "important");
    }
    else {
        phone.style.setProperty("border", "2px solid green", "important");
        gec++;
    }
    if (email.value.trim() === "") {
        toastr.warning("Emailinizi giriniz");
        email.style.setProperty("border", "2px solid red", "important");
    }
    else {
        email.style.setProperty("border", "2px solid green", "important");
        gec++;
    }

    if (gec == 6) {
        gec = 0;

        let yeniKullanici = {
            id: localStorage.length + 1,
            name: name.value,
            surname: surname.value,
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value
        };

        localStorage.setItem(`kullanici${yeniKullanici.id}`, JSON.stringify(yeniKullanici));
        toastr.success("Kayıt başarılı");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }
};