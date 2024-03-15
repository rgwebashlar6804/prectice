let arr1 = [45,90,66,91,56];

let filterDemo = arr1.filter((val)=>{
    if (val > 90) {
        return val;
    }
});

console.log(filterDemo);
console.log('====================================');
console.log('====================================',arr1);



let arr2 = [45,90,66,91,56];

let foreachDemo = arr2.forEach((val)=>{
    if (val > 90) {
        return val;
    }
});
console.log(foreachDemo);
console.log('====================================',arr2);
