console.log("This is tutorial symbol");

// Symbol
const symb = Symbol('my identifier');
const symb2 = Symbol('my identifier');
console.log("Symbol is ", symb !== symb2);


//example : 
const k1 = Symbol();
const k2 = Symbol();

let myObj = {};

myObj[k1] = "Ronak";
myObj[k2] = "Yash";


console.log(myObj);

const myIterableObject = {
    data: [1, 2, 3],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                return index < this.data.length ?
                    { value: this.data[index++], done: false } :
                    { done: true };
            }
        };
    }
};

// Using the iterator in a for...of loop
for (const value of myIterableObject) {
    console.log(value); // Output: 1, 2, 3
}
