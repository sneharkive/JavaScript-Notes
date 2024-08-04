function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian";  //to set Property Default Values
    this.fullName = function() {    //Methods
        return this.firstName + " " + this.lastName;
      };
  }

//In the constructor function, this has no value.
//The value of this will become the new object when a new object is created.


//create new Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myMother);
console.log(myFather);  //object are addressed by reference so property 'job' will be added here too


//Adding a Property to an Object
myFather.job = "Teacher"; //The new property will be added to myFather. Not to any other Person Objects.
console.log(myFather);



//Adding a Property to a Constructor
// Person.hobby = "singing"; //You can NOT add a new property to an object constructor:

// To add a new property, you must add it to the constructor function prototype:
Person.prototype.hobby = "singing";

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(mySelf.hobby);



const myBrother = new Person("S19", "Rally", 15, "black");

//Adding a Method to an Object

myBrother.changeName = function (name1) {
    this.firstName = name1;
  }

  console.log(myBrother);
  myBrother.changeName("Sayan")

  console.log(myBrother);


//Adding a Method to a Constructor
/*
Person.lastNameChange = function (name1) {  //You can NOT add a new method to an object constructor function
    this.lastName = name1;
};
*/

// Adding a new method must be done to the constructor function prototype:
Person.prototype.lastNameChange = function (name1) {  
    this.lastName = name1;
};

myBrother.lastNameChange("Roy") 
console.log(myBrother);


