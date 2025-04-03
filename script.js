<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Setup</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gradient-to-r from-pink-400 to-purple-500 h-screen flex justify-center items-center p-4">
    <div class="bg-white rounded-lg shadow-xl p-8 w-full max-w-md transition-transform hover:scale-105">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">Game Setup</h2>
        <div id="player-inputs" class="space-y-4 mb-6">
            <div class="flex items-center gap-4">
                <div class="space-y-2 flex-grow">
                    <label for="player1" class="block text-gray-700 text-sm font-bold mb-1">Player 1:</label>
                    <input type="text" id="player1" name="player1" placeholder="Enter Player 1 Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="space-y-2">
                    <label for="gender1" class="block text-gray-700 text-sm font-bold mb-1">Gender:</label>
                    <select id="gender1" name="gender1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="space-y-2 flex-grow">
                    <label for="player2" class="block text-gray-700 text-sm font-bold mb-1">Player 2:</label>
                    <input type="text" id="player2" name="player2" placeholder="Enter Player 2 Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="space-y-2">
                    <label for="gender2" class="block text-gray-700 text-sm font-bold mb-1">Gender:</label>
                    <select id="gender2" name="gender2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <button id="add-player" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300">Add Player</button>
        </div>
        <div id="intensity-selection" class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Intensity:</h3>
            <div class="flex space-x-4">
                <div class="flex items-center">
                    <input type="radio" id="light" name="intensity" value="light" class="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 focus:ring-opacity-50">
                    <label for="light" class="ml-2 text-sm font-medium text-gray-900">Light</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="medium" name="intensity" value="medium" class="w-4 h-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 focus:ring-opacity-50">
                    <label for="medium" class="ml-2 text-sm font-medium text-gray-900">Medium</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="spicy" name="intensity" value="spicy" class="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 focus:ring-opacity-50">
                    <label for="spicy" class="ml-2 text-sm font-medium text-gray-900">Spicy</label>
                </div>
            </div>
        </div>
        <button id="start-game" class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300 text-lg">Start Game</button>
    </div>

    <script>
        const playerInputs = document.getElementById('player-inputs');
        const addPlayerButton = document.getElementById('add-player');
        const startGameButton = document.getElementById('start-game');
        let playerCount = 2; // Start with 2 players
        let players = [];

        function createPlayerInput(playerNumber) {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'flex items-center gap-4 space-y-2'; // Added flex and gap-4

            const nameDiv = document.createElement('div');
            nameDiv.className = 'space-y-2 flex-grow'; //makes name input take up available space
            const nameLabel = document.createElement('label');
            nameLabel.for = `player${playerNumber}`;
            nameLabel.className = 'block text-gray-700 text-sm font-bold mb-1';
            nameLabel.textContent = `Player ${playerNumber} Name:`;
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.id = `player${playerNumber}`;
            nameInput.name = `player${playerNumber}`;
            nameInput.placeholder = `Enter Player ${playerNumber} Name`;
            nameInput.className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
            nameDiv.appendChild(nameLabel);
            nameDiv.appendChild(nameInput);

            const genderDiv = document.createElement('div');
            genderDiv.className = 'space-y-2';
            const genderLabel = document.createElement('label');
            genderLabel.for = `gender${playerNumber}`;
            genderLabel.className = 'block text-gray-700 text-sm font-bold mb-1';
            genderLabel.textContent = `Gender:`;
            const genderSelect = document.createElement('select');
            genderSelect.id = `gender${playerNumber}`;
            genderSelect.name = `gender${playerNumber}`;
            genderSelect.className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';

            const maleOption = document.createElement('option');
            maleOption.value = 'male';
            maleOption.textContent = 'Male';
            const femaleOption = document.createElement('option');
            femaleOption.value = 'female';
            femaleOption.textContent = 'Female';
            const otherOption = document.createElement('option');
            otherOption.value = 'other';
            otherOption.textContent = 'Other';

            genderSelect.appendChild(maleOption);
            genderSelect.appendChild(femaleOption);
            genderSelect.appendChild(otherOption);
            genderDiv.appendChild(genderLabel);
            genderDiv.appendChild(genderSelect);

            playerDiv.appendChild(nameDiv);
            playerDiv.appendChild(genderDiv);
            return playerDiv;
        }

        addPlayerButton.addEventListener('click', () => {
            playerCount++;
            const newPlayerInput = createPlayerInput(playerCount);
            playerInputs.appendChild(newPlayerInput);
        });

        // Initial setup for the first two players.
        playerInputs.innerHTML = ''; // Clear the initial player inputs
        playerInputs.appendChild(createPlayerInput(1));
        playerInputs.appendChild(createPlayerInput(2));

        startGameButton.addEventListener('click', () => {
            players = [];
            for (let i = 1; i <= playerCount; i++) {
                const playerName = document.getElementById(`player${i}`).value;
                const playerGender = document.getElementById(`gender${i}`).value;

                players.push({
                    name: playerName,
                    gender: playerGender,
                });
            }
            const intensity = document.querySelector('input[name="intensity"]:checked')?.value;

            if (!intensity) {
                alert('Please select an intensity level.');
                return;
            }

            if (players.some(player => !player.name.trim())) {
                alert('Please enter names for all players.');
                return;
            }

            localStorage.setItem('players', JSON.stringify(players));
            localStorage.setItem('intensity', intensity);
            window.location.href = 'opponents.html'; // Redirect to the gameplay page
        });
    </script>
</body>
</html>
