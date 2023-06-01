
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const risultato = document.getElementById("result");
const pcPoints = document.getElementById("pcPoints");
const cpuPoints = document.getElementById("cpuPoints");
const pcChoice = document.getElementById("pcChoice");
const cpuChoice = document.getElementById("cpuChoice");

let pcPt = 0;
let cpuPt = 0;

cpuPoints.textContent = `CPU score: ${cpuPt}`;
pcPoints.textContent = `Player score: ${pcPt}`;

pcChoice.textContent = "Player choice:";
cpuChoice.textContent = "CPU choice:";

const scelte = ["Rock", "Paper", "Scissors"];

const vittoria = "Player won";
const sconfitta = "CPU won";
const pareggio = "Tie";

rock.addEventListener("click", () => {
    const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];
    if (computerChoice == "Rock") {
        risultato.textContent = pareggio;
    } else if (computerChoice == "Paper") {
        risultato.textContent = sconfitta;  cpuPt += 1;
    } else {
        risultato.textContent =  vittoria;   pcPt += 1; 
    }

    pcPoints.textContent = `Player score: ${pcPt}`;
    cpuPoints.textContent = `CPU score: ${cpuPt}`;

    pcChoice.textContent = 'Player choice: Rock';
    cpuChoice.textContent = `CPU choice: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("CPU wins");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Player wins");
        setTimeout("location.reload(true)");
    }

})

paper.addEventListener("click", () => {
    const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];
    if (computerChoice == "Rock") {
        risultato.textContent = vittoria; pcPt += 1; 
    } else if (computerChoice == "Paper") {
        risultato.textContent = pareggio;
    } else {
        risultato.textContent = sconfitta;   cpuPt += 1; 
    }
    pcPoints.textContent = `Player score: ${pcPt}`;
    cpuPoints.textContent = `CPU score: ${cpuPt}`;

    pcChoice.textContent = 'Player choice: Paper';
    cpuChoice.textContent = `CPU choice: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("CPU wins");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Player wins");
        setTimeout("location.reload(true)");
    }

})

scissors.addEventListener("click", () => {
    const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];
    if (computerChoice == "Rock") {
        risultato.textContent = sconfitta;  cpuPt += 1;
    } else if (computerChoice == "Paper") {
        risultato.textContent =  vittoria; pcPt += 1; 
    } else { 
        risultato.textContent = pareggio;    
    }
    pcPoints.textContent = `Player score: ${pcPt}`;
    cpuPoints.textContent = `CPU score: ${cpuPt}`;

    pcChoice.textContent = 'Player choice: Scissors';
    cpuChoice.textContent = `CPU choice: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("CPU wins");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Player wins");
        setTimeout("location.reload(true)");
    }
})



 





      
