const bodyStyle = document.querySelector('body')
bodyStyle.style.fontFamily = "Arial, sans-serif";

const nickName = document.querySelector('#nickname');
nickName.innerText = "Waleed";

const favorite = document.querySelector('#favorite');
favorite.innerText = "Cat";

const hometown = document.querySelector('#hometown');
hometown.innerText = "Abha";

const listItem = document.querySelectorAll('li')
listItem.forEach(i => {
    i.classList.add('listitem');
})

listItem.forEach(i => {
    i.style.color = 'rebeccapurple'
})


const img = document.createElement('img');
img.setAttribute('src', `http://i63.tinypic.com/311qkoi.jpg`);
img.setAttribute('width','200');
const profileImg = document.querySelector('.profilePicture');
profileImg.appendChild(img);


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

const newHeader = document.createElement('h1');
newHeader.innerText = "My Favorite Books";
const favoriteBooks = document.querySelector('.favoriteBooks');
favoriteBooks.appendChild(newHeader);

books.forEach(element => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = element.title + ', by '+ element.author;
    favoriteBooks.appendChild(newParagraph);
});