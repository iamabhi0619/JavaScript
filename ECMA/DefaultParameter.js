//multiply two number
//ECMA 5
function multi(a,b){
    //console.log(b);//undefine if value is not pass
    b = (typeof b!= 'undefined')? b : 1;
    console.log(`Multiplication of Numbers= ${a*b}`);
}
multi(4);//NaN not a number
multi(3,5);

//ECMA6
//init a defult value in parameter
function div(a,b=1){
    console.log(`Division of two Number= ${a/b}`);
}
div(5)

let sub = (a,b=0) => {
    console.log(`Subtration of Two Numbers= ${a-b}`);
} 
sub(12)