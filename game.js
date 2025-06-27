let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-sec");
const compScorePara = document.querySelector("#comp-sec");

let genCompChoice = () => {
    const options = ["paper", "rock", "scissor"]; // all lowercase
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) => {
    const user = userChoice.toLowerCase();
    const comp = genCompChoice();

    console.log("User Choice:", user);
    console.log("Comp Choice:", comp);

    if (user === comp) {
        drawGame();
        return;
    }

    let userWin = false;

    if (
        (user === "rock" && comp === "scissor") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissor" && comp === "paper")
    ) {
        userWin = true;
    }

    showWinner(userWin, user, comp);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
