// Practice 1
// let num = parseInt(prompt("Enter a num :"));
// for (let i = 0; i < num; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// Practice 2

let gameNumber = 25;
let userNumber = parseInt(prompt("Guess the game Number :"));

while(userNumber !== gameNumber){
    userNumber = parseInt(prompt("you enter wrong number Guess again :"));
}

console.log("Congratulations, you entered the right number");


userName = prompt("Enter UserName :");

console.log(`@${userName}${userName.length}`)