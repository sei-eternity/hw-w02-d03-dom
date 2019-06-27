// const colorInput = document.querySelector('input.color');
// const $colorInput = $('input.color');

const onColorChange = function() {
  // document.body.style.background = $colorInput.value;
  // $('body').css('background', $colorInput.val())
  $('body').css('background', $(this).val())
}

// colorInput.addEventListener('change', onColorChange);
$('input.color').on('change', onColorChange)```

```// Our JS file for the events project.

console.log('Hello from JS!');

// Events Need:
// 1. An event type       ("CLICK")
// 2. An event target     ("BUTTON")
// 3. A callback function
//
// When all of those things are combined,
// they become an event listener.

// The type of the event
const eventType = 'click';

// The target of the event
// const myButton = document.querySelector('button');

// The callback - what do you want to 
//                do as a response?
const myCallback = function(event) {
  console.log('The button was clicked', event);
}

$('button').one(eventType, myCallback)

// $('button').click(function() {
//   console.log('The button was clicked', event);
// })


// Create an event listener
// WHEN this EVENT takes place on this TARGET,
// call this CALLBACK FUNCTION.
// myButton.addEventListener(eventType, myCallback);

// Type, Target, Callback, Event Listener

// const darkButton = document.querySelector('#dark');

const changeToDarkTheme = function() {
  console.log('Dark Theme');
  // document.body.style.background = 'black';
  // document.body.style.color = 'white';
  $('body').css({
    'background': 'black',
    'color': 'white'
  })
}

// darkButton.addEventListener('click', changeToDarkTheme);
$('#dark').on(eventType, changeToDarkTheme)

// const lightButton = document.querySelector('#light');

const changeToLightTheme = function() {
  console.log('Light Theme');
  // document.body.style.background = 'white';
  // document.body.style.color = 'black';
  $('body').css({'background': 'white', 'color': 'black'});
}

// lightButton.addEventListener('click', changeToLightTheme);
$('#light').on(eventType, changeToLightTheme)


// const postTweetButton = document.querySelector('.post');

const createTweet = function() {
  // console.log("Click is working")
  // Get whatever is typed in the input
  // and save it in a variable called
  // content.
  // const input = document.querySelector('input');
  // const content = input.value;

  const userInput = $('input').val();
  console.log(userInput);

  // Create a new paragraph
  // const newPara = document.createElement('p');
  // newPara.innerText = content;

  const $newPara = $(`<p>${userInput}</p>`);

  // Take that paragraph and put it at the end
  // of the div.newTweets
  // const newTweetsDiv = document.querySelector('.newTweets');
  // newTweetsDiv.appendChild(newPara);

  // const $newTweets = $('.oldTweets');
  $('.newTweets').append($newPara)
  // $newPara.appendTo($newTweets);
}

// postTweetButton.addEventListener('click', createTweet);

$('.post').on(eventType, createTweet);








// const colorInput = document.querySelector('input.color');
// const $colorInput = $('input.color');

const onColorChange = function() {
  // document.body.style.background = $colorInput.value;
  // $('body').css('background', $colorInput.val())
  $('body').css('background', $(this).val())
}

// colorInput.addEventListener('change', onColorChange);
$('input.color').on('change', onColorChange)













// const clickCounterButton = document.querySelector('button.click');
const $clickCounterButton = $('button.click');

let clickCount = 0;


const onClick = function() {
  clickCount += 1;
  
  // const targetDiv = document.querySelector('.clickCount');
  // targetDiv.innerText = clickCount;

  $('.clickCount').text(clickCount)
}

$clickCounterButton.on(eventType, onClick);
// clickCounterButton.addEventListener('click', onClick);




const billImage = document.querySelector('.bill');
const nickImage = document.querySelector('.nick');

const doubleImageSize = function() {
  this.style.width = '150px';
}

billImage.addEventListener('click', doubleImageSize);
nickImage.addEventListener('click', doubleImageSize);