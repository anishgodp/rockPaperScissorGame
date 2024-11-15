// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Get computer's choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// Play a single round
function playRound(humanChoice, computerChoice) {
	const resultDiv = document.getElementById("result");
	resultDiv.innerText = `Your choice: ${humanChoice}`;
	resultDiv.innerText += `\nComputer's choice: ${computerChoice}`;

	if (humanChoice === computerChoice) {
		return "It's a tie!";
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		return `You win! ${humanChoice} beats ${computerChoice}`;
	} else {
		computerScore++;
		return `You lose! ${computerChoice} beats ${humanChoice}`;
	}
}

// Update scores and display results
function updateGameResult(result) {
	const resultDiv = document.getElementById("result");
	resultDiv.innerText += `\n${result}`;
	resultDiv.innerText += `\nScore - You: ${humanScore}, Computer: ${computerScore}`;
	if (humanScore >= 5) {
		resultDiv.innerText = "You win!";
	} else if (computerScore >= 5) {
		resultDiv.innerText = "Computer wins!";
	}
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
	const computerChoice = getComputerChoice();
	const result = playRound("rock", computerChoice);
	updateGameResult(result);
});

document.getElementById("paper").addEventListener("click", () => {
	const computerChoice = getComputerChoice();
	const result = playRound("paper", computerChoice);
	updateGameResult(result);
});

document.getElementById("scissors").addEventListener("click", () => {
	const computerChoice = getComputerChoice();
	const result = playRound("scissors", computerChoice);
	updateGameResult(result);
});

