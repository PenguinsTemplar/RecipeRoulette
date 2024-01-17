//Where I'm at: looking to attach the discrete shuffles to the Roll'Em buttons.  Feels like maybe the destroy
//and recreate method might make things harder, select and update might be preferable.  like maybe the main dish section
//should be HTML rather than an object, and we update said object.  So we have Entree Card, Side Card and Vege Card.

//Changed the order and preserved the initial settings, so the whole things can be filtered and called seperately

//Locks are functioning on the button click
import { cardHtml } from "./card.js";
import { mainDish,recipes } from "./recipes.js";
const cardTitle = document.querySelectorAll('.card-title');
const cardImage = document.querySelectorAll('img');
const cardDesc = document.querySelectorAll('.card-text')
const row = document.querySelector('.row');
const container = document.querySelector('.container');
const listTest = document.querySelectorAll('ol')
const removeMe = document.querySelector('#remove-me')
let cards = document.querySelectorAll('.card');
let inputTest = document.querySelector('.test');
let lockEntree = 0;
let lockSide = 0;
let lockVegetable = 0;
let loveEntree = 0;
let loveSide = 0;
let loveVegitable = 0;


function detectButton(mainDish, i) {
  console.log(i)
  if(mainDish[i].category === "Entree"){
      return randomiseEntree
  }else if(mainDish[i].category === "Side"){
      return randomiseSide

  }else{
      return randomiseVegetable
  }

}

//Sets initial set of dishes
window.onload = function(){
  let btn = document.getElementById('randomDish')
  btn.addEventListener('click', randomiseAll)
  container.innerHTML = ` <button id='rollDish' class="btn btn-primary">Reshuffle Dish</button>`
  let d = document.getElementById('rollDish')
  d.addEventListener('click',randomiseAll)

    for(let i = 0; i 
      < mainDish.length; i++){
         const div = document.createElement('div')
        div.classList.add(['col-4']);
        div.classList.add('mb-3')      
        div.innerHTML = cardHtml(mainDish,i)   
       row.appendChild(div)
       container.appendChild(row);
       }
       const randomButtons = document.querySelectorAll(".randomiseButton");
    
       randomButtons.forEach((button, index) => {
         button.addEventListener('click', function() {
          console.log(index)
          if(mainDish[index].category === "Entree"){
              randomiseEntree()
              return randomiseEntree
          }else if(mainDish[index].category === "Side"){
              randomiseSide()
              return randomiseSide
        
          }else{
              randomiseVegetable()
              return randomiseVegetable
          }
        
        })
       })
       const freshCards = document.querySelectorAll('.card');
       cards = freshCards

       
}

export function randomiseAll() {
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();

  let newDish = [];
  const entree = reshuffleDish.filter(dish => dish.category === "Entree")[0];
  const side = reshuffleDish.filter(dish => dish.category === "Side")[0];
  const vegetable = reshuffleDish.filter(dish => dish.category === "Vegetable")[0];
  newDish.push(entree, side, vegetable);
  for(let i = 0; i < newDish.length; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')    
      div.innerHTML = cardHtml(newDish,i)    
     row.appendChild(div)
     container.appendChild(row);
}
}
//lockEntree

function toggleLockEntree(){
if(lockEntree === 0){
  lockEntree = 1
}
else if(lockEntree === 1){
  lockEntree = 0
}
}

//Shuffle Entree
export function randomiseEntree() {
  if(lockEntree === 0){
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const side = mainDish[1]
  const vegetable = mainDish[2];
  let newDish = [];
  const entree = reshuffleDish.filter(dish => dish.category === "Entree")[0];
  newDish.push(entree, side, vegetable);
  console.log('Entree: ',newDish);
  for(let i = 0; i < newDish.length; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')    
      div.innerHTML = cardHtml(newDish,i)    
     row.appendChild(div)
     container.appendChild(row);
  }
}
else{

}
}

//Lock Side
function toggleLockSide(){
  if(lockSide === 0){
    lockSide = 1
  }
  else if(lockSide === 1){
    lockSide = 0
  }
}

//Shuffle Side
export function randomiseSide() {
  if(lockSide === 0){
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const entree = reshuffleDish.filter(dish => dish.category === "Entree")[0]
  const vegetable = reshuffleDish.filter(dish => dish.category === "Vegetable")[0]
  let newDish= [];
  const side = reshuffleDish.filter(dish => dish.category === "Side")[0];
  
  newDish.push(entree, side, vegetable);
  console.log('Side : ',newDish)
  for(let i = 0; i < newDish.length; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')
      div.innerHTML = cardHtml(newDish,i)     
     row.appendChild(div)
     container.appendChild(row);
  }
}
}

//Lock Veggie
function toggleLockVegetable(){
  if(lockVegetable === 0){
    lockVegetable = 1
  }
  else if(lockVegetable === 1){
    lockVegetable = 0
  }
}

//Shuffle Vegetable
export function randomiseVegetable() {
  if(lockVegetable === 0){
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const entree = mainDish[0]
  const side = mainDish[1];
  let newDish = [];
  const vegetable = reshuffleDish.filter(dish => dish.category === "Vegetable")[0];
  newDish.push(entree, side, vegetable);
  console.log('Veggie : ', newDish)
  for(let i = 0; i < 3; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')
      div.innerHTML = cardHtml(newDish,i)     
     row.appendChild(div)
     container.appendChild(row);
  }
}
else{

}
}

//Randomizes the order of the recipies
function random(){
    for (var i = recipes.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = recipes[i];
        recipes[i] = recipes[j];
        recipes[j] = temp;
      }
      return recipes;
}

//Test Section
function setDone(){
  for (let li of listTest){
 li.classList.toggle('completed')
}
}


// setInterval(function () {
//   if (h1.classList.contains('big')){
//     h1.innerText ='Sad'
//   }
//   else{
//     h1.innerText = 'Happy'
//   }
//   h1.classList.toggle('big');
//   h1.classList.toggle('small');
// }, 1000)