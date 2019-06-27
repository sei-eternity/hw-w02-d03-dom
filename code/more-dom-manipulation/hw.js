document.body.style.fontFamily="Arial, sans-serif" ;
 const nickName = document.querySelector("span#nickname");
nickName.innerText="Aisha";
const favoriteAnimal = document.querySelector("span#favorite");
favoriteAnimal.innerText="Birds";
const hometown = document.querySelector("span#hometown");
hometown.innerText="Riyadh";
 liItems= document.querySelectorAll("li");
for(var i=0 ;i< liItems.length; i++){
   liItems[i].classList.add('listitem');
   liItems[i].style.color = 'rebeccapurple';}
 const newImage = document.createElement('img');
  newImage.setAttribute('src','IMG_2950.jpeg');
  newImage.style.width = '150px';

  const targetDiv = document.querySelector('.profilePicture');
        targetDiv.appendChild(newImage);
   
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
const newHeading = document.createElement('h1');
  newHeading.innerText = "My Book List";
  const BooksDiv = document.querySelector('.favoriteBooks');
  BooksDiv.appendChild(newHeading);

  for( var i=0 ;i<books.length;i++){
   const content = `${books[i].title},by ${books[i].author}`;
   const newPargarth = document.createElement('p');
    newPargarth.innerHTML = content;
   const newDiv = document.querySelector('.favoriteBooks');
   newDiv.appendChild(newPargarth);}





