var usrName , nValue;
var usrAge , aValue;
var fem , fvalue;

//handle button to open welcome page
var but = document.getElementById('btn');
but.addEventListener("click", function(){
    window.open("info.html" , "_self" );
    
})

// set name key cookies
var m = new Date().getMonth();
document.getElementById('name').onblur = function(){
    usrName = document.getElementById('name').value;
    nValue = document.getElementById('name').id;
    setCookies(nValue , usrName , m);
};

//set age key cookies
document.getElementById('age').onblur = function(){
    usrAge = document.getElementById('age').value;
    aValue = document.getElementById('age').id;
    setCookies(aValue , usrAge , m);
};

//check gender and set to cookie
var radius = document.getElementsByName('gender');
console.log(radius);
var sex = "gender";
    if(radius[0].checked){
        setCookies(sex , 'male' , m);
    }
    else {
        setCookies(sex , 'female' , m);
    }

//set favcolor to cookie
var opt = document.getElementById("color");
var idx = opt.selectedIndex;
if(idx == 0){
    setCookies('favcolors' , 'red' , dat);
}

else if(idx == 1){
    setCookies('favcolors' , 'blue' , dat);
}
else{
    setCookies('favcolors' , 'brown' , dat);
}

//check for visit count
setCookies('visitCounter' , '0' , 14);

//function to get cookies

function welcome(){
    var space = document.getElementById("welc");
    var col = getCookies('favcolors');
    var vis = document.getElementById("visit");
    
    
    if(getCookies("gender") == "male")
    {
        var img = document.createElement("img");
        img.src = "./images/1.jpg";
        var src = document.getElementById("im");
        src.appendChild(img);
    }
    else{
        var img = document.createElement("img");
        img.src = "./images/2.jpg";
        var src = document.getElementById("im");
        src.appendChild(img);
    }
    space.innerHTML = "<h1>welcome " +"<h1 style = 'color: "+col+";'>"+ getCookies("name")+"</h1></h1>";
    setCookies('visitCounter' , parseInt(getCookies('visitCounter'))+1 , 14);
    
    vis.innerHTML = " <h1>this session is  " +"<span style = 'color: "+col+";'>"+ getCookies("visitCounter")+"</span></h1>";
}
