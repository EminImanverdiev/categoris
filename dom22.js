var plus=document.getElementById('plus');
var container3=document.getElementsByClassName('container3')[0];
var hidir=document.getElementById('hidir');
var container2=document.getElementsByClassName('container2')[0];

function hesabla(x) {
    if (x.innerHTML=="+") {
        width2=parseInt(container3.style.width);
        width3=parseInt(container2.style.width);


        if(width3>width2){
            container3.style.width=(width2+20)+'px';
            if (width2+20>0) {
                hidir.innerHTML=(width2+20)/2+'%';
                console.log((width2+20)/2);
    
            }
            else{
                hidir.innerHTML="0";  
            }
        }
        else{
            container3.style.width=(width2+0)+'px';
            
        }
      
    }
    if (x.innerHTML=="-") {
        width2=parseInt(container3.style.width);
        container3.style.width=(width2-20)+'px';
        if(width2-20<0){
            hidir.innerHTML=0+"%";
        }
        else{

            hidir.innerHTML=(width2-20)/2+'%';
        }
    }
}
container2.addEventListener('click',function (event) {
    container3.style.width=event.offsetX+"px";
    hidir.innerHTML=((parseInt(container3.style.width))/2)+'%';
    
})