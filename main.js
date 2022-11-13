const divs = [...document.querySelectorAll('div')]
const spans = [...document.querySelectorAll('span')]
const btnReset = document.querySelector('.reset')
const player = document.querySelector('.player')

let char = 'X'

const playerX = {
    score: 
    char = 'X'


}

let playerTurn = 0

for(let i = 0; i < divs.length ; i++){
    divs[i].addEventListener('click', ()=>{
        if(playerTurn%2 == 1){
            char = 'O'
            player.textContent= 'player X'
        }else{
            char = 'X'
            player.textContent= 'player O'
        }
        if(spans[i].textContent == ''){
        spans[i].textContent = char
        playerTurn ++
        console.log(i, playerTurn)
        
        }
        
    })
}
btnReset.addEventListener('click', ()=> {
    spans.forEach((span)=>  span.textContent= '')
    char = 'X'
    playerTurn = 0
    player.textContent = 'player X'
})


