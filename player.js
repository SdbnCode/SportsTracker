// JavaScript code goes here

const players = []; // Array to store players

function addPlayer() {
  // Get input values
  let playerName = document.getElementById("playerName").value;
  let playerPosition = document.getElementById("playerPosition").value;

  // Validate input
  if (!playerName || !playerPosition || game < 0 || points < 0 || assists < 0 || rebounds < 0 || blocks < 0 || steals < 0 || freeThrows < 0 || twoPointers < 0 || threePointers < 0) {
    alert("Please enter valid input.");
    return;
  }

  // Create player object with initial stats
  const player = {
    name: playerName,
    position: playerPosition,
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

  function updatePlayerList() {
    let playerList = document.getElementById("playerList");
    playerList.innerHTML = ""; // Clear existing list

    // Populate the player list
    players.forEach(function(player) {
      let listItem = document.createElement("li");
      listItem.textContent = `${player.name} - ${player.position}`;
      playerList.appendChild(listItem);
    });
  }
