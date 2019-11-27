//document.querySelector("button").addEventListener("click", displayImage);

let myButtom = document.querySelector("button")
function displayImage() {


    let image = document.createElement("img");
    
    let inputHeight = document.querySelector(".height")

    let contentHeight = inputHeight.value;
    image.style.height= contentHeight+"px"

    let inputWidth = document.querySelector(".width")
    let contentWidth = inputWidth.value;
    image.style.width= contentWidth +"px"

    
        console.log("hello")
        var x = Math.floor((Math.random() * 1000) + 1);
        var y = Math.floor((Math.random() * 1000) + 1);
        console.log(x)

        let imageLink = "https://picsum.photos/"+x+"/"+y
        image.setAttribute("src", imageLink)
        //image.style.width= contentWidth;
        let targetDiv = document.querySelector("div.image")
        targetDiv.appendChild(image);
        

}

myButtom.addEventListener("click", displayImage);

