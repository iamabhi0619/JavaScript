let myDate = new Date()//for current date
console.log(typeof(myDate));//object
console.log(myDate);//2023-10-16T12:05:10.186Z

myDate1 = myDate.toString();
console.log(myDate1);//Mon Oct 16 2023 17:36:11 GMT+0530 (India Standard Time)

myDate2 = myDate.toLocaleString();
console.log(myDate2);//10/16/2023, 5:42:02 PM

myDate3 = myDate.toDateString();
console.log(myDate3);//Mon Oct 16 2023

const myCreatedDate = new Date(2004, 1, 6)//month start from 0
console.log(myCreatedDate.toDateString());//Fri Feb 06 2004 formated date
console.log(myCreatedDate.toLocaleString());// 2/6/2004, 12:00:00 AM
//by defult time is fixed 12:00:00 AM

const myCreatedDate1 = new Date(2004, 1, 6, 23, 55)//delcering with time 
console.log(myCreatedDate1.toLocaleString());// 2/6/2004, 11:55:00 PM

const myCreatedDate2 = new Date("2004-11-19")
console.log(myCreatedDate2.toLocaleString());

const myCreatedDate3 = new Date("11-19-2004")//mm-dd-yyyy
console.log(myCreatedDate3.toLocaleString());

let myTime = Date.now();
console.log(myTime);
console.log(myCreatedDate3.getTime());//returns in mili second
console.log(Math.floor(Date.now()/1000));//returns in second

//to get only the a spacific data from date
let newDate = new Date()//corrent date
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString('default',{weekday: "long"})
console.log(newDate);