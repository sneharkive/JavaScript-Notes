const displayByName = document.querySelector('.displayByName')
const displayByLoop = document.querySelector('.displayByLoop')
const displayByObjectValues = document.querySelector('.displayByObjectValues')
const displayByJSONStringify = document.querySelector('.displayByJSONStringify')


const person = {
    myName: "Sneha",
    age: 20,
    city: "Kolkata"
  };

  displayByName.innerHTML = person.myName

//we need for in loop for object
let text = ''
for(const key in person) {
    console.log(person[key]);
    text += person[key] + " ";
}

displayByLoop.innerHTML = text


//Object.values() creates an array from the property values:
const myArray = Object.values(person);
displayByObjectValues.innerHTML = myArray
console.log(myArray)


//JavaScript objects can be converted to a string with JSON method JSON.stringify().
const myString = JSON.stringify(person);
displayByJSONStringify.innerHTML = myString

console.log(myString)
console.dir(myString)
