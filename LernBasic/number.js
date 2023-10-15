const score = 326
console.log(score);//326

const balance = new Number(121000)
console.log(balance);//[Number: 121000]
console.log(balance.toFixed(2));//121000.00

const sbalance = balance.toString()
console.log(sbalance);//121000
console.log(typeof(sbalance));//string

const distance = 11256.23187851426
console.log(distance,typeof(distance));//11256.23187851426 number
const NewDistance = distance.toPrecision(6);
console.log(NewDistance,typeof(NewDistance));//11256.2 string

const Amount = 1000000
console.log(Amount.toLocaleString());//1,000,000
console.log(Amount.toLocaleString('en-IN'));//10,00,000

console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991