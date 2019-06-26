// 1. Change the font-family of the page to "Arial, sans-serif"
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

// 2. Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
const nick = document.querySelector('#nickname');
nick.innerText = 'Ahmed Meshaal';
const favAnimal = document.querySelector('#favorite');
favAnimal.innerText = 'Wolves';
const hmTown = document.querySelector('#hometown');
hmTown.innerText = 'Al Ahsa';

// 3. Give each li the class of "listitem"
// 4. Change each li's text color to "rebeccapurple"
const listItem = document.querySelectorAll('li');
for (let i=0; i<listItem.length; i++){
    listItem[i].setAttribute('class','listItem');
    listItem[i].style.color = 'rebeccapurple';
}

// 5. Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"


const newImg = document.createElement('img');
newImg.setAttribute('src','https://www.computerhope.com/logo.gif');
newImg.style.border = '4px dashed black';
let place = document.getElementsByClassName('profilePicture');
place[0].appendChild(newImg);



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

  // 6. Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks

  const heading = document.createElement('h1');
  heading.innerText = 'My Book List';
  const position = document.getElementsByClassName('favoriteBooks');
  position[0].appendChild(heading);

  // 7. Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
 
  books.forEach(myFunction)
  
  function myFunction(books) {
      const info = document.createElement('p');

      
      info.innerText = books['title'] + books['author'];
    
      const location = document.getElementsByClassName('favoriteBooks');
      location[0].appendChild(info);
    
  }



