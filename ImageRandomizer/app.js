// My JS File


//const eventType = 'click';

// var width = document.getElementById("width").value = 300;
// var height = document.getElementById("height").value = 300;
// console.log(width);


// On click display a random image from unsplash	

// $(document).ready(function() {
//         $('#clear').click(function () {
//             location.reload(true); 
//         });   
// });

// document.getElementById('clear').onClick = function(){
// 			location.reload(true);
// 			console.log('Clear!');	}

document.getElementById('randomize').onclick = function(){
	img = document.createElement('img');   
	 var del = function(){
	 var Node1 = img;
	 Node1[0].parentNode.removeChild(Node1[0]);
	 console.log("Image deleted");}

	// var images = document.getElementsByTagName('img');
	// var l = images.length;}
	// //for (var i = 0; i < l; i++) {
    


    //images[0].parentNode.removeChild(images[0]);}

	var button = document.getElementById("randomize");
	// Getting elements by class name will give back an array 
	// that can't be used directly
	let w = document.getElementsByClassName('width');
	// store the first element in the array in a variable for use
	let width = w[0].value;
	let h = document.getElementsByClassName('height');
	let height = h[0].value;
	// if condition to generate a random image if no numbers were enetered
	// else will generate an image with the dimensions entered by user

	var displayImage = function(src){
		    img.src = src;
            document.body.appendChild(img);
            console.log(img);
	}


if (width == '' && height == '')
  {
  	var src = 'https://source.unsplash.com/random';
    displayImage(src);        
  }
else
  { 
  	// attach dimensions to the URL link 
  	// e.g. width = 300 and height = 300 
  	// --> https://source.unsplash.com/300x300
  	var src2 = 'https://source.unsplash.com/'+ width + 'x' + height; 
            displayImage(src2);
            console.log(width);
  			console.log(height); } 
}