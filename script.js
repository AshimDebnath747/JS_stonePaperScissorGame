let userInput;
let computerInput;
let userWin;
let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");
let output = document.querySelector(".result");

let userPoint = document.querySelector("#userPoint");
let compPoint = document.querySelector("#compPoint");

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        userInput = choice.getAttribute("id");
        comp();
        winner();
        decision();
        points();
    })
})

function comp(){
     let rand = Math.floor(Math.random() * 3);
    if(rand == 0){
        computerInput = "stone";
    }
    else if(rand == 1){
        computerInput = "paper";
    }
    else{
        computerInput = "scissor";
    }
}
function winner(){
    if (userInput == computerInput){
        userWin = undefined;
    }
    else if(userInput == "stone"){
        userWin = computerInput == "paper"? false : true;
        console.log(userWin)
    }
    
    else if(userInput == "paper"){
        userWin  = computerInput == "scissor"? false : true; 
        console.log(userWin)
    }
    else if (userInput == "scissor"){
        userWin = computerInput == "stone"? false : true;
    }
}
function decision(){
    if(userWin){
        output.innerHTML = "YOU WON!";
        output.style.backgroundColor = "green";
    }
    else if(userWin == false){
        output.innerHTML = "YOU LOST!";
        output.style.backgroundColor= "red";  
    }
    else{
        output.innerHTML = "GAME DRAWN!";
        output.style.backgroundColor = "darkblue";
    }
}
function points(){
    if(userWin){
        userScore++;
        userPoint.innerHTML = userScore;
    }
    else if(userWin == false){
        compScore ++;
        compPoint.innerHTML = compScore;

    }
}