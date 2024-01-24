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

  // Create player object
  var player = {
    name: playerName,
    position: playerPosition
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

  // Populate the dropdown with players
  players.forEach(function(player) {
    var option = document.createElement("option");
    option.value = player.name;
    option.textContent = player.name;
    selectedPlayersDropdown.appendChild(option);
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
    selectedPlayers.push(selectedPlayersDropdown.selectedOptions[i].value);
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

  // Clear the form
  document.getElementById("gameForm").reset();
}

function updateGameList() {
  var gameList = document.getElementById("gameList");
  gameList.innerHTML = ""; // Clear existing list

  // Populate the game list
  games.forEach(function(game) {
    var listItem = document.createElement("li");
    listItem.textContent = `${game.name} - Players: ${game.players.join(", ")}`;
    gameList.appendChild(listItem);
  });
}

// Initial update of player list and game list
updatePlayerList();
updateGameList();
