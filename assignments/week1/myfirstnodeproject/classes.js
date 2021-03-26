const { overSome, max } = require("lodash");


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
        this.energyHours = 16; //Hours of energy.
        this.checkValue();
        // this.created();
        this.sayHello();
    }
    
    //Static method, no objects in that class. Small book of functions
    checkValue() {
        if (!(typeof this.active === "boolean")){
            console.log("This object has an improper active property value!");
        }
        if (this.energyHours < 0) {
            this.energyHours = 0;
        } else if (this.energyHours > 24){
            this.energyHours = 24;
        }
    }

     sayHello( ) {
         console.log(`Hello! My name is ${this.firstName} I work as a ${this.position} at ${this.location} How are you doing today?`);
     }
    // created (){
    //     console.log("A new object is born!");}

    //method becuase 
    // And what actions can be done.

    doWork(hours) {

        if (!(Number.isNaN(parseInt(hours)))) {
            hours = parseInt(hours);
        } else

        // console.log (typeof hours);
        if (typeof hours != "number") {
            console.log("The value for hours is not valid! Can't assign work.");
            return;
         } //kills this method
        // } else if (hours === "one"){
        //     hour = 1;
        // } text 

        if (this.energyHours - hours < 0) {
             console.log(`${this.firstName} does not have that much energy! They will for ${this.energyHours} hours instead.`);
            
             hours = this.energyHours;
             this.energyHours = 0;

            //console.log("THis employee can't work for this man hours at the moment");
            // return // One the return key is that it stops the running. end method early
        } else { 
             // this.energyHours -= hours; same as the line below
            this.energyHours = this.energyHours - hours;
        }
      
        
        console.log(` ${this.firstName} works for ${hours} hours. They Have ${this.energyHours} hours left of energy`);
        // console.log(this.firstName +" Works for " + hours + " hours."); }
    }
    goToSleep(hours){
        if (!(Number.isNaN(parseInt(hours)))) {
            hours = parseInt(hours);
        } else

        // console.log (typeof hours);
        if (typeof hours != "number") {
            console.log("The value for hours is not valid! Can't assign work.");
            return;
         }  


         if (hours + this.energyHours >24) {

            let maxSleepHours = 24 - this.energyHours;
             console.log(`${this.firstName} does not need to sleep for that long! They will sleep for instead ${maxSleepHours} hours`);
             
             hours = maxSleepHours;
         }

        //This is easier to read. Double quote is faster that the string literal because there are extra step for the computer take.
        this.energyHours = this.energyHours + hours;
        console.log(`${this.firstName} goes to sleep for ${hours} hours. They have ${this.energyHours} hours left of energy.`);

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

