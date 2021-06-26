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
// it will check if the player selected the strict mode
let strict = false;

let noise = true;
// it will check if the game is on or off
let on = false;
// it will say if the player won the game
let win;

// it keep the score of the player displayed 
let myText = "Enter your name";

// selected all css ID's using querySelector
let turnCounter = document.querySelector("#turn");
let topLeft = document.querySelector("#topleft");
let topRight = document.querySelector("#topright");
let bottomLeft = document.querySelector("#bottomleft");
let bottomRight = document.querySelector("#bottomright");
let strictButton = document.querySelector("#strict");
let onButton = document.querySelector("#on");
let startButton = document.querySelector("#start");

strictButton.addEventListener('click', () => {
    if (strictButton.checked == true) {
      strict = true;  
    } else {
        strict = false;
    }
});

onButton.addEventListener('click', () => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = 'ON!';
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', () => {
    if (on || win) {
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
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
};

function gameTurn() {
    on = false;
    if (flash == turn) {
        clearInterval(intervalId); 
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if(order[flash] == 1) one();
            if(order[flash] == 2) two();
            if(order[flash] == 3) three();
            if(order[flash] == 4) four();
            flash++;
        }, 200);
    }    
  };

function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = "lightgreen";
};

function two() {
    if (noise) {
        let audio = document.getElementById('clip2');
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = 'tomato';
};

function three() {
    if (noise) {
        let audio = document.getElementById('clip3');
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = 'yellow';
};

function four() {
    if (noise) {
        let audio = document.getElementById('clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
};

function clearColor() {
    topLeft.style.backgroundColor = 'darkgreen';
    topRight.style.backgroundColor = 'darkred';
    bottomLeft.style.backgroundColor = 'goldenrod';
    bottomRight.style.backgroundColor = 'darkblue';
}

function flashColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'tomato';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'lighskyblue';
}

// this will check if the player got the right answer
topLeft.addEventListener('click', () => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

topRight.addEventListener('click', () => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottomLeft.addEventListener('click', () => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottomRight.addEventListener('click', () => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
     good = false;

     if (playerOrder.length == 15 && good) {
         winGame();
     }

     if (good == false) {
         flashColor();
         turnCounter.innerHTML = 'NO!';
         setTimeout(() => {
             turnCounter.innerHTML = turn;
             clearColor();

             if (strict) {
                 play();
             }else {
                 compTurn = true;
                 flash = 0;
                 playerOrder = [];
                 good - true;
                 intervalId = setInterval(gameTurn, 800);
             }
         }, 800);
         noise = false;
     }

     if (turn == playerOrder.length && good && !win) {
         turn++;
         playerOrder = [];
         compTurn = true;
         flash = 0;
         turnCounter.innerHTML = turn;
         intervalId = setInterval(gameTurn, 800);
     }
};

function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    alert (myText);
    on = false;
    win = true;
};


