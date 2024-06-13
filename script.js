
let num = 0

// create gameboard 

function gameBoard(){

    const rows = 3;
    const columns = 3;
    const board = []    

    for(let i = 0;i < rows; i++) {
      board[i] = [];
      for(let j=0; j < columns; j++){
        board[i].push('')}}

    const getBoard = () => board;
    function printBoard(){console.log(board)}
    const gameStatus = document.getElementById ('gameStatus')


    const getField = (row, col) => {
      if (row >= 3 || col >= 3 || row < 0 || col < 0) return; // Check if row and col are within bounds
      return board[row][col]; // Return the value at the specified row and column
    };


    // if player input = available cell enter marker in cell function
    // else break etc.
    function handlePlayerChoice(player,row,column){
      let input = board[row][column];
      if (player === 'X' || player === 'O'){
        if (input === ''){
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
                gameStatus.innerHTML = (`The winner is ${board[i][0]}!`)
                return board[i][0];
            }
          // check columns

          for (let j = 0; j < columns; j++){
            if (board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j]){
              gameStatus.innerHTML = (`The winner is ${board[0][j]}!`)  
              return board[0][j]
            }
          }

          if(board[0][0] && board[0][0] === board [1][1] && board [1][1] === board [2][2]){
            gameStatus.innerHTML = (`The winner is ${board[0][0]}!`)
            return board[0][0]
          }

          if(board[0][2] && board[0][2] === board [1][1] && board [1][1] === board [2][0]){
            gameStatus.innerHTML = (`The winner is ${board[0][2]}!`)
            return board[0][2]
          }
          
          if (num === 9){
            gameStatus.innerHTML = ('Draw!')
            
          }
            return null;
        }};

        function resetGame(){
          for(let i = 0;i < rows; i++) {
            board[i] = [];
            for(let j=0; j < columns; j++){
              board[i].push('')}}
            
          num = 0
          gameStatus.innerHTML = ("X's turn")
        }
      return {
        getBoard,
        handlePlayerChoice,
        checkWin,
        resetGame,
        getField
      };
}

// player function, game board, game controller ... then display controller.
let turn = 0;
let playerOne = 'X';
let playerTwo = 'O';
let boardController = gameBoard();
let board = boardController.getBoard()
let checkWin = boardController.checkWin()
let game = gameController();


// game controller func

function gameController(){
  

  function playRound(row,col){

    const winner = boardController.checkWin(board);

    if (num === 10){console.log("draw!")
      gameStatus.innerHTML = ('Draw!')
      return true;
    }


    else if (winner) {
      console.log(`The winner is ${winner}!`);
      gameStatus.innerHTML = (`The winner is ${winner}!`);
        return true;}


    else if(num % 2 == 0){
      console.log('Os turn!')
      gameStatus.innerHTML = 'Os turn!';
      boardController.handlePlayerChoice(playerOne,row,col)} 

    else{
      console.log('Xs turn!')
      gameStatus.innerHTML = 'Xs turn!';
      boardController.handlePlayerChoice(playerTwo,row,col)}

      boardController.checkWin()

  };


  return {playRound};
}

const displayController = (() => {

  const winner = boardController.checkWin(board);
  const restartButton = document.getElementById('btn')
  const gameStatus = document.getElementById ('gameStatus')
  const field = document.querySelectorAll('.field')

  field.forEach((field)=>
    field.addEventListener('click',(e) => {
      const row = parseInt(e.target.dataset.row);
      const col = parseInt(e.target.dataset.col);
      game.playRound(row,col)
      updateGameboard()
      
    }))

  const updateGameboard = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const field = document.querySelector(`.field[data-row="${row}"][data-col="${col}"]`);
        field.textContent = boardController.getField(row, col);
      }}};

  restartButton.addEventListener('click', ()=> boardController.resetGame()
  )
  restartButton.addEventListener('click', ()=> updateGameboard()
  )})();

 

