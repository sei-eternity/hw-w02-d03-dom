console.log('hi')
// Change the font-family of the page to "Arial, sans-serif"

const font = document.querySelector('body');
font.style.fontFamily = 'Arial, sans-serif';

// Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)

const nickName = document.querySelector('#nickname');
nickname.innerText = 'Sara';
const favorite = document.querySelector('#favorite');
favorite.innerText = 'Cats';
const hometown = document.querySelector('#hometown');
hometown.innerText = 'Makkah';

// Give each li the class of "listitem"
// Change each li's text color to "rebeccapurple"
const listItems = document.querySelectorAll('li');
for (let listItem of listItems) {
    listItem.classList.add('listitem');
    listItem.style.color = 'rebeccapurple';
}

// Create a new img element and set its src attribute to a picture of you. 
const newImg = document.createElement('img');
newImg.setAttribute('src', './images/IMG_2245.JPG');
newImg.style.width = '600px';
newImg.style.height = '600px';
// Put that new img element in the div with the class of "profilePicture"
const profilePicture = document.querySelector('.profilePicture');
profilePicture.append(newImg);


 

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

// Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks


const mybookList = document.querySelector('div.favoriteBooks');
  mybookList.innerHTML = '<h1>My Book List</h1>'

// Iterate through the array of books. 
// For each book, create a p tag with the book title and author
//  (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

books.forEach(function (book) {
          const booksList = document.createElement('p');
          booksList.innerText = `${book['title']}, by ${book['author']}.`
          mybookList.append(booksList);
      })

