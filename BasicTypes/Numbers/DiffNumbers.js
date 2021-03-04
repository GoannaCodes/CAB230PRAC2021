
console.log(1 + 2); //outputs 3
//used to check types
console.log(typeof(10)); //outputs 'number'
console.log(typeof(0.34543)); //outputs 'number'
console.log(typeof(10/1000)) //outputs 'number'
//This shouldn't be possible to compute
console.log(1/0); //won't crash
console.log(typeof(1/0));
console.log()
console.log( "Floating point weirdness")
console.log(0.1 + 0.2 == 0.3); //false because of floating point, weird stuff
console.log(0.1 + 0.2)

console.log()
console.log("Boolean")
console.log(1 == 1)
console.log(1 == 2)
console.log( 1 <= 2)

console.log('' == 0) //abstract equality
console.log('' === 0) //checks type
console.log()
console.log("Boolean operators")
console.log(1 == 1 && 2 == 2) //both need to be true
console.log(1 == 1 && 2 == 1) //one false
console.log(1 == 1 || 2 == 5) //only one needs to be true
console.log(2 == 40 || 1 == 1) //only one needs to be true

//ideal syntax - grouping comparisons for readibility
console.log((2 == 40) || (1 == 1))

console.log()
console.log("Strings")
//"I am a string" //double quote
//'I am a string' //single quote

let myName = 'Dear Daniel'; //can embed into backtick quotes
console.log("Hello ${myName}") //doesn't work
console.log(`Hello ${myName}`) //works

console.log(`I am a

multiline

Hello, ${myName}

backtick quote/template literal`) //backtick quotes - multiline 

console.log(`2 + 3 = ${2 + 3}`) 
//don't do this just because you can
console.log(`2 + 3 = ${myName + ` lol ${myName}`}`)

console.log("this " + "is" + " concatenated")
//can just use , to not write spaces in
console.log("this", "is", "multiple arguments")

let b_thing = "this " + "is" + " concatenated"
//doesn't work since not in a function
//let a_thing = "this", "is", "multiple arguments"

let nothing //not assigned variable
console.log()
console.log("Undefined vs Null")
console.log(nothing)
nothing = null //explictly written/returned
console.log(nothing)

console.log(8 * null) //outputs 0 -> changes null = 0
console.log("5" + 1); //outputs 51 as a string, assumes concat
console.log(1 + "5") //outputs 15
console.log("5" - 1) //outputs 4 since you can't subtract strings, so does an arithmetic operation
console.log("five" * 3)//outputs NaN
