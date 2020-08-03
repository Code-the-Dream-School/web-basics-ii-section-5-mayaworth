
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

let player1 = {
  name: prompt("Player One, enter your name."),
  shipCount: 4,
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]
}

let player2 = {
  name: prompt("Player Two, enter your name."),
  shipCount: 4,
  gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ]
}


// defining variables
let x;
let y;
let coordinateOne = [];
let coordinateTwo = [];
let currentplayer = player1;
let opponent = player2;
let player;
let livesOne;
let livesTwo;
let winner;


function randomNumber(){
    let coordx = Math.floor(Math.random()*4);
    let coordy = Math.floor(Math.random()*4);
    let num = [coordx][coordy];
    console.log(num);
}

function createShip(player, ships) {
  let i = 0;
  do {
    const x = randomNumber();
    const y = randomNumber();
    if (player.gameBoard[x][y] ==1){
      player.gameBoard[x][y] = 1;
      i++;
    }
  } while (i < ships)
}

function createBoards(){

  const board_Player1 = document.getElementById('board_player1');
      for (var x = 0; x < 4; x++) {
        const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

      for (var y = 0; y < 4; y++) {
        const cell = document.createElement('div');
        cell.className = "square"; // adding css properties to make it looks like a square
        cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
        cell.value = 0;//state of the cell

        //this function adds the click event to each cell
        cell.addEventListener( 'click', (e) => {
          if (document.getElementById('board_player2').disabled === true){
            return false;
          }
            document.getElementById("board_player2").disabled = true;
            document.getElementById("board_player1").disabled = false;
            let cell = e.target; // get the element clicked
            console.log( cell.textContent) //display the coordinates in the console
            // cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
            cell.style.background ="yellow"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
            let coordinateOne = cell.textContent.split(',')
            let x = parseInt(coordinateOne[0])
            let y = parseInt(coordinateOne[1])
            shootShip(player1, x, y)
            currentplayer = player1;
            opponent = player2;
            player = currentplayer.name;
            lives1 = player1.shipCount;
            lives2 = player2.shipCount;

            if((player1.shipCount === 0) || (player2.shipCount === 0)){
            
               gameWinner();
              refreshPage();          
               } 
          
       });
      li.appendChild(cell) //adding each cell into the row number x
      }
        board_Player1.appendChild(li); //adding each row into the board
      }

      
  

      const board_Player2 = document.getElementById('board_player2');
        for (var x = 0; x < 4; x++) {

       const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

        for (var y = 0; y < 4; y++) {
        const cell = document.createElement('div');
        cell.className = "square"; // adding css properties to make it looks like a square
        cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
        cell.value = 0;//state of the cell

        //this function adds the click event to each cell
        cell.addEventListener('click', (e) => {
          if (document.getElementById('board_player2').disabled === true){
            return false
        }
        
            document.getElementById("board_player2").disabled = true;
            document.getElementById("board_player1").disabled = false;
            let cell = e.target; // get the element clicked
            console.log(cell.textContent) //display the coordinates in the console
            // cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
            cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
            let coordinateTwo = cell.textContent.split(',')
            let x = parseInt(coordinateTwo[0])
            let y = parseInt(coordinateTwo[1])
            shootShip(player2, x, y)
            currentplayer = player2;
            opponent = player1;
            player = currentplayer.name;
            lives1 = player1.shipCount;
            lives2 = player2.shipCount;

            if((player1.shipCount === 0) || (player2.shipCount === 0)){
              gameWinner();
              refreshPage();
          }           

        });
        li.appendChild(cell); //adding each cell into the row number x
      } 
      board_Player2.appendChild(li); //adding each row into the board
    }
 return     
}




function shootShip(player, x, y){
  if (player.gameBoard[x][y] ===1) {
    alert ("Hit!")
    player.gameBoard[x][y] = 0
    player.shipCount--;
  }
    else {
      alert("Miss!")
    } return player.name;

}

function createButton (){
  const button = document.getElementById('buttons');
  let resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset Game";
  let newGameButton = document.createElement("button");
  newGameButton.innerHTML = "New Game";
  button.appendChild(resetButton);
  button.appendChild(newGameButton);
  resetButton.addEventListener("click", refresh);
  newGameButton.addEventListener("click", createBoards);

}

function refresh(){
  window.location.reload();
}

function gameWinner(){
  if(player1.ShipCount === 0) {
    winner = player2.name;
    alert(`Congrats, ${player2.name}, you won the game!`)
  }
  else if (player2.shipCount ===0) {
    winner = player1.name;
    alert(`Congrats, ${player1.name}, you won the game!`)
  }
  return winner;
}

createBoards();
createButton();
createShip(player1, 4)
createShip(player2, 4)