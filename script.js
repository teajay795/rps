let uwins = 0;
let cwins = 0;

function uwin() {
    console.log("you won! hurray!")
    uwins++;
}

function draw() {
    console.log("you both chose the same, try again!");
}

function cwin() {
    console.log('you lost!')
    cwins++;
}


function playround () {
    let uchoice = prompt("Enter your choice", "Rock,Paper or Scissors");
    let uuchoice = uchoice.toLowerCase();
    let cchoice = Math.floor(Math.random()  * 3);
    if (uuchoice == 'rock' && cchoice == '2') {
        uwin();
    } else if (uuchoice == 'rock' && cchoice == '1') {
        cwin();
    } else if (uuchoice == 'paper' && cchoice == '0') {
        uwin();
    } else if (uuchoice == 'paper' && cchoice == '2') {
        cwin();
    } else if (uuchoice == 'scissors' && cchoice == '1') {
        uwin();
    } else if (uuchoice == 'scissors' && cchoice == '0') {
        cwin();
    }
    else {
        draw();
    }
}


while (uwins < 5 && cwins < 5) {
    playround();
    console.log(uwins);
    console.log(cwins);
}

if (uwins = 5) {
    console.log('you are the champ!!');
}
else {
    console.log('you lose the series!');
}