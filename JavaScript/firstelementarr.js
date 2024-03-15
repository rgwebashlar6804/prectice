// let size = parseInt(prompt("Enter size :"));
// let arr1 = [];

// for (let i = 0; i < size; i++) {
//     arr1[i] = parseInt(prompt("Enter Element :"));

// }

// let sum = 0;
// for (let i = 0; i < size; i++) {
//     sum += arr1[i]

// }
// let getFirstValue = (arr1) => {
//     return arr1[0];
// }


// console.log("your first value is a " + getFirstValue(arr1));
// console.log(sum);



let col = parseInt(prompt("Enter size :"));
let row = parseInt(prompt("Enter size :"));

let arr1 = [row][col];

for (let i = 0; i < row; i++) {
    for (let j = i + 1; j < col; j++) {
        arr1[i][j] = parseInt(prompt("Enter element :"));
        
    }
}

console.log(arr1);