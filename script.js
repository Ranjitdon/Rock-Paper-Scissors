let compMove = document.querySelector("#comp-move");
const choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userScoreCoun=0;
let compScoreCoun=0;

const choiceList = ["rock","paper","scissors"];
const genCompChoice = ()=>{
    let index = Math.floor(Math.random()*3);
    console.log(index);
    return choiceList[index];
}

const drawGame=()=>{
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "rgb(2, 2, 46)";

}

const showWinner = (choice,compChoice,userWin)=>{
    if(userWin===true){
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
        userScoreCoun++;
    }
    else{
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        compScoreCoun++;
    }
    userScore.innerText = userScoreCoun;
    compScore.innerText = compScoreCoun;
}

const showCompChoice =(compChoice)=>{
    if(compChoice==="rock"){
        compMove.innerHTML = `<img src="rock.png">`;
    }
    else if(compChoice==="paper"){
        compMove.innerHTML = `<img src="paper.png">`;
    }
    else{
        compMove.innerHTML = `<img src="scissors.png">`;
    }
}
const playGame = (choice)=>{
    const compChoice = genCompChoice();

    showCompChoice(compChoice);

    if (choice === compChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (choice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (choice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(choice, compChoice, userWin);
      }

}

choices.forEach((move)=>{
    move.addEventListener("click",()=>{
        const choice = move.getAttribute("id");
        playGame(choice);
    });
});