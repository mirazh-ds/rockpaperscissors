
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

cpuPoints.textContent = `Punteggio CPU: ${cpuPt}`;
pcPoints.textContent = `Punteggio giocatore: ${pcPt}`;

pcChoice.textContent = "Scelta giocatore:";
cpuChoice.textContent = "Scelta CPU:";

const scelte = ["Rock", "Paper", "Scissors"];

const vittoria = "Hai vinto";
const sconfitta = "Hai perso";
const pareggio = "Pareggio";

rock.addEventListener("click", () => {
    const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];
    if (computerChoice == "Rock") {
        risultato.textContent = pareggio;
    } else if (computerChoice == "Paper") {
        risultato.textContent = sconfitta;  cpuPt += 1;
    } else {
        risultato.textContent =  vittoria;   pcPt += 1; 
    }

    pcPoints.textContent = `Punteggio giocatore: ${pcPt}`;
    cpuPoints.textContent = `Punteggio CPU: ${cpuPt}`;

    pcChoice.textContent = 'Scelta giocatore: Sasso';
    cpuChoice.textContent = `Scelta CPU: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("Vittoria CPU");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Vittoria giocatore");
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
    pcPoints.textContent = `Punteggio giocatore: ${pcPt}`;
    cpuPoints.textContent = `Punteggio CPU: ${cpuPt}`;

    pcChoice.textContent = 'Scelta giocatore: Carta';
    cpuChoice.textContent = `Scelta CPU: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("Vittoria CPU");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Vittoria giocatore");
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
    pcPoints.textContent = `Punteggio giocatore: ${pcPt}`;
    cpuPoints.textContent = `Punteggio CPU: ${cpuPt}`;

    pcChoice.textContent = 'Scelta giocatore: Forbici';
    cpuChoice.textContent = `Scelta CPU: ${computerChoice}`;

    if (cpuPt == 5) {
        alert("Vittoria CPU");
        setTimeout("location.reload(true)");
    }

    if (pcPt == 5) {
        alert("Vittoria giocatore");
        setTimeout("location.reload(true)");
    }
})




// let playerChoice

// function playRound() {

// playerChoice = 0
 
// const scelte = ["Rock", "Paper", "Scissors"];
// const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];

// const vittoria = "Hai vinto";
// const sconfitta = "Hai perso";
// const pareggio = "Pareggio";

//         if (playerChoice == 1 && computerChoice == "Paper") {
//             console.log(sconfitta);
//         } else if (playerChoice == 1 && computerChoice == "Scissors") {
//             console.log(vittoria);
//         } else if (playerChoice == 2 && computerChoice == "Scissors") {
//             console.log(sconfitta); 
//         } else if (playerChoice == 2 && computerChoice == "Rock") {
//             console.log(vittoria); 
//         } else if (playerChoice == 3 && computerChoice == "Paper") {
//             console.log(sconfitta);
//         } else if (playerChoice == 3 && computerChoice == "Rock") {
//             console.log(vittoria); 
//         } else {
//             console.log(pareggio);
//         }
    
// }

function playMatch() {

    let giocati = 1;
    let ptPlayer = 0;
    let ptCpu = 0
    let pareggi = 0;

        for (let i = 0; i < 5; i++) {
            
            console.log(`Round numero: ${giocati}`)

            const playerChoice = prompt("Sasso, Carta, Forbici").toLowerCase(); 
            const scelte = ["Rock", "Paper", "Scissors"];
            const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];
    
            if (playerChoice == "rock" && computerChoice == "Paper") {
                ptCpu++;
            } else if (playerChoice == "rock" && computerChoice == "Scissors") {
                ptPlayer++;
            } else if (playerChoice == "paper" && computerChoice == "Scissors") {
                ptCpu++; 
            } else if (playerChoice == "paper" && computerChoice == "Rock") {
                ptPlayer++; 
            } else if (playerChoice == "scissors" && computerChoice == "Paper") {
                ptCpu++;
            } else if (playerChoice == "scissors" && computerChoice == "Rock") {
                ptPlayer++; 
            } else {
                pareggi++;
            }
            
            giocati++;

            console.log(`Player choice: ${playerChoice}`);
            console.log(`Computer choice: ${computerChoice}`);

            
            console.log(`Player: ${ptPlayer}; Computer: ${ptCpu}; Ties: ${pareggi}.`)
            
        }

    
    }



 





      
