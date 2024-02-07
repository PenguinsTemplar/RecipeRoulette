let title = document.getElementById('title');
let ingredients = document.getElementById('ingredients');
let description = document.getElementById('description');
let button = document.getElementById('create-dish')

// console.log(title)
// console.log(ingredients)
// console.log(ingredients)

var container = document.querySelector('.ingredients');
var inputArray = ['<input id="ingredients" placeholder="Ingredients" type="text" class="form-control mt-2"/>']
function createNewInput() {
    inputArray.push('<input id="ingredients" placeholder="Ingredients" type="text" class="form-control mt-2"/>');
    container.innerHTML = '';
    inputArray.forEach((input, index) => {
        container.innerHTML += input;
    })
}

window.onload = function(){
    inputArray.forEach((input, index) => {
        container.innerHTML += input;
    })
}

button.addEventListener("click", () => {
    console.log(title.value)
    console.log(ingredients.value)
    console.log(ingredients.value)  
    const recipe = {
        title: title.value,
        description: description.value,
        ingredients: ingredients.value,
        imageSrc: '',
        category: 'Entree',
        instructions: 'whisk eggs and liquid together.  liquid'
    }
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes))
})
const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
console.log(storedRecipes)
