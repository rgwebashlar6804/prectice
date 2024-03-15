let length  = parseInt(prompt("Enter length :"));
let width  = parseInt(prompt("Enter width :"));

let findPerimeter = (length,width) => {
    return (length + width) * 2;
}

console.log("your triArea " + findPerimeter(length,width));