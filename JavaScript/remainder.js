let num1  = parseInt(prompt("Enter num1 :"));
let num2  = parseInt(prompt("Enter num2 :"));

let remainder = (num1,num2) => {
    return num1 % num2;
}

console.log("your Edges number " + remainder(num1,num2));