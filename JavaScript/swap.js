let a = 10
let b = 20

let swap = (a,b) =>{
    a = a + b
    b = a - b
    a = a - b
    console.log(a);
    console.log(b);
}
swap(a,b)