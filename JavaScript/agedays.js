let age = parseInt(prompt("Enter age :"));
let agedays = (age) => {
    return 365 * age;
}

console.log("your age days is " + agedays(age));