// ********************* Conversions ********************
let score = "32"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN i.e. Not a Number
//Null => 0
//Undefined => NaN
//Boolean => 0/1 for false/true respectively

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//"" => false
//"Akash" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ********************* Operations ********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);

let str1 = "Hello"
let str2 = " Akash"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //Since the first element is string all the elements are converted to string
// console.log(1 + 2 + "2"); //Since the first element is number so it adds number unless a string is encountered
// console.log("1" + 2 + "2"); //Since the first and last number is string so all elements becomes string

let count = 100
++count;
count++;
console.log(count);