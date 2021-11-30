let currentPlayer = 1
// let gameActive = true
const cells = document.querySelectorAll('.cell')
const displayCurrentPlayer = document.querySelector('#current-player')

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = () => {
    console.log('You have clicekd cell ' + i)

    if (currentPlayer === 1) {
      cells[i].classList.add('player-one')
      currentPlayer = 2
      displayCurrentPlayer.innerHTML = currentPlayer
    } else if (currentPlayer === 2) {
      cells[i].classList.add('player-two')
      currentPlayer = 1
      displayCurrentPlayer.innerHTML = currentPlayer
    } else {
      console.log('Invalid move')
    }
  }
}

// Read up on classList and why this example works
