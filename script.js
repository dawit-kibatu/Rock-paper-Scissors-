function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    switch(x){
        case 0:
            console.log('rock')
            break;
        case 1:
            console.log('paper')
            break;
        case 2:
            console.log('Scissors')
            break;
        default:
            break
    }
}
