const buttonImage = document.querySelector('button#randomize');
const inputWidth = document.querySelector('input.width');
const inputHeight = document.querySelector('input.height');

const img = document.createElement('img');


buttonImage.addEventListener('click', function(){
    
    img.setAttribute('src', dropdownList.value);
    img.style.width = `${inputWidth.value}px`;
    img.style.height = `${inputHeight.value}px`;
    document.body.appendChild(img);
})

// creating the dropdown list
const dropdownList = document.createElement('select');
dropdownList.style.display = 'block';

const placecageOp = document.createElement('option');
placecageOp.value = 'https://www.placecage.com/1000/600';
placecageOp.innerText = 'Placecage'

const fillMurrayOp = document.createElement('option');
fillMurrayOp.value = 'https://www.fillmurray.com/1000/600';
fillMurrayOp.innerText = 'Fillmuray'; 

const picusmOp = document.createElement('option');
picusmOp.value = 'https://www.picsum.photos/1000/600';
picusmOp.innerText = 'picusm';

const loremFlickrOp = document.createElement('option');
loremFlickrOp.value = 'https://www.loremflickr.com/1000/600';
loremFlickrOp.innerText = 'Lorem Flickr';

const unsplashOp = document.createElement('option');
unsplashOp.value = 'https://source.unsplash.com/random/1000/600'
unsplashOp.innerText = 'Unsplash';

document.body.appendChild(dropdownList);
dropdownList.appendChild(placecageOp);
dropdownList.appendChild(fillMurrayOp);
dropdownList.appendChild(picusmOp);
dropdownList.appendChild(loremFlickrOp);
dropdownList.appendChild(unsplashOp);

