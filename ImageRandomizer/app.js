// My JS File


// On click display a random image from unsplash	

document.getElementById('randomize').onclick = function(){
	// create img element
	let img = document.createElement('img');   
	

	// put the site value from the dropdown in a variable
	var site = document.getElementById('siteList').value;
	console.log(site);
	

	// Getting elements by class name will give back an array 
	// that can't be used directly
	let w = document.getElementsByClassName('width');

	// store the first element in the array in a variable for use
	let width = w[0].value;



	let h = document.getElementsByClassName('height');
	let height = h[0].value;

	// Global function to display the image
	var displayImage = function(src){
		    img.src = src;
            document.body.appendChild(img);
            console.log(img);	}



	// if condition to generate a random image if no numbers were enetered
	// else will generate an image with the dimensions entered by user
if (width == '' && height == '')
  {
  	var src = 'https://source.unsplash.com/random';
    displayImage(src);        
  }
else
  { // attach dimensions to the URL link 
  	// Since unsplash has a different URL format than the rest
  	// create if else condition
  	// if unsplash then --> https://source.unsplash.com/300x300
  	if (site == 'https://source.unsplash.com/'){
  		var src2 = site + width + 'x' + height; 
            displayImage(src2);
        }
        // else then --> site/width/height
        else {
        var src2 = site + width + '/' + height; 
            displayImage(src2);	} 
  	} 
}

