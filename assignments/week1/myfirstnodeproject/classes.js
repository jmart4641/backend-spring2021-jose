

// Normal objects looks like this
let handmadeObject = {
    firstName: "Jose",
    lastName: "Martinez",
    position: "Tutor",
    location: "Los Angeles",
    active: true,
    doWork : function() {
        console.log(this.firstName + " is now working.")
    }
};

//Object in classes, describe of object. 
//Syntax Class Name {}
// function definition, always needs constructor. This is the factory for objects. 
// This keyboard refers to the key object you selected.

//ClASS definition is the blue print of everyobjects you build.
class Employee {
    //Here we are building the objects
    //What values they hold.
    // firstName is a parameter without a dot. with do is a property.
    constructor (firstName, lastName, position, workPlace,){
        console.log("New Object");
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.location = workPlace;
        this.active = false;
        this.checkValue();
        // this.created();
    }
    
    //Static method
    checkValue() {
        if (!(typeof this.active === "boolean")){
            console.log("This object has an improper active value!");
        }
    }


    // created (){
    //     console.log("A new object is born!");}

    //method becuase 
    // And what actions can be done.

    doWork(hours) {
        console.log(` ${this.firstName} works for ${hours} hours.`);
        // console.log(this.firstName +" Works for " + hours + " hours."); }
    }
    goToSleep(hours){

        //This is easier to read. Double quote is faster that the string literal because there are extra step for the computer take.

        console.log(`${this.firstName} goes to sleep for ${hours} hours.`);

    //     console.log(this.firstName + " goes to sleep for " +hours +" hours.")
    // 
    }
}

//method is a function that belongs to an objects.

//Fuction definition can be treated as 

// function aFunction (){
//  aFunction();
// };

//console is class and log is the method
// console .log();
// Math.random();
// Array.isArray();

let myFirstFactoryObject = new Employee("Jose", "Martinez","Tutor", "Think Together");

let secondEmployee = new Employee("Cool", "Juan", "clerk", "Chase");


secondEmployee.lastName = "Johson";
secondEmployee.firstName = "Cool";
// secondEmployee.nonExistingProperty = 10;


myFirstFactoryObject.doWork(23);
secondEmployee.doWork(1);

// console.log(myFirstFactoryObject);
// console.log(secondEmployee);
handmadeObject.doWork();


let thirdEmployee = new Employee( "Samantha","Young", "Tech","Supervisor", "CCC");
thirdEmployee.doWork(14);

//Input
secondEmployee.goToSleep(2);

secondEmployee.checkValue();

//Methods are used 



// Funtions


//String literal
let myNumber = 100;

let myString = "idsdhaih" + myNumber + "oaishahoahd";
//How can we make a list with string. Normal string we cant
// let myMultilineString = "jisahsodhosdhsiohf
// dshihsihfihf
// sihfhis
// shfihfi
// ";

//String litterals but we need back ticks ``. We are bringing up js code. String intrupulation-variable substitution, variable explansion. Evaluatin(running) the line.
// Intrupulation Syntax is ${} do some js coding in this
// JQuery $()

let myStringLiteral = `Hello my name is  ${thirdEmployee.firstName },  How are you doing today ${ 500}?`;

console.log(myStringLiteral);

console.log(myFirstFactoryObject, secondEmployee,thirdEmployee);
// How can we give these to data they need.
//Providing values - thrught parameter