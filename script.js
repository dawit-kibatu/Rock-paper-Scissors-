function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    let computerChoice='';
    switch(x){
        case 0:        
            computerChoice='✊';
            break;
        case 1:         
            computerChoice='🤚';
            break;
        case 2:
            computerChoice='✌️';
            break;
        default:
            break
    }
    return computerChoice;
}
let humanScore=0;
let computerScore=0;
let round=0;
function playGame(humanChoice,computerChoice){
    if( humanChoice==computerChoice){
    }
    else if(humanChoice=="✊" && computerChoice!="🤚"){
        humanScore++;
    }
    else if(humanChoice=="🤚" && computerChoice!="✌️"){
        humanScore++;
    }
    else if(humanChoice=="✌️" && computerChoice!="✊"){
        humanScore++;
    }
    else{
        computerScore++;
    }
}
let choiceButtons=document.querySelector('.choiceButtons')
const player=document.querySelector('.playeChoice')
const computer=document.querySelector('.computerChoice')
const playerPoints=document.querySelector('.playerScore')
const computerPoints=document.querySelector('.computerScore')
const results=document.querySelector('.results')
const resetButton=document.querySelector('#reset')
playerPoints.textContent="Player:"+humanScore
computerPoints.textContent="Computer:"+computerScore
const rockButton=document.createElement('button');
const paperButton=document.createElement('button')
const scissorsButton=document.createElement('button')
rockButton.setAttribute('id',"rock");
paperButton.setAttribute('id',"paper");
scissorsButton.setAttribute('id',"scissors");
rockButton.textContent="✊"
paperButton.textContent="🤚"
scissorsButton.textContent="✌️"
let humanChoice=''
rockButton.style.cssText="background-color: red; height:150px; width:150px; font-size:50px;transform: rotate(90deg); border-radius: 50%; /*"
paperButton.style.cssText="background-color: red; height:150px; width:150px; font-size:50px;transform: rotate(90deg);border-radius: 50%; /*"
scissorsButton.style.cssText="background-color: red; height:150px; width:150px; font-size:50px;transform: rotate(90deg);border-radius: 50%; /*"
function handleMouseEnter(event){
    event.target.style.cssText="background-color: red; height:150px; width:150px;border-radius: 50%;  font-size:50px;transform: rotate(0deg);"
}
function handleMouseLeave(event){
    event.target.style.cssText="background-color: red; height:150px; width:150px;border-radius: 50%;  font-size:50px;transform: rotate(90deg);"
}
rockButton.addEventListener('mouseenter', handleMouseEnter);
rockButton.addEventListener('mouseleave', handleMouseLeave);
paperButton.addEventListener('mouseenter', handleMouseEnter);
paperButton.addEventListener('mouseleave', handleMouseLeave);
scissorsButton.addEventListener('mouseenter', handleMouseEnter);
scissorsButton.addEventListener('mouseleave', handleMouseLeave);
choiceButtons.appendChild(rockButton)
choiceButtons.appendChild(paperButton)
choiceButtons.appendChild(scissorsButton)
const buttons=document.querySelectorAll('button')
function handleClick(event){
    humanChoice=event.target.textContent
    player.textContent="You:"+humanChoice
    let computerSelection=getComputerChoice()
    computer.textContent="Computer:"+computerSelection
    playGame(humanChoice,computerSelection)
    playerPoints.textContent="Player:"+humanScore
    computerPoints.textContent="Computer:"+computerScore
    checkPoints(humanScore,computerScore)
}
rockButton.addEventListener('click',handleClick)
paperButton.addEventListener("click",handleClick)
scissorsButton.addEventListener("click",handleClick)
function checkPoints(humanScore,computerScore){
    if(humanScore==5){
    rockButton.removeEventListener('click',handleClick)
    paperButton.removeEventListener('click',handleClick)
    scissorsButton.removeEventListener('click',handleClick)
    results.textContent="You win!!"
    resetButton.style.cssText="display:block"
}
else if(computerScore==5){
     rockButton.removeEventListener('click',handleClick)
    paperButton.removeEventListener('click',handleClick)
    scissorsButton.removeEventListener('click',handleClick)
    results.textContent="Compter wins. Try again?    "
    resetButton.style.cssText="display:block"
}
}
resetButton.addEventListener('click',reset)
function reset(){
    rockButton.addEventListener('click',handleClick)
    paperButton.addEventListener("click",handleClick)
    scissorsButton.addEventListener("click",handleClick)
    humanScore=0;
    computerScore=0;
    playerPoints.textContent="Player:"+humanScore;
    computerPoints.textContent="Computer:"+computerScore;
    player.textContent=''
    computer.textContent=''
    results.textContent=''
    resetButton.style.cssText="display:none"
}