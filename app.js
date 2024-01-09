//Where I'm at: looking to attach the discrete shuffles to the Roll'Em buttons.  Feels like maybe the destroy
//and recreate method might make things harder, select and update might be preferable.  like maybe the main dish section
//should be HTML rather than an object, and we update said object.  So we have Entree Card, Side Card and Vege Card.

//Changed the order and preserved the initial settings, so the whole things can be filtered and called seperately

//Locks are functioning on the button click

const cardTitle = document.querySelectorAll('.card-title');
const cardImage = document.querySelectorAll('img');
const cardDesc = document.querySelectorAll('.card-text')
const row = document.querySelector('.row');
const container = document.querySelector('.container');
let cards = document.querySelectorAll('.card');
let lockEntree = 0;
let lockSide = 0;
let lockVegetable = 0;
let loveEntree = 0;
let loveSide = 0;
let loveVegitable = 0;

container.innerHTML = ` <button onclick="randomiseAll()" class="btn btn-primary">Reshuffle Dish</button>`
//Sets initial set of dishes
window.onload = function(){
    for(let i = 0; i 
      < mainDish.length; i++){
         const div = document.createElement('div')
        div.classList.add(['col-4']);
        div.classList.add('mb-3')
        
        div.innerHTML = `<div>
          <div class="card card-${i}">
            <h2>${mainDish[i].category}</h2>
            <div class="d-flex gap-2 mb-3">
              <button type="button" onclick="randomise${mainDish[i].category}()" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
</svg>
                Roll'Em
              </button>
              <button type="button" onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
                <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
              </svg>
</svg>
                Lock It
              </button>
              <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>
                Love it!
              </button>
              <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
                Print it!
              </button>
            </div>
            <img class="card-img-top" src=${mainDish[i].imageSrc} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${mainDish[i].title}</h5>
              <p class="card-text">${mainDish[i].description}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>`   
       row.appendChild(div)
       container.appendChild(row);
       }
       const freshCards = document.querySelectorAll('.card');
       cards = freshCards
}

function randomiseAll() {
  randomiseEntree();
  randomiseSide();
  randomiseVegetable();
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
function randomiseEntree() {
  if(lockEntree === 0){
  console.log(mainDish[2])
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const side = mainDish[1]
  const vegetable = mainDish[2];
  mainDish = [];
  const entree = reshuffleDish.filter(dish => dish.category === "Entree")[0];
  
  mainDish.push(entree, side, vegetable);
  console.log(mainDish)
  for(let i = 0; i < mainDish.length; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')
      div.innerHTML = `<div>
      <div class="card card-${i}">
        <h2>${mainDish[i].category}</h2>
        <div class="d-flex gap-2 mb-3">
          <button type="button" onclick="randomise${mainDish[i].category}()" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
</svg>
            Roll'Em
          </button>
          <button type="button"onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
          </svg>
</svg>
            Lock It
          </button>
          <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>
            Love it!
          </button>
          <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
            Print it!
          </button>
        </div>
        <img class="card-img-top" src=${mainDish[i].imageSrc} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${mainDish[i].title}</h5>
          <p class="card-text">${mainDish[i].description}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>`     
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
function randomiseSide() {
  if(lockSide === 0){
  console.log(mainDish[2])
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const entree = mainDish[0]
  const vegetable = mainDish[2];
  mainDish = [];
  const side = reshuffleDish.filter(dish => dish.category === "Side")[0];
  
  mainDish.push(entree, side, vegetable);
  console.log(mainDish)
  for(let i = 0; i < mainDish.length; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')
      div.innerHTML = `<div>
      <div class="card card-${i}">
        <h2>${mainDish[i].category}</h2>
        <div class="d-flex gap-2 mb-3">
          <button type="button" onclick="randomise${mainDish[i].category}()" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
</svg>
            Roll'Em
          </button>
          <button type="button"onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
          </svg>
</svg>
            Lock It
          </button>
          <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>
            Love it!
          </button>
          <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
            Print it!
          </button>
        </div>
        <img class="card-img-top" src=${mainDish[i].imageSrc} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${mainDish[i].title}</h5>
          <p class="card-text">${mainDish[i].description}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>`     
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
function randomiseVegetable() {
  if(lockVegetable === 0){
  console.log(mainDish[2])
  row.innerHTML = '';
  container.removeChild(row)
  const reshuffleDish = random();
  const entree = mainDish[0]
  const side = mainDish[1];
  mainDish = [];
  const vegetable = reshuffleDish.filter(dish => dish.category === "Vegetable")[0];
  mainDish.push(entree, side, vegetable);
  for(let i = 0; i < 3; i++){
      const div = document.createElement('div')
      //array of attributes to handle mobile
      div.classList.add(['col-4']);
      div.classList.add('mb-3')
      div.innerHTML = `<div>
      <div class="card card-${i}">
        <h2>${mainDish[i].category}</h2>
        <div class="d-flex gap-2 mb-3">
          <button type="button" onclick="randomise${mainDish[i].category}()" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
<path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
</svg>
            Roll'Em
          </button>
          <button type="button"onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
          </svg>
</svg>
            Lock It
          </button>
          <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>
            Love it!
          </button>
          <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
            Print it!
          </button>
        </div>
        <img class="card-img-top" src=${mainDish[i].imageSrc} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${mainDish[i].title}</h5>
          <p class="card-text">${mainDish[i].description}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>`     
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

//Shuffles ALl the dishes cards
// function randomiseDish() {
//     row.innerHTML = '';
//     container.removeChild(row)
//     const reshuffleDish = random();
//     mainDish = [];
//     const entree = reshuffleDish.filter(dish => dish.category === "Entree")[0];
//     const side = reshuffleDish.filter(dish => dish.category === "Side")[0];
//     const vegetable = reshuffleDish.filter(dish => dish.category === "Vegetable")[0];
//     mainDish.push(entree, side, vegetable);
//     console.log(mainDish)
//     for(let i = 0; i < mainDish.length; i++){
//         const div = document.createElement('div')
//         //array of attributes to handle mobile
//         div.classList.add(['col-4']);
//         div.classList.add('mb-3')
//         div.classList.add(`card-${[i]}`)
//         div.innerHTML = `<div>
//         <div class="card card-${i}">
//           <h2>${mainDish[i].category}</h2>
//           <div class="d-flex gap-2 mb-3">
//             <button type="button" onclick="randomise${mainDish[i].category}()" class="btn btn-primary">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
// <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
// </svg>
//               Roll'Em
//             </button>
//             <button type="button"onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
//               <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
//               <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
//             </svg>
// </svg>
//               Lock It
//             </button>
//             <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
//               <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
// </svg>
//               Love it!
//             </button>
//             <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5-fill" viewBox="0 0 16 16">
//               <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
//               <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
// </svg>
//               Print it!
//             </button>
//           </div>
//           <img class="card-img-top" src=${mainDish[i].imageSrc} alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title">${mainDish[i].title}</h5>
//             <p class="card-text">${mainDish[i].description}</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//           </div>
//         </div>
//       </div>`     
//        row.appendChild(div)
//        container.appendChild(row);
//     }
// }

// function setCards(){
//     const randomRecipes = random();
//     console.log(randomRecipes)
// }

// setCards()

//NOTES//
 // figure out how to use local storage
        // stringify = JSON
        // relational
        // bootstrap CDN link
        // MaterialUI



// function Recipe(title, description, ingredients, instructions, category, user){
//     this.title = title,
//     this.description = description,
//     this.ingredients = ingredients,
//     this.ingredients = ingredients, 
//     this.instructions = instructions, 
//     this.category = category,
//     this.user = user;
// }

// const recipe_1 = new Recipe("Omelettte", "This is omelette", "Peanut butter, Curry, Cumin", "hello", "vegetables",  {name:'Tyler', password: 'a;ldasdf'})
// const recipe_2 = new Recipe("Egggs", "This is Eggs", "Peanut butter, Curry, Cumin", "hello", "vegetables", {name:'Taofeek', password: 'gshsgssgshshshs'})
// let anotherRecipes = [recipe_1, recipe_2, new Recipe()];


// const recipe = anotherRecipes.filter(user => user.user.name === 'Tyler');

// console.log(recipe)

// let users = [
//     {name:'Tyler', password: 'a;ldasdf', recipe : [recipe_1, recipe_2]},
//     {name:'Taofeek', password: 'gshsgssgshshshs', recipe : recipies},
//     {name:'Bright', password: 'aghaahah', recipe : recipies}
// ]