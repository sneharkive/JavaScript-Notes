//let  => we can change it later
// we can declare it only without initialize any values

let firstName = 'Sneha'   //here  firstName  is an variable
let lastName //only declare here

let userIntro = 'My name is Sneha Roy'
console.log(userIntro);
userIntro = 'My name is Kakashi Hatake'
console.log(userIntro);
console.log(typeof userIntro);

let age = 21;
console.log(typeof age);

lastName = 'Roy'

userIntro = 'Hi, I am ' + firstName + ' ' + lastName
            + '. I am ' + age + ' years old.'
console.log(userIntro);

let isHappy = true
console.log(typeof isHappy);


//const => cannot change later
// declaration and initialization must be done together

//const monthInYear //here we declare it it will give you an error
// we must immediately initialized it

const hoursInDay = 24
console.log(hoursInDay);

// hoursInDay = 30 //it will give error
// console.log(hoursInDay);


//var => is very similar to 'let' but 
// 'let' won't work outside the block but var work outside the box
//'const' is same as 'let' for this case

/*
{
    let name = 100
}
console.log(name); //get nothing

{
    var code = 50
}
console.log(code);

{
    const year = 35
}
console.log(year); //get error

*/



//we can use 'var' even before initialized it output will be "undefined" which is not an error
//But we can't do the same for 'let' and 'const'

console.log(a);  //output will be 'undefined'
var a

// console.log(b);  //will get an error
// let b;

// console.log(c);  //will get an error
// const c = 5;


//constant array   <= we can change the elements of constant array
//                 <= but we cannot reassign a constant array
const fruits = ['mango', 'lichi', 'lemon', 'peach']
fruits[2] = 'orange' //change element
fruits.push('grapes') //add element

console.log(fruits);

//but cannot Reassign a constant array
// fruits = ['banana', 'lichi', 'lemon', 'peach'] //give error



//constant objects <= we can change the properties of a constant object
//                 <= but we cannot reassign a constant object

const animeName = {
    charName: 'Kakashi',
    age: '30',
    position: 'Jonin',
}

animeName.position = 'Hokage'  //change property
animeName.studentName = 'Naruto'  //add property

console.log(animeName);

// but cannot Reassign a constant object
// animeName = {charName: 'Kakashi', age: '30', position: 'Jonin',} //give error