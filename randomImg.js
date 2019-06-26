    // 8. When someone clicks button#randomize: Create an img element

    const eventType = 'click';

    const btn = document.querySelector('#randomize');
    
    const insertImage = function(){
      
    
      const photo = document.createElement('img');
      photo.setAttribute('src','https://www.computerhope.com/logo.gif');
    
    
      document.body.appendChild(photo);
    }
    
    btn.addEventListener(eventType, insertImage);