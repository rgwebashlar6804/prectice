let num1 = parseInt(prompt("Enter num1 :"));
let num2 = parseInt(prompt("Enter num2 :"));

let points = (num1,num2) => {
    return num1 * 2 + num2 * 3;
}

console.log("your basketball game points " + points(num1,num2));