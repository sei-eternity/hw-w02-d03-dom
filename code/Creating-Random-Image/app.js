const myButton = document.querySelector('#randomize');
const myCallback = function(){
    console.log("hey")
    const newImage = document.createElement('img');
    imgSrc = 'https://source.unsplash.com/user/erondu/';
    imgSrc+= $('.width').val();
    imgSrc+='x' +$('.height').val();
    newImage.setAttribute('src',imgSrc);
  const imageDiv = document.querySelector('.image');
    imageDiv.appendChild(newImage);
}
myButton.addEventListener('click', myCallback);