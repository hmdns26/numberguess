'use strict';
let secretNumber = Math.trunc(Math.random()*20 +1) ;
let score = 20 ;
let highScore= 0;
document.querySelector('.score').textContent =score;

const displayMessage =function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const value =Number(document.querySelector('.guess').value);
    if(!value){
        document.querySelector('.message').textContent='no number';
    }else if(secretNumber === value){
        
        displayMessage('correct answer')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(secretNumber!==value){
        if(score>1){
            displayMessage(secretNumber > value?'too low':'too high');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;

        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score =20;
    secretNumber = Math.trunc(Math.random()*20 +1) ;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value ='';
});
