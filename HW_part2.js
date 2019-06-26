

document.querySelector('button#randomize').addEventListener("click", randomImage);

function randomImage() {

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://source.unsplash.com/random");
document.body.appendChild(newImg);
newImg=document.createElement("div.profilePicture");
};