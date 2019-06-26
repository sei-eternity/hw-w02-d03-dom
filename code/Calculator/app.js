
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

/
//=======Fraction of Whole========//
const fractionBtn = document.querySelector("#percent-button");
fractionBtn.addEventListener('click', getfraction);
function getfraction(){
    const frac = document.querySelector('#percent1-input').value;
    const whole = document.querySelector('#percent2-input').value;
    let wholeflot = parseFloat(whole);
    let fracflot = parseFloat(frac);
    let sum = fracflot * wholeflot
    paraghraph.innerText = `${frac} of ${whole} is ${sum}`;
    console.log(frac, whole);
}
//========================

