var btn=document.getElementsByClassName("btn2")[0];
var modl=document.getElementsByClassName("modal")[0];
var modls=document.getElementsByClassName("mds")[0];
var skl1=document.querySelectorAll("sekiller img");
var skl2=document.getElementsByClassName("sekiller")[0];
function cix() {
    modl.style.display="none";
}
function tikla(x) {
   modl.style.display="block";
    modls.src=x.src;
}