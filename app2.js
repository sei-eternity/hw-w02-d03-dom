document.querySelector('#randomize').addEventListener("click", addRandomImage);

function addRandomImage() {

    
    const img = document.createElement('img');
    const width = document.querySelector('.width');
    const height = document.querySelector('.height');

    if((width.value && height.value) != ''){
    img.setAttribute('src', `https://source.unsplash.com/${width.value}x${height.value}`);

    const divImage = document.querySelector('.image');
    divImage.appendChild(img);
    }
    else{
        img.setAttribute('src', `https://source.unsplash.com/random`);

    const divImage = document.querySelector('.image');
    divImage.appendChild(img);
    }

    width.value = '';
    height.value = '';

}





