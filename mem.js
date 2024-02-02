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

        const frontImg = document.createElement("img");
        const backImg = document.createElement('img');
        
        frontImg.setAttribute('class','front')        
        frontImg.setAttribute('src',`MemAssests/${color}.gif`)
        frontImg.setAttribute('alt','front')

        backImg.setAttribute('class','back')
        backImg.setAttribute('src',`MemAssests/interceptorCard.gif`)
        backImg.setAttribute('alt','back')
        

        gameBoard.appendChild(newCard);
        newCard.addEventListener('click', function() {
            if (lockBoard) return;
            this.classList.toggle('flip')
            
        })
        newCard.appendChild(frontImg)
        newCard.appendChild(backImg)
        
}
winCondition = cardSet.length
}


function pickCard(event){
    cardCheck = document.querySelectorAll('.card')
    if(winCondition === 0){
        alert(`You Won in ${turnCount} guesses!`);
        lockBoard = true;
    }
    if(lockBoard) return;
    if(event.target.id === 'board') return;
    if (event.target === firstCard) return;

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = event.target;
        console.log(firstCard, hasFlippedCard)
    }
    else{
        hasFlippedCard = false;
        secondCard = event.target;
        turnCount++
        score.innerHTML= turnCount
        checkMatch() 
    }

}  

function checkMatch(){
    let isMatched = firstCard.parentElement.dataset.dogname === secondCard.parentElement.dataset.dogname
    //stops cards from being flippable
    isMatched ? removeListener() : flipBack()
    if(isMatched) winCondition = winCondition-2;
   }

function removeListener(){
    firstCard.removeEventListener('click',flipBack);
    secondCard.removeEventListener('click',flipBack);
}

function flipBack(){
    lockBoard = true
        setTimeout(()=>{
        firstCard.parentElement.classList.remove('flip');
        secondCard.parentElement.classList.remove('flip');
        lockBoard = false
        },1500)
        
}