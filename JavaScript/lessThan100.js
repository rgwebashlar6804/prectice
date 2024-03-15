let num1 = parseInt(prompt("Enter num1 :"));
let num2 = parseInt(prompt("Enter num2 :"));

let lessThan100 = (num1,num2) => {
    let result = num1 + num2
    if(result < 100){
        return true;
    }else{
        return false;
    }
}

console.log("your lessThan100 number is " + lessThan100(num1,num2));