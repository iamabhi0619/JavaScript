//Array concept is little same as java
const array1 = [0 , 1, 2, 3, 4]//this can be string
console.log(array1);//print the array
console.log(array1[2]);//access any spacific element
//array method
//array1 before adding [ 0, 1, 2, 3, 4 ]
array1.push(5)
array1.push(6)
console.log(array1);//[ 0, 1, 2, 3, 4, 5, 6]
array1.pop(); //remove the last element from arrar
console.log(array1);//[ 0, 1, 2, 3, 4, 5 ]

array1.unshift(9);//add the element to first don't do this long array
console.log(array1);//[9, 0, 1, 2, 3, 4, 5 ]
array1.shift()//remove the first element
console.log(array1);//[ 0, 1, 2, 3, 4, 5 ]
console.log(array1.length);//6
console.log(array1.includes(9));//false
console.log(array1.indexOf(4));//4

let newarrar1 = array1.join()//returns a string of the array
console.log(newarrar1);//0,1,2,3,4,5

//slice, splice
const narray1 = array1.slice(1, 3)//last one is not include
console.log("A ",array1);//A  [ 0, 1, 2, 3, 4, 5 ]
//returns the copy of the string no change in array
console.log(narray1);//[ 1, 2 ]

const narray2 = array1.splice(1, 3)//it includes the last index also
console.log("B ",array1);//B  [ 0, 4, 5 ]
//it remove the elements from array and makechange in array
console.log(narray2);//[ 1, 2, 3 ]