// // using simple
// function vowalReturn(str){
//     let newStr = "";
//     console.log(str.length);
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' ||str[i] == 'e' || str[i] =='i' || str[i] =='o' || str[i] =='u') {
//             newStr += str[i]
//         }
//     }
//     console.log(newStr);
// }


// // using arrow
// let vowalReturn = (str) => {
//     let newStr = "";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count += 1;
//             newStr += str[i];
//         }
//     }
//     console.log('====================================');
//     console.log("Vowal Char :" + newStr);
//     console.log('====================================');
//     console.log("Vowal Count :" + count);
// }
let str = "ronak";
let str1 = str.split("");

let newStr = [];
let count = 0;

let abc = str1.forEach((val)=>{
    if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
        count += 1;
        newStr += val;
    }
});

console.log(count);
console.log(newStr);




// vowalReturn(abc);

//prectice 2

// let arr1 = [1,2,3,4,5,10,6,7,8,9];

// let max = arr1.reduce((prev,current)=>{
//     return prev < current ? current : prev;
// });
// console.log(max);

// let min = arr1.reduce((prev,current)=>{
//     return prev > current ? current : prev;
// });
// console.log(min);

// arr1.forEach((val)=>{
//     val = val * val
//     console.log('====================================');
//     console.log(val);
//     console.log('====================================');
// });


// let newArray = arr1.map((val)=>{
//     return val * val;
// });

// console.log('====================================');
// console.log(newArray);
// console.log(arr1);
// console.log('====================================');

// let evenArr = arr1.filter((val)=>{
//     return val % 2 == 0;
// });
// let oddArr = arr1.filter((val)=>{
//     return val % 2 != 0;
// });
// console.log('====================================');
// console.log(evenArr);
// console.log('====================================');
// console.log(oddArr);

// const output = arr1.reduce((result,current)=>{
//     return result + current;
// });
// console.log(output);



//exersice 3

// let studentMark = [76,80,78,90,56,98,66,99,91];
// let nintyabove = studentMark.filter((val)=>{
//     if (val >= 90) {
//         return val;
//     }
// })
// console.log(nintyabove);