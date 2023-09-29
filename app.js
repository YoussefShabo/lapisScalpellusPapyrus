let playerChoice = null;
let computerChoice = null;

const choiceList = ["Lapis", "Papyrus", "Scalpellus"];

computerChoice = choiceList[Math.floor(Math.random()*3)];

console.log("the computer chose " + computerChoice);

let days = 30;

while (days > 0) {
    console.log(days + " days left!");
    days = days -1;
}
console.log("it's finally here!");

