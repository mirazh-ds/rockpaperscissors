function getComputerChoice() {
    const scelte = ["Sasso", "Carta", "Forbici"];

    const random = scelte[Math.floor(Math.random() * scelte.length)];
    
    return random;
}