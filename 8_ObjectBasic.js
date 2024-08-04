//Creating a JavaScript Object

//Using an Object Literal
const person1 = {
    objName: 'person1',
    firstName: "Sneha",
    lastName: "Roy",
    age: 21,
    eyeColor: "black"
  };
console.log(person1);

//Using the new Keyword
const person2 = new Object();
//Add Properties
person2.objName = 'person2'
person2.firstName = "Kakashi";
person2.lastName = "Hatake";
person2.age = 30;
person2.eyeColor = "Red";

console.log(person2);

// JavaScript Object Methods  <= Methods are function definitions stored as property values.

const person3 = {
    objName: 'person3',
    firstName: "Itachi",
    lastName : "Uchiha",
    specialty: "Sharingan",
    fullName : function() {
      return this.firstName + " " + this.lastName;  //this refers to the person3 object:
    }
  };
console.log(person3);
console.log(person3.fullName());  // it will execute as a function
console.log(person3.fullName);  //it will return the function definition


console.log('************ Deleting Properties ************');
//Deleting Properties  <= The delete keyword deletes both the value of the property and the property itself.
delete person1.age;
console.log(person1);

delete person3.fullName
console.log(person3);


//Adding new method
person3.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log(person3);
  console.log(person3.name());