const page = document.querySelector('body')
page.style.fontFamily = "Arial, sans-serif";

const nickname = document.querySelector("#nickname");
nickname.innerText = "Abod";

const favorite = document.querySelector("#favorite");
favorite.innerText= "Horse";

const hometown = document.querySelector("#hometown");
hometown.innerText= "Jeddah";

const className = document.querySelectorAll('li');
for(let i =0; i<className.length;i++){
//const className = document.querySelectorAll('li');
className[i].setAttribute("class","listitem");
className[i].style.color ="rebeccapurple"
}

const image = document.createElement('img');
image.setAttribute('src','IMG_0056.jpg')
const imgPlace = document.querySelector('.profilePicture')
imgPlace.appendChild(image);

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

  const bookTitle = document.createElement('h1')
  bookTitle.innerText="My Book List"
  const listPlace = document.querySelector('div.favoriteBooks')
  listPlace.appendChild(bookTitle)
  for(let i =0; i<books.length;i++){
      const paragraphBook = document.createElement('p');
      paragraphBook.innerText= books[i].title +" by "+books[i].author;
    //   const paragraphPlace = document.querySelector('div.favoriteBooks')
    listPlace.appendChild(paragraphBook);


  }
