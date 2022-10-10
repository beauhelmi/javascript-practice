/*NESTED LOOP*/
// for (let i=1; i <= 10; i++) {
//     console.log(`big loop number ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`small loop number ${j}`)
//     }
// }

// /*NESTED ARRAY*/
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'JUanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i]
//     console.log(`ROW ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

//SO BASICALLY ITS SORTING ARRAY AND CATEGORIZE THEM ACCORDINLY
//BUT THIS IS DONE USING A FOR LOOP OR ALSO KNOWN AS
//NESTED FOR LOOP

/*exercise LOOP
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let i = 0;i <= people.length; i ++) {
    people[i] = people[i].toUpperCase()
    console.log(people[i])
}*/

//WHILE LOOP
//for user input or game loop

// let count = 0;
// while(count <10) {
//     console.log(count)
//     count++;
// }

// const secret = "BabyHippo"

// let guess = prompt("Enter the secret code");
// while (guess !== secret) {
//     guess = prompt("ENTER THE SECRET CODE!");
// }
// console.log("Congrats you got the code!")

let input = prompt('hey say something')
while (true) {
    input = prompt(input);
    if (input === "stop")  break;
}
console.log("Ok you win!")