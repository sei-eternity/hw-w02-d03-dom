
///1
let body= document.querySelector('body');
body.style.fontFamily='Arial, sans-serif';
// body.style.color='green';

// document.querySelectorAll('span');
// document.querySelectorAll('span')[0];
// document.getElementsByTagName('span');

// document.getElementsByTagName('span')[0];
//2
let nickname=document.querySelector('#nickname');
nickname.innerText="Ashwag";

let favorite=document.querySelector('#favorite');
favorite.innerText="cat";

let hometown=document.querySelector('#hometown');
hometown.innerText="Riyadh";


///2

document.getElementsByClassName('profilePicture');


//3
var listitemsClass = document.getElementsByTagName("li");
for (let i = 0; i < listitemsClass.length; i++)
{
  listitemsClass[i].setAttribute("class","listitem");
}

//4

let color= document.querySelector('ul');
color.style.color='rebeccapurple';


//5

let image=document.createElement('img');
image.setAttribute('src','http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg');

image.style.width='199px';
image.style.height='199px';

let newimg=document.querySelector('.profilePicture');
newimg.appendChild(image);




var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];

 ///6

 let h=document.createElement('h1');
 h.innerText='My Book List';
 let newh=document.querySelector('.favoriteBooks');
 newh.appendChild(h);

 //7
//  for (var i=0; i < books.length; i++){
  
//     console.log(`"${books[i].title}" by ${books[i].author}`)
// }

let p=document.createElement('p');
 let newp=document.querySelector('.favoriteBooks');
 newp.appendChild(p);

 for (var i=0; i < books.length; i++){
    let p=document.createElement('p');
   p.innerText= `${i+1}- "${books[i].title}" by ${books[i].author}`;
   let newp=document.querySelector('.favoriteBooks');
   newp.appendChild(p);
  
  }