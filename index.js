let firstCard = Math.floor((Math.random() * 11) + 1);
let secondCard = Math.floor((Math.random() * 11) + 1);
let sum;

sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
console.log(sum)

if  (sum <= 20)  {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳" )
    hasBlackJack = true;
} else  {
    console.log("You are out of the game! 😭")
    isAlive = false;
} 

console.log(isAlive)