//At First I declar the type of action .
let typeOfAction = 'click';
//I let my varable 'button' git the name of the button selector.
let button = document.querySelector('button#randomize');
let imageTage = function(event){
    let NE = document.createElement('img');
    NE.setAttribute('src', 'https://source.unsplash.com/random');
    let targetedDiv = document.querySelector('div.image');
    targetedDiv.appendChild(NE);

}
button.addEventListener( typeOfAction, imageTage);