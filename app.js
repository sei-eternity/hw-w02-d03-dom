document.body.style.fontFamily = "Arial, sans-serif";

document.querySelector('#nickname').innerText += 'B3O';
document.querySelector('#favorite').innerText +=  ' Hawks';
document.querySelector('#hometown').innerText += ' Al-Quwaiyah';

const list = document.querySelectorAll('li');
list.forEach(element => {
    element.className = 'listitem';
    element.style.color =  'rebeccapurple';
});

const img = document.createElement('img');
img.setAttribute('src' , 'https://i.pinimg.com/originals/71/da/6e/71da6e0f20aeb1b83d9651e2abc13e00.gif');

document.querySelector('.profilePicture').appendChild(img);



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

  const hTag = document.createElement('h1');
  hTag.innerText = 'My Book list';
  const favs = document.querySelector('.favoriteBooks');
  favs.appendChild(hTag);

  books.forEach(elem => {

    const p = document.createElement('p');
    p.innerText = `${elem.title}, by ${elem.author}`;
    favs.appendChild(p);
      
  });
