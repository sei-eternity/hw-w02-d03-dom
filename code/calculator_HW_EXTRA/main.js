//get the value
//and div it by two
const result = document.createElement("div")
const buttonHalf = document.querySelector('#half-button')

//console.log(inputHalf)
//const targetDiv = document.querySelector('div#solution')
function calculateHalf(){
//console.log(inputHalf)
const inputHalf = document.querySelector('#half-input')
let newHalf = inputHalf.value;
//console.log(newHalf)
result.innerText(newHalf)
const targetDiv = document.querySelector('div#solution')
targetDiv.appendChild(result);
//console.log(newHalf)
}
//const targetDiv = document.querySelector('div#solution')

buttonHalf.addEventListener("click", calculateHalf)

