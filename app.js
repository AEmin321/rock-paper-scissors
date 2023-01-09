let aiChoices=["rock","paper","scissors"];
let playerSelection;
let computerSelection=getcomputerChoice();
let compScore=0;
let playerScore=0;

const cScore=document.querySelector('.computer');
const hScore=document.querySelector('.human');
const btns=document.querySelectorAll('.btn');
const draw=document.querySelector('.draw');


btns.forEach((item)=>{
    item.addEventListener('click',()=>{
        if (playerScore<5 && compScore<5){
            playRound(item.getAttribute('data-value'),getcomputerChoice());
        }else {
            displayResult(compScore,playerScore);
        }
    })
    
});

// RESULT FUNCTION
function displayResult (compScore,playerScore){
    if (compScore===5){
        draw.textContent="Computer Wins!!!";
    }else if (playerScore===5){
        draw.textContent="Player1 Wins!!!";
    }
}


// function game (){
//     
//     for(let i=1;i<=5;i++){
//         alert("Round :"+i);
//         playerSelection=prompt();
//         let roundWinner=playRound(playerSelection,computerSelection);
//         if(roundWinner==="pwin"){
//             alert("Player Wins!");
//             playerScore++;
//         }
//         else if(roundWinner==="cwin"){
//             alert("Computer Wins!");
//             compScore++;
//         }
//     }

//     if(playerScore>compScore){
//         console.log("Player Wins with "+playerScore);
//     }else {
//         console.log("Computer Wins with "+compScore);
//     }
// }

function getcomputerChoice (){
    return aiChoices[Math.floor(Math.random()*3)];
}

function playRound (playerSelection,computerSelection){
    if(playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="Scissors" && computerSelection=="paper"){
        playerScore++;
        hScore.textContent=playerScore;
    }  
    else if(playerSelection=="rock" && computerSelection=="paper" || 
            playerSelection=="scissors" && computerSelection=="rock" ||
            playerSelection=="paper" && computerSelection=="scissors"){
        compScore++;
        cScore.textContent=compScore;
    }    
    else{
        draw.textContent="It's a draw try again.";
        setTimeout(()=>{draw.textContent="";},1000);
    }
}