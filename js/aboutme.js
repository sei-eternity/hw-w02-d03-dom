const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');
nickname.innerHTML = 'Hazim';
favorite.innerHTML = 'Cats';
hometown.innerHTML = 'Tabuk';

const lists = document.querySelectorAll('li');
lists.forEach(function(list){
    list.setAttribute('class', 'listitem');
    list.style.color = 'rebeccapurple';
})

const imageProfile = document.createElement('img');
imageProfile.setAttribute('src', 'images/profile.png');
const profileDiv = document.querySelector('.profilePicture');
profileDiv.append(imageProfile);
var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      url: 'images/donNorman.jpg'
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      url: 'images/brianChristian.jpg'
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true,
      url: 'images/marcelProust.jpg'
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true,
      url: 'images/jamesJoyce.jpg'
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      url: 'images/fScottFitzgerald.jpg'
    }
  ];

  const booksDiv = document.querySelector('div.favoriteBooks');
  booksDiv.innerHTML = '<h1>My Book List</h1>'

//// without the bonus
//   books.forEach(function (book) {
//       const bookElm = document.createElement('p');
//       bookElm.innerText = `${book['title']}, by ${book['author']}.`
//       booksDiv.append(bookElm);
//   })
const unorederList = document.createElement('ul');

books.forEach(function (book) {
    const bookElm = document.createElement('p');
    const bookImg = document.createElement('img');
    bookImg.setAttribute('src', book.url);
    bookImg.style.width = '150px';
    bookElm.innerText = `${book.title}, by ${book.author}.`
    if (book.alreadyRead){
      bookElm.style.color = 'red';
    }
    const listItem = document.createElement('li');
    listItem.append(bookElm);
    listItem.append(bookImg);
    unorederList.append(listItem);
})

  
booksDiv.append(unorederList);