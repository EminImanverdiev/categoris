var second=0,minute=0,hour=0;
function times(){
    second+=6
    document.getElementsByClassName('second')[0].style.transform=`rotate(${second}deg)`;
    if(second%360==0){
        minute+=6;
        document.getElementsByClassName('minute')[0].style.transform=`rotate(${minute}deg)`;
        if (minute%360==0) {
          hour+=6;
          document.getElementsByClassName('hour')[0].style.transform=`rotate(${hour}deg)`;
        }
      }
}
setInterval(times,1000);


