var pictures=document.querySelectorAll('.little-div img');
var photo=document.querySelector('.seemdiv img');
var index=0;
pictures.forEach(picture=>{
    picture.addEventListener('click',function() {
        photo.src=picture.src;
    })
})
function sag(y) {
    if(index==3){
        index=0;
    }
    else{
        index++;
    }
    photo.src=y.parentElement.nextElementSibling.children[index].src;
    
}
function sol(t){
    if(index==0){
        index=3;
    }
    else{
        index--;
    }
    photo.src=t.parentElement.nextElementSibling.children[index].src;
}
setInterval(sol(),200)