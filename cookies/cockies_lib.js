

function setCookies(name , value , expireDate){
    const month = new Date();
    const m = month.getMonth();
    month.setMonth(m + expireDate);
    document.cookie = name +"=" + value +";expires ="+month.toUTCString+";path=/";

}

function getCookies(cookieName){

    var cookies=document.cookie.split(";");
    var cookiesArr=[];
    for(i=0;i<cookies.length;i++){
        var key=(cookies[i].split("=")[0]).trim();
        var val=decodeURIComponent((cookies[i].split("=")[1]));  
        cookiesArr[key]=val;
    }
    return cookiesArr[cookieName];

}

function deleteCookies(delName){
    let seDate = new Date();
    setCookies(delName , '' , seDate);
}

function allCookies(){
    let allData = document.cookie.split(';');
    return allData;
}

function hasCookies(cookieName){
    if(getCookies(cookieName))
        return true;
    else
        return false;
}