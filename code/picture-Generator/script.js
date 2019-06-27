//1.The type of the event
//  const eventType = 'click';

//2.The targeting of the event
//  const btn = document.querySelector('button#randomize');

//3.The callback - what do you want to do as a response
//  const newImg = function(event){
//      const newElm = document.createElement('img');
//      newElm.setAttribute('src','https://source.unsplash.com/random');
//      const targetDiv = document.querySelector('div.image');
//      targetDiv.appendChild(newElm);
//  }

//4.Creating an event listener
//WHEN this EVENT takes place on this TARGET, Call this CALLBACK FUNCTION
//  btn.addEventListener(eventType,newImg);


//Bonus 1 Answer
const eventType = 'click';
const btn = document.querySelector('button#randomize');
const width = document.querySelector('input.width');
const height = document.querySelector('input.height');

const newImg = function(event){
    const newElm = document.createElement('img');
    newElm.setAttribute('src','https://source.unsplash.com/'+width.value+'x'+height.value);
    const targetDiv = document.querySelector('div.image');
    targetDiv.appendChild(newElm);
}

btn.addEventListener(eventType,newImg);
