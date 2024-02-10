const playerList = [];

function addPlayer() {
  // Get input values
  let playerName = document.getElementById("playerFirstName").value + " " + document.getElementById("playerLastName").value;
  let playerPosition = document.getElementById("playerPosition").value;
  let game = document.getElementById("text").value;
  let points = parseInt(document.getElementById("points").value);
  let assists = parseInt(document.getElementById("assists").value);
  let rebounds = parseInt(document.getElementById("rebounds").value);
  let blocks = parseInt(document.getElementById("blocks").value);
  let steals = parseInt(document.getElementById("steals").value);
  let freeThrows = parseInt(document.getElementById("freeThrows").value);
  let twoPointers = parseInt(document.getElementById("twoPointers").value);
  let threePointers = parseInt(document.getElementById("threePointers").value);

  // Validate input
  if (!playerName || 
      !playerPosition || 
      game < 0 || 
      points < 0 || 
      assists < 0 || 
      rebounds < 0 || 
      blocks < 0 || 
      steals < 0 || 
      freeThrows < 0 || 
      twoPointers < 0 || 
      threePointers < 0) {
    alert("Please enter valid input.");
    return;
  }

  // Create player object with initial stats
  const player = {
    name: playerName,
    position: playerPosition,
    game: game,
    points: points,
    assists: assists,
    rebounds: rebounds,
    blocks: blocks,
    steals: steals,
    freeThrows: freeThrows,
    twoPointers: twoPointers,
    threePointers: threePointers
  };

  // Add player to the list
  playerList.push(player);

  // Clear the form
  document.getElementById("playerform").reset();
}
