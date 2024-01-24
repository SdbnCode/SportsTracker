// JavaScript code goes here

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
    var playerList = document.getElementById("playerList");
    var listItem = document.createElement("li");
    listItem.textContent = `${player.name} - ${player.position}`;
    playerList.appendChild(listItem);
  
    // Clear the form
    document.getElementById("playerForm").reset();
  }
  