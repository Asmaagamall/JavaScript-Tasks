var phargraphStyle = document.getElementById('PAR');

function ChangeFont(font){
var fonts = document.getElementsByName('Font');

for(let i = 0; i < fonts.length; i++){
    if(fonts[i].checked){
        phargraphStyle.style.fontFamily = font;
        //fonts[i].nextSibling.data;
       // console.log(fonts[i].nextSibling.data);
    }
}
}
//document.styleSheets[0].rules[2].style.setProperty("font-family" , "arial")

function ChangeAlign(align){
    var txtAlign = document.getElementsByName('Align');
    
    for(let i = 0; i < txtAlign.length; i++){
        if(txtAlign[i].checked){
            phargraphStyle.style.textAlign = align;
            //fonts[i].nextSibling.data;
           // console.log(txtAlign[i].nextSibling.data);
        }
    }
 }

 function ChangeHeight(high){
    var txthigth = document.getElementsByName('Height');
    
    for(let i = 0; i < txthigth.length; i++){
        if(txthigth[i].checked){
            phargraphStyle.style.lineHeight = high;
            //fonts[i].nextSibling.data;
           //console.log(txthigth[i].nextSibling.data);
        }
    }
 }

 function ChangeLSpace(sp){
    var txtspace = document.getElementsByName('Lspace');
    
    for(let i = 0; i < txtspace.length; i++){
        if(txtspace[i].checked){
            phargraphStyle.style.letterSpacing = sp;
            //fonts[i].nextSibling.data;
           //console.log(txtspace[i].nextSibling.data);
        }
    }
 }

 function ChangeIndent(ind){
    var txtindent = document.getElementsByName('Indent');
    
    for(let i = 0; i < txtindent.length; i++){
        if(txtindent[i].checked){
            phargraphStyle.style.textIndent = ind;
            //fonts[i].nextSibling.data;
           console.log(txtindent[i].nextSibling.data);
        }
    }
 }

 function ChangeTransform(trans){
    var txttrans = document.getElementsByName('Transform');
    
    for(let i = 0; i < txttrans.length; i++){
        if(txttrans[i].checked){
            phargraphStyle.style.textTransform = trans;
            //fonts[i].nextSibling.data;
           //console.log(txttrans[i].nextSibling.data);
        }
    }
 }

 function ChangeDecorate(decor){
    var txtdecor = document.getElementsByName('Decorate');
    
    for(let i = 0; i < txtdecor.length; i++){
        if(txtdecor[i].checked){
            phargraphStyle.style.textDecoration = decor;
            //fonts[i].nextSibling.data;
           //console.log(txtdecor[i].nextSibling.data);
        }
    }
 }

 function ChangeBorder(bord){
    var txtborder = document.getElementsByName('Border');
    
    for(let i = 0; i < txtborder.length; i++){
        if(txtborder[i].checked){
            phargraphStyle.style.border = bord;
            //fonts[i].nextSibling.data;
           //console.log(txtborder[i].nextSibling.data);
        }
    }
 }

 
 function ChangeBorderColor(colour){
    var txtcolor = document.getElementsByName('BorderColor');
    
    for(let i = 0; i < txtcolor.length; i++){
        if(txtcolor[i].checked){
            phargraphStyle.style.borderColor = colour;
            //fonts[i].nextSibling.data;
           console.log(txtcolor[i].nextSibling.data);
        }
    }
 }