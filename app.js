let playerChoice = null;
let computerChoice = null;

const choiceList = ["Lapis", "Papyrus", "Scalpellus"];

computerChoice = choiceList[Math.floor(Math.random()*3)];

console.log("the computer chose " + computerChoice);