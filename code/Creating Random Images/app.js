
//======seleecting the button========//
const randomize = document.querySelector('#randomize');

//==========Info Text For Dropdown Menu=========//
const h3 = document.createElement('h3');
h3.innerText = "Select the Source of the picture";

//==========Create Dropdown Menu=========//
const selector = document.createElement('select');

//=======unSplash=========//
const unSplash = document.createElement('option');
unSplash.innerText = "Unsplash";
selector.appendChild(unSplash);

//=======picSum=========//
const picSum = document.createElement('option');
picSum.innerText = "Picsum";
selector.appendChild(picSum);

//=======fillMurray=========//
const fillMurray = document.createElement('option');
fillMurray.innerText = "Fill Murray";
selector.appendChild(fillMurray);

//=======placeCage=========//
const placeCage = document.createElement('option');
placeCage.innerText = "Place Cage";
selector.appendChild(placeCage);

//=======loremFlickr=========//
const loremFlickr = document.createElement('option');
loremFlickr.innerText = "Lorem Flickr";
selector.appendChild(loremFlickr);

//======Adding Info & Dropdown Befor the Button=======//
randomize.before(h3);
randomize.before(selector);



//===========click Function=============//
randomize.addEventListener("click", randomImage);

function randomImage(){
    //=========Giting Width & Hieght Value=========//
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;
    
    //========Create Node For The Image======//
const newImage = document.createElement('img');

    //====Getting The User Choice Form Dropdown Menue=====//
    switch (selector.selectedIndex) {
        case (0): 
        newImage.setAttribute('src', `https://source.unsplash.com/random/${width}x${height}`);
            break;

        case (1): 
        newImage.setAttribute('src', `https://picsum.photos/${width}/${height}`);          
            break;

        case (2): 
        newImage.setAttribute('src', `https://fillmurray.com/${width}/${height}`);  
            break;

        case (3): 
        newImage.setAttribute('src', `https://www.placecage.com/${width}/${height}`);
            break;

        case (4): 
        newImage.setAttribute('src', `https://loremflickr.com/${width}/${height}`);
        break;

        default:
            break;
    }

    //======Appending New Image To Div Image Class=====//
    const image = document.querySelector('.image');
    image.appendChild(newImage);
}


