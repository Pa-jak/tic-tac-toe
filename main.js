const divs = [...document.querySelectorAll('.field')]
const spans = [...document.querySelectorAll('.content')]
const btnReset = document.querySelector('.reset')
const scoreO = document.querySelector('.scoreO')
const scoreX = document.querySelector('.scoreX')
const cover = document.querySelector('.cover')
const coverWhoWin = document.querySelector('.cover__who-win')
const playerBtn = document.querySelector('.player') 
const aiBtn = document.querySelector('.ai') 

let score = []
let char = 'X'
let playerTurn = 0
let random = Math.floor(Math.random() * divs.length) 

const playerX = {
    score: 0,
    char: 'X'
}

const playerO = {
    score: 0,
    char: 'O',
    isAi: 1
}



const reset = ()=>{
    spans.forEach((span)=>span.textContent= '')
    scoreO.style.border = '2px solid black';
    scoreX.style.border = '2px solid red';
    scoreO.textContent= 'playerO: 0';//
    scoreX.textContent= 'playerX: 0';//
    playerO.score = 0;//
    playerX.score = 0;//
    playerTurn = 0;
    score = [];
    char = 'X';

}



const winConditions = () =>{
    // win X
    if(score[0] === 'X' && score[1] === 'X' && score[2] === 'X' || score[3] === 'X' && score[4] === 'X' && score[5] === 'X' || score[6] === 'X' && score[7] === 'X' && score[8] === 'X' || score[0] === 'X' && score[3] === 'X' && score[6] === 'X' || score[1] === 'X' && score[4] === 'X' && score[7] === 'X' || score[2] === 'X' && score[5] === 'X' && score[8] === 'X' || score[0] === 'X' && score[4] === 'X' && score[8] === 'X' || score[2] === 'X' && score[4] === 'X' && score[6] === 'X'){
        playerXwin()
        win()
        
    }
//win O
    else if(score[0] === 'O' && score[1] === 'O' && score[2] === 'O' || score[3] === 'O' && score[4] === 'O' && score[5] === 'O' || score[6] === 'O' && score[7] === 'O' && score[8] === 'O' || score[0] === 'O' && score[3] === 'O' && score[6] === 'O' || score[1] === 'O' && score[4] === 'O' && score[7] === 'O' || score[2] === 'O' && score[5] === 'O' && score[8] === 'O' || score[0] === 'O' && score[4] === 'O' && score[8] === 'O' || score[2] === 'O' && score[4] === 'O' && score[6] === 'O'){
        playerOwin()
        win()
        
    }       
//drow
    else if(playerTurn == 9){
        win()
        coverWhoWin.textContent = 'draw'
        
    }
}

const win = () => {
    spans.forEach((span)=>span.textContent= '')
    scoreO.style.border = '2px solid black';
    scoreX.style.border = '2px solid red';
    coverWhoWin.style.display = "block";
    cover.style.display = 'block';
    playerTurn = 0;
    score = []; 
    char = 'X';   
}

const playerXwin = ()=>{
    playerX.score++
    scoreX.textContent= `playerX: ${playerX.score}`;
    coverWhoWin.textContent = 'player X win'
}

const playerOwin = ()=>{
    playerO.score++
    scoreO.textContent= `playerO: ${playerO.score}`;
    coverWhoWin.textContent = 'player O win'
}

// rozpoczęcie gry 

for(let i = 0; i < divs.length ; i++){
    divs[i].addEventListener('click', ()=>{
// player turn
        if(spans[i].textContent == ''){
            if(playerTurn%2 == 0 ){
                char = 'X'
                score[i] = 'X'
                scoreO.style.border = '2px solid red';
                scoreX.style.border = '2px solid black';

                if(playerO.isAi ){
    
                    const losu = ()=>{
                    if(spans[random].textContent == '' && playerTurn != 0){
                        console.log('mamy O', random, winConditions() == true);
                        
                        spans[random].textContent = 'O'
                        score[random] = 'O'
                        scoreX.style.border = '2px solid red';
                        scoreO.style.border = '2px solid black';
                        
                        playerTurn ++; 
                        random = Math.floor(Math.random() * divs.length);
                        winConditions()
                        

                    }else if(playerTurn != 0){
                        console.log(random, 'z elsa')
                        random = Math.floor(Math.random() * divs.length) ;
                        losu()
                    }
                    }
    // losu()
            setTimeout(losu, 1000)
                }
            }else if (playerTurn%2 != 0 && playerO.isAi === 0){
                char = 'O'
                score[i] = 'O'
                scoreX.style.border = '2px solid red';
                scoreO.style.border = '2px solid black';
                }
            
        spans[i].textContent = char
        playerTurn ++
        winConditions()
    }
    })
}


//listeners

btnReset.addEventListener('click', reset)

cover.addEventListener('click', ()=> {
    cover.style.display = 'none';
    coverWhoWin.style.display = "none"
} )

playerBtn.addEventListener('click', ()=> {
    playerO.isAi = 0
    playerBtn.style.backgroundColor = 'red';
    aiBtn.style.backgroundColor = 'white';
})

aiBtn.addEventListener('click', ()=> {
    playerO.isAi = 1
    aiBtn.style.backgroundColor = 'red';
    playerBtn.style.backgroundColor = 'white';
})
