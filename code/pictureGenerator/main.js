document.querySelector("button").addEventListener("click", displayImage);

function displayImage(){

const image =document.createElement("img");
image.setAttribute("src","https://source.unsplash.com/1600x900")
const targetDiv = document.querySelector("div.image")
targetDiv.appendChild(image);
}
