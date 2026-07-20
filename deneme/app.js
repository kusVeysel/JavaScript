let giriscontrol = (kullaniciadi, sifre) => {

    if (kullaniciadi.trim() === "") {
        toastr.warning("Kullanıcı adı giriniz");
        return;
    }
    if (sifre.trim() === "") {
        toastr.warning("Şifre giriniz");
        return;
    }

    kullanicilar.forEach((kullanici) => {
        if (kullanici.username === kullaniciadi && kullanici.password === sifre) {
            toastr.success("Giriş başarılı");
            document.getElementById("kullaniciadi").style.setProperty("border", "2px solid green", "important");
            document.getElementById("sifre").style.setProperty("border", "2px solid green", "important");
            document.getElementsByTagName("label")[0].style.setProperty("color", "green", "important");
            document.getElementsByTagName("label")[1].style.setProperty("color", "green", "important");
            setTimeout(() => {
                window.location.href = "Anasayfa.html";
            }, 1000);
        } else {
            toastr.error("Kullanıcı adı veya şifre hatalı");
            document.getElementById("kullaniciadi").style.setProperty("border", "2px solid red", "important");
            document.getElementById("sifre").style.setProperty("border", "2px solid red", "important");
            document.getElementsByTagName("label")[0].style.setProperty("color", "red", "important");
            document.getElementsByTagName("label")[1].style.setProperty("color", "red", "important");
        }
    });
};

let kayitol = () => {
    let name = document.getElementById("isim").value;
    let surname = document.getElementById("soyisim").value;
    let username = document.getElementById("kullaniciadi").value;
    let password = document.getElementById("sifre").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("telefon").value;

    if (name.trim() === "") {
        toastr.warning("Adınızı giriniz");
        return;
    }
    if (surname.trim() === "") {
        toastr.warning("Soyadınızı giriniz");
        return;
    }
    if (username.trim() === "") {
        toastr.warning("Kullanıcı adınızı giriniz");
        return;
    }
    if (password.trim() === "") {
        toastr.warning("Şifrenizi giriniz");
        return;
    }
    if (email.trim() === "") {
        toastr.warning("Emailinizi giriniz");
        return;
    }
    if (phone.trim() === "") {
        toastr.warning("Telefon numaranızı giriniz");
        return;
    }

    let yeniKullanici = {
        id: kullanicilar.length + 1,
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email,
        phone: phone
    };

    kullanicilar.push(yeniKullanici);
    toastr.success("Kayıt başarılı");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
};
