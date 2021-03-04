/* 
0 //older
1 //old
1 //new (need to compute)
2
3
5
8
13
21*/

let f_older = 0;
let f_old = 1;
let n_it = 10;
//fibonacci sequence
for (let i = 2; i <= n_it; i++){
  let f_new = f_older + f_old;
  console.log(`F${i}: ${f_new}`)  
  f_older = f_old; 
  f_old = f_new;
}

/* not able to call console.log(f_new) as it is defined out of scope*/
console.log("Finished") //if not here, it would output last num from for loop to indicate it is finished
