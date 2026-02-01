function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    let computerChoice='rock';
    switch(x){
        case 0:
            console.log('rock')
            computerChoice='rock';
            break;
        case 1:
            console.log('paper')
            computerChoice='paper';
            break;
        case 2:
            console.log('scissors')
            computerChoice='scissors';
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
        console.log("Draw");
    }
    else if(humanChoice=="rock" && computerChoice!="paper"){
        console.log("human win");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice!="scissors"){
        console.log("human win");
        humanScore++;
    }
    else if(humanChoice=="scissors" && computerChoice!="rock"){
        console.log("human win");
        humanScore++;
    }
    else{
        console.log("Computer wins");
        computerScore++;
    }
}
let body=document.querySelector('body')
const rockButton=document.createElement('button');
const paperButton=document.createElement('button')
const scissorsButton=document.createElement('button')
rockButton.setAttribute('id',"rock");
paperButton.setAttribute('id',"paper");
scissorsButton.setAttribute('id',"scissors");
rockButton.textContent="rock"
paperButton.textContent="paper"
scissorsButton.textContent="scissors"
let humanChoice=''

body.appendChild(rockButton)
body.appendChild(paperButton)
body.appendChild(scissorsButton)
const buttons=document.querySelectorAll('button')
function handleClick(event){
    humanChoice=event.target.id
    console.log(humanChoice)
    let computerSelection=getComputerChoice()
    playGame(humanChoice,computerSelection)
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
    console.log('human wins')
}
else if(computerScore==5){
     rockButton.removeEventListener('click',handleClick)
    paperButton.removeEventListener('click',handleClick)
    scissorsButton.removeEventListener('click',handleClick)
    console.log('computer wins')
}
}