function fact(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * fact(x - 1)
    }
} console.log(fact(5));
console.log(fact(4));
console.log(fact(3));
console.log(fact(2));
console.log(fact(1));

function fact (x){
    return(x == 0) ? 1 :(x * fact(x-1))
}  console.log(fact(5));
console.log(fact(4));
console.log(fact(3));
console.log(fact(2));
console.log(fact(1));
