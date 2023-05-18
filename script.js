


function playRound() {


const playerChoice = prompt("Sasso, Carta, Forbici"); 
const scelte = ["Rock", "Paper", "Scissors"];
const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];

const vittoria = "Hai vinto";
const sconfitta = "Hai perso";
const pareggio = "Pareggio";

        if (playerChoice == "rock" && computerChoice == "Paper") {
            return sconfitta;
        } else if (playerChoice == "rock" && computerChoice == "Scissors") {
            return vittoria;
        } else if (playerChoice == "paper" && computerChoice == "Scissors") {
            return sconfitta; 
        } else if (playerChoice == "paper" && computerChoice == "Rock") {
            return vittoria; 
        } else if (playerChoice == "scissors" && computerChoice == "Paper") {
            return sconfitta;
        } else if (playerChoice == "scissors" && computerChoice == "Rock") {
            return vittoria; 
        } else {
            return pareggio;
        }
    
}

 





      
