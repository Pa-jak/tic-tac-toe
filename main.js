const divs = [...document.querySelectorAll('div')]
const spans = [...document.querySelectorAll('.content')]
const btnReset = document.querySelector('.reset')
const player = document.querySelector('.player')
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
    scoreX.textContent= playerX.score;
}

const playerOwin = ()=>{
    playerO.score++
    scoreO.textContent= playerO.score;
}

for(let i = 0; i < divs.length ; i++){
    divs[i].addEventListener('click', ()=>{

        if(spans[i].textContent == ''){
            if(playerTurn%2 == 1){
                char = 'O'
                player.textContent= 'player X'
                score[i] = 'O'
                // console.log(playerTurn%2 == 1, 'O', score[i])
            }else if (playerTurn%2 != 1){
                char = 'X'
                player.textContent= 'player O'
                score[i] = 'X'
                // console.log(playerTurn%2 != 1, "X")
            }
        spans[i].textContent = char
        playerTurn ++
        console.log(i, playerTurn, score)
        // win X
        if(score[0] === 'X' && score[1] === 'X' && score[2] === 'X'){
            playerXwin()
            console.log('win 1a', playerX.score)
            reset()
        }else if(score[3] === 'X' && score[4] === 'X' && score[5] === 'X'){
            console.log('win 2a')
            reset()
            playerXwin()
        }else if(score[6] === 'X' && score[7] === 'X' && score[8] === 'X'){
            console.log('win 3a')
            reset()
            playerXwin()
        }else if(score[0] === 'X' && score[3] === 'X' && score[6] === 'X'){
            console.log('win 4a')
            reset()
            playerXwin()
        }else if(score[1] === 'X' && score[4] === 'X' && score[7] === 'X'){
            console.log('win 5a')
            reset()
            playerXwin()
        }else if(score[2] === 'X' && score[5] === 'X' && score[8] === 'X'){
            console.log('win 6a')
            reset()
            playerXwin()
        }else if(score[0] === 'X' && score[4] === 'X' && score[8] === 'X'){
            console.log('win 7a')
            reset()
            playerXwin()
        }else if(score[2] === 'X' && score[4] === 'X' && score[6] === 'X'){
            console.log('win 8a')
            reset()
            playerXwin()
        }
        //win O
        if(score[0] === 'O' && score[1] === 'O' && score[2] === 'O'){
            console.log('win 1a')
            playerOwin()
            reset()
        }else if(score[3] === 'O' && score[4] === 'O' && score[5] === 'O'){
            console.log('win 2a')
            playerOwin()
            reset()
        }else if(score[6] === 'O' && score[7] === 'O' && score[8] === 'O'){
            console.log('win 3a')
            playerOwin()
            reset()
        }else if(score[0] === 'O' && score[3] === 'O' && score[6] === 'O'){
            console.log('win 4a')
            playerOwin()
            reset()
        }else if(score[1] === 'O' && score[4] === 'O' && score[7] === 'O'){
            console.log('win 5a')
            playerOwin()
            reset()
        }else if(score[2] === 'O' && score[5] === 'O' && score[8] === 'O'){
            console.log('win 6a')
            playerOwin()
            reset()
        }else if(score[0] === 'O' && score[4] === 'O' && score[8] === 'O'){
            console.log('win 7a')
            playerOwin()
            reset()
        }else if(score[2] === 'O' && score[4] === 'O' && score[6] === 'O'){
            console.log('win 8a')
            playerOwin()
            reset()
        }
        }

        console.log(playerTurn)
        if(playerTurn == 9){
            reset()
        }
    })
}

const reset = ()=>{
    spans.forEach((span)=>span.textContent= '')
    char = 'X'
    playerTurn = 0
    player.textContent = 'player X'
    score = []
}

btnReset.addEventListener('click', reset)

