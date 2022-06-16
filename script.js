// Variables

const PlayerX_Won = "Player X won";
const PlayerY_Won = "Player Y won";
const Tie = "Game is a Tie";
const isGameActive = true;

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// board index 
// [0][1][2]
// [3][4][5]
// [6][7][8]

let board = ["", "", "", "", "", "", "", "", ""];

// Functions

let cells = document.getElementById("grid");

document.addEventListener("click", clickHandler);

function clickHandler(e) {
    console.log(e.target.innerText)
}