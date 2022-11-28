
var win;
var img;
var inputs;

function smallWindow()
{
    inputs = document.getElementsByName("Radio");
    for (var i=0;i<inputs.length;i++)
    {
        if(inputs[i].checked)
        {
            img=inputs[i].previousElementSibling.previousElementSibling;
        }
    }
   
    win = window.open("",width=500,height=500);

    var container = win.document.createElement("div");
    container.style.textAlign="center"

    var txt = document.getElementsByTagName("textarea")[0].value;

    var p = win.document.createElement("p");
    p.appendChild(win.document.createTextNode(txt));
    p.style.textAlign="center"
    p.style.margin="10px"

    var newImg = win.document.createElement("img");
    newImg.src = img.src;
    newImg.width = "400";

    var button = win.document.createElement("input");
    button.type = "submit";
    button.value = "closePreview";
    button.style.textAlign="center"
    button.style.margin="50px"

    button.onclick=close;

    win.document.body.appendChild(container);
    container.appendChild(newImg);
    container.appendChild(p);
    container.appendChild(button);
    }


function init()
 {
    var btn = document.getElementById("btn");
    btn.onclick=smallWindow;
   
}

function close()
{
    win.close();
}

