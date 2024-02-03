const colorList = ['red','blue','green'
,'orange','pink','yellow','aqua','purple'];
let cardSet = [];

const gameBoard = document.querySelector('.game')
gameBoard.addEventListener('click', pickCard)

let turnCount = 0
let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false;
let winCondition = 10000;
let score = document.querySelector('#scoreDisplay')

window.onload = function() {
    shuffleCards();
    startGame();  
}


function shuffleCards(){
    console.log('shuffleCards'
    )
    cardSet = colorList.concat(colorList)
    for(let i = 0; i < cardSet.length; i ++){
        //get a fresh board order
        let j = Math.floor(Math.random() * cardSet.length)
        //swap the Card colors around
        let temp = cardSet[i]
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

function startGame(colorSet){
    console.log('start game')
    for (let i = 0; i < cardSet.length; i++) {
        
        let color = cardSet[i]
        

        const newCard = document.createElement("div");

        newCard.classList.add(color);
        newCard.classList.add('card');
        newCard.setAttribute('data-dogname',color)

        const frontImg = document.createElement("img");
        const backImg = document.createElement('img');
        
        frontImg.setAttribute('class','front')        
        frontImg.setAttribute('src',`MemAssests/${color}.gif`)
        frontImg.setAttribute('alt','front')

        backImg.setAttribute('class','back')
        backImg.setAttribute('src',`MemAssests/interceptorCard.gif`)
        backImg.setAttribute('alt','back')
        

        gameBoard.appendChild(newCard);
        newCard.appendChild(frontImg)
        newCard.appendChild(backImg)
        newCard.addEventListener('click', function() {
            console.log(lockBoard)
            if (lockBoard) return;
            this.classList.toggle('flip')

              
        })
        
        
}
winCondition = cardSet.length
}


function pickCard(event){
    console.log('Pick Card Event')
    cardCheck = document.querySelectorAll('.card')

    if (lockBoard) return;
    if (event.target.parentElement === firstCard) return;
    if(winCondition === 0){
        alert(`You Won in ${turnCount} guesses!`);
        lockBoard = true;
    }
    
    

    if (!hasFlippedCard){
        console.log('no flipped card line 83')
        firstCard = event.target.parentElement
        hasFlippedCard = true;

    }
    else if (hasFlippedCard){

        console.log('check match else line 90.')
        hasFlippedCard = false;

        secondCard = event.target.parentElement;
        checkMatch()
    }

}  

function checkMatch(){

    console.log('checkMatch',firstCard.dataset.dogname,secondCard.dataset.dogname)
    let isMatched = ((firstCard.dataset.dogname) === (secondCard.dataset.dogname))  

    console.log(firstCard.dataset.dogname)
    console.log(secondCard.dataset.dogname)

    if(isMatched) {
        removeListener()
        winCondition = winCondition-2;
        console.log(isMatched, winCondition);
        turnCount++
        score.innerHTML = `<span id='scoreDisplay'>${turnCount}</span>`
} 
    else if(!isMatched){
    console.log(isMatched)
    flipBack()
    turnCount++
    score.innerHTML = `<span id='scoreDisplay'>${turnCount}</span>`
}

function removeListener(){
    firstCard.removeEventListener('click',flipBack);
    secondCard.removeEventListener('click',flipBack);
}

function flipBack(){
    lockBoard = true
    console.log('flip back',firstCard,secondCard)
        setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        },1500)
        lockBoard = false       
}}