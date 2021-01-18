//OOP STUDY
/**
 * OOP stands for Object Oriented Program and has four pillars (Inheritance, Encapsulation, Abstraction and Polymorphism).
 * First, let's make a class that contains something.
*/
class Person {  //This class is called Person AND THIS IS THE PARENT
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() { //mix it with tenary and its pawsome!!
        console.log(`Hi, my name is ${this.name} (${this.age}, ${this.gender})`)
    }
}

//Let say we have three objects of people
let person1 = ('June', 34,'Female')

let person2 = {
    name: 'Arunika',
    age: 8,
    gender: 'Female'
}

let person3 = {
    name: 'Yoe',
    age: 26,
    gender: 'Male'
}

/**Inheritance
 * IS basically just copying from the parent class to the child class.
 * Cause we already have PARENT, we just need to make the child class to inherit the parent.
*/
class Adult extends Person {
    constructor(name, age, gender, isAdult) {
        super(name, age, gender) //call parent constructor
        this.isAdult = (this.age >= 20)

    }
    introduce() { //mix it with tenary and its pawsome!!
        console.log(`Hi, my name is ${this.name} (${this.age}, ${this.gender}) and I am ${this.isAdult ? ' an Adult' : ' a Child'}`)
    }
}

let adult1 = new Adult('Anika', 91, 'Female');
adult1.introduce()

/**Encapsulation
 * We can hide some shades here :) ((if u know what I mean)). Anyway, we can choose some property to hide.
 * There is something called VISIBILITY and it has three methods
 * 1. PUBLIC
 * This means all the properties are accessible just like the one we did in INHERITANCE. No shade and no secret.
 * 2. PROTECTED
 * 
 * 3. PRIVATE
 * THis means the properties can't be accessed outside the declaration
*/
//PRIVATE
class Human {

    // static isTalk = true;

    constructor(name, age, gender, isTalk) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isTalk = true;
    }

    // #doGossip = true;

}

class Adults extends Human {
    constructor(name, age, gender, isTalk, isAdult) {
        super(name, age, gender, isTalk); //call parent constructor
        this.isAdult = (this.age >= 20)

    }
    introduce() { //mix it with tenary and its pawsome!!
        console.log(`Hi, my name is ${this.name} (${this.age}, ${this.gender}).
        I am ${this.isAdult ? ' an Adult' : ' a Child'}.
        I am ${this.isTalk ? ' talk' : 'lip shut'}`
        )
    }
}

let adult2 = new Adults('Anika', 91, 'Female', false);
adult2.introduce();

/**Abstraction
 * This is the generalisation of an idea and its abstract(?)#notquiteundertandwhatitsmean
 * 
 */
class Jobseeker extends Person {
    constructor(name, age, gender, isAdult, status) {
        super(name, age, gender)
        this.isAdult = (this.age >= 20)
        this.status = this.isAdult;
    }

    introduce() {
        console.log(
            `Hi, my name is ${this.name}(${this.age}, ${this.gender}) and I am ${this.isAdult ? ' an Adult' : ' a Child'}
            I am ${this.status ? 'an Employee' : 'a Jobseeker'}
            `
        )
    }

    profesion() {
        if (this.status == true) {
            console.log('I am a programmer');
        } else {
            console.log('I am trying to get a job.')
        }
        
    }
}

let adult3 = new Jobseeker('Andika Kangen Band', 29, 'Male')
adult3.introduce('--ini introduce')
adult3.profesion('--ini proffesion')

/**Polymorphism
 * This class is a class that could have a lot of form of its child class. A bit different from its parent class.
 * Something called mix-ins used in this pillar.
*/
//lets make four type of jobs
const PublicServer = Base => class extends Base {
    save() {
        console.log('Thanks for saving me.');
    }
}

const Military = Base => class extends Base {
    shoot() {
        console.log('DOR!!');
    }
    agent() {
        console.log('I am here to get information.')
    }
}

const School = Base => class extends Base {
    teach() {
        console.log('Dont forget your homework and stay safe.');
    }
}

const Music = Base => class extends Base {
    got7() {
        console.log('Come and get it! GOT7!');
    }
}

//then we make the child class

class Doctor extends PublicServer(Military(Person)) {

    // static workplace = 'Hospital';

    constructor(name, age, gender) {
        super(name, age, gender)
    }
    work() {
        super.introduce()
        super.shoot()
        super.save()
    }
}

class Spy extends Music(Military(Person)) {

    // static workplace = 'Hospital';

    constructor(name, age, gender) {
        super(name, age, gender)
    }
    work() {
        super.got7()
        super.introduce()
        super.agent()

    }
}

let adult4 = new Doctor('Karin', 29, 'Female')
adult4.work()

let adult5 = new Spy('Jack', 27, 'Male')
adult5.work()
