// create gameboard dimensions
function gameBoard(){
  const rows = 3;
  const columns = 3;
  const board = []

// create arrays for gameboard
const getBoard = () => board;

function printBoard(){
  console.log(board)
}

  for(let i = 0;i < rows; i++) {
    board[i] = [];
    for(let j=0; j < columns; j++){
      board[i].push(Cell())
    }
    
  }
// see which cells are currently available
const availableCells = board.map(cell => {
  return cell.filter(value => value === 0);
});

// if player input = available cell enter marker in cell function
// else break etc.
function handlePlayerChoice(player,row,column){

  getBoard();
  let input = board[row][column];
  

  if (player == 'X' || player == 'O'){

    if (input === 0){
      board[row][column] = player
      printBoard()
      console.log(input)
    }
    else{console.log('error')
    }}
}

return {
  getBoard,
  handlePlayerChoice
};


// let playerOne 
// handlePlayerChoice(playerOne,1,1)

    

}



function Cell(){
  let value = 0
  return value;
}


// player function, game board, game controller ... then display controller.

let turn = 0;

let playerOne = 'X';
let playerTwo = 'O';


let boardController = gameBoard();

function handlePlayer(){

  

  if (turn === 0){
    boardController.handlePlayerChoice(playerOne,3,4)
    turn += 1
  } 
  else {
    boardController.handlePlayerChoice(playerTwo,2,4)
    turn = 0
  }


}