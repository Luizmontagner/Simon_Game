// it will track the order of the lights and how they are going to flash
let order = [];
// the order the player is pressing the lights (playeroder)
let playerOrder = [];
// the number of flashs that have appeared in the game
let flash;
// turn will track with turn you are on
let turn;
// boolean to check if the player hits all the right colors or not
let good;
// boolean to set if it is the players turn or the computers turn
let compTurn;

let intervalId;
// it will check if the player selected the Jedi Mode
let jediMode = false;

let noise = true;
// it will check if the game is on or off
let on = false;
// it will say if the player won the game
let win;

// selected all css ID's using querySelector
const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const jediModeButton = document.querySelector("#jediMode");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

jediModeButton.addEventListener('click', (event) => {
    if (jediModeButton.checked == true) {
      jediMode = true;  
    } else {
        jediMode = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = 'ON';
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', (event) =>{
    if (on = true, win = true) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
}