let side1  = parseInt(prompt("Enter side1 :"));
let side2  = parseInt(prompt("Enter side2 :"));

let circuitPower = (side1,side2) => {
    return (side1 + side2) - 1;
}

console.log("your Edges number " + circuitPower(side1,side2));