let min = parseInt(prompt("Enter Minute :"));
let sec_convert = (min) => {
    return 60*min;
}

console.log("your second is " + sec_convert(min));