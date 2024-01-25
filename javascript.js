// JavaScript code goes here

const players = []; // Array to store players
const games = []; // Array to store games

function addPlayer() {
  // Get input values
  const playerName = document.getElementById("playerName").value;
  const playerPosition = document.getElementById("playerPosition").value;

  // Validate input
  if (!playerName || !playerPosition) {
    alert("Please enter both player name and position.");
    return;
  }

  // Create player object with initial stats
  const player = {
    name: playerName,
    position: playerPosition,
    stats: {
      points: 0,
      assists: 0,
      rebounds: 0,
      blocks: 0,
      steals: 0,
      freeThrows: 0,
      twoPointers: 0,
      threePointers: 0
    }
  };

  // Add player to the list
  players.push(player);

  // Update player list
  updatePlayerList();

  // Clear the form
  document.getElementById("playerForm").reset();
}

function updatePlayerList() {
  let playerList = document.getElementById("playerList");
  playerList.innerHTML = ""; // Clear existing list

  // Populate the player list
  players.forEach(function(player) {
    let listItem = document.createElement("li");
    listItem.textContent = `${player.name} - ${player.position}`;
    playerList.appendChild(listItem);
  });

  // Update the list of players in the game form
  updatePlayerDropdown();
}

function updatePlayerDropdown() {
  let selectedPlayersDropdown = document.getElementById("selectedPlayers");
  selectedPlayersDropdown.innerHTML = ""; // Clear existing dropdown options

  let statPlayerDropdown = document.getElementById("statPlayer");
  statPlayerDropdown.innerHTML = ""; // Clear existing dropdown options

  // Populate the dropdowns with players
  players.forEach(function(player) {
    let optionSelectedPlayers = document.createElement("option");
    optionSelectedPlayers.value = player.name;
    optionSelectedPlayers.textContent = player.name;
    selectedPlayersDropdown.appendChild(optionSelectedPlayers);

    let optionStatPlayer = document.createElement("option");
    optionStatPlayer.value = player.name;
    optionStatPlayer.textContent = player.name;
    statPlayerDropdown.appendChild(optionStatPlayer);
  });
}


function createGame() {
  // Get input values
  let gameName = document.getElementById("gameName").value;
  let selectedPlayersDropdown = document.getElementById("selectedPlayers");
  let selectedPlayers = [];

  // Validate input
  if (!gameName || selectedPlayersDropdown.selectedOptions.length === 0) {
    alert("Please enter a game name and select at least one player.");
    return;
  }

  // Get selected players
  for (let i = 0; i < selectedPlayersDropdown.selectedOptions.length; i++) {
    let playerName = selectedPlayersDropdown.selectedOptions[i].value;

    // Find the player by name in the players array
    let player = players.find(function (p) {
      return p.name === playerName;
    });

    // Add player to the selected players list for the game
    selectedPlayers.push(player);
  }

  // Create game object
  let game = {
    name: gameName,
    players: selectedPlayers
  };

  // Add game to the list
  games.push(game);

  // Update game schedule
  updateGameList();

  // Update game dropdown
  updateGameDropdown();

  // Clear the form
  document.getElementById("gameForm").reset();
}


function updateGameList() {
  let gameList = document.getElementById("gameList");
  gameList.innerHTML = ""; // Clear existing list

  // Populate the game list
  games.forEach(function(game) {
    let listItem = document.createElement("li");
    listItem.textContent = `${game.name} - Players: ${game.players.map(function(player) {
      return player.name;
    }).join(", ")}`;
    gameList.appendChild(listItem);
  });
}


function updateGameDropdown() {
  let statGameDropdown = document.getElementById("statGame");
  statGameDropdown.innerHTML = ""; // Clear existing dropdown options

  // Populate the dropdown with games
  games.forEach(function(game) {
    let option = document.createElement("option");
    option.value = game.name;
    option.textContent = game.name;
    statGameDropdown.appendChild(option);
  });
}

// Function to record stats for a player during a game
function recordStats() {
  let playerName = document.getElementById("statPlayer").value;
  let selectedGame = document.getElementById("statGame").value;
  let selectedStat = document.getElementById("statType").value;
  let statValue = parseInt(document.getElementById("statValue").value);

  // Find the game by name in the games array
  let game = games.find(function(g) {
    return g.name === selectedGame;
  });

  // Find the player by name in the players array within the selected game
  let player = game.players.find(function(p) {
    return p.name === playerName;
  });

  // Record the stat for the player
  if (player && !isNaN(statValue)) {
    player.stats[selectedStat] += statValue;
  } else {
    alert("Invalid input. Please check the player and stat selections, and ensure the value is a number.");
  }

  // Update the game schedule and player list
  updateGameList();
  updatePlayerList();
}

// Initial update of player list and game list
updatePlayerList();
updateGameList();