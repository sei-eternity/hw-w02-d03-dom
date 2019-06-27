
// Change the font-family of the page to "Arial, sans-serif
const bodytag = document.querySelector('body'); 
 bodytag.style.fontFamily ="Arial, sans-serif";
 

//  Replace each of the span tags (nickname, favorite, hometown)
// with your own information (e.g. put your nickname in the nickname span)

document.getElementById('nickname').textContent = 'Naaada';
document.getElementById('favorite').textContent = 'horses';
document.getElementById('hometown').textContent = 'Riyadh';

//Give each li the class of "listitem"
const listItems = document.getElementsByTagName('li'); 
for (var i = 0 ; i<listItems.length ; i+=1 ){
    listItems[i].setAttribute("class", "listitem");

}


//Change each li's text color to "rebeccapurple"
const textColor = document.querySelector('.listitem'); 
for (var i = 0 ; i<listItems.length ; i+=1 ){
    listItems[i].style.color = "rebeccapurple"; 

}




//Create a new img element and set its src attribute to a picture of you. 
//Put that new img element in the div with the class of "profilePicture"


 const image = document.createElement ("img");
image.src = 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 ';
image.style.width = "200px" ; 
image.style.height="200px"; 
document.body.append(image);

// image.setAttribute('.profilePicture'); 

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


  //Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
const content = `My Book List : `
  const textContent = document.createElement ("h1");
   textContent.innerText = content ;  
   document.body.appendChild(textContent);
   
    //iterate through the array of books. For each book, create a p tag with the book title and author 
    //(e.g. "The Most Human Human, by Brian Christian"). Append it to the pa
   
    for(var i = 0 ; i<books.length; i++) {
       let paragraph = document.createElement("p");
      paragraph.innerText = `${books[i].title } Written By ${books[i].author}`;
     document.body.append(paragraph); 
   
    }

    
  


