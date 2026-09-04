//? İnheritance (Miras Alma)

class Person {
    firstname = "Veysel";

    write() {
        console.log("Person Sınıfı:", this.firstname);
    }
}

class Student extends Person { // Person sınıfını miras alır

    write() {
        console.log("Person Sınıfından Miras Geldi: " + this.firstname);
        super.write(); //! super: üst (miras alınan) sınıfa gider.
    }
}

const student1 = new Student();
student1.write();

// Alt sınıf kendi property ve davranışlarını da ekleyebilir.
class GraduateStudent extends Student {
    constructor(firstname, department) {
        super();
        this.department = department;
        this.firstname = firstname;
    }

    describe() {
        console.log(`${this.firstname} - ${this.department}`);
    }
}

new GraduateStudent("Ayşe", "Bilgisayar").describe();
