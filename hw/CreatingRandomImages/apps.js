


const $clickCounterButton = $('button#randomize');

var randomImage = {
  imgspaths: [
   
    'https://steamuserimages-a.akamaihd.net/ugc/957466168496348452/0289459B39236564F8C420BC0C586CFC240FA0F3/'
    ,'https://spng.pngfly.com/20180415/cfq/kisspng-darwin-watterson-gumball-watterson-nicole-watterso-the-incredibles-5ad3727514c0e8.221731271523806837085.jpg',
     'https://scontent.fruh4-1.fna.fbcdn.net/v/t1.0-9/1010089_465874650204843_1588707550_n.jpg?_nc_cat=102&_nc_oc=AQn_ar6Q3NwTsIR7kpUgSmLxfrBcW04R-EXteiHD192PXTnaeQA-lkgOiwu8ICY9PHgJchBF-TZLBNNrXp6vWlUb&_nc_ht=scontent.fruh4-1.fna&oh=35d210b469b3df6ef3080937280223fa&oe=5DBB584B',
'https://scontent.fruh4-1.fna.fbcdn.net/v/t1.0-9/581833_303634116428898_1230218683_n.jpg?_nc_cat=102&_nc_oc=AQkq_E132UCdxCEjo1w8IHDr8O7cEk1Rc7XlpVDUYweDCBSMPjT9OIHmWhSUH0TXULQfo9sy2CWIkHj2S4NFQPN-&_nc_ht=scontent.fruh4-1.fna&oh=34dec260e77c2d7111bad43cf3b5111a&oe=5D8A6761',
 'https://scontent.fruh4-2.fna.fbcdn.net/v/t1.0-9/644663_303635643095412_2073304570_n.jpg?_nc_cat=101&_nc_oc=AQmsMBz9-x64JqATJYKm6NHDsEkMb3_9HZZgRACHt4J_Lmbybz2yZ8Ft89j0fGt9Wug-EhQHMmvg3IRP5-vmFaqU&_nc_ht=scontent.fruh4-2.fna&oh=c418a83136d67869e1d2bca253f873a4&oe=5DC138B7',
'https://scontent.fruh4-1.fna.fbcdn.net/v/t1.0-9/735052_312886978836945_759776717_n.jpg?_nc_cat=102&_nc_oc=AQmkHglYlMHQut36L3yXk2ln0F81oNFHDHC49v4db4FrY-auh6ROZdOgPR5ZZpHz_Zj4J5DTdcgYkJCC1iBUUSVQ&_nc_ht=scontent.fruh4-1.fna&oh=7de1d5681545c0e92c4ea315a0ffb181&oe=5DC2DBAA',
'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'


  ]};

  
  
    let GenerateImages=function(){

    
      var path = randomImage.imgspaths[Math.floor(Math.random()*randomImage.imgspaths.length)];
     
      
      let imagee=document.createElement('img');

     
      
      imagee.src = path;
      $(".image").html(imagee);
      $("image").attr("href", path);
      randomImage.GenerateImages();
    }
  
    $clickCounterButton.on('click', GenerateImages);




$(function(){
  $('button').click(function(){
  
  $('img').width($('.width').val()*$('img').width());
  $('img').height($('.height').val()*$('img').height());
  
  }); });
     
   
     
   


  
