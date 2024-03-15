let voltage  = parseInt(prompt("Enter voltage :"));
let current  = parseInt(prompt("Enter current :"));

let circuitPower = (voltage,current) => {
    return voltage * current;
}

console.log("your triArea " + circuitPower(voltage,current));