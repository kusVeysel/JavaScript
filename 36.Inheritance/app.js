//? İnheritance (Miras Alma)

class Person {
    firstname = "Veysel";
    write() {
        console.log("Person Sınıfı:" + this.firstname);
    }
}

class Student extends Person {// Person sınıfını miras alır

    write() {
        console.log("Person Sınıfından Miras Geldi: " + this.firstname);
        console.log(super.write()); //! super: ÜSt(miras alınan) sınıfa gider(orayı esas alır)
    }

}
const student1 = new Student();
student1.write();



