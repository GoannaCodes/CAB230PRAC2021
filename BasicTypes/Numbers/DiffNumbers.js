
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

console.log(8 * null) //outputs 0 -> changes null = 0
console.log("5" + 1); //outputs 51 as a string, assumes concat
console.log(1 + "5") //outputs 15
console.log("5" - 1) //outputs 4 since you can't subtract strings, so does an arithmetic operation
console.log("five" * 3)//outputs NaN
