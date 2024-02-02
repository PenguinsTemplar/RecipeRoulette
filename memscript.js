const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        console.log(firstCard, hasFlippedCard);
    } else {
        hasFlippedCard = false;
        secondCard = this; 
        checkMatch()   
    }     
}


cards.forEach(card => card.addEventListener('click', flipCard))

//Check for match
function checkMatch(){
    let isMatched = firstCard.dataset.dogname === secondCard.dataset.dogname
    //stops cards from being flippable
    isMatched ? removeListener() : flipBack()
   }

function removeListener(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
}

function flipBack(){
    lockBoard = true
        setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false
        },1500)
        
}

function resetGame(){
    [hasFlippedCard,lockBoard] = [false,false]
    [firstCard,secondCard] = [null,null]
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12);
        card.style.order = randomPos
    })
})()
