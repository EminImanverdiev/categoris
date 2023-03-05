
var liler=document.querySelectorAll('.liler');
var items=document.querySelectorAll('.container2');
liler.forEach(element=>{
    element.addEventListener('click',function () {
     items.forEach(x=>{
        x.style.display="none";
    })
    document.querySelectorAll("."+element.getAttribute('test')).forEach(item=>{
        item.style.display="flex";
     })
    })
})
