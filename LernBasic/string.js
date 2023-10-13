let s1 = "World"
const s2 = new String("Another Way of declering variable")
//Another way of declering string
const scount = 10
console.log("Hello " + s1+ scount);
console.log(`Hey Welcome to my ${s1}`);
console.log(s2);//[String: 'Another Way of declering variable']
console.log(s2.charAt(10));//y
console.log(s2.length);//33
console.log(s1.toUpperCase());//WORLD
const newS2 = s2.substring(8,11)//way
console.log(newS2);//ways

const gameNmae = new String ("ChildHood Game")
console.log(gameNmae.substring(0,5))//negative value not allowed
console.log(gameNmae.slice(-1,0))

const myName = "     Abhishek     //"
console.log(myName);
console.log(myName.trim());//remove the extra space from last and fast

//Replace ant thing in string like %20 in space
let url = "https://www.marvel.com/characters/spider-man-miles-morales/in-comics"
console.log(url.replace("-"," "));
///console.log(url.replaceAll("-"," "));//not woring with this node but it works
console.log((url.includes("marvel")));