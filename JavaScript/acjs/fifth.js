// function myFunction() {
//     console.log("this is a js course");
//     console.log("I am ronak");
// }

// myFunction();   



// function Twosum(a,b) {
//     return a + b;
// }

// arr1 = [1,2,3,4,5,6,7];

// console.log(Twosum(arr1[3],arr1[4]));

// function paramFun(msg){
//     console.log(msg);
// }

// paramFun("Hello Ronak");



// let myArrowFun = (a,b) => {
//     return a + b;
// }

// console.log(myArrowFun(10,20));


// let arr2 = ["hola", "hello" ,"kem chavo?"];

// arr2.forEach((val,index,arr)=>{
//     // console.log('====================================');
//     console.log(val,index,arr);
//     // console.log('====================================');
// })
let arr1 = [1,2,3,4,5,10,6,7,8,9];

let max = arr1.reduce((prev,current)=>{
    return prev < current ? current : prev;
});
console.log(max);

let min = arr1.reduce((prev,current)=>{
    return prev > current ? current : prev;
});
console.log(min);

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


