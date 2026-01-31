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
function getHumanChoice(){
let humanChoice=prompt("choose my guy")
humanChoice=humanChoice.toLowerCase()
if (humanChoice =="rock" || humanChoice=="paper" || humanChoice=="scissors"){
    console.log(humanChoice)
}
else{
    console.log("no you can't do that")
    humanChoice="0";
}
return humanChoice
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
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
let humanSelection=getHumanChoice()
let computerSelection=getComputerChoice()