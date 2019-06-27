console.log("it's Working");

//type of the event
const eventType='click';
//the target of the event 
const myButton=document.querySelector('button');

const widthInput=document.querySelector('.width');
const heightInput=document.querySelector('.height');

const newImageRand=function(){
    //ToDO....
    const newImage=document.createElement('img');
    newImage.setAttribute('src',"https://source.unsplash.com/user/erondu/600x600");
    const newImageDiv=document.querySelector('.image');
    newImageDiv.appendChild(newImage);
    
}

myButton.addEventListener('click',newImageRand);