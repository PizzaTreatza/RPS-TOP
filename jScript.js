            let cChoice;
            let pChoice;
            let roundResult;
            let playerScore = 0;
            let computerScore = 0;

            const cScore = document.querySelector('#compScore');
            const pScore = document.querySelector('#playerScore');

            cScore.textContent = computerScore;
            pScore.textContent = playerScore;

            function getComputerChoice() {
                cChoice = Math.floor((Math.random()*3)+1);
                if (cChoice == 1) {cChoice = "rock";}
                else if (cChoice == 2) {cChoice = "paper";}
                else {cChoice = "scissors";}
                return cChoice;
            }
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
                return roundResult;
                alert(roundResult);
            }
            function game() {

                    let playerSelection = getPlayerChoice();
                    let computerSelection = getComputerChoice();
                    
                    console.log(playRound(playerSelection, computerSelection));
                    if (roundResult == "Player Win") {playerScore++;}
                    else if (roundResult == "Computer Win") {computerScore++;}
                
                if (playerScore > computerScore) {alert("You won the game!");}
                else if (playerScore < computerScore) {alert("You lose");}
                else if (playerScore == computerScore) {alert("Tie game");}
            }

            const rButton = document.querySelector('.rBtn');
            rButton.addEventListener('click', function (e) {

                let computerSelection = getComputerChoice();
                let playerSelection = "rock"

                console.log(playRound(playerSelection, computerSelection));
                    if (roundResult == "Player Win") {playerScore++; pScore.textContent = playerScore;}
                    else if (roundResult == "Computer Win") {computerScore++; cScore.textContent = computerScore;}
                
                if (playerScore > computerScore) {console.log("You won the game!");}
                else if (playerScore < computerScore) {console.log("You lose");}
                else if (playerScore == computerScore) {console.log("Tie game");};
                 });

            const pButton = document.querySelector('.pBtn');
            pButton.addEventListener('click', function (e) {

                let computerSelection = getComputerChoice();
                let playerSelection = "paper"

                console.log(playRound(playerSelection, computerSelection));
                    if (roundResult == "Player Win") {playerScore++; pScore.textContent = playerScore;}
                    else if (roundResult == "Computer Win") {computerScore++; cScore.textContent = computerScore;}
                
                if (playerScore > computerScore) {console.log("You won the game!");}
                else if (playerScore < computerScore) {console.log("You lose");}
                else if (playerScore == computerScore) {console.log("Tie game");};
                 });

            const sButton = document.querySelector('.sBtn');
            sButton.addEventListener('click', function (e) {

                let computerSelection = getComputerChoice();
                let playerSelection = "scissors"

                console.log(playRound(playerSelection, computerSelection));
                    if (roundResult == "Player Win") {playerScore++; pScore.textContent = playerScore;}
                    else if (roundResult == "Computer Win") {computerScore++; cScore.textContent = computerScore;}
                
                if (playerScore > computerScore) {console.log("You won the game!");}
                else if (playerScore < computerScore) {console.log("You lose");}
                else if (playerScore == computerScore) {console.log("Tie game");};
                 });