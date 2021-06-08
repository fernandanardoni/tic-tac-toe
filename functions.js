const buttons = document.querySelectorAll(".grid-child");

const playButton = document.querySelector('.play-button');
const textContainer = document.querySelector('span');
const boardContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');

const buttonArr = Array.from(buttons);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const winningYellowButtons = [];
const winningBlueButtons = [];

const playerText = document.querySelector(".player-text");

let player = "amarelo";

function addEventToButton() {

  for (const button of buttonArr) {
    

    button.addEventListener("click", function () {

      if (player === "amarelo") {

        button.style.backgroundColor = "yellow";
        button.innerHTML = '<img src="circle.svg">';

        winningYellowButtons.push(parseInt(buttonArr.indexOf(button)));
        winningYellowButtons.sort((a, b) => a - b);

        
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;

          if (
            a === winningYellowButtons[0] &&
            b === winningYellowButtons[1] &&
            c === winningYellowButtons[2]
          ) {
            alert("amarelo ganhou!");
            resetGame();
          }
        }

        console.log("amarelo", winningYellowButtons);

        playerText.textContent = "azul";
        player = "azul";

      } else if (player === "azul") {

        button.style.backgroundColor = "blue";
        button.innerHTML = '<img src="close.svg">';

        winningBlueButtons.push(parseInt(buttonArr.indexOf(button)));
        winningBlueButtons.sort((a, b) => a - b);
        
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;

          if (
            a === winningBlueButtons[0] &&
            b === winningBlueButtons[1] &&
            c === winningBlueButtons[2]
          ) {
            alert("azul ganhou!");
            resetGame();
            
          } 
        }
        
        console.log("azul", winningBlueButtons);
        
        playerText.textContent = "amarelo";
        player = "amarelo";
      }
      
      
    });

  }
  
}

addEventToButton();


function newGame() {
  
  playButton.addEventListener('click', function() {
    textContainer.style.display = "flex";
    boardContainer.style.display = "grid";
    resetButton.style.display = "block";
    playButton.style.display = "none"
    
  })
} 


newGame();


function resetGame() {
  
  buttonArr.forEach((button) => {
    
      button.innerHTML = null;
      button.style.backgroundColor = "transparent";
      winningBlueButtons.length = 0;
      winningYellowButtons.length = 0;
    
    
  })
}

resetGame();