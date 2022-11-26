
//for new img
var img  = document.getElementById('header').children
let newImg = img[0].cloneNode(true);
newImg.style.float = 'left';

document.body.appendChild(newImg);


//change ul style
var uid = document.getElementById('navigation').children;
uid[0].style.listStyleType = 'circle';

uid[0].style.padding = "170px";
uid[0].style.paddingRight = "130px";

uid[0].style.display = "inline-block";


//change img move
var img  = document.getElementById('header').children
img[0].style.float = "right";

