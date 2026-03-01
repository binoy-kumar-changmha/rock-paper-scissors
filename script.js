let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msgContainer");
const userScoreJs = document.querySelector("#score");
const comScoreJs = document.querySelector("#comScore");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        // console.log("You win :)");
        userScore++;
        userScoreJs.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${comChoice} :)`;
        msgContainer.style.backgroundColor = "yellow";
    }
    else {
        // console.log("You lose :(");
        comScore++;
        comScoreJs.innerText = comScore;
        msg.innerText = `You lose. ${comChoice} beats your ${userChoice} :(`;
        msgContainer.style.backgroundColor = "rgba(255, 78, 78, 1)";
    }
}

const playgame = (userChoice) => {
    console.log("choice was clicked", userChoice);
    // Generating computer account
    const comChoice = getCompChoice();
    console.log("Computer choice = ", comChoice);

    if (userChoice === comChoice) {
        console.log("It's a draw!");
        msg.innerText = "It's a draw! Play again.";
        msgContainer.style.backgroundColor = "rgb(122, 243, 130)";
    }
    else {
        let userWin = true;
        if (userChoice === "scissor") {
            userWin = comChoice === "paper"? true: false;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "scissor"? false: true;
        }
        else {
            userWin = comChoice === "scissor"? true: false;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});