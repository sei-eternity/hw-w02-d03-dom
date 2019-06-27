$(".leImage").on("click", function()
{
    const newImg = document.createElement("img");
    newImg.setAttribute("src", "https://source.unsplash.com/random");
    document.body.appendChild(newImg);
 
});

document.querySelector('button#randomize').addEventListener("click", randomImage);
function randomImage() {

    const newImg = document.createElement("img");
    newImg.setAttribute("src", "https://source.unsplash.com/random");
    document.body.appendChild(newImg);
}

