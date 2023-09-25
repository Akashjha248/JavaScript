//It is stored in a  stack memory
let myName = "Akash";
let anotherName = myName;
anotherName = "Jha";

console.log(myName);
console.log(anotherName);


//It is a heap memory as it a function
let userOne = {
    name: "Akash",
    age: 21
}

console.log(userOne.name);

let userTwo = userOne;
userTwo.name = "AJ"

console.log(userOne.name);
console.log(userTwo.name)