let num = parseInt(prompt("Enter number :"));
let lessThanOrEqualToZero = (num) => {
    if(num <= 0){
        return true;
    }else{
        return false;
    }
}

console.log("your lessThanOrEqualToZero is " + lessThanOrEqualToZero(num)); 