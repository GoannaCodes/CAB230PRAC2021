console.log(`
Fib with recursion`)

//given a number, output what the expected number is in the fibonacci sequence
let fiba = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fiba(n - 2) + fiba(n - 1);
}

console.log(fiba(8))
