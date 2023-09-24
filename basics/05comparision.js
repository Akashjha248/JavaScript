// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); //It is not a strict check. It assumes both the values as numbers.
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0); //For any case of undefined, the answer is always false.
// console.log(undefined > 0);
// console.log(undefined < 0);

console.log("2" === 2); //Here it checks the values as well as the datatypes. It is known as strict check.

//We should always check comparision when null or undefined is involved as it may cause confusion.