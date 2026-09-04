//? This-Super-Super() 
/*
* This: Üzerinde olan sınıfı işaret eder (Gösterir), Property tanımlamak için kullanılır
* Super: Kalıtım aldığı sınıfı işaret eder (Gösterir), Kalıtım alınan sınıftan bir şeye(property, fonksiyon,vs.) ulaşmak için kullanılır
* Super(): Kalıtım aldığı sınıfın constructor'ını işaret eder (Gösterir)
* extends: Kalıtım almak için kullanılır
*/


class Person {

    constructor(firstname, lastname, salary) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
    // write() {
    //     console.log(this.firstname);
    // }
    writeInfo() {
        console.log(this.firstname, this.lastname, this.salary);
    }
}


class Student extends Person {

    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary); // Kalıtım alınan sınıfa yollandı
        this.school = "JavaScript Akademisi"; // Alt sınıfa özel property
    }

    write() {
        console.log(this.school);
        super.writeInfo(); // Üst sınıfın aynı isimli metodunu çağırır.
    }

    // write() {
    //     super.write();
    // }
}

// const student1 = new Student();
// student1.write();

const student1 = new Student("Veysel", "Kuş", 20000);
student1.write();
