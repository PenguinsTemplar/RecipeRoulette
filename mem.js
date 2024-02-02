const colorList = ['red','blue','green'
,'orange','pink','yellow','aqua','purple'];
let cardSet = [];
let guesses = document.querySelector('.tries')

const gameBoard = document.querySelector('.game')
gameBoard.addEventListener('click', pickCard)

let turnCount = 0
let endOfTurn = false

let firstCardID = -1
let secondCardID = -2
let firstCardColor = ''
let secondCardColor = ''

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
        newCard.innerText = color
        newCard.classList.add('facedown')
        newCard.setAttribute('id',i)

        gameBoard.appendChild(newCard);
        newCard.addEventListener('click', function() {
            newCard.classList.remove('facedown')
            newCard.classList.add('faceup')
            newCard.style.backgroundColor = color
        })
        
}
}

function hideCards () {
    console.log('hideCards event')
    let cards = document.querySelectorAll('.card')
    console.log(cards[0].classList.contains('matched'))
    for (let card of cards){
    if (card.classList.contains('matched')){
        
            console.log('mached')
        }
        else{
            card.classList.remove('faceup')
            card.classList.add('facedown')
            
            card.innerText = ''
            card.style.backgroundColor = 'transparent'
            console.log('not matched')
        }
    }
    // console.log(cards, 'data type', typeof cards)
    // for (let k = 0; k < cardSet.length; k++){
    //     console.log (cards[k])
        
    //     if (!cards[k].getAttribute('data-matched')){
    //         // console.log(cards[k].dataset.matched)
    //         // console.log('Cards Match')
    //         console.log('false and class list',cards[k].classList)
    //         console.log(cards)
    //         console.log(cards[k].innerText)
    //         console.log(cards[k].style.backgroundColor)
    //         // cards[k].classList.remove('facedown')
    //         // cards[k].classList.add('faceup')
    //         // cards[k].innerText = ''
    //         // cards[k].style.backgroundColor = 'transparent'
    //     } 
    //     else if (cards[k].getAttribute('data-matched')== true){
    //         // console.log('bonk')
    //     }
        
        
    // }
}

function pickCard(event){
    console.log(endOfTurn)
    //check to see if it's the parent element.
    cardCheck = document.querySelectorAll('.card')
    if(event.target.id === 'board'){
        console.log('Thats the game board')
        return  
    }
    //make sure it's not the same card
    if(Number(event.target.id) === firstCardID){
        console.log('You already picked that one')
        return
    }
    //check to see if it's the second guess of the turn
    else if(endOfTurn === false){
        console.log('End of Turn False')
        firstCardID = Number(event.target.id)
        firstCardColor = event.target.classList[0]
        console.log('First Card id :',firstCardID,'First card color :', firstCardColor)
        endOfTurn = true
        return
    }
    else if(endOfTurn === true){
        console.log('End of Turn True')
            secondCardID = event.target.id
            secondCardColor = event.target.classList[0]
            console.log('color check',firstCardColor  === secondCardColor)
            if(firstCardColor  === secondCardColor){
            
            console.log('match',firstCardID,secondCardID)
            console.log(firstCardColor,secondCardColor)
            cardCheck[firstCardID].classList.add('matched')
            cardCheck[secondCardID].classList.add('matched')
            firstCardColor = ''
            secondCardColor = ''
            firstCardID = -1
            secondCardID = -2
            endOfTurn = false

            return
        }
        else{
            console.log('shouldnt be here')

        }
          
    }

}  

// function pickCard(event){
//     console.log('End of Turn is : ', endOfTurn)
//     let pick = Number(event.target.id)
//     color = event.target.classList[0]
//     console.log('first card color :',firstCardColor,'Event Target Color: ',color)
//     if (event.target.id === 'board'){
//         console.log('thats the board');
//         return
//     }



//     else if (endOfTurn === false){
//         console.log('this ever happen?')
//         firstCardID = Number(pick)
//         firstCardColor = color
//         event.target.classList.add('faceup')
//         event.target.classList.remove('facedown')
//         endOfTurn = true;
//         return
//     }


//     else if (endOfTurn === true && firstCardColor === event.target.color){
//         console.log('endOfTurn is true')
//         endOfTurn = false
//         console.log('Else if')        
//         let pick2 = Number(event.target.id);
//         let color2 = event.target.classList[0]
//         console.log('first Guess id is : ',firstCardID,'second guess id:',pick2)
//         console.log('second guess color 2:',color2)
//         console.log('pickCard Else')
//         return
        
// }
// }