let firstCard = Math.floor((Math.random() * 11) + 1)
let secondCard = Math.floor((Math.random() * 11) + 1)

let sum = firstCard + secondCard;
console.log(sum)

if  (sum <= 20)  {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳" )
} else  {
    console.log("You are out of the game! 😭")
} 