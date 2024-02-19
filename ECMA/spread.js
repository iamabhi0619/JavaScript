//ECMA5
function sum(a,b,c){
    console.log("Sum of three Number= "+(a+b+c));
}

//sum(1,3,5)
var arrValue = [5,3,1];
sum.apply(null,arrValue);//to pass array value

//ECMA6
let sub = (a,b,c) => {
    console.log(`Sum of three Number= ${(a-b-c)}`);
}
console.log(...arrValue);
sub(...arrValue);

//repalce concat()
var array1 = [1,2,3,4];
var array2 = [5,6,7,8];
var array3 = [8,9,10,11];
//array1 = array1.concat(array2);
array1 = [...array1 , ...array2, ...array3]
console.log(array1);

//copy method & push
let hero = ['SuperMan', 'IronMan', 'BatMan'];
let heroc = hero;
//heroc.push('MachoMan')
heroc = [...heroc,'MachoMan']
console.log(heroc);
console.log(hero);//push the value to hero also