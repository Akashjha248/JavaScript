let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 8, 30)
//console.log(myCreatedDate.toDateString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))