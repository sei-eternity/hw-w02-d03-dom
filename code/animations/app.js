// my animations Js file.


// let's define animations 
//
//1. starting point 
//2. step
//3. time between steps
//4. total time
//5. ending point 


//you can use `setTimeout ` as delay 
// you can use `setInterVal` as an intervale 

// const clockTick = function () { 
//     console.log('tich,tock!');
// }

// const timer = setInterval(clockTick, 1000);
// clearInterval(timer);

// setTimeout (fadeNickAway, 1000);




const fadeNickAway = function () {
const nick = document.querySelector ('.nick');

const currentopacityAsString = getComputedStyle(nick).opacity;
const currentOpacity = paresFloat(currentOpacityAsString);


const newOpacity = current0pacity - 0.01 ; 
nick.style.curren.opacity = newOpacity ;

if (currentOpacity >= 0 ) 



}