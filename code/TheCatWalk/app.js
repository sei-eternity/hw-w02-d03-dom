//========Adding some Fun To The Animatons=====//
const para = document.createElement('p');
const div = document.createElement('div');
document.body.appendChild(div);
para.innerText = "Bussy cat Come to Dady!!!"

//========seting the variable=======//
const cat = document.querySelector('img');
cat.style.position = 'absolute';
cat.style.left = '0px';

let counter = 0;
let goingRight = true;
const catStyles = getComputedStyle(cat);
const catWidth = parseFloat(catStyles.width);

function catWalk(){
    
if(goingRight){
    //====Cat going Right======//
    if(innerWidth - catWidth < counter){
        //===Changing the dirction of the cat
        //When its reach the edge window====//
            cat.style.transform = 'scaleX(-1)';
            para.style.textAlign = 'left';
            div.appendChild(para);
            goingRight = false;
        }
    counter +=10; 
}else{
    //======cat going Left=====//
    if ( counter < 0){
        //===Changing the dirction of the cat====//
        cat.style.transform = 'scaleX(1)';
        para.style.textAlign = "right";
        goingRight = true;
    }
    counter -= 10;  
}
//=====seting the position======//
   cat.style.left = `${counter}px` ;
}

 setInterval(catWalk, 50);
