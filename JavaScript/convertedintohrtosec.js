let hour = parseInt(prompt("Enter hour :"));
let howManySeconds = (hour) => {
    return 60 * 60 * hour;
}

console.log("your second is " + howManySeconds(hour));