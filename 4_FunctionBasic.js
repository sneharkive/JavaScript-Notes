//since Hoisting applies to variable declarations and to function declarations.
//so, JavaScript functions can be called before they are declared:
//but Functions defined using an expression are not hoisted.
let value4 = sum (3, 4)  //return 7
console.log(value4);


//Function Declarations
function sum (a, b){ 
    return a + b
}

let value1 = sum (3, 5)  //return 8
let value2 = sum ()  //return NaN
let value3 = sum //return function object

console.table(value1,"    ", value2, "    ", value3)

function myIntro(username = 'Procodrr') { // here Procodrr is a default value
    // console.log(`Hi, I am ${username || 'Procodrr'}.`); //this is an another way to set default values

    console.log(`Hi, I am ${username}.`);
    console.log('I am a Web Developer.');
}

myIntro()  //Default value will be printed
myIntro('Sneha Roy')


//Function Expressions
const multiplication = function (a, b){return a * b}; 
//also an anonymous function since the function has no name
//Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
//but Functions defined using an expression are not hoisted.
//After a function expression has been stored in a variable, the variable can be used as a function:
let z = multiplication(4, 3) //here Functions Used as Values
console.log(z);
let y = multiplication(3, 3) * 2 //functions can be used in expressions:
console.log(y);


//Self-Invoking Functions 

(function (a) {
    let selfInvoking = 5
    console.log(`Self-Invoking Functions is ${a}`)
    console.log(selfInvoking);
})('here');

// console.log(selfInvoking); //will give error


//Arrow Functions
const x1 = (x, y) => x * y;
const y1 = (a, b) => {
    console.log(a*b)
    return a+b
}
console.table(x1(2, 4), y1(3, 2));


//Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);


//The Arguments Object
x5 = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++)
    sum += arguments[i];
  return sum;
}