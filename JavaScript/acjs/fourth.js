let collctionApp = [23,67,45,34,22,88];
console.log(collctionApp);
console.log(collctionApp.sort());
console.log(collctionApp.sort().reverse());
console.log(collctionApp.length); //property

let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"];
// console.log(typeof heroes);
let count = 0;
for(let i = 0; i < heroes.length ; i++){
    count++;
    console.log(heroes[i]);
}
console.log("Count item is :" ,count);


console.log("=================================");
console.log("=================================");
for(let hero of heroes){
    console.log(hero);
}
console.log("=================================");
console.log("=================================");


let foodList = ["potato","apple","litchi","tomato"];
console.log(foodList);
foodList.push("chips");
console.log(foodList);
foodList.pop();
console.log(foodList);
foodList.unshift("banana");
console.log(foodList);
foodList.shift();
console.log(foodList);
console.log(foodList.toString());

// let concatArray = foodList.concat(collctionApp);
// console.log('====================================');
// console.log(concatArray);
// console.log('====================================');

// console.log(collctionApp.slice(2,4));
console.log(collctionApp.splice(0,3,50000));    
console.log('====================================');
console.log(collctionApp);
console.log('====================================');

