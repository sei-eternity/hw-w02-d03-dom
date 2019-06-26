//js//
//========Changing the Font Size========//
const body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

//============Adding The Span==========//
const nickname = document.querySelector('#nickname');
nickname.innerHTML = "Mansour789";

const favorite = document.querySelector('#favorite');
favorite.innerHTML = "Horses";

const hometown = document.querySelector('#hometown');
hometown.innerHTML = "Riyadh";

//======Adding Class Name & Color To Li elements===// 
const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
         li[i].setAttribute('class', "listitem");
         li[i].style.color = "rebeccapurple";
    };

//======Create An Image Then Append Them========//
const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');

const profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(image);

///////////The Book List//////////////////

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
//====Create The h1 Title======//
  const h1 = document.createElement('h1');
  h1.innerText = 'My Book List';

  const favoriteBooks = document.querySelector('.favoriteBooks');
  favoriteBooks.appendChild(h1);

  //===Create ul For The Books List======//
  const ul = document.createElement('ul');
  favoriteBooks.appendChild(ul);

  //====Then Adding The Books As li & Changeing The Color=======//
  for (let i = 0; i < books.length; i++) {
      
      const li = document.createElement('li');
      li.innerText += `${books[i].title}, by ${books[i].author}`;
      ul.appendChild(li);  
      books[i].alreadyRead ? li.style.color = "green" : li.style.color = "red"
   
    }