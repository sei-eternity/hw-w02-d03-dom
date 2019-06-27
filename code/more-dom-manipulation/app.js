//changing the font family 
const bodyFont=document.querySelector('body');
bodyFont.style.fontFamily="Arial, sans-serif";

// 

const nickname = document.querySelector('#nickname');
const favorite = document.querySelector('#favorite');
const hometown = document.querySelector('#hometown');
nickname.innerHTML = 'Norah';
favorite.innerHTML = 'Dogs';
hometown.innerHTML = 'Riyadh';
const lists = document.querySelectorAll('li');
lists.forEach(function(list){
    list.setAttribute('class', 'listitem');
    list.style.color = 'rebeccapurple';
})
const imageProfile = document.createElement('img');
imageProfile.setAttribute('src','Norah.jpg');
const profileDiv = document.querySelector('.profilePicture');
profileDiv.append(imageProfile);
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
