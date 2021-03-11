console.log()
console.log("Boolean")
console.log(1 == 1) //output true
console.log(1 == 2) //output false
console.log( 1 <= 2) //output true

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
