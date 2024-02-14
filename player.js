

function LocalStorage(){ 
localStorage.setItem("Name", JSON.stringify(Name))
localStorage.setItem("Position", JSON.stringify(Position))
localStorage.setItem("game", JSON.stringify(game))
localStorage.setItem("points", JSON.stringify(points))
localStorage.setItem("assists", JSON.stringify(assists))
localStorage.setItem("rebounds", JSON.stringify(rebounds))
localStorage.setItem("blocks", JSON.stringify(blocks))
localStorage.setItem("steals", JSON.stringify(steals))
localStorage.setItem("freeThrows", JSON.stringify(freeThrows))
localStorage.setItem("twoPointers", JSON.stringify(twoPointers))
localStorage.setItem("threePointers", JSON.stringify(threePointers)) 
} 


function addPlayer(){ 
  const tbody = document.getElementById("output") 
  const rows =  
      Math.max(water.length, exercise.length, bloodsugar.length) 
  let html = ""
  for(let i=0; i<rows; i++){ 
      let Name = Name[i] || "N/A"
      let Position = Position[i] || "N/A"
      let game = game[i] || "N/A"
      let points = points[i] || "N/A"
      let assists = assists[i] || "N/A"
      let rebounds = rebounds[i] || "N/A"
      let blocks = blocks[i] || "N/A"
      let steals = steals[i] || "N/A"
      let freeThrows = freeThrows[i] || "N/A"
      let twoPointers = twoPointers[i] || "N/A"
      let threePointers = threePointers[i] || "N/A"
      html+=`<tr> 
          <td>${Name}</td> 
          <td>${Position}</td>
          <td>${game}</td>
          <td>${points}</td>
          <td>${assists}</td>
          <td>${rebounds}</td>
          <td>${blocks}</td>
          <td>${steals}</td>
          <td>${freeThrows}</td>
          <td>${twoPointers}</td>
          <td>${threePointers}</td> 
          <td> 
              <button onclick="activateEdit(${i})" 
                      class="edit">${editIcon} 
              </button> 
          </td> 
          <td> 
              <button  
                  onclick="deleteRow(${i})" 
                  class="delete">${deleteIcon} 
              </button> 
          </td> 
      </tr>`         
  } 
  tbody.innerHTML = html; 
} 

let editIndex = -1; 

let Name = JSON.parse(localStorage.getItem("Name")) || []
let Position = JSON.parse(localStorage.getItem("Position")) || []
let game = JSON.parse(localStorage.getItem("game")) || []
let points = JSON.parse(localStorage.getItem("points")) || []
let assists = JSON.parse(localStorage.getItem("assists")) || []
let rebounds = JSON.parse(localStorage.getItem("rebounds")) || []
let blocks = JSON.parse(localStorage.getItem("blocks")) || []
let steals = JSON.parse(localStorage.getItem("steals")) || []
let freeThrows = JSON.parse(localStorage.getItem("freeThrows")) || []
let twoPointers = JSON.parse(localStorage.getItem("twoPointers")) || []
let threePointers = JSON.parse(localStorage.getItem("threePointers")) || []


const NameInput = document.getElementById("Name")
const PositionInput = document.getElementById("Position")
const gameInput = document.getElementById("game")
const pointsInput = document.getElementById("points")
const assistsInput = document.getElementById("assists")
const reboundsInput = document.getElementById("rebounds")
const blocksInput = document.getElementById("blocks")
const stealsInput = document.getElementById("steals")
const freeThrowsInput = document.getElementById("freeThrows")
const twoPointersInput = document.getElementById("twoPointers")
const threePointersInput = document.getElementById("threePointers")

const submitButton = document.getElementById("submit") 
const editSection = document.getElementById("editSection") 

addPlayer() 



submitButton.addEventListener("click", ()=>{ 
  
  const Name = NameInput.value
  const Position = PositionInput.value
  const game = gameInput.value
  const points = pointsInput.value
  const assists = assistsInput.value
  const rebounds = reboundsInput.value
  const blocks = blocksInput.value
  const steals = stealsInput.value
  const freeThrows = freeThrowsInput.value
  const twoPointers = twoPointersInput.value
  const threePointers = threePointersInput.value

  if(Name===null || Position===null || game===null || points===null || assists===null || rebounds===null || blocks===null || steals===null || freeThrows===null || twoPointers===null || threePointers===null) { 
      alert("Please fill out all the fields.") 
      return
  } 

  Name = [Name, ...Name]
  Position = [Position, ...Position]
  game = [game, ...game]
  points = [points, ...points]
  assists = [assists, ...assists]
  rebounds = [rebounds, ...rebounds]
  blocks = [blocks, ...blocks]

  steals = [steals, ...steals]
  freeThrows = [freeThrows, ...freeThrows]
  twoPointers = [twoPointers, ...twoPointers]
  threePointers = [threePointers, ...threePointers]
  clearInput() 
  addPlayer() 
  LocalStorage() 
})

function clearInput() { 
  playerName.value = "";
  position.value = "";
  game.value = "";
  points.value = "";
  assists.value = "";
  rebounds.value = "";
  blocks.value = "";
  steals.value = "";
  freeThrows.value = "";
  freeThrowsMade.value = "";
  twoPointers.value = "";
  threePointers.value = "";
} 