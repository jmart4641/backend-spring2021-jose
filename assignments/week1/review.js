// Variables are used too hold data.
var myFirstVariable = "Hello World";

//two variable types, const and let.
let myFirstVariable = null; // we used to this to avoid scopes(global or local)

// A variable that doesn't change once you have assigned a value. It cannot change it. You cannot reassigned constant.
const myFirstVariable = null; // value does no change, if a line does not change, we used this. it is good to use const when you know the value won't change.
 
myFirstVariable = 10;

// I cannot write the following line as it will break the script. Constant variable can only be assigned once.
//myFirstVariable = 9;

1000;
"1000 Is a number";
'<p>This looks like HTML, but it is just a string to JavaScript</p>';
true;
false;

// Array & Objects
// Arrays are objects, BUT objects are not arrays!
// This is the most common way to create an array, but there are two way to write arrays.
let myArray = []; // empty array.
let myArray = new Array (10); //This one will put it 10 undandetified obejcts. classes

myArray[0] = "hello";
myArray[1000] = "goodbye";
 
// Null intentionally empty or place holder
// If there is not value the result will be undefined. Undefined is a red flag whcih means not good.

//Properties are blank for objects.
let myObject = {};
let myObject2 = new Object(); //This is the most genereic object in javascript

// Comparison Operators
// == checking the values if the are not the same. Compares and coerces values if different datypes
// === in this class we are using treple equals. We do not want javascript to convert a number to a string. Instead of the computer crashing, is the the least of what you want. Do not use double equals. Compare values AND DataTypes.
// < or <=
//> or >=
//!= (means that two variable are being checked for both their value and their ty value type, Not equal) or !== (not equal value or equal type)
// !(flits values and works only with boolens) or !==(this compares things)

//Mathematicaal Operators
// +, -, /, *. %(modulo)

//Logical operators
// &&, ||, 
// If Statements,
if(false){}

if (false) {} else{}

// The else if will only run if the Previous conditions was false
if (false) {} else if(false) {}


//Both going to run. All individual questions.
// Both if statement will run regardless of eachother's condition. 
if (false) {} 
if (false) {}

// In this example the 3 one will be executed.
if (false) {} else if (false) {} else {}

//Loops 

while(false) {};

// the most common main loop
// Similar as an if statement but once done runs it again if the condition is true.
do {} while (false); //Runs the program first then asks if it can be run more. It runs once at least.

// Short hand for while.
for (let i = 0; i < 10; i++) {};

// Fuctions
let actualPINumber = Math.PI;

// We are going to use a lot of fuctions
//Fundamentals of fuction
//fuction definition-holds instructions inside of a code block.
 
function myFunction() {

}

//call a function and store 
myFunction();

//passing variable around.
let a =1;
let b = a;
let c = b;
let d = c;

var z = myFunction
var y = z;
var x = y;

// Test if we can pass fuction definitions when we use "Traditional" fuction definition.
x();

//ECMAScript, is non excitant programming language.

//Arguments, Parameters, and return

// The most important thing how fuction accepts fuctions and returns.

//Parameter- variable only excists when this function runs.

function myFunction2(myFirstParameter) {

    myFirstParameter;

    //Store
    // returns from your function calls
     return null; //One value can be return only, if you ever want to return many values you could use an object or array.

}

//return null; 
myFunction2("Hello World");
myFunction2("Goodbye world!");


// express for server.
// when you installed use the LTS which is the long support which is a production development to your client.  Long term support.