"use strict";
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
// let tupleexp = [251,"Hello"];
// console.log(tupleexp);
// //GENERIC 
// function identity<T>(arg : T) :T {
//     return arg;
// }
// let result1 = identity<boolean | number >(true);
// console.log('====================================');
// console.log(typeof result1);
// console.log('====================================');
// [1, 2, 3].map(value => value.toString());   
// var list : Array<number> = [1, 3, 5];  
// console.log(list);
// //alias 
// type User = {
//     name: string,
//     age: number,
//     addres?: string //yaa to string hoi ka undefined hoi che 
// }
// const user: User = {
//     name: "ronak",
//     age: 12
// }
// function login(userData: User): User{
//     return userData;
// }
// type Id = number | string;
// const userId: Id = '12';
// console.log(userId);
//interface
// interface Book{
//     name: string;
//     price: number;
// }
// interface Ebook extends Book{
//     fileSize :number;
//     format: string;
// }
// interface audioBook extends Ebook{
//     duration :number;
// }
// const book: audioBook = {
//     name: 'atomic habit',
//     price: 200,
//     fileSize: 10,
//     format: "pdf",
//     duration: 4
// }
// console.log(book);
// //interface merging 
// interface product{
//     name: string;
//     category: string;
//     price:number;
// }
// interface product{
//     description : string
// } 
// const productData: product = {
//     name: 'nike cap',
//     category:'cap',
//     price: 234,
//     description: 'this is a super cap'
// }
// console.log(productData);
// const enum Animals {
//     Fish
// }
// // console.log(Animals.Fish);
// var Animals;
// (function (Animals) {
//     Animals[Animals["Fish"] = 0] = "Fish";
// })(Animals || (Animals = {}));
// console.log(Animals.Fish);
// console.log(0);
// let a:void=undefined;
// a=3;//error
// let b:undefined;
// console.log(b);
// let Fname: any = "RONAK";
// let namelength: number = (Fname as string).length;
// console.log(Fname);
// console.log(namelength);
// type userData = {username: string, points: number};
// let demoUser: userData;
// demoUser = 
// {
//     username: 'John',
//     points: 10
// };
// console.log(demoUser);
// type User = 
// {
//     name: string;
// }
// type Organisation = 
// {
//     name: string;
//     manager: User;
// };
// const manager: User = 
// {
//     name: 'Nick',
// }
// const org: Organisation = 
// {
//     name: 'ABC',
//     manager,
// }
let Order;
console.log(Person);
