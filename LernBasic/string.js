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