const halfBtn = document.querySelector('#half-button');
const percentBtn = document.querySelector('#percent-button');
const areaBtn = document.querySelector('#area-button');

const solutionDiv = document.querySelector('#solution');
const newSolutionP = document.createElement('p');
solutionDiv.appendChild(newSolutionP);

halfBtn.onclick = (e) => {
    const halfInput = document.querySelector('#half-input');
    const halfValue = Number(halfInput.value);

    newSolutionP.innerText =`Solution: ${halfValue / 2}`;

}
percentBtn.onclick = (e) => {
    const fraction = Number(document.querySelector('#percent1-input').value);
    const whole = Number(document.querySelector('#percent2-input').value);

    newSolutionP.innerText =`Solution: ${(fraction / whole * 100).toFixed(2)}%`;
}

areaBtn.onclick = (e) => {
    const radius = Number(document.querySelector('#area-input').value);

    newSolutionP.innerText =`Solution: ${(Math.pow(radius, 2) * Math.PI)toFixed(2)}`;
}