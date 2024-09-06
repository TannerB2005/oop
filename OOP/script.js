console.groupCollapsed("Exercise 1")
const user = {
    firstName: "John",
    lastName: "Matter",
    fullName: function () {

        const arrowFunction = () => {
            console.log(this)
            console.log(this.firstName + " " + this.lastName)
        }

        arrowFunction();
    }
}

user.fullName();
//Arrow scopes do not have their own scope, it inherits the nearest regular function. When there is no regular scope, it inherits the global scope
console.groupEnd();

console.groupCollapsed("Exercise 2, 3, 4, & 5")
class Person {
    constructor(name, age,) {
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.age
    }

    set age(value) {
        if (value < 21) {
            alert(`${this.name} is under 21.`) //This evaluates both ages and finds that John is under the age of 21
            return;
        }
    }
    greet(phrase) {
        console.log(`${this.name} says: "${phrase}`)
    }
}
const johnSterry = new Person("John Sterry", 19); //When changing this to a negative value, it gives you a RangeError with the maximum call stack size.
console.log(johnSterry)
johnSterry.greet("Hello my name is John!");

const paigeTerry = new Person("Paige Terry", 22);
console.log(paigeTerry)
paigeTerry.greet("You can call me Paige!");
// When using info() on inside the constructor it shows the return statement on a seperate line, when you use the info() method outside of class Person the method info() returns within the constructor, along with your other class values.
console.groupEnd();

console.groupCollapsed("Exercise 7")

class Student {
    constructor(alias, grades) {
        this.alias = alias;
        this.grades = [];
    }


    addGrade(grade) {
        this.grades.push(grade);
    }

    computeAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}
const joe = new Student("Joe", 98);

const hope = new Student("Hope", 78); // Grade before adding new work

joe.addGrade(89);
joe.addGrade(91);
joe.addGrade(98);

hope.addGrade(70); // New grades added
hope.addGrade(69);
hope.addGrade(90);

console.log(joe.alias, joe.computeAverage());
console.log(hope.alias, hope.computeAverage()); // This adds and averages the new grades recieved

console.groupEnd();