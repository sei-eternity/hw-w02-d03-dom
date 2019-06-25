// Change the font-family of the page to "Arial, sans-serif"

const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
body.style.backgroundColor = '#e6daea';
body.style.textAlign = 'center';



// Replace each of the span tags (nickname, favorite, hometown) 
// with your own information (e.g. put your nickname in the nickname span)


const nickName = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');

nickname.innerText = 'Ahlam';
favorite.innerText = 'Turtle';
hometown.innerText = 'Aljouf';


// Give each li the class of "listitem"
// Change each li's text color to "rebeccapurple"

const listItems = document.querySelectorAll('li');
for (let listItem of listItems) {
    listItem.classList.add('listitem');
    listItem.style.color = 'rebeccapurple';
}

// Create a new img element and set its src attribute to a picture of you. 

const newImg = document.createElement('img');
newImg.setAttribute('src', 'images/myAvatar.png');
newImg.style.width = '150px';

// Put that new img element in the div with the class of "profilePicture"

const profileImage = document.querySelector('.profilePicture');
profileImage.append(newImg);

////////////////////////
//Copy this data into your JavaScript file:

var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      image: 'images/The Design.jpg'
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      image: 'images/The-most.jpg'
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      image: 'images/In-search.jpeg'
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      image: 'images/Ulysses.jpg'
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      image: 'images/the-Great-Gatsby.jpeg'

    }
  ];

  // Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
  const bookList = document.createElement('h1')
  bookList.innerText="My Book List"

  const favBooks = document.querySelector('div.favoriteBooks')
  favBooks.appendChild(bookList)

/*Iterate through the array of books. For each bookLists, create a p tag with the bookLists title and author 
(e.g. "The Most Human Human, by Brian Christian"). Append it to the page*/


const ulBooks = document.createElement('ul');
for(const bookLists of books) {
    const imgTag = document.createElement('img');
    const pTag = document.createElement('p');
    const listTag = document.createElement('li');


    imgTag.setAttribute('src', bookLists.image);
    imgTag.style.width = '150px';
    pTag.innerText = `${bookLists.title}, by ${bookLists.author}`;

// Change the style of the book depending on whether you have read it or not 
//(e.g. make the text color red if you have read it)

    if(bookLists.alreadyRead){
        pTag.style.color = 'red'
    }

    listTag.append(imgTag);
    listTag.append(pTag);
    ulBooks.append(listTag);
} 

favBooks.append(ulBooks);
