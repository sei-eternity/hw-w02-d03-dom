//1. Change the font:
const pageFont = document.querySelector(".page");
pageFont.style.fontFamily = "Arial, sans-serif";

//2.Replace each of the span tags
//NickName:
const sTags = document.querySelector("span#nickname");
sTags.replaceWith("Eman");

//Favorite Animal:
const sTags2 = document.querySelector("span#favorite");
sTags2.replaceWith("Cats");

//Hometown:
const sTags3 = document.querySelector("span#hometown");
sTags3.replaceWith("Abha");

//3. Give each li the class of "listitem"
const newListItems =document.createElement("li.listitem")




//4. Change each li's text color to "rebeccapurple"
const listItem = document.querySelector("ul");
listItem.style.color ="rebeccapurple";


//5. Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
let newImg = document.createElement("img");
newImg.setAttribute("src", "https://htdraw.com/wp-content/uploads/2018/04/How-to-draw-Cute-Girl-step-by-step-easy-Draw-so-cute-300x281.png");
document.body.appendChild(newImg);
newImg=document.createElement("div.profilePicture");



/////////////////////////////////////////////////////////////////////////////

//The Book List

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

  const favoriteBooks= document.createElement("h1");
  favoriteBooks.innerText += "My Book List";
  const favBooks = document.querySelector("div.favoriteBooks");
  favBooks.appendChild(favoriteBooks);

  // 
  
  let listItems = document.createElement('p');

  for (i =0; i< listItems.length; i++ ) {
  listItems.innerText=`${i.title}, By "${i.author}`;
  favBooks.appendChild(listItems);

  }
 