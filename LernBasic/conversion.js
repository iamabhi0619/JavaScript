let score1 = "99"
console.log("DataType of score:- ",typeof (score1));
let conScore1 = Number(score1)
console.log("DataType after Conversion:- ",typeof (conScore1));
console.log("Stored value:-",conScore1);
/*
    OUTPUT WILL BE
    DataType of score:-  string
    DataType after Conversion:-  number
    Stored value:- 99
*/



// when data type is not a pure number
console.log("<-- IS DataType is not a Pure number -->");
let score2 = "99aaa"
console.log("DataType of score:- ",typeof (score2));
let conScore2 = Number(score2)
console.log("DataType after Conversion:- ",typeof (conScore2));
console.log("Stored value:-",conScore2);
/*
    OUTPUT WILL BE
    <-- IS DataType is not a Pure number -->
    DataType of score:-  string
    DataType after Conversion:-  number
    Stored value:- NaN(Not a Number)
*/ 

 //"33" => 33
 //"33aa" => NaN
 //true => 1
 // 1=> true; 0=> false
 //"" => false
 //"abhi" => true