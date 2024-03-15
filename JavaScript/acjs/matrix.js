// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8 ,9]
//   ];
//   for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             console.log(matrix[i][j] + ' ');
//         }
//         console.log('\n');
//     }



// Define matrix
// const matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8 ,9]
//     ];
  
//   function printMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j] + ' ');
//       }
//       console.log('\n');
//     }
//   }
  
//   printMatrix(matrix);

let matrix = [];
let col = 3;
let row = 3;
let h = 1;

for(let i = 0; i < row ; i++){
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
        matrix[i][j] = h++;
    }
}

  console.log(matrix);