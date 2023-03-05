var array=['Elmar Nuraliyev','Asiman Necefli','Akif Abbasquliyev','Ramil Qarayev','Cavanshir Hashimov','Elmin Imanverdiyev','Qafar Kerimov'];
// var names=document.querySelectorAll('.names');
// var say=2;
var div=document.querySelector('.div');
var sum=0;
btn.addEventListener('click',function() {
    this.parentElement.parentElement.parentElement.style.display='none';
 countValue=count.value;

    section.style.display='block';
    array.forEach((item,index)=>{
        let tr=document.createElement("tr");
        new_n=document.createElement('td');
        text_n=document.createTextNode(index+1);
        new_n.appendChild(text_n);
        tr.appendChild(new_n);
        new_name=document.createElement('td');
        text_name=document.createTextNode(item);
        new_name.appendChild(text_name);
        tr.appendChild(new_name); 
        for (let i = 0; i < countValue; i++) {
            new_td=document.createElement('td');
            new_text=document.createTextNode('de');
            new_td.appendChild(new_text);
            tr.appendChild(new_td);
            new_td.addEventListener('click',function(){
                 neew=this;
                div.classList.add('aktiv');
                section.classList.add('aktiv2')
                div.style.display='block';
                neew.classList.add('pointerevent')
                sum +=unique;
            })
            
            }
            var newEnd=document.createElement('td');
            var newEndtxt=document.createTextNode('0.0');
            newEnd.appendChild(newEndtxt);
            tr.appendChild(newEnd);
            tbody.appendChild(tr);
        });
        num=Number(count.value)+Number(2)
        for(let j=2;j<num;j++){
            let y=hed.insertCell(j)
            y.innerHTML="IS No"+(j-1)
        }
    })
    cix.addEventListener('click',function() {
        this.parentElement.parentElement.style.display='none';
        section.classList.remove('aktiv2')

    });
    bağla.addEventListener('click',function() {
        this.parentElement.parentElement.style.display='none';
        section.classList.remove('aktiv2')

    });
    document.querySelectorAll('.div2 button').forEach(items=>{
        items.addEventListener('click',function() {
            // testiq_ed.addEventListener('click',function() {
                neew.textContent=items.textContent;
                var reng=items.classList;
                neew.classList.add(reng);
                var unique=(10/Number(countValue)).toFixed(1);
                section.classList.remove('aktiv2');
                div.style.display='none';
        if (neew.textContent=='Tamam'){
                    sum+=Number(unique);
                    neew.parentElement.lastChild.innerHTML=sum;
    }
                else if(neew.textContent=='Natamam'){
                    sum+=Number(unique)/2;
                    neew.parentElement.lastChild.innerHTML=sum;
                }
            //   })
        })
    })