// My JS File


//const eventType = 'click';

// var width = document.getElementById("width").value = 300;
// var height = document.getElementById("height").value = 300;
// console.log(width);


// On click display a random image from unsplash

document.getElementById('randomize').onclick = function(){
	var button = document.getElementById("randomize");
	let w = document.getElementsByClassName('width');
	let width = w[0].value;
	let h = document.getElementsByClassName('height');
	let height = h[0].value;
if (width == 0 && height == 0)
  {
  	        var src = 'https://source.unsplash.com/random';
            img = document.createElement('img');
            img.src = src;
            document.body.appendChild(img);
            console.log(img);
  }
else
  { 
  	var src = 'https://source.unsplash.com/'+ width + 'x' + height;
            img = document.createElement('img');
            img.src = src;
            document.body.appendChild(img);
            console.log(img);
  	console.log(width);
  console.log(width); } 
}