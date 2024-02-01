            let cChoice;
            let pChoice;
            let roundResult;
            let playerScore = 0;
            let computerScore = 0;

            const cScore = document.querySelector('#compScore');
            const pScore = document.querySelector('#playerScore');
            const scoreOutput = document.querySelector('#scoreOutput');

            cScore.textContent = computerScore;
            pScore.textContent = playerScore;

            function getComputerChoice() {
                cChoice = Math.floor((Math.random()*3)+1);
                if (cChoice == 1) {cChoice = "rock";}
                else if (cChoice == 2) {cChoice = "paper";}
                else {cChoice = "scissors";}
                return cChoice;
            }
            //Not used with buttons
            function getPlayerChoice() {
                pChoice = prompt("Rock, Paper, Scissors?");
                pChoice = pChoice.toLowerCase();
                if (pChoice != "rock" && pChoice != "paper" && pChoice != "scissors") { 
                    alert("Improper input");
                    getPlayerChoice();}
                return pChoice;
            }
            function playRound(playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {roundResult = "Tie";}
                else if (playerSelection == "rock" && computerSelection == "scissors") {roundResult = "Player Win";}
                else if (playerSelection == "paper" && computerSelection == "rock") {roundResult = "Player Win";}
                else if (playerSelection == "scissors" && computerSelection == "paper") {roundResult = "Player Win";}
                else {roundResult = "Computer Win";}
                scoreOutput.textContent = roundResult;
                return roundResult;
            }
            function gameCheck () {
                if (playerScore == 5 || computerScore == 5) {
                    playerScore = 0;
                    computerScore = 0;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                }
            }
            function whoWon(playerScore, computerScore) {
                if (playerScore > computerScore) {scoreOutput.textContent = "You won the game!";}
                    else if (playerScore < computerScore) {scoreOutput.textContent = "You lose";}
                    else if (playerScore == computerScore) {scoreOutput.textContent = "Tie game";};
            }
            function gameButton(chooseButton) {

                //Get the comp choice, set the user choice based on click
                let computerSelection = getComputerChoice();
                let playerSelection = chooseButton;

                //Check to see if game has already concluded. If so, reset and continue.
                gameCheck();

                //Play the round, iterating scores.
                playRound(playerSelection, computerSelection);
                    if (roundResult == "Player Win") {playerScore++; pScore.textContent = playerScore;}
                    else if (roundResult == "Computer Win") {computerScore++; cScore.textContent = computerScore;}
                
                //If one player has reached 5, state the winner.    
                if (playerScore == 5 || computerScore == 5) { whoWon (playerScore, computerScore);} 
                 };


            const rButton = document.querySelector('.rBtn');
            rButton.addEventListener('click', function(){gameButton("rock")});

            const pButton = document.querySelector('.pBtn');
            pButton.addEventListener('click', function(){gameButton("paper")});

            const sButton = document.querySelector('.sBtn');
            sButton.addEventListener('click', function(){gameButton("scissors")});