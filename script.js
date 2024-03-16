let rock = document.querySelector(".rockButton");
let paper = document.querySelector(".paperButton");
let scissors = document.querySelector(".scissorButton");
let newDiv = document.createElement("div");
let h1 = document.createElement("h1");
newDiv.className = "result";


const generateChoice = ()=> {
    const choice = ["rock", "paper", "scissor"];
    let i = Math.floor(Math.random() * choice.length);
    return choice[i]
}

const conditions = (userChoice,cpuChoice) => {
    if(userChoice === cpuChoice){
            h1.textContent = `You chose ${userChoice} and CPU chose ${cpuChoice}, You are tied`;
    } else if (userChoice === "rock" && cpuChoice === "scissors"||
                userChoice === "paper" && cpuChoice === "rock"||
                userChoice === "scissor" && cpuChoice === "paper"
    ){
        h1.textContent = `You chose ${userChoice} and CPU chose ${cpuChoice}, You win`;
    } else {
        h1.textContent = `You chose ${userChoice} and CPU chose ${cpuChoice}, You Lose`;
    }
    newDiv.appendChild(h1);
    document.body.appendChild(newDiv);
}

rock.addEventListener('click', ()=>{
    conditions("rock",generateChoice());
})
paper.addEventListener('click',()=>{
    conditions("paper",generateChoice())
})
scissors.addEventListener('click',()=>{
    conditions("scissor",generateChoice());
})