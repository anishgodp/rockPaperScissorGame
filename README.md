# Browser Console Rock Paper Scissors Game

A simple implementation of the classic Rock Paper Scissors game that runs in the browser console. Play against the computer in a best-of-5 rounds format!

## Description

This is a JavaScript-based Rock Paper Scissors game where players compete against the computer through the browser's console. The game consists of 5 rounds, with clear score tracking and round-by-round feedback.

## Features

-   5 rounds of Rock Paper Scissors
-   Input validation for player choices
-   Clear score tracking
-   Round-by-round progress display
-   Final score announcement with emoji feedback
-   Computer random choice generation

## How to Play

1. Open your browser's developer tools (Usually F12 or right-click and select "Inspect")
2. Navigate to the Console tab
3. Copy and paste the contents of `script.js` into the console
4. The game will start automatically
5. Follow the prompts to make your choice (rock, paper, or scissors) for each round
6. Watch the results and scoring after each round
7. See who wins after all 5 rounds are complete!

## Game Rules

-   Rock beats Scissors
-   Scissors beats Paper
-   Paper beats Rock
-   Same choices result in a tie

## File Structure

```
├── index.html      # HTML file (currently empty, for future UI implementation)
└── script.js       # Main game logic and functionality
```

## Technical Details

### Functions

-   `getComputerChoice()`: Randomly selects computer's choice
-   `getHumanChoice()`: Gets and validates player's input
-   `playRound()`: Determines the winner of a single round
-   `playGame()`: Main game loop that handles the 5-round game

### Score Tracking

-   Keeps track of both human and computer scores
-   Updates after each round
-   Displays running score and final results

## Future Improvements

Potential enhancements that could be added:

1. Graphical user interface (UI)
2. Option to play multiple games
3. Difficulty levels
4. Score history
5. Animated results

## Contributing

Feel free to fork this project and make your own improvements. Pull requests are welcome!

## License

This project is open source and available for anyone to use and modify.
