
let num = 0

// create gameboard 

function gameBoard(){

    const rows = 3;
    const columns = 3;
    const board = []    

    for(let i = 0;i < rows; i++) {
      board[i] = [];
      for(let j=0; j < columns; j++){
        board[i].push(Cell())}}

    const getBoard = () => board;
    function printBoard(){console.log(board)}



    // see which cells are currently available
    const availableCells = board.map(cell => {
      return cell.filter(value => value === 0);
    });

  


    // if player input = available cell enter marker in cell function
    // else break etc.
    function handlePlayerChoice(player,row,column){
      let input = board[row][column];
      if (player === 'X' || player === 'O'){
        if (input === 0){
          board[row][column] = player;
          printBoard();
          num++
          console.log("round" + " " + num);
        }
        else{console.log('error')
        }}}

        function checkWin(){

          
          // check rows
          
          for (let i = 0; i < rows; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }

          for (let j = 0; j < columns; j++){
            if (board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j]){
                return board[0][j]
            }
          }
        }



          // check columns

          // check diagonals

        }
  
  

      return {
        getBoard,
        handlePlayerChoice,
        checkWin
      };


      // check win condition function

 
}

// cell function 
function Cell(){
  let value = 0
  return value;
}


// player function, game board, game controller ... then display controller.

let turn = 0;
let playerOne = 'X';
let playerTwo = 'O';
let boardController = gameBoard();
let board = boardController.getBoard()
let checkWin = boardController.checkWin()
// game controller func

function gameController(){
  
  for (let i=0;i<9;i++){

    if (i === 8){console.log("draw!")
      break;
    }


    else if(i % 2 == 0){
      console.log('Xs turn!')
      input = prompt()
      const array = input.split(',');
      var num1 = parseInt(array[0])
      var num2 = parseInt(array[1])
      boardController.handlePlayerChoice(playerOne,num1,num2)

        if (checkWin === 'true'){
          console.log("game!")
          break;
        }
    }

    else{
      console.log('Os turn!')
      input = prompt()
      const array = input.split(',');
      var num1 = parseInt(array[0])
      var num2 = parseInt(array[1])
      boardController.handlePlayerChoice(playerTwo,num1,num2)
    }
    


    const winConditions = [
      [[0,0],[0,1][0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],

      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      
      [[0,0],[1,1],[2,2]],
      [[0,2],[1,1],[2,0]],
    ]


  }


  console.log(text,num1,num2)


}

const winner = boardController.checkWin(board);
if (winner) {
    console.log(`The winner is ${winner}`);
} else {
    console.log('No winner');
}


gameController();


