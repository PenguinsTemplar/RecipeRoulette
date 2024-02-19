const colorList = ['red','blue','green'
,'orange','pink','yellow','aqua','purple','white','mauve','morgan','cricket'];
let cardSet = [];
const gameBoard = document.querySelector('.game')
const newGame = document.querySelector('.reset')
let lowScore = []
let lowScoreDisplay = document.querySelector('#lowScoreDisplay')

let turnCount = 0
let hasFlippedCard = false
let firstCard,secondCard
let firstCardID= -1
let secondCardID = -2
let lockBoard = false;
let winCondition = 10000;
let score = document.querySelector('#scoreDisplay')

window.onload = function() {
    shuffleCards();
    startGame();
    let currentLow = localStorage.getItem('lowScore')
    if(currentLow === null){
        JSON.stringify(localStorage.setItem('lowScore',1000))
        currentLow = 1000
        lowScoreDisplay.innerHTML = `<span id='lowScoreDisplay'>${currentLow}</span>`
    }
    lowScoreDisplay.innerHTML = `<span id='lowScoreDisplay'>${currentLow}</span>`
}

newGame.addEventListener('click',function (){
    console.log('boom!')
    gameBoard.innerHTML=''
    shuffleCards();
    startGame();
    score.innerHTML = `<span id='scoreDisplay'>0</span>`
})

function shuffleCards(){
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
    for (let i = 0; i < cardSet.length; i++) {
        
        let color = cardSet[i]
        

        const newCard = document.createElement("div");

        newCard.classList.add(color);
        newCard.classList.add('card');
        newCard.setAttribute('data-dogname',color)
        newCard.setAttribute('data-id',i)

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
        newCard.addEventListener('click', listenEvent)       
}
winCondition = cardSet.length
}

function listenEvent (event) {
    if (lockBoard) return;
    console.log('Listener')
    
    let idCheck = Number(event.target.parentElement.dataset.id)
    if(firstCard !== null && idCheck === firstCardID){
    console.log('same card');
    return;
    }
    event.target.parentElement.classList.toggle('flip');
    pickCard(event);    
}

function pickCard(event) {
    console.log(event.target.parentElement.dataset.id)
    console.log(firstCard)
    console.log(firstCard)
    console.log(!hasFlippedCard)
    if (winCondition === 0){
        alert(`YOU WIN IN : ${turnCount} guesses!`)
    }
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCardID = Number(event.target.parentElement.dataset.id);
      firstCard = event.target.parentElement
        console.log('!Flip',firstCard)
      return;
    }
    else if (hasFlippedCard){
    secondCard = event.target.parentElement;
    checkMatch(event);
}
  }

function checkFirstCard(event){
    if (Number(event.target.parentElement.dataset.id) === Number(firstCard)){
        console.log('thats the same card')
        return;
    } 
  
}

function checkMatch(){

let isMatched = ((firstCard.dataset.dogname) === (secondCard.dataset.dogname))  

 if(isMatched) {
        removeListener()
        turnCount++
        score.innerHTML = `<span id='scoreDisplay'>${turnCount}</span>`
        winCondition = (winCondition - 2)
        if (winCondition === 0){
            alert(`YOU WIN IN : ${turnCount} guesses!`)
            currentScore = Number(turnCount)
            allTime = Number(localStorage.getItem('lowScore'))
            console.log('allTime',allTime,'current',currentScore)
            console.log(allTime > currentScore)
            var audio = new Audio(`MemAssests\/Interceptor_Bark_Sound_Effect.mp3`);
            audio.play();
            if(allTime > currentScore){
            localStorage.setItem('lowScore',currentScore)
            lowScoreDisplay.innerHTML = `<span id='lowScoreDisplay'>${currentScore}</span>`
            //this doesn't seem to work
            // var audio = new Audio(`MemAssests\/Interceptor_Bark_Sound_Effect.mp3`);
            // audio.play();
        }
        }
} 
    else if(!isMatched){
    flipBack()
    turnCount++
    score.innerHTML = `<span id='scoreDisplay'>${turnCount}</span>`
    
}
}

function removeListener(event){
    console.log(firstCard,secondCard)
    firstCard.removeEventListener('click',listenEvent);
    secondCard.removeEventListener('click',listenEvent);
    lockBoard = false
        firstCardID = -1
        firstCard = ''
        secondCard = ''
        hasFlippedCard = false
}

function flipBack(event){
    console.log(firstCard)
    console.log(secondCard)
    lockBoard = true
        setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false
        firstCardID = -1
        firstCard = ''
        secondCard = ''
        hasFlippedCard = false
        },1500)
              
}