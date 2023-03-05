var listItem=document.querySelectorAll('ul li');
let range=document.querySelector('.insecond2');
var header5=document.getElementById('header5');
let payment=document.getElementById('payment');
let price=document.getElementById('price');
header5.style.display='none';
range.addEventListener('click',function (event) {
   b=event.offsetX;
   if(b>=0 && b<61){
         b=3;
         header5.style.left="48.8%";
         header5.style.display='block';
         let string=Math.ceil((Number(b)+3));
         header5.style.transition="2s";
         header5.innerHTML=string+"ay";
         payment.innerHTML=Math.ceil((parseInt(price.innerHTML))/string)
         console.log(parseInt(price.innerHTML));
   }
   else if(b>=61 && b<104){
      let b=104;
      header5.style.display='block';
      header5.style.left="56%";
      header5.style.transition="2s";
      let string2=Math.floor((Number(b)/11));
      header5.innerHTML=string2+'ay';
      payment.innerHTML=Math.ceil((parseInt(price.innerHTML))/string2)
   }
   else if(b>=160 && b<209){
      let b=209;
      header5.style.display='block';
      header5.style.width="39px";
      header5.style.left="64%";
      header5.style.transition="2s";
      let string3=Math.floor((Number(b)/17));
      header5.innerHTML=string3+'ay';
      payment.innerHTML=Math.ceil((parseInt(price.innerHTML))/string3)

      }
   else if(b>=261 && b<309){
      let b=309;
      header5.style.display='block';
      header5.style.width="39px";
      header5.style.left="70.5%";
      let string4=Math.floor((Number(b)/20));
      header5.style.transition="2s";
      header5.innerHTML=string4+'ay';
      payment.innerHTML=Math.ceil((parseInt(price.innerHTML))/string4)
      }
   else if(b>=362 && b<411){
         let b=411;
         header5.style.display='block';
         header5.style.width="39px";
         header5.style.transition="2s";
         header5.style.left="78%";
         let string5=Math.floor((Number(b)/22));
         header5.innerHTML=string5+'ay';
         payment.innerHTML=Math.ceil((parseInt(price.innerHTML))/string5)
      }
   else{
      b=0;
   }
})