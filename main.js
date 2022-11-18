const divs = [...document.querySelectorAll('div')]
const spans = [...document.querySelectorAll('.content')]
const btnReset = document.querySelector('.reset')
// const player = document.querySelector('.player')
const scoreO = document.querySelector('.scoreO')
const scoreX = document.querySelector('.scoreX')

let score = []
let char = 'X'

const playerX = {
    score: 0,
    char: 'X'
}

const playerO = {
    score: 0,
    char: 'O'
}

let playerTurn = 0

const playerXwin = ()=>{
    playerX.score++
    scoreX.textContent= `playerX: ${playerX.score}`;
}

const playerOwin = ()=>{
    playerO.score++
    scoreO.textContent= `playerO: ${playerO.score}`;
}

for(let i = 0; i < divs.length ; i++){
    divs[i].addEventListener('click', ()=>{

        if(spans[i].textContent == ''){
            if(playerTurn%2 == 1){
                char = 'O'
                // player.textContent= 'player: X';
                scoreX.style.border = '2px solid red';
                scoreO.style.border = '2px solid black';
                score[i] = 'O'
                // console.log(playerTurn%2 == 1, 'O', score[i])
            }else if (playerTurn%2 != 1){
                char = 'X'
                // player.textContent= 'player: O'
                scoreO.style.border = '2px solid red';
                scoreX.style.border = '2px solid black';
                score[i] = 'X'
                // console.log(playerTurn%2 != 1, "X")
            }
        spans[i].textContent = char
        playerTurn ++
        console.log(i, playerTurn, score)
        // win X
        if(score[0] === 'X' && score[1] === 'X' && score[2] === 'X' || score[3] === 'X' && score[4] === 'X' && score[5] === 'X' || score[6] === 'X' && score[7] === 'X' && score[8] === 'X' || score[0] === 'X' && score[3] === 'X' && score[6] === 'X' || score[1] === 'X' && score[4] === 'X' && score[7] === 'X' || score[2] === 'X' && score[5] === 'X' && score[8] === 'X' || score[0] === 'X' && score[4] === 'X' && score[8] === 'X' || score[2] === 'X' && score[4] === 'X' && score[6] === 'X'){
            playerXwin()
            console.log('win 1a', playerX.score)
            win()
        }
        //win O
        if(score[0] === 'O' && score[1] === 'O' && score[2] === 'O' || score[3] === 'O' && score[4] === 'O' && score[5] === 'O' || score[6] === 'O' && score[7] === 'O' && score[8] === 'O' || score[0] === 'O' && score[3] === 'O' && score[6] === 'O' || score[1] === 'O' && score[4] === 'O' && score[7] === 'O' || score[2] === 'O' && score[5] === 'O' && score[8] === 'O' || score[0] === 'O' && score[4] === 'O' && score[8] === 'O' || score[2] === 'O' && score[4] === 'O' && score[6] === 'O'){
            console.log('win 1a')
            playerOwin()
            win()
        }
        }

        console.log(playerTurn)
        if(playerTurn == 9){
            win()
            //draw
        }
    })
}

const reset = ()=>{
    spans.forEach((span)=>span.textContent= '')
    char = 'X'
    playerTurn = 0
    // player.textContent = 'player: X'
    scoreX.style.border = '2px solid red';
    scoreO.style.border = '2px solid black';
    score = []
    playerO.score = 0;
    playerX.score = 0;
    scoreO.textContent= 'playerO: 0';
    scoreX.textContent= 'playerX: 0';

}

const win = () => {
    // chcemy wywołać animacje która będzie wyświetlała napis "wygrał gracz" i znak gracza który wygrał i przycisk do kolejnej gry 
    // reset player turn 
    // reset tablicy z planszą 
    // reset gracza na X
    spans.forEach((span)=>span.textContent= '')
    char = 'X'
    playerTurn = 0
    // player.textContent = 'player: X'
    scoreX.style.border = '2px solid red';
    scoreO.style.border = '2px solid black';
    score = []    


}

btnReset.addEventListener('click', reset)

