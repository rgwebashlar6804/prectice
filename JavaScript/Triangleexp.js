let base = parseInt(prompt("Enter base :"));
let height = parseInt(prompt("Enter height :"));

let triArea = (base,height) => {
    return (base * height) / 2;
}

console.log("your triArea " + triArea(base,height));