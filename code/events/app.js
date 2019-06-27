//Our js fie for events project
console.log(`Hello from JS!!`);

//Events Need:
//1. An event type ((Click))
//2. An event Target ((Button))
//3. A call back function
//
//When all of these things are combined, they become an event listener

//1.The type of the event
const eventType = `click`;

//2.The target of the event
const myButton = document.querySelector(`button`);

// The callback - what do you want to do as a response
const myCallback = function(event){
    console.log('The button was clicked', event);
}

//Create an event listener
//WHEN this EVENT takes place on this TARGET, Call this CALLBACK FUNCTION

myButton.addEventListener(eventType, myCallback);

const darkButton = document.querySelector('#dark');

//Type, Target, Callback, EventListener
const changeToDarkTheme = function(event){
    console.log('Dark Theme');
    document.body.style.background ='black';
    document.body.style.color ='white';
}
darkButton.addEventListener('click', changeToDarkTheme);


const lightButton = document.querySelector('#light');
const changeToLightTheme = function(event){
    console.log('Light Theme');
    document.body.style.background ='white';
    document.body.style.color ='black';
}

lightButton.addEventListener('click', changeToLightTheme);


///////////////////
const postTweetsButton = document.querySelector('.post');

const createTweet = function(event){
    //Get whatever is typed in the input, 
    //and save it in a variable called content.
    const input = document.querySelector('input');
    const content = input.value;

    const newParagraph = document.createElement('p');

    newParagraph.innerText = content;
    //Take that paragraph and put it at the end of the div.newTweets
    const newTweetsDiv = document.querySelector('.newTweets');
    newTweetsDiv.appendChild(newParagraph);

}

postTweetsButton.addEventListener('click',createTweet);
///////////////////
const colorInput = document.querySelector('input.color');
const onColorChange = function(){
    document.body.style.background = colorInput.value;

}

 colorInput.addEventListener('change', onColorChange);
//////////////////

 const clickCounterButton = document.querySelector('.click');
 let clickCount = 0;
 const onClick = function(){
     clickCount ++;
     const targetDiv = document.querySelector('.clickCount');
     targetDiv.innerText = clickCount;
 }
 clickCounterButton.addEventListener('click', onClick);
//count is not working

const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');

const doubleImageSize = function(){
    this.style.width = '150px';
}

billImage.addEventListener('click',doubleImageSize);
nickImage.addEventListener('click',doubleImageSize);