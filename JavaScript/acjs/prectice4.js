//prectice 1

marksArray = [85,97,44,37,76,60];

let sum = 0;
for (let i = 0; i < marksArray.length; i++) {
    sum = sum + marksArray[i];       
}

console.log("Total Marks :" + sum);
console.log("=======================================");
let avg = sum / marksArray.length;
console.log("Avarage :" + avg +"%");


//prectice 2

let items = [100,250,645,300,900,50];

for(let item in items){
    // console.log(items[item]);
    let disCount =  (items[item] *10)/100;
    let payPrice = items[item] - disCount;
    console.log(payPrice);
}

//prectice 3

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//remove first company 

let firstCompany = companies.shift();
console.log(companies);

//remove under add ola

let replace = companies.splice(1,1,"Ola")
console.log(companies);

//add Amazon

addAmazon = companies.push("Amazon");
console.log(companies);

