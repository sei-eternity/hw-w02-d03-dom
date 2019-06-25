const body = document.body;

body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');

nickname.innerText = 'Sulaiman';
favorite.innerText = 'Cats << haha';
hometown.innerText = 'Buraidah';

const listItems = document.querySelectorAll('li');

for (let item of listItems) {
    item.classList.add('listitem');
    item.style.color = 'rebeccapurple';
}

const newImg = document.createElement('img');
newImg.setAttribute('src', 'images/profile-pic.png');
newImg.style.width = '100px';
const profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(newImg);

const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false,
        image: 'images/The-Design-of-Everyday-Things.jpg'
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        image: 'images/The Most Human Human.jpg'
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true,
        image: 'images/In Search of Lost Time.jpg'
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
        image: 'images/The Great Gatsby.jpg'
    }
];

const booksHeading = document.createElement('h1');
booksHeading.innerText = 'My Book List'

const favoriteBooks = document.querySelector('div.favoriteBooks');
favoriteBooks.appendChild(booksHeading);
const ulTagBooks = document.createElement('ul');
for(const book of books) {
    const liTag = document.createElement('li');
    const imgTag = document.createElement('img');
    const pTag = document.createElement('p');

    imgTag.setAttribute('src', book.image);
    imgTag.style.width = '200px';
    pTag.innerText = `${book.title}, by ${book.author}`;

    if(book.alreadyRead){
        pTag.style.color = '#ff0000'
    }

    liTag.appendChild(pTag);
    liTag.appendChild(imgTag);
    ulTagBooks.appendChild(liTag);
}
favoriteBooks.appendChild(ulTagBooks);




