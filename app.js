const body = document.body;

//Change the font-family of the page to `"Arial, sans-serif"`
body.style.fontFamily = 'Arial, sans-serif';

//Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');
nickname.innerText = 'RemRem';
favorite.innerText = 'Cats';
hometown.innerText = 'Dammam';

//Give each `li` the class of `"listitem"` & Change each `li`'s text color to `"rebeccapurple"`
const listItem = document.querySelectorAll('li');
for(let i=0; i<listItem.length; i++){
    listItem[i].className = 'listitem';
    listItem[i].style.color = 'rebeccapurple';
    console.log(listItem[i]);
};

//Create a new `img` element and set its `src` attribute to a picture of you. Put that new `img` element in the div with the class of `"profilePicture"`
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

//Create an `h1` with the text of "My Book List", and put it inside `div.favoriteBooks`
const booksDiv = document.querySelector('div.favoriteBooks');
booksDiv.innerHTML = '<h1>My Book List</h1>'

//  Iterate through the array of books. For each book, create a `p` tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

// ### Bonus

// - Turn the books into an unordered list filled with list items
// - Add a property to each book with a URL of the book cover image. For each book, add an `img` element for each book on the page
// - Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it)
const uList = document.createElement('ul');
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
    uList.append(listItem);
})

booksDiv.append(uList);