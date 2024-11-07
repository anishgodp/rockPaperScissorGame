// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Get computer's choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// Get human's choice with validation
function getHumanChoice() {
	while (true) {
		const choice = prompt("Choose rock, paper or scissors")
			.toLowerCase()
			.trim();
		if (["rock", "paper", "scissors"].includes(choice)) {
			return choice;
		}
		console.log("Invalid choice! Please choose rock, paper, or scissors.");
	}
}

// Play a single round
function playRound(humanChoice, computerChoice) {
	console.log(`Your choice: ${humanChoice}`);
	console.log(`Computer's choice: ${computerChoice}`);

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

// Main game function
function playGame() {
	console.clear(); // Clear the console at the start
	console.log("Welcome to Rock Paper Scissors!");
	console.log("Playing 5 rounds...");
	console.log("-----------------------");

	humanScore = 0;
	computerScore = 0;

	for (let round = 1; round <= 5; round++) {
		console.log(`\nRound ${round}:`);
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		const result = playRound(humanChoice, computerChoice);
		console.log(result);
		console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
	}

	console.log("\n-----------------------");
	console.log("Game Over!");
	console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

	if (humanScore > computerScore) {
		console.log("🎉 Congratulations! You win the game!");
	} else if (humanScore < computerScore) {
		console.log("💻 The computer wins the game!");
	} else {
		console.log("🤝 It's a tie game!");
	}
}

// Start the game
playGame();
