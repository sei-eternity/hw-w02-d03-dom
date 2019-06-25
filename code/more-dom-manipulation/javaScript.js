
/** About Me **/


// - Change the font-family of the page to "Arial, sans-serif"
const content = document.querySelector('body');
content.style.fontFamily = 'Arial, sans-serif';

// - Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
const spanTags = document.querySelectorAll('span');
spanTags[0].innerText = 'Bedour';
spanTags[1].innerText = 'CATS!';
spanTags[2].innerText = 'Riyadh';

// - Give each li the class of "listitem"
// - Change each li's text color to "rebeccapurple"
const listItem = document.querySelectorAll('li');
for(let i=0; i<listItem.length; i++){
    listItem[i].className = 'listitem';
    listItem[i].style.color = 'rebeccapurple';
    console.log(listItem[i]);
};

// - Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture" 
const image = document.createElement('img');
image.setAttribute('src','http://taxworld.com.au/wp-content/uploads/2018/05/cat-work.jpg');
const imgDiv = document.querySelector('.profilePicture');
imgDiv.appendChild(image);


/**-----------------------------------------------------------------**/


/** The Book List **/

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

//- Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
const heading = document.createElement('h1');
heading.innerText += 'My Book List';
const divTag = document.querySelector('.favoriteBooks');
divTag.appendChild(heading);



//- Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page 
// for(let i=0; i<books.length; i++){
//     const pTage = document.createElement('p');
//     pTage.innerText += `${books[i].title}, by ${books[i].author}.`;
//     document.body.appendChild(pTage);
// };


/**-----------------------------------------------------------------**/


/** Bonus **/


// - Turn the books into an unordered list filled with list items
const unorderdList = document.createElement('ul');
for(let i=0; i<books.length; i++){
    const item = document.createElement('li');
    item.innerText +=`${books[i].title}, by ${books[i].author}.`;
    document.body.appendChild(unorderdList);
    unorderdList.appendChild(item);
}

// - Add a property to each book with a URL of the book cover image. For each book, add an img element for each book on the page
// - Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it) 
