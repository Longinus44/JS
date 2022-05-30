
function say() {
    let name = 'google'
    console.log('hello' + ' ' + name);
}
say()

// RETURN VALUE IN A FUNCTION

const mysum = (num1, num2) => {
    let total = num1 + num2;
    return total
}
console.log(mysum(10, 33));
console.log(mysum(6, 11));

//    CALCULATION FUNCTION

function calculate(num1, num2) {
    let add = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let quot = num1 / num2;
    return [add, sub, mult, quot];

}
let x = 10;
let y = 6;
let result = calculate(x, y);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);

    // FUNCTION DECLARATION

function total(num1, num2){
    console.log(num1 + num2);
}
total(20, 40)

// FUNCTION EXPRESSION

let test = function(num1, num2){
    return num1 * num2
}
console.log(test(25, 12));