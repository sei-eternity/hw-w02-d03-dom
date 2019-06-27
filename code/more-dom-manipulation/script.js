const allPageFont = document.querySelector('*');
allPageFont.style.fontFamily = 'Arial, sans-serif';

const nicknameSpan = document.querySelector('span#nickname');
nicknameSpan.innerText = 'AHD1996';
const favoriteSpan = document.querySelector('span#favorite');
favoriteSpan.innerText = 'Cat';
const hometownSpan = document.querySelector('span#hometown');
hometownSpan.innerText = 'Alahsa';

const listItems = document.querySelectorAll('li');
for(i=0;i<listItems.length;i++){
    listItems[i].setAttribute('class','listitem');
    listItems[i].style.color = 'rebeccapurple';
}

const image = document.createElement('img');
image.setAttribute('src', 'https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F56385030_256504198473927_4685701688055562240_n.jpg%3Foe%3D5D167A60%26oh%3Dbdab57ac71f59f3eda38fec128415377&t=s&u=966500493657%40c.us&i=1552137282');
const targetDiv = document.querySelector('div.profilePicture');
targetDiv.appendChild(image);

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

   const heading = document.createElement('h1');
   const targetDiv2 = document.querySelector('div.favoriteBooks');
   targetDiv2.appendChild(heading);
   heading.innerHTML = 'My Book List';

//   books.forEach(function(item){
//     const books[item] = document.createElement('p');
//     books[item].innerText = books[item].title+' by '+ books[item].author;
//     const newP = document.querySelector('div.favoriteBooks');
//     books[item].appendChild(books[item]); 
//   });

// let item;
// for(item in books){
//     const books[item] = document.createElement('p');
//     books[item].innerText = books[item].title+' by '+ books[item].author;
//     const newP = document.querySelector('div.favoriteBooks');
//     books[item].appendChild(books[item]); 
// }