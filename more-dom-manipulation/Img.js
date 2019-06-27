


let randomize = document.querySelector('#randomize');


randomize.addEventListener('click', function () {
    let width = document.querySelector('.width');
    let height = document.querySelector('.height');

    let imge = document.createElement('image');
    imge.setAttribute('src', `https://source.unsplash.com/${width.value}x${height.value}`);

    let profileImg = document.querySelector('.image');
    profileImg.appendChild(imge);
});