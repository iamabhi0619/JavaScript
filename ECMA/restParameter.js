//ECMA5
function sum(a,b){
    console.log("Sum of two number= "+(a+b));
}
sum(2,3,4,5,6);//take the value from first only

//ECMA
//in the form of array
let number = (...n) => {
    console.log(n);
    //change the array to number
    console.log(...n);
}
number(1,2,3,4,5,6);

addition = (...a) => {
    sum = 0;
    // for (let i = 0; i < a.length; i++) {
    //     const element = a[i];
    //     sum += element;
    // }
    //store the value of a one by by in i in each loop
    for (let i of a){
        sum += i;
    }
    console.log(`Sum of all the input= ${sum}`);
}
addition(1,2,3,4,5,6,7,8,9,10);

// function fun()