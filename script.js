
function deleteRow(i){ 
  if(!confirm("Are you sure you want to make these changes?"))
  return
  playerName.splice(i, 1)
  position.splice(i, 1)
  game.splice(i, 1)
  points.splice(i, 1)
  assists.splice(i, 1)
  rebounds.splice(i, 1)
  blocks.splice(i, 1)
  steals.splice(i, 1)
  freeThrows.splice(i, 1)
  freeThrowsMade.splice(i, 1)
  twoPointers.splice(i, 1)
  threePointers.splice(i, 1)
  addPlayer()
  LocalStorage()
}

function activateEdit(i){
  pNameInput.value = playerName[i]
  pPositionInput.value = position[i]
  pGameInput.value = game[i]
  pPointsInput.value = points[i]
  pAssistsInput.value = assists[i]
  pReboundsInput.value = rebounds[i]
  pBlocksInput.value = blocks[i]
  pStealsInput.value = steals[i]
  pFreeThrowsInput.value = freeThrows[i]
  pFreeThrowsMadeInput.value = freeThrowsMade[i]
  pTwoPointersInput.value = twoPointers[i]
  pThreePointersInput.value = threePointers[i]
  editIndex = i;
}

function cancelEdit(){
  clearInput()
  editIndex = -1
  submitButton.classList.remove("hide")
  editSection.classList.add("hide")
  }

function editRow(){
  if(editIndex == -1)
  return
  playerName[editIndex] = pNameInput.value
  position[editIndex] = pPositionInput.value
  game[editIndex] = pGameInput.value
  points[editIndex] = pPointsInput.value
  assists[editIndex] = pAssistsInput.value
  rebounds[editIndex] = pReboundsInput.value
  blocks[editIndex] = pBlocksInput.value
  steals[editIndex] = pStealsInput.value
  freeThrows[editIndex] = pFreeThrowsInput.value
  freeThrowsMade[editIndex] = pFreeThrowsMadeInput.value
  twoPointers[editIndex] = pTwoPointersInput.value
  threePointers[editIndex] = pThreePointersInput.value
  addPlayer()
  LocalStorage()
  cancelEdit()
}

function clearInput() { 
  pNameInput.value = ""
  pPositionInput.checked = false
  pGameInput.value = ""
  pPointsInput.value = ""
  pAssistsInput.value = ""
  pReboundsInput.value = ""
  pBlocksInput.value = ""
  pStealsInput.value = ""
  pFreeThrowsInput.value = ""
  pFreeThrowsMadeInput.value = ""
  pTwoPointersInput.value = ""
  pThreePointersInput.value = ""
} 

function LocalStorage(){ 
  localStorage.setItem("playerName", JSON.stringify(playerName));
  localStorage.setItem("position", JSON.stringify(position));
  localStorage.setItem("game", JSON.stringify(game));
  localStorage.setItem("points", JSON.stringify(points));
  localStorage.setItem("assists", JSON.stringify(assists));
  localStorage.setItem("rebounds", JSON.stringify(rebounds));
  localStorage.setItem("blocks", JSON.stringify(blocks));
  localStorage.setItem("steals", JSON.stringify(steals));
  localStorage.setItem("freeThrows", JSON.stringify(freeThrows));
  localStorage.setItem("freeThrowsMade", JSON.stringify(freeThrowsMade));
  localStorage.setItem("twoPointers", JSON.stringify(twoPointers));
  localStorage.setItem("threePointers", JSON.stringify(threePointers));
}

function addPlayer(){ 
  const tbody = document.getElementById("output");
  const rows = Math.max(playerName.length, position.length, game.length, points.length, assists.length, rebounds.length, blocks.length, steals.length, freeThrows.length, freeThrowsMade.length, twoPointers.length, threePointers.length)
  let html = "";

  for(let i=0; i<rows; i++){ 
    let pName = playerName[i] || "N/A";
    let pPosition = position[i] || "N/A";
    let pGame = game[i] || "N/A";
    let pPoints = points[i] || "N/A";
    let pAssists = assists[i] || "N/A";
    let pRebounds = rebounds[i] || "N/A";
    let pBlocks = blocks[i] || "N/A";
    let pSteals = steals[i] || "N/A";
    let pFreeThrows = freeThrows[i] || "N/A";
    let pFreeThrowsMade = freeThrowsMade[i] || "N/A";
    let pTwoPointers = twoPointers[i] || "N/A";
    let pThreePointers = threePointers[i] || "N/A";
    html += `<tr> 
        <td>${pName}</td> 
        <td>${pPosition}</td>
        <td>${pGame}</td>
        <td>${pPoints}</td>
        <td>${pAssists}</td>
        <td>${pRebounds}</td>
        <td>${pBlocks}</td>
        <td>${pSteals}</td>
        <td>${pFreeThrows}</td>
        <td>${pFreeThrowsMade}</td>
        <td>${pTwoPointers}</td>
        <td>${pThreePointers}</td> 
        <td> 
        <button onclick="activateEdit(${i})" class="edit-button"><img src="image/edit.png" alt="Edit"></button></td> 
        <td> 
        <button onclick="deleteRow(${i})" class="garbage-button"><img src="image/garbage.png" alt="garbage"></button></td> 
        </td> 
    </tr>`         
  } 
  tbody.innerHTML = html; 
} 

let editIndex = -1; 

let playerName = JSON.parse(localStorage.getItem("playerName")) || [];
let position = JSON.parse(localStorage.getItem("position")) || [];
let game = JSON.parse(localStorage.getItem("game")) || [];
let points = JSON.parse(localStorage.getItem("points")) || [];
let assists = JSON.parse(localStorage.getItem("assists")) || [];
let rebounds = JSON.parse(localStorage.getItem("rebounds")) || [];
let blocks = JSON.parse(localStorage.getItem("blocks")) || [];
let steals = JSON.parse(localStorage.getItem("steals")) || [];
let freeThrows = JSON.parse(localStorage.getItem("freeThrows")) || [];
let freeThrowsMade = JSON.parse(localStorage.getItem("freeThrowsMade")) || [];
let twoPointers = JSON.parse(localStorage.getItem("twoPointers")) || [];
let threePointers = JSON.parse(localStorage.getItem("threePointers")) || [];


const pNameInput = document.getElementById("playerName")
const pPositionInput = document.getElementById("position")
const pGameInput = document.getElementById("game")
const pPointsInput = document.getElementById("points")
const pAssistsInput = document.getElementById("assists")
const pReboundsInput = document.getElementById("rebounds")
const pBlocksInput = document.getElementById("blocks")
const pStealsInput = document.getElementById("steals")
const pFreeThrowsInput = document.getElementById("freeThrows")
const pFreeThrowsMadeInput = document.getElementById("freeThrowsMade")
const pTwoPointersInput = document.getElementById("twoPointers")
const pThreePointersInput = document.getElementById("threePointers")

const submitButton = document.getElementById("submit")

addPlayer()

submitButton.addEventListener("click", ()=>{ 
  const pName = pNameInput.value || null;
  const pPosition = pPositionInput.value || null;
  const pGame = pGameInput.value || null;
  const pPoints = pPointsInput.value || null;
  const pAssists = pAssistsInput.value || null;
  const pRebounds = pReboundsInput.value || null;
  const pBlocks = pBlocksInput.value || null;
  const pSteals = pStealsInput.value || null;
  const pFreeThrows = pFreeThrowsInput.value || null;
  const pFreeThrowsMade = pFreeThrowsMadeInput.value || null;
  const pTwoPointers = pTwoPointersInput.value || null;
  const pThreePointers = pThreePointersInput.value || null;

if(pName === null || pPosition === null || pGame === null || pPoints === null || pAssists === null || pRebounds === null || pBlocks === null || pSteals === null || pFreeThrows === null || pFreeThrowsMade === null || pTwoPointers === null || pThreePointers === null){
  alert("Please enter all the fields.") 
    return
  } 

playerName = [pName, ...playerName];
position = [pPosition, ...position];
game = [pGame, ...game];
points = [pPoints, ...points];
assists = [pAssists, ...assists];
rebounds = [pRebounds, ...rebounds];
blocks = [pBlocks, ...blocks];
steals = [pSteals, ...steals];
freeThrows = [pFreeThrows, ...freeThrows];
freeThrowsMade = [pFreeThrowsMade, ...freeThrowsMade];
twoPointers = [pTwoPointers, ...twoPointers];
threePointers = [pThreePointers, ...threePointers];
  
 clearInput(); 
 addPlayer();
 LocalStorage();
});