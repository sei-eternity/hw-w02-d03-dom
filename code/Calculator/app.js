
//====Identfy the solutions div & adding a P text===/
const solution = document.querySelector('#solution');
let paraghraph = document.createElement('p');
solution.appendChild(paraghraph);

//======Half Function======//
const halfButton = document.querySelector("#half-button");
halfButton.addEventListener('click', getHalf);
function getHalf(){
    const halfInput = document.querySelector('#half-input').value;
    let half = parseFloat(halfInput/2);
    paraghraph.innerText = `Half ${halfInput} is ${half}`;
    console.log(half);
}


//=======Fraction of Whole========//
const fractionBtn = document.querySelector("#percent-button");
fractionBtn.addEventListener('click', getfraction);

function getfraction(){
    paraghraph.innerText = `I would love to help you But, I didn't understand the fraction, So Google it ;)`
    
    // const frac = document.querySelector('#percent1-input').value;
    // const whole = document.querySelector('#percent2-input').value;
    // let wholeflot = parseFloat(whole);
    // let fracflot = parseFloat(frac);
    // let sum = fracflot * wholeflot
    // paraghraph.innerText = `${frac} of ${whole} is ${sum}`;
    // console.log(frac, whole);
}
//==========area of circle with radius======//

//A=πr2

const areaBtn = document.querySelector('#area-button');
areaBtn.addEventListener('click', area);

function area(){
    const radius = document.querySelector('#area-input').value;
    let arearCircle = Math.PI * (radius * radius);
    paraghraph.innerText = `The area of circle with ${radius} is ${arearCircle}`;
}

