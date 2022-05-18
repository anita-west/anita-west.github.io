console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('ID')

for (let i = 0; i < cells.length; i++) {
  let cell = cells[i]
  cell.onclick = cellClicked
}

let naughtsTurn = true

let subtitle = document.getElementById('subtitle')

function cellClicked(e) {
  let cell = e.target

  if (cell.innerHTML == '') {
    if (naughtsTurn) {
      cell.innerHTML = 'O'
      checkForWin('O')
    } else {
      cell.innerHTML = 'X'
      checkForWin('X')
    }

    checkForWin()

    naughtsTurn = !naughtsTurn

    if (!gameIsOver) {

      if (naughtsTurn) {
      subtitle.innerHTML = 'NAUGHTS TURN'
    } else {
      subtitle.innerHTML = 'CROSSES TURN'
    }
  }
}

let gameIsOver = false

function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // DIAGONAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  if (gameIsOver) {
    if (naughtsTurn) {
      subtitle.innerHTML = 'NAUGHTS WON!'
    } else {
      subtitle.innerHTML = 'CROSSES WON!'
    }
  
  
}