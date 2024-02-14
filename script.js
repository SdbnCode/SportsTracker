const editIcon = `<i class="fas fa-edit"></i>` 

const deleteIcon = `<i class="fas fa-trash"></i>` 

function clearInput() { 
  NameInput.value = ""
  positionInput.checked = false
  gameInput.value = ""
  pointsInput.value = ""
  assistsInput.value = ""
  reboundsInput.value = ""
  blocksInput.value = ""
  stealsInput.value = ""
  freeThrowsInput.value = ""
  freeThrowsMadeInput.value = ""
  twoPointersInput.value = ""
  threePointersInput.value = ""
} 

function LocalStorage(){ 
  localStorage.setItem("name", JSON.stringify(NAME));
  localStorage.setItem("position", JSON.stringify(POSITION));
  localStorage.setItem("game", JSON.stringify(GAME));
  localStorage.setItem("points", JSON.stringify(POINTS));
  localStorage.setItem("assists", JSON.stringify(ASSISTS));
  localStorage.setItem("rebounds", JSON.stringify(REBOUNDS));
  localStorage.setItem("blocks", JSON.stringify(BLOCKS));
  localStorage.setItem("steals", JSON.stringify(STEALS));
  localStorage.setItem("freeThrows", JSON.stringify(FREETHROWS));
  localStorage.setItem("freeThrowsMade", JSON.stringify(FREETHROWSMADE));
  localStorage.setItem("twoPointers", JSON.stringify(TWOPOINTERS));
  localStorage.setItem("threePointers", JSON.stringify(THREEPOINTERS));
}

function addPlayer(){ 
  const tbody = document.getElementById("output");
  const rows = Math.max(NAME.length, POSITION.length, GAME.length, POINTS.length, ASSISTS.length, REBOUNDS.length, BLOCKS.length, STEALS.length, FREETHROWS.length, FREETHROWSMADE.length, TWOPOINTERS.length, THREEPOINTERS.length);
  let html = "";

  for(let i=0; i<rows; i++){ 
    let pName = NAME[i] || "N/A";
    let pPosition = POSITION[i] || "N/A";
    let pGame = GAME[i] || "N/A";
    let pPoints = POINTS[i] || "N/A";
    let pAssists = ASSISTS[i] || "N/A";
    let pRebounds = REBOUNDS[i] || "N/A";
    let pBlocks = BLOCKS[i] || "N/A";
    let pSteals = STEALS[i] || "N/A";
    let pFreeThrows = FREETHROWS[i] || "N/A";
    let pFreeThrowsMade = FREETHROWSMADE[i] || "N/A";
    let pTwoPointers = TWOPOINTERS[i] || "N/A";
    let pThreePointers = THREEPOINTERS[i] || "N/A";
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
            <button onclick="activateEdit(${i})" class="edit">${editIcon}</button> 
        </td> 
        <td> 
            <button onclick="deleteRow(${i})" class="delete">${deleteIcon}</button> 
        </td> 
    </tr>`         
  } 
  tbody.innerHTML = html; 
} 

let editIndex = -1; 

let NAME = JSON.parse(localStorage.getItem("name")) || [];
let POSITION = JSON.parse(localStorage.getItem("position")) || [];
let GAME = JSON.parse(localStorage.getItem("game")) || [];
let POINTS = JSON.parse(localStorage.getItem("points")) || [];
let ASSISTS = JSON.parse(localStorage.getItem("assists")) || [];
let REBOUNDS = JSON.parse(localStorage.getItem("rebounds")) || [];
let BLOCKS = JSON.parse(localStorage.getItem("blocks")) || [];
let STEALS = JSON.parse(localStorage.getItem("steals")) || [];
let FREETHROWS = JSON.parse(localStorage.getItem("freeThrows")) || [];
let FREETHROWSMADE = JSON.parse(localStorage.getItem("freeThrowsMade")) || [];
let TWOPOINTERS = JSON.parse(localStorage.getItem("twoPointers")) || [];
let THREEPOINTERS = JSON.parse(localStorage.getItem("threePointers")) || [];


const NameInput = document.getElementById("name")
const positionInput = document.getElementById("position")
const gameInput = document.getElementById("game")
const pointsInput = document.getElementById("points")
const assistsInput = document.getElementById("assists")
const reboundsInput = document.getElementById("rebounds")
const blocksInput = document.getElementById("blocks")
const stealsInput = document.getElementById("steals")
const freeThrowsInput = document.getElementById("freeThrows")
const freeThrowsMadeInput = document.getElementById("freeThrowsMade")
const twoPointersInput = document.getElementById("twoPointers")
const threePointersInput = document.getElementById("threePointers")

const submitButton = document.getElementById("submit")
const editSection = document.getElementById("editSection")

addPlayer()

submitButton.addEventListener("click", ()=>{ 
  const name = NameInput.value || null;
  const position = positionInput.value || null;
  const game = gameInput.value || null;
  const points = pointsInput.value || null;
  const assists = assistsInput.value || null;
  const rebounds = reboundsInput.value || null;
  const blocks = blocksInput.value || null;
  const steals = stealsInput.value || null;
  const freeThrows = freeThrowsInput.value || null;
  const freeThrowsMade = freeThrowsMadeInput.value || null;
  const twoPointers = twoPointersInput.value || null;
  const threePointers = threePointersInput.value || null;

  if(name === null || position === null || game === null || points === null || assists === null || rebounds === null || blocks === null || steals === null || freeThrows === null || freeThrowsMade === null || twoPointers === null || threePointers === null) { 
    alert("Please enter all the fields.") 
    return
  } 

 NAME = [name, ...NAME];
 POSITION = [position, ...POSITION];
 GAME = [game, ...GAME];
 POINTS = [points, ...POINTS];
 ASSISTS = [assists, ...ASSISTS];
 REBOUNDS = [rebounds, ...REBOUNDS];
 BLOCKS = [blocks, ...BLOCKS];
 STEALS = [steals, ...STEALS];
 FREETHROWS = [freeThrows, ...FREETHROWS];
 FREETHROWSMADE = [freeThrowsMade, ...FREETHROWSMADE];
 TWOPOINTERS = [twoPointers, ...TWOPOINTERS];
 THREEPOINTERS = [threePointers, ...THREEPOINTERS];

 NAME.push(name);
 POSITION.push(position);
 GAME.push(game);
 POINTS.push(points);
 ASSISTS.push(assists);
 REBOUNDS.push(rebounds);
 BLOCKS.push(blocks);
 STEALS.push(steals);
 FREETHROWS.push(freeThrows);
 FREETHROWSMADE.push(freeThrowsMade);
 TWOPOINTERS.push(twoPointers);
 THREEPOINTERS.push(threePointers);
  
 clearInput(); 
 addPlayer();
 LocalStorage();
});