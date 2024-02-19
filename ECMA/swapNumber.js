//Swap a number without using third variable
let a = 10;
let b = 22;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

//using array array destructuring
[a,b] = [b,a]
console.log(`a = ${a}
b = ${b}`);