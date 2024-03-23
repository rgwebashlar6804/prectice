// var fname:string = "Hello";
// document.write(fname);
// let number: number = 10;
// console.log(number);
// let dob = new Date(2000,8,4);
// const namea = "John";


// function add(x:number ,y:number){
//     return x + y;
// }
// const abc:number = add(1,32);


// INTERFACE

// interface product 
// {
//     name: string,
//     price: number,
//     qty: number,
//     sayTotal: () => number
// }

// var item_1: product = 
// {
//     name: "Pencil",
//     price: 12   ,
//     qty: 10,
//     sayTotal:() => item_1.price * item_1.qty
// }

// console.log(item_1.name);
// console.log(item_1.price);
// console.log(item_1.qty);
// console.log(item_1.sayTotal());
// // sh
// document.writeln(item_1.name);

let tupleexp = [251,"Hello"];
console.log(tupleexp);

//GENERIC 
function identity<T>(arg : T) :T {
    return arg;
}

let result1 = identity<boolean | number >(true);
console.log('====================================');
console.log(typeof result1);
console.log('====================================');
[1, 2, 3].map(value => value.toString());   


var list : Array<number> = [1, 3, 5];  
console.log(list);


//alias 

type User = {
    name: string,
    age: number,
    addres?: string //yaa to string hoi ka undefined hoi che 
}

const user: User = {
    name: "ronak",
    age: 12
}

function login(userData: User): User{

    return userData;
}