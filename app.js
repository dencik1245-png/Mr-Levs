let boxes = document.querySelectorAll(".box"); // spēles lauciņi
let resetBtn = document.querySelector("#reset-btn"); // reset poga
let newGameButton = document.querySelector("#new-btn"); // new game poga
let msgContainer = document.querySelector(".msg-container"); // ziņas konteiners
let msg = document.querySelector("#msg"); // ziņas teksts
let container = document.querySelector(".container"); // spēles konteiners
let count = 0; // gājienu skaits
let turnO = true; // kura spēlētāja gājiens (true = O)

/**
* Atiestata spēli uz sākuma stāvokli
*/
const resetGame = () => {
turnO = true;
count = 0;
enableBoxes();
msgContainer.classList.add("hide");
container.classList.remove("hide");
};

/**
* Atspējo visus lauciņus (beidz spēli)
*/
const disableBoxes = () => {
for (let box of boxes) {
box.disabled = true;
}
};

/**
* Ieslēdz un notīra visus lauciņus
*/
const enableBoxes = () => {
for (let box of boxes) {
box.disabled = false;
box.innerText = "";
}
};

/**
* Parāda uzvarētāju
* @param {string} winner - uzvarētāja simbols (X vai O)
*/
const showWinner = (winner) => {
msg.innerText = `Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
container.classList.add("hide");
disableBoxes();
};

/**
* Parāda neizšķirtu, ja nav uzvarētāja
*/
const drawGame = () => {
if (!checkWinner()) {
msg.innerText = "This Game is a Draw.";
msgContainer.classList.remove("hide");
container.classList.add("hide");
disableBoxes();
}
};

/**
* Pārbauda, vai kāds ir uzvarējis
* @returns {boolean} true, ja ir uzvarētājs
*/
const checkWinner = () => {
for (let pattern of winPatterns) {
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
if (pos1Val === pos2Val && pos2Val === pos3Val) {
showWinner(pos1Val);
return true;
}
}
}
return false;
};
