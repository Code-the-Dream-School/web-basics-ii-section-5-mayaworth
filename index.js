
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


let boardOne;
let boardTwo;

let player1 = {
  name: "",
  shipCount: 0,
  gameBoard: boardOne,
};

let player2 = {
  name: "",
  shipCount: 0,
  gameBoard: boardTwo,
};


const board_Player1 = document.getElementById('board_player1');
const board_Player2 = document.getElementById('board_player2');

const boardMaker = (player) =>{
  for (var x = 0; x < 4; x++) {

    const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement('div');
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
      cell.value = 0;//state of the cell

      //this function adds the click event to each cell
      cell.addEventListener( 'click', (e) => {
          let cell = e.target; // get the element clicked
          console.log( cell.textContent) //display the coordinates in the console
          cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
          //cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
      });

      li.appendChild(cell); //adding each cell into the row number x
    }

    if (player === player1){
      const board_Player1 = document.getElementById('board_player1');
      board_Player1.appendChild(li); //adding each row into the board
    } else if (player === player2) {
      const board_Player2 = document.getElementById('board_player2');
      board_Player2.appendChild(li); //adding each row into the board
    }
}
    return player.gameBoard;

};
  boardOne = boardMaker (player1);
  boardTwo = boardMaker (player2);


  // //Placing the Ships

  // const shipPlacement (player) => {
  //   for (let i=0; player.shipCount < 4; i++) {
  //     let x = Math.floor(Math.random()*4);
  //     let y = Math.floor(Math.random()*4);
  //      if (player.gameBoard [x][y] === 1){
  //        continue;
  //      }
  //      player.shipCount ++;
  //      player.gameBoard[x][y] = 1;
  //   }
  //     return player.gameBoard
  // };

  // shipPlacement(player1);
  // shipPlacement(player2);


  // //play Game 

  // let currentPlayer = player1;
  // let opponent = player2;

  // let turn = document.querySelector("#turn_player");
  // turn.textContent+ currentPlayer.name;

  // const battleship = () => {
  //   while(opponent.shipCount > 0) {
  //     alert(`It is your turn, ${currentPlayer.name}`);
  //     let strikeX = prompt("Choose your 'x' coordinate to stike.");
  //     let strikeY = prompt("Choose your 'y' coordinate to stike.");
  //      if(opponent.gameBoard[strikeX][strikeY] == 1){
  //        opponent.gameBoard[strikeX][strikeY] = 0;
  //        opponent.ShipCount --;
  //        alert("Strike");
  //        if (opponent.shipCount === 0) {
  //         alert(`Congrats, ${currentPlayer.name}! You won!`);
  //         break;

  //        }
  //      } else {
  //        alert("Miss!");
  //      }
  //      [currentPlayer, opponent] = [opponent, currentPlayer];
  //   }
  //       return `${currentPlayer.name}, you are the winner!`;
  // }

  // const battleshipResult = battleship();


  // const htmlTarget = document.getElementById('result')
  // htmlTarget.Target.innerHTML = battleshipResult