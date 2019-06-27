// button#randomize:
// Create an img element

const randomizeButton = document.querySelector('button#randomize');

const randomizeImage = function(){
    
    var random1 = Math.floor((Math.random() * 1000) + 1);
    var random2 = Math.floor((Math.random() * 1000) + 1);
    let link = "https://picsum.photos/"+random1+"/"+random2
    let img = document.createElement('img');
    document.querySelectorAll('img');
    img.setAttribute('src',link);
    let divImg = document.querySelector("div.image")
       divImg.appendChild(img);
    
}


randomizeButton.addEventListener('click', randomizeImage);

