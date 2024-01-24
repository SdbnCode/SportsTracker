// JavaScript code goes here

var players = []; // Array to store players
var games = []; // Array to store games

function addPlayer() {
  // Get input values
  var playerName = document.getElementById("playerName").value;
  var playerPosition = document.getElementById("playerPosition").value;

  // Validate input
  if (!playerName || !playerPosition) {
    alert("Please enter both player name and position.");
    return;
  }

  // Create player object with initial stats
  var player = {
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
  var playerList = document.getElementById("playerList");
  playerList.innerHTML = ""; // Clear existing list

  // Populate the player list
  players.forEach(function(player) {
    var listItem = document.createElement("li");
    listItem.textContent = `${player.name} - ${player.position}`;
    playerList.appendChild(listItem);
  });

  // Update the list of players in the game form
  updatePlayerDropdown();
}

function updatePlayerDropdown() {
  var selectedPlayersDropdown = document.getElementById("selectedPlayers");
  selectedPlayersDropdown.innerHTML = ""; // Clear existing dropdown options

  var statPlayerDropdown = document.getElementById("statPlayer");
  statPlayerDropdown.innerHTML = ""; // Clear existing dropdown options

  // Populate the dropdowns with players
  players.forEach(function(player) {
    var optionSelectedPlayers = document.createElement("option");
    optionSelectedPlayers.value = player.name;
    optionSelectedPlayers.textContent = player.name;
    selectedPlayersDropdown.appendChild(optionSelectedPlayers);

    var optionStatPlayer = document.createElement("option");
    optionStatPlayer.value = player.name;
    optionStatPlayer.textContent = player.name;
    statPlayerDropdown.appendChild(optionStatPlayer);
  });
}


function createGame() {
  // Get input values
  var gameName = document.getElementById("gameName").value;
  var selectedPlayersDropdown = document.getElementById("selectedPlayers");
  var selectedPlayers = [];

  // Validate input
  if (!gameName || selectedPlayersDropdown.selectedOptions.length === 0) {
    alert("Please enter a game name and select at least one player.");
    return;
  }

  // Get selected players
  for (var i = 0; i < selectedPlayersDropdown.selectedOptions.length; i++) {
    var playerName = selectedPlayersDropdown.selectedOptions[i].value;

    // Find the player by name in the players array
    var player = players.find(function (p) {
      return p.name === playerName;
    });

    // Add player to the selected players list for the game
    selectedPlayers.push(player);
  }

  // Create game object
  var game = {
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
  var gameList = document.getElementById("gameList");
  gameList.innerHTML = ""; // Clear existing list

  // Populate the game list
  games.forEach(function(game) {
    var listItem = document.createElement("li");
    listItem.textContent = `${game.name} - Players: ${game.players.map(function(player) {
      return player.name;
    }).join(", ")}`;
    gameList.appendChild(listItem);
  });
}


function updateGameDropdown() {
  var statGameDropdown = document.getElementById("statGame");
  statGameDropdown.innerHTML = ""; // Clear existing dropdown options

  // Populate the dropdown with games
  games.forEach(function(game) {
    var option = document.createElement("option");
    option.value = game.name;
    option.textContent = game.name;
    statGameDropdown.appendChild(option);
  });
}

// Function to record stats for a player during a game
function recordStats() {
  var playerName = document.getElementById("statPlayer").value;
  var selectedGame = document.getElementById("statGame").value;
  var selectedStat = document.getElementById("statType").value;
  var statValue = parseInt(document.getElementById("statValue").value);

  // Find the game by name in the games array
  var game = games.find(function(g) {
    return g.name === selectedGame;
  });

  // Find the player by name in the players array within the selected game
  var player = game.players.find(function(p) {
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



