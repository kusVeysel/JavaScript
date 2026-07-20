//? This-Super-Super() 
/*
* This: Üzerinde olan sınıfı işaret eder (Gösterir)
* Super: Kalıtım aldığı sınıfı işaret eder (Gösterir)
* Super(): Kalıtım aldığı sınıfın constructor'ını işaret eder (Gösterir)
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
        super(firstname, lastname, salary);
    }

    write() {
        super.writeInfo();
    }

    // write() {
    //     super.write();
    // }
}

// const student1 = new Student();
// student1.write();

const student1 = new Student("Veysel", "Kuş", 20000);
student1.writeInfo();
