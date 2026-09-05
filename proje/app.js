let giriscontrol = (kullaniciadi, sifre) => {

    let has = false;

    if (kullaniciadi.trim() === "" && sifre.trim() === "") {
        toastr.warning("Kullanıcı adı ve şifre giriniz");
        return;
    }
    else if (sifre.trim() === "") {
        toastr.warning("Şifre giriniz");
        return;
    }
    else if (kullaniciadi.trim() === "") {
        toastr.warning("Kullanıcı adı giriniz");
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

class Kullanici {
    constructor(id, name, surname, username, password, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}

let kayitol = () => {
    let name = document.getElementById("isim");
    let surname = document.getElementById("soyisim");
    let username = document.getElementById("kullaniciadi");
    let password = document.getElementById("sifre");
    let email = document.getElementById("email");
    let phone = document.getElementById("telefon");
    let gec = 0;

    const kayit = [name, surname, username, password, email, phone];

    kayit.forEach((item) => {
        if (item.value.trim() === "") {
            toastr.warning(item.getAttribute("data-uyari"));
            item.style.setProperty("border", "2px solid red", "important");
        }
        else {
            item.style.setProperty("border", "2px solid green", "important");
            gec++;
        }
    });

    if (gec == 6) {
        gec = 0;

        const yeniKullanici = new Kullanici(localStorage.length + 1, name.value, surname.value, username.value, password.value, email.value, phone.value);

        localStorage.setItem(`kullanici${yeniKullanici.id}`, JSON.stringify(yeniKullanici));
        toastr.success("Kayıt başarılı");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }
};