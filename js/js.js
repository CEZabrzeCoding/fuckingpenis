var articleP;
var size = 20;
function sizedown(){
    if(size > 1){
        size--;
    }
    articleP = document.querySelectorAll("article p");
    for (var i = 0; i < articleP.length; i++) {
    articleP[i].style.fontSize = size+"px";
}
}

function basesize(){
    size = 20;
    articleP = document.querySelectorAll("article p");
    for (var i = 0; i < articleP.length; i++) {
    articleP[i].style.fontSize = "20px";
}
}

function sizeup(){
    size++;
    articleP = document.querySelectorAll("article p");
    for (var i = 0; i < articleP.length; i++) {
    articleP[i].style.fontSize = size+"px";
}
}