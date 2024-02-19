const submitBtn = document.querySelector('#submit')
const urlInput = document.querySelector('#imageURL')
const memeLinks= document.getElementById('memeLinks')
const subBtn = document.querySelector('#submit')


subBtn.addEventListener('click',() =>{
    // const imageUpload = document.querySelector('#imageUpload');
    const imageURLinput = document.querySelector('#imageURL');
    const topTextInput = document.querySelector('#topInput');
    const bottomTextInput = document.querySelector('#bottomInput');
    const topText = document.createElement('p')

    const bottomText = document.createElement('p')

    const memeHolder = document.createElement('div')
    
    const imageTag = document.createElement('img')
    
    memeHolder.classList.add('memeholder')

    topText.classList.add('textStyleTop')
    bottomText.classList.add('textStyleBottom')


    imageTag.src = imageURLinput.value;
    topText.innerHTML = topTextInput.value;

    bottomText.innerHTML = bottomTextInput.value;


    memeHolder.appendChild(imageTag);
    memeHolder.appendChild(topText);
    memeHolder.appendChild(bottomText);
    meme.appendChild(memeHolder);

    imageTag.addEventListener('click',function(e){
        console.log(e.target)
        e.target.parentElement.innerHTML = ''
    })
    topTextInput.value = '';
    bottomTextInput.value = '';
    imageURLinput.value = '';
    
});

memeLinks.addEventListener('click', getURL)

function getURL(event){
    console.log(event.target.src)
    urlInput.value = event.target.src
}

//it's an iteratable thing, gotta function i loop it up

// This was to add a file from hard drive Depricated

// imageUpload.addEventListener('change',() =>{
//     const imageUrl = URL.createObjectURL(imageURLinput);
//     image = new Image();
//     image.src = imageUrl;

//     image.addEventListener('load',() =>{
//         updateMemecanvas(canvas, image,topTextInput.value,bottomTextInput.value)
//     });
// });

// topTextInput.addEventListener('change',() =>{
//     updateMemeCanvas(meme,image,topTextInput.value,bottomTextInput.value);
// })

// bottomTextInput.addEventListener('change',() =>{
//     updateMemeCanvas(meme,image,topTextInput.value,bottomTextInput.value)
// })

// function updateMemeCanvas(meme, image, topText,bottomText){
    

//     const ctx = meme.getContext('2d');
//     const width = image.width;
//     const height = image.height;
//     const fontSize = Math.floor(width / 10);
//     const yOffset = height/10;

//     // set canvas background
//     meme.width = width;
//     meme.height = height;
//     ctx.drawImage(image, 0 , 0);

//     // add some text
//     ctx.strokeStyle = 'black';
//     ctx.lineWidth = Math.floor(fontSize / 4);
//     ctx.fillStyle = 'white';
//     ctx.textAlign = 'center';
//     ctx.lineJoin = 'round';
//     ctx.font = `${fontSize}px 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`;

//     //top section
//     ctx.textBaseLine = 'top';
//     ctx.strokeText(topText, width / 2, yOffset);
//     ctx.fillText(topText,width/2,yOffset)

//     //bottom secion
//     ctx.textBaseLine = 'bottom';
//     ctx.strokeText(bottomText, width / 2,height -  yOffset);
//     ctx.fillText(bottomText, width/2,height - yOffset)
// }