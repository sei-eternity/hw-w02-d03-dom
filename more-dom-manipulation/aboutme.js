
///////////////////// About me JS /////////////////////////////////

document.body.style.fontFamily = 'Arial, sans-serif';
   document.getElementById('nickname').innerHTML = 'Totti';
   document.getElementById('favorites').innerHTML = 'Lion';
   document.getElementById('hometown').innerHTML = 'Jeddah';
   const items = document.getElementsByTagName('li');

   for (const i = 0; items.length; i++) 
   {
      items[i].className = 'listitem';
   }
    
    const myPic = document.createElement('img');
    myPic.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqAf3CtQXncv38HGqIRwRav-tuSXvuzGGXCihQ9ch7X6oRQvTEA';
    document.body.appendChild(myPic);

//////////////////////Book List CSS///////////////////////////////

const books = [
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

/////////////////////////////////////// Book List JS ////////////////////////////////////////

  for (const i = 0; books.length; i++) {
    const bookP = document.createElement('p');
    const bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookP.appendChild(bookDescription);
    document.body.appendChild(bookP);
  }