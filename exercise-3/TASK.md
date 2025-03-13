# Exercise 3: Enhancing the Memory Game with JavaScript Arrays and Loops

## Objective
The goal of this exercise is to improve the existing Memory Game by integrating JavaScript arrays and loops. This will allow for dynamic card management, including storing card data, shuffling the cards, and efficiently handling game logic. Instead of manually defining cards in HTML, students will generate them dynamically.

## Task Description

### Task 1: Card Data Setup
- Define an array containing card symbols (e.g., emojis or numbers) with matching pairs.
- Ensure that each card has an exact match to create pairs.

### Task 2: Shuffling and Rendering the Cards
- Implement a function to shuffle the card array before the game starts.
- Dynamically generate and display the cards in the game board using JavaScript instead of hardcoding them in HTML.

### Task 3: Implementing Flip Logic
- Use an array to keep track of flipped cards.
- Ensure that only two cards can be flipped at a time.
- If the two flipped cards match, keep them visible; otherwise, flip them back after a short delay.

### Task 4: Game Completion and Reset
- Keep track of matched pairs throughout the game.
- Display a congratulatory message once all pairs have been successfully matched.
- Implement a reset function that reshuffles the cards and restores the game state.

## Achievement Criteria
To successfully complete this exercise, students must:
- Implement the card setup and shuffle functionality correctly.
- Dynamically generate and render the cards while attaching appropriate event listeners.
- Implement correct flip logic to match or reset cards accordingly.
- Track matched pairs, display a win message, and provide a game reset option.

## Optional Enhancements
For students who wish to extend the functionality of the Memory Game, consider adding:
- **Move Counter**: Track the number of attempts made by the player.
- **Game Timer**: Measure how long it takes to complete the game.
- **Visual Effects**: Add animations or color transitions when a match is found.
- **Difficulty Levels**: Allow the player to select different grid sizes for varied complexity.
