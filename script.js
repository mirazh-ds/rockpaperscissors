


// function playRound() {


// const playerChoice = prompt("Sasso, Carta, Forbici").toLowerCase(); 
// const scelte = ["Rock", "Paper", "Scissors"];
// const computerChoice = scelte[Math.floor(Math.random() * scelte.length)];

// const vittoria = "Hai vinto";
// const sconfitta = "Hai perso";
// const pareggio = "Pareggio";

//         if (playerChoice == "rock" && computerChoice == "Paper") {
//             return sconfitta;
//         } else if (playerChoice == "rock" && computerChoice == "Scissors") {
//             return vittoria;
//         } else if (playerChoice == "paper" && computerChoice == "Scissors") {
//             return sconfitta; 
//         } else if (playerChoice == "paper" && computerChoice == "Rock") {
//             return vittoria; 
//         } else if (playerChoice == "scissors" && computerChoice == "Paper") {
//             return sconfitta;
//         } else if (playerChoice == "scissors" && computerChoice == "Rock") {
//             return vittoria; 
//         } else {
//             return pareggio;
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



 





      
