import { randomiseEntree,randomiseSide,randomiseVegetable} from "./app.js"

export function cardHtml(mainDish,i){
return `<div>
      <div class="card">
        <h2>${mainDish[i].category}</h2>
        <div class="d-flex gap-2 mb-3">
          <button id=btnRec-${i} type="button" class="btn btn-primary randomiseButton">
            <i class="bi bi-dice-6-fill">Roll'Em!</i>
          </button>
          
          <button type="button"onclick="toggleLock${mainDish[i].category}()" class="btn btn-success">
            <i class="bi bi-file-lock2-fill"></i>
            Lock It!
            </i>
          </button>

          <button type="button" onclick="toggleLove${mainDish[i].category}()" class="btn btn-outline-danger">
          <i class="bi bi-arrow-through-heart-fill">Love it!</i>            
          </button>

          <button type="button" onclick="print${mainDish[i].category}()" class="btn btn-outline-success">
          <i class="bi bi-printer-fill">Print it!</i>
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
}