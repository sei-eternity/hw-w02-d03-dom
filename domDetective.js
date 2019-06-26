// 1. Every image on the page
const images = document.querySelectorAll('img');
images;
// solution
NodeList(11) [img, img, img.hide, img, img, img, img, img, img, img, img]

// 2. The navigation area in the upper right
const navArea = document.querySelector('.navigation');
navArea;

// 3.The MailChimp sign-up form in the bottom
const mailChimpform = document.querySelector('#mc_embed_signup');
mailChimpform;

// 4. The upper left-hand logo that says GDI (Hint: use CSS descendant selectors)
const gdiLogo = document.querySelector('a img');
gdiLogo;

// 5. The logos of the media sources that featured GirlDevelopIt (lifeHacker, TED, etc., at the bottom of the page)
const mediaSources = document.querySelector('.press-logos');
mediaSources;

// 6. The big heading that says "DON'T BE SHY DEVELOP IT"
const bigHeading = document.querySelectorAll('.opener span');
bigHeading;
// solution
NodeList(2) [span.animated.fadeInLeft, span.animated.fadeInRight]

// 7. All of the headings that have the underline (e.g. Who we are, We are now in 63 cities)
const underlineHeadings = document.querySelectorAll('.underlined-headline h2');
underlineHeadings;
// solution
NodeList(2) [h2, h2]

// 8. All of the images that are in the stats part of the page (e.g. 26%, 18% and 34%)
const statPart = document.querySelectorAll('.stats-section img');
statPart;
// solution 
NodeList(3) [img, img, img]

