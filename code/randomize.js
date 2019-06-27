document.querySelector('#randomize').onclick = function(){
	let img = document.createElement('img');   


	var site = document.querySelector('#siteList').value;
	console.log(site);

	let widthArray = document.querySelector('.width');
	let width = widthArray[0].value;



	let heightArray = document.querySelector('.height');
	let height = heightArray[0].value;

	var displayImage = function(src){
		    img.src = src;
            document.body.append(img);
            console.log(img);	}

if (width == '' && height == '')
  {
  	var src = 'https://source.unsplash.com/random';
    displayImage(src);        
  }
else
  {
  	if (site == 'https://source.unsplash.com/'){
  		var src2 = site + width + 'x' + height; 
            displayImage(src2);
        }
        else {
        var src2 = site + width + '/' + height; 
            displayImage(src2);	} 
  	} 
}