const buttonRock = document.querySelector(".rock");
const buttonScissor = document.querySelector(".scissor");
const buttonPaper = document.querySelector(".paper");
const buttonReset = document.querySelector(".btnReset");
const bgContainer = document.querySelector(".container");
const result = document.querySelector("h1");
const myScore = document.querySelector(".myScore");
const pcScore = document.querySelector(".pcScore");

buttonRock.addEventListener("click", () => logicaGame("rock"));
buttonPaper.addEventListener("click", () => logicaGame("paper"));
buttonScissor.addEventListener("click", () => logicaGame("scissor"));
buttonReset.addEventListener("click", () => {
  bgContainer.style.backgroundColor = "white";
  result.textContent = "";
  pcScore.textContent = "0";
  myScore.textContent = "0";
  playerScore = 0;
  computerScore = 0;
});
const possibilità = ["rock", "paper", "scissor"];
let playerScore = 1;
let computerScore = 1;

function logicaGame(playerChoice) {
  const computerChoice =
    possibilità[Math.floor(Math.random() * possibilità.length)];
  result.classList.remove("hidden");
  if (playerChoice === computerChoice) {
    console.log("Draw");
    bgContainer.style.backgroundColor = "gray";
    result.textContent = "DRAW";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    console.log(`You Win with :${playerChoice} vs Computer :${computerChoice}`);
    bgContainer.style.backgroundColor = "#00FF00";
    result.textContent = "You WIN";
    myScore.textContent = playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`You Win with :${playerChoice} vs Computer :${computerChoice}`);
    bgContainer.style.backgroundColor = "#00FF00";
    result.textContent = "You WIN";

    myScore.textContent = playerScore++;
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    console.log(`You Win with :${playerChoice} vs Computer :${computerChoice}`);
    bgContainer.style.backgroundColor = "#00FF00";
    result.textContent = "You WIN";
    myScore.textContent = playerScore++;
  } else {
    result.classList.remove("hidden");
    result.textContent = "You LOSE";
    bgContainer.style.backgroundColor = "red";
    console.log(
      `You Lose--> Computer :${computerChoice}  You: ${playerChoice}`
    );
    pcScore.textContent = computerScore++;
  }
}
