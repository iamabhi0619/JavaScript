// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const myprogramlang = ['JS', 'python', 'c-lang', 'java', 'c++'];

//ECMA5
// var top1 = myprogramlang[0];
// var top2 = myprogramlang[1];
// var top3 = myprogramlang[2];

//ECMA6
//sequance matter
let [top1, top2, top3] = myprogramlang//this is array destructuring
console.log(`My Fav. programing Language is ${top1}`);

console.log(myprogramlang.length);
//use comma to skip the variable
let [firstlang,,,,lastlang] = myprogramlang;
console.log(`Least programing language ${lastlang}`);