let aiChoices=["rock","paper","scissors"];
let playerSelection;
let computerSelection=getcomputerChoice();


game();

function game (){
    let compScore=0;
    let playerScore=0;
    for(let i=1;i<=5;i++){
        alert("Round :"+i);
        playerSelection=prompt();
        let roundWinner=playRound(playerSelection,computerSelection);
        if(roundWinner==="pwin"){
            alert("Player Wins!");
            playerScore++;
        }
        else if(roundWinner==="cwin"){
            alert("Computer Wins!");
            compScore++;
        }
    }

    if(playerScore>compScore){
        console.log("Player Wins with "+playerScore);
    }else {
        console.log("Computer Wins with "+compScore);
    }
}

function getcomputerChoice (){
    return aiChoices[Math.floor(Math.random()*3)];
}

function playRound (playerSelection,computerSelection){
    if(playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="Scissors" && computerSelection=="paper"){
        return "pwin";
    }  
    else if(playerSelection=="rock" && computerSelection=="paper" || 
            playerSelection=="scissors" && computerSelection=="rock" ||
            playerSelection=="paper" && computerSelection=="scissors"){
        return "cwin";
    }    
    else{
        return "try again..";
    }
}