let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let sel = document.querySelector('#sel')



let score1 = 0
let score2 = 0
let level = 5
let gameOver = true

btn1.addEventListener('click', ()=>{
    if(gameOver){
        score1++
        if(score1 == level){
            player1.style.color = 'green'
            player2.style.color = 'red'
            gameOver = false
        }
        player1.textContent = score1
    }
}) 



btn2.addEventListener('click', ()=>{
    if(gameOver){
        score2++
        if(score2 == level){
            player1.style.color = 'red'
            player2.style.color = 'green'
            gameOver = false
        }
        player2.textContent = score2
    }
})    


btn3.addEventListener('click', ()=>{
    score1 = 0
    score2 = 0
    gameOver = true
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = 'black'
    player2.style.color = 'black'
})