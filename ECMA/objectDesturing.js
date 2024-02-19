const bioData = {
    sname : "Abhishek Kumar",
    regNo : 12303842,
    course : "B.Tech CSE",
    SEM : 2,
    year : "1st",
    hobb : {
        first : "Coding",
        second : "Playing",
        third : "Web Series"
    }
}

//object destructing

//variable name should be equal to key name
let {sname,regNo,course} = bioData //only value is store
console.log(`My name is ${sname}
Registration Number ${regNo}
And Course is ${course}`);

let {SEM:semister} = bioData;
console.log(`My Semister is ${semister}`);


let {hobb:hobbies} = bioData
console.log(`My second Hobbies is ${hobbies.second}`);