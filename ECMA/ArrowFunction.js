//Arrow function is also known as fat arrow function
//ECMA
var sum = function () {
    var a = 5;
    var b = 6;
    return a+b;
}

console.log(sum());

//ECMA6
//fat arrow function

let sub = () => {
    let a =10;
    let b = 11;
    return a-b;
}
console.log(sub());

let a =100;
let b = 7;

let multi = () => { return a*b}
console.log(multi());

let div = (c) => a%b*c
console.log(div(2));