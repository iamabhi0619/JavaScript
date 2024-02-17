//value can be change
//function scoped
var name0 = 'Abhi';
console.log(name0);

//value can also change in this
//block scoped
let name1 = 'Abhi';
console.log(name1);

//value cant be change or re init
const name2 = 'Abhi';
console.log(name2);

function sqare(love) {
    //function scope
    if(love){
        //block scope
        let a = 3;
        const b = 2;
        console.log("Square of a number:- "+(a**b));
    }
    // cannot use outside the block
    // console.log("Square of a number:- "+(a**b));
}
sqare(true)

//check for var use case
// var winTeam = "India"
// if(true){
//     winTeam = "Sri Lanka"
//     console.log(winTeam);
// }
// console.log(winTeam);

let winTeam = "India"
if(true){
    let winTeam = "Sri Lanka"//this is trited as other variable
    console.log(winTeam);
}
console.log(winTeam);