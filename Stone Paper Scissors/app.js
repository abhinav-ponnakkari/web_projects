let userScore=0;
let compScore =0;

const choices=document.querySelectorAll(".choice")
const msgId=document.querySelector("#msg");
const userS=document.querySelector("#userSCORE")
const compS=document.querySelector("#compSCORE")




const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw.");
    msgId.innerText="Game was a draw";
    msgId.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win")
        msgId.innerText=`you win. your ${userChoice} beats ${compChoice}`;
        msgId.style.backgroundColor="green";
        userScore++;
        userS.innerText=userScore;

    }else{
      console.log("you lost")
      msgId.innerText=`You lost. your ${userChoice} was beaten by ${compChoice}`;
      msgId.style.backgroundColor="red";
      compScore++;
      compS.innerText=compScore;

    }
}

const playGame=(userChoice)=>{
    console.log("user choice ",userChoice)
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice ==="paper"?false:true;}
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
