// console.log(Math);
console.log(Math.abs(-43));//43 -ve number to +ve
console.log(Math.round(4.6));//5 round off the number
console.log(Math.ceil(4.2));//5 works like a gretest integer function upper value
console.log(Math.floor(4.9));//4 works like a gretest integer function lower value
console.log(Math.max(12, 13, 11, 19, 14));//19
console.log(Math.min(12, 13, 11, 19, 14));//11

console.log(Math.random());//random value between0-1 by defult
const r = (Math.random()*10) + 1;
//Any mumber just multiplying with 10 to get one digit before point
console.log(r);
console.log(Math.floor(r));//round of the number to integer

//making the dice game set the value number between 1-6

const min = 1;
const max = 6;
rm = Math.floor(Math.random() * (max - min +1)) + 1;
console.log(rm);//REndom number between min and max term