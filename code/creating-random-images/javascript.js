console.log('Hello world');

/*
When someone clicks button#randomize:
- Create an img element
- Create a URL based on this documentation
e.g. It might look something like this: https://source.unsplash.com/1600x900

+ Bonus #1 
- Allow the user to select the width and the height! */

const clickImageButton = document.querySelector('button#randomize');

function createImg() {
    const newImage = document.createElement('img');

    //save the user's input
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;

    //create a random image using the user's input
    const url = `https://source.unsplash.com/${width}x${height}`;
    newImage.setAttribute('src', url);
    
    //append it to the div with 'image' class
    imgDiv = document.querySelector('div.image')
    imgDiv.appendChild(newImage);
}

clickImageButton.addEventListener('click', createImg);