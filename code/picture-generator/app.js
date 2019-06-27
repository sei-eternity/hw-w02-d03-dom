
const randomize = document.querySelector('#randomize');




randomize.addEventListener('click', function () {
    const width = document.querySelector('.width');
    const height = document.querySelector('.height');

    const img = document.createElement('img');
    img.setAttribute('src', `https://source.unsplash.com/${width.value}x${height.value}`);

    // img.setAttribute('width', width.value);
    // img.setAttribute('height', height.value);

    const profileImg = document.querySelector('.image');
    profileImg.appendChild(img);
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

