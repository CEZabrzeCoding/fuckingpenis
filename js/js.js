var articleP;
var size = 20;
var key = [4];

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

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 67) {
        key[0] = "c";
    }
    else if(event.keyCode == 72) {
        key[1] = "h";
    }
    else if(event.keyCode == 85) {
        key[2] = "u";
    }
    else if(event.keyCode == 74) {
        key[3] = "j";
    }
    if(key[0] == "c"&&key[1] == "h"&&key[2] == "u"&&key[3] == "j"){
        document.querySelector("#catzen").style.display = "block";
    }
});

