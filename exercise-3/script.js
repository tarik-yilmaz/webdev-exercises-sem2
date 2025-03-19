// script.js

// Task 1: Set up the cards
const cards = ['🍎', '🍎', '🍊', '🍊', '🍇', '🍇', '🍉', '🍉']; // 4 pairs
let flippedCards = []; // Holds flipped cards
let matches = 0;       // Tracks matches

// Shuffles the array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Task 2: Build the board
function makeBoard() {
    const gameBoard = document.getElementById('game-board'); // Grab the board
    gameBoard.innerHTML = ''; // Wipe it clean

    shuffle(cards); // Randomize cards

    // Add cards to board
    cards.forEach(symbol => {
        const card = document.createElement('div'); // Make a card
        card.classList.add('card'); // Style it
        card.textContent = '?'; // Start with ?
        card.symbol = symbol; // Save the symbol
        card.addEventListener('click', flipCard); // Click to flip
        gameBoard.appendChild(card); // Put it on the board
    });
}

// Task 3: Flip a card
function flipCard(event) {
    const card = event.target; // Get the card clicked

    if (flippedCards.length == 2) { // Max 2 flips
        return;
    }

    card.textContent = card.symbol; // Show symbol
    flippedCards.push(card); // Add to flipped list

    if (flippedCards.length == 2) { // Two cards up?
        checkForMatch(); // Check them
    }
}

// See if cards match
function checkForMatch() {
    const card1 = flippedCards[0]; // First flipped
    const card2 = flippedCards[1]; // Second flipped

    if (card1.symbol == card2.symbol) { // Match?
        matches++; // Count it
        flippedCards = []; // Reset flips
        if (matches == 4) { // All done?
            alert('You win!'); // Yay!
        }
    } else { // No match
        setTimeout(() => { // Wait a sec
            card1.textContent = '?'; // Hide again
            card2.textContent = '?'; // Hide again
            flippedCards = []; // Reset flips
        }, 1000);
    }
}

// Task 4: Start over
function reset() {
    matches = 0; // Zero matches
    flippedCards = []; // Clear flips
    makeBoard(); // New board
}

// Kick it off
makeBoard();