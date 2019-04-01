let uchoice = '1';
let cchoice = '3';

console.log(uchoice)
console.log(cchoice)

function uwin() {
    console.log("you won! hurray!");
}

function draw() {
    console.log("you both chose the same, try again!");
}

console.log(uchoice === '1' && cchoice === '3')
console.log(uchoice === '1' && cchoice === '2')

function playround () {
    if (uchoice == '1' && cchoice == '3') {
        uwin();
    } else if (uchoice === '1' && cchoice === '2') {
        cwin();
    } else {
        draw();
    }
}

playround()