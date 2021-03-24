// in most situation you want to match your variable same as the the package is called. Use the underscore for use of the package
const _ = require ("lodash");

// method, generator random is easier to use in js.
let jsRandom = Math.floor((Math.random() * 100)+ 1);

// give you a random number between 1 to 100. Interger or floating point
let _Random = _.random(1, 100);

// for fast no mamory is not recommended for fast.
let combinedArray = _.concat([1, 2, 3], [4, 5,6]);
// let combinedArray = [1, 2, 3] + [4, 5, 6];

console.log(combinedArray);


// You only learn predefined code when you are learning how to use it. Later one, you can learn how javascript really works. If you want to be a javascript engineer or programer learn how to javascript is writing in detail. lodash is optional, but it is an example of package. 