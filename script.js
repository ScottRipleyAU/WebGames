const playerSetup = document.getElementById('playerSetup');
const gameScreen = document.getElementById('gameScreen');
const cardTextElement = document.getElementById('cardText');
const sipButton = document.getElementById('sipButton');
const sinButton = document.getElementById('sinButton');
const turnDisplay = document.getElementById('turnDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const roundCounterDisplay = document.getElementById('roundCounter');

let cardTexts = [
    { text: "Take a sip!", category: "Sip" },
    { text: "Confess a sin!", category: "Sin" },
    { text: "Another sip!", category: "Sip" },
    { text: "Tell a secret sin!", category: "Sin" },
    { text: "Finish your drink!", category: "Sip" },
    // Add more cards with text and category
];

let currentCardIndex = 0;
let players = [];
let currentPlayerIndex = 0;
let round = 1;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayNextCard() {
    const currentCard = cardTexts[currentCardIndex];
    cardTextElement.innerHTML = `<strong>${currentCard.category}:</strong> ${currentCard.text}`;
    currentCardIndex = (currentCardIndex + 1) % cardTexts.length;
}

function updateTurnDisplay() {
    turnDisplay.textContent = `${players[currentPlayerIndex].name}'s Turn`;
}

function updateScoreDisplay() {
    let scoreHTML = "<h3>Scores:</h3>";
    players.forEach(player => {
        scoreHTML += `<p>${player.name}: Sips - ${player.sips}, Sins - ${player.sins}</p>`;
    });
    scoreDisplay.innerHTML = scoreHTML;
}

function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    if (currentPlayerIndex === 0) {
        round++;
        roundCounterDisplay.textContent = `Round: ${round}`;
    }
    updateTurnDisplay();
    displayNextCard();
}

sipButton.addEventListener('click', function() {
    players[currentPlayerIndex].sips++;
    updateScoreDisplay();
    nextPlayer();
});

sinButton.addEventListener('click', function() {
    players[currentPlayerIndex].sins++;
    updateScoreDisplay();
    nextPlayer();
});

//Create the player form in javascript.
playerSetup.innerHTML = `
    <h2>Enter Player Names and Genders</h2>
    <form id="playerForm">
        <div class="playerInput">
            <label for="player1Name">Player 1 Name:</label>
            <input type="text" id="player1Name" name="player1Name" required>
            <select id="player1Gender" name="player1Gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="playerInput">
            <label for="player2Name">Player 2 Name:</label>
            <input type="text" id="player2Name" name="player2Name">
            <select id="player2Gender" name="player2Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="playerInput">
            <label for="player3Name">Player 3 Name:</label>
            <input type="text" id="player3Name" name="player3Name">
            <select id="player3Gender" name="player3Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div class="playerInput">
            <label for="player4Name">Player 4 Name:</label>
            <input type="text" id="player4Name" name="player4Name">
            <select id="player4Gender" name="player4Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <button type="submit">Start Game</button>
    </form>
`;

const playerForm = document.getElementById('playerForm');

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    players = [];
    for (let i = 1; i <= 4; i++) {
        const name = document.getElementById(`player${i}Name`).value;
        const gender = document.getElementById(`player${i}Gender`).value;
        if (name && gender) {
            players.push({ name: name, gender: gender, sips: 0, sins: 0 });
        }
    }

    shuffleArray(cardTexts);

    playerSetup.style.display = '
