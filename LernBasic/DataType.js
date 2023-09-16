const StudentId = 12303842
let username = "iambhi0619" //let is a advance version of var
var password = "12344321"
address = "jharkhand" //js automaticaly use a variable
let ACstate

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/


//changing the value
// StudentId = "1237654" //cant cahange the value of constant
username = "iambhi.com"
password = "12123443"
address = "Deoghar"

console.log(StudentId);
console.table([username, password, address, ACstate]);


 // if we want to know the datatype of a variable
 //use "typeof"
 console.log("DataType of address:-",typeof address);
 console.log("DataType of StudentId:-",typeof StudentId);
/*
SOME DATA TYPE:-
    number => 2 to power 53
    bigint
    string => ""
    boolean => true/false 
    null => standalone value
    undefined => 
    symbol => unique


    object
*/

const id = Symbol('12345')
const Nid = Symbol('12345')
console.log(id === Nid);//false