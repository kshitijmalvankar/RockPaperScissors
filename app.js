const game = ()=>{
    let pScore = 0;
    let cScore = 0;



    //Start the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
    
    
        playButton.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        }); 
        //Computer Options

        const computerOptions = ["rock","paper","scissors"];

        options.forEach(option =>{
            option.addEventListener('click',function(){
                //Computer choice
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    compareHand(this.textContent, computerChoice);
                    playerHand.src = `./icons/${this.textContent}.png`
                    computerHand.src = `./icons/${computerChoice}.png`
                
                }, 2000);
                playerHand.style.animation = "shakeplayer 2s ease";
                compuerHand.style.animation = "shakecomputer 2s ease";
                
            });
        });  
    };


    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };


    const compareHand = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie!";

            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins.';
                cScore++;
                updateScore();
                return;
            }
        }

        //Checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins.';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }

        //Checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins.';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
    };




    startGame();
    playMatch();

};


//Start the game function
game();