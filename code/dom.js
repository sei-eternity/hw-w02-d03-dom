const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';
const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');
nickname.innerText = 'Ramoon';
favorite.innerText = 'all pets';
hometown.innerText = 'Jeddah';

const listItem = document.querySelectorAll('li');
for(let i=0; i<listItem.length; i++){
    listItem[i].className = 'listitem';
    listItem[i].style.color = 'rebeccapurple';
    console.log(listItem[i]);
};


const image = document.createElement('img');
image.setAttribute('src','http://www.greenmoxie.com/wp/wp-content/uploads/Six.jpg');
const imgDiv = document.querySelector('.profilePicture');
imgDiv.appendChild(image);


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


const booksDiv = document.querySelector('div.favoriteBooks');
booksDiv.innerHTML = '<h1>My Book List</h1>'

