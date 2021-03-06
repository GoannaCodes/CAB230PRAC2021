console.log()
console.log("Strings")
//"I am a string" - double quote
//'I am a string' - single quote
//`I am a string` - backtick quote/template literal

let myName = 'Anna'; //can embed into backtick quotes
console.log("Hello ${myName}") //doesn't work - does not replace ${myname} with 'Anna'
console.log(`Hello ${myName}`) //works - used within a template literal 

//backtick quotes can be used for display multiline
console.log(`I am a

multiline

Hello, ${myName}

backtick quote/template literal`)  

//expression within ${} is calculated since it is in backtick quotes
console.log(`2 + 3 = ${2 + 3}`) 

//don't do this just because you can
console.log(`2 + 3 = ${myName + ` lol ${myName}`}`)

console.log("this " + "is" + " concatenated")
//can just use , to not write spaces in - only works with console.log
console.log("this", "is", "multiple arguments")

let b_thing = "this " + "is" + " concatenated"
//doesn't work since not in a function
//let a_thing = "this", "is", "multiple arguments"
