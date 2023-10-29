// singleton
// Object.create() this is cunstructer way of defining a object


// object literals
// const jsUser = {}//empty object
//define a symbol
const mySymbol = Symbol("key1")
const jsUser = {
    name: "Abhishek",
    age: 19,
    [mySymbol]: "mykey of symbol",
    regId: 12303842,
    location: "Deoghar",
    email: "iamabhi0619@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(jsUser.regId);
console.log(jsUser["email"]);//keywors are automatically treated as string by js
console.log(jsUser[mySymbol]);//for symbol also

jsUser.email = "iamabhi0619@lpu.com"
Object.freeze(jsUser)
jsUser.regId = 11230574
console.log(jsUser);