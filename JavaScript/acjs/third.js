// let sum = 0;
// for(let i = 1 ; i <= 100000 ; i++){
//     sum += i
// }
// console.log("sum = ",sum);

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// let str = "RonakGadhiya";
// for(let val of str){
//     console.log(val);
// }


// const instaProfile = {
//     userName : "Ronak gadhiya",
//     idName : "ronakgadhiya",
//     idThread : "@rgadhiya",
//     profile : "./images/photo.png",
//     blueTick : true,
//     isFollow : true,
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     type : "Entrepreneur",
//     bio : "code with Ronak || Ex-Google, DRDO"
// }

// for(let key in instaProfile){
//     console.log(key,"=>",instaProfile[key]);
// }



//String ...

// let str = "Ronakgadhiya";
// let str2 = 'Ronakgadhiya';
// console.log(str.length);
// console.log(str[8]);

//template literals

// let obj = {
//     item : "pen",
//     price : 30
// };
// console.log(`${obj.item}  is a very nice \n and price is ${obj.price + 2} `);

// let specialString = `This is a template literals`;
// console.log(typeof specialString);



// const mySymbol = Symbol();
// console.log(typeof mySymbol);
// const obj = {
//     [mySymbol]: 'value'
//   };
  
//   console.log(typeof obj[mySymbol]);



//string methods

stringExp = "This is my App.";
stringExp2 = "This is my superApp.";
console.log(stringExp.toUpperCase());
console.log(stringExp.toLowerCase());
console.log(stringExp.trim());  
console.log(stringExp.slice(1,4)) 
console.log(stringExp.concat(stringExp2));    //concatenation of two strings
console.log("Hello".repeat(3));              //repeating string
console.log(stringExp.repeat(3));              //repeating string
let searchStr ="My name is Ronak Gadhiya";
console.log(searchStr.indexOf('name'));       //returns the first index of substring
console.log('====================================');
console.log(stringExp.replace("This","That"));
console.log('====================================');
console.log(stringExp.startsWith("This"));      //checks if string starts with specified value
console.log('====================================');
console.log(stringExp.charAt(6));
console.log('====================================');



//input : geeksforgeeks
//output : oksforoks

let str = "geeksforgeeks";
let replaceStr = str.replaceAll('geek', 'ok');

console.log('====================================');
console.log(`Original String ${str} \n replace Sting ${replaceStr}`);
console.log('====================================');