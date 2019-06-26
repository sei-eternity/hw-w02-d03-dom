const randomize = document.querySelector('#randomize');

function addRandomImage() {

const myImg = document.createElement('img');
myImg.setAttribute('src', `https://source.unsplash.com/random`);

const divImage = document.querySelector('.image');
divImage.appendChild(myImg);    

}
randomize.addEventListener("click", addRandomImage);


