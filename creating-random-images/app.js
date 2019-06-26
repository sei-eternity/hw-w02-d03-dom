const newImage = document.createElement('img');
const imageContainer = document.querySelector('.image');
imageContainer.appendChild(newImage)
const randomize = document.querySelector('#randomize');

randomize.onclick = () => {
    const height = document.querySelector('input.height').value;
    const width = document.querySelector('input.width').value;
    const select = document.querySelector('#images-sites');
    const site = select.value;

    newImage.setAttribute('src', `${site}/${height}/${width}`);
}