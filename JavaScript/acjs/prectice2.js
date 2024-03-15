//practice 1 

// let number = parseInt(prompt("Enter Number :"));
// if(number % 5  === 0){
//     console.log(`${number}`+" is divided by 5");
// }else{
//     console.log(`${number}`+" is divided by 5");
// }

//practice 2

let name = prompt("Enter Student Name :");
console.log("Student :",name);
let score = parseInt(prompt("Enter a score :"));
let grade
if(score >= 0){ //67
    if(score >= 90 && score <= 100){
        grade = 'A';
    }else if(score >= 70 && score <= 89){
        grade = 'B';
    }else if(score >= 60 && score <= 69){
        grade = 'C';
    }else if(score >= 50 && score <= 59){
        grade = 'D';
    }else if(score >= 0 && score <= 49){
        grade = 'F';
    }
}else{
    console.log("your score is not a valid");
}


console.log("Grade :",grade)