
    let score = JSON.parse (localStorage.getItem('score'))||{
        wins : 0,
        losses: 0,
        ties: 0
      };// the score was in string so we use JSON.parse to covert it back to object  also use default operator

      updateScoreElement();

    // let computerMove = ''; Global variable also solve the undefined problem in this game. we have used return statement solution.
    function pickComputerMove(){
      const random = Math.random();
      let computerMove ='';
      if(random >=0 && random < 1/3){
        computerMove = 'Rock';
      }
      else if(random >= 1/3 && random <2/3){
        computerMove = 'Paper';
      }
      else if(random >= 2/3 && random <1){
        computerMove = 'Scissors';
      }

      return computerMove;
    }

    function playGame(playerMove){
      computerMove = pickComputerMove();
      
      let result = '';
      if (playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
          result ='You loss.';
        }
        else if(computerMove === 'Paper'){
          result = 'You won.';
        }
        else if(computerMove === 'Scissors'){
          result = 'Tie.';
        }
      }

      else if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
          result ='Tie.';
        }
        else if(computerMove === 'Paper'){
          result = 'You loss.';
        }
        else if(computerMove === 'Scissors'){
          result = 'You won.';
        }
      }
      
      else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
          result ='You won.';
        }
        else if(computerMove === 'Paper'){
          result = 'Tie.';
        }
        else if(computerMove === 'Scissors'){
          result = 'You loss.';
        }
      }

      //score
      if(result === 'You won.'){
        score.wins += 1;
      }
      else if(result === 'You loss.'){
        score.losses +=1;
      }
      else if(result === 'Tie.'){
        score.ties +=1;
      }
      
      localStorage.setItem('score', JSON.stringify(score));// localStorage only allow string so that's why we coverted our object score to string using JSON.stringify(score);

      updateScoreElement();
      document.querySelector('.js-result')
        .innerHTML = result;
      document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="icon-button" alt=""> 
  <img src="images/${computerMove}-emoji.png" class="icon-button" alt=""> Computer`;
    }

    function updateScoreElement(){
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    /*Steps or algorithm
    1. computer randomly selects a move
    2. compare the moves to get the result
    3. display the result in popup*/