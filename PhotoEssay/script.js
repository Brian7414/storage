var text = document.getElementById("begin");
text.addEventListener("animationend", CFunction);

function CFunction(){
    document.getElementById("parent").style.visibility = "visible";
}