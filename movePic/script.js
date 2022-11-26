//get images
var img1= document.getElementById("img1");
var img2= document.getElementById("img2");
var img3= document.getElementById("img3");

//get x and y to img
var y=img3.offsetTop;
var x=img3.offsetLeft;

var step=1;
var y2=img1.offsetLeft;
var y3=img2.offsetLeft;

function move()
{
    timer=setInterval(function ()
    {
        if(y > 20)
        {
            y -= step;
           document.getElementById('img3').style.top = y +"px"; 
        }
        if(y == 20)
        {
           y += 360;
           document.getElementById('img3').style.top= y +"px"; 
        }
        if(y2>70) 
        {
            y2 -= step;
            document.getElementById('img1').style.left= y2 + "px";
        }
        if(y2==70)
        {
           y2 += 410 ;
          document.getElementById('img1').style.left= y2 + "px";   
        }
        if(y3<450)
        {
           y3 += step;
           document.getElementById('img2').style.left= y3 + "px";   
        }
        if(y3==450)
        {
           y3 -= 440;
           document.getElementById('img2').style.left= y3 + "px";  
        }
    },10);};

function stop()
    {
        clearInterval(timer);
    }
