var array = ['Akif Abbasquliyev', 'Ayxan Abdulayev', 'Əli Alişov', 'Günel Ağayeva', 'Aytac Bağayeva', 'Elariz Cahangirov', 'Qənirə Haciyeva', 'Əminə Həsənova', 'Cavanshir Hashimov', 'Mirqafar Kərimov', 'Günay Mirzəyeva', 'Ləman Muradova', 'Yunis Məmmədov', 'Elmar Nuraliyev', 'Asiman Necefli', 'Ramil Qarayev', 'Nəzrin Quliyeva', 'Nuray Qəhrəmanli', 'Qəribov Nurlan', 'Rəsulova Şəlalə', 'Səma Təhməzova', 'Ulduz Yaqubzade', 'Allahverdi İbrahimov', 'Elmin İmanverdiyev', 'Fərid Əfəndiyev', 'Hüseyn Əliyev', 'İlkin Əliyev', 'Əli Əliyev', 'Əsədov Coşqun', 'Ülvi Əsədzadə'];
var names = document.querySelectorAll('.names');

array.forEach((user, index) => {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td_index = document.createElement('td');
    var td_index_text = document.createTextNode(index + 1);
    var td_text = document.createTextNode(user);
    td_index.appendChild(td_index_text);
    td.appendChild(td_text);
    tr.appendChild(td_index);
    tr.appendChild(td);
    tbody.appendChild(tr);
    var td_time = document.createElement('td');
    var td_time_text = document.createTextNode('d/e');
    td_time.appendChild(td_time_text);
    tr.appendChild(td_time);
    var td_time2 = document.createElement('td');
    var td_time_text2 = document.createTextNode('d/e');
    td_time2.appendChild(td_time_text2);
    tr.appendChild(td_time2);
   
})
var element3 = document.querySelectorAll('tbody tr td');
var buton;
element3.forEach(element => {
    element.addEventListener('click', function () {
        div.style.display = 'block';
        buton = this;
    })
})
document.querySelectorAll('#div2 button').forEach(item => {
    item.addEventListener('click', function () {
        buton.innerText = item.innerText
        let reng = item.classList[0]
        buton.classList.add(reng);
        buton.classList.add('poineter');
        div.style.display = 'none';

    })
})
cix.addEventListener('click', function () {
    div.style.display = 'none';

})
 var all=document.querySelectorAll('.all');
var element7= document.querySelectorAll('tbody tr');

 for(let i = 0; i < all.length; i++) {
    all[i].addEventListener('click',function() {
        element7.forEach(p=>{
            if (p.children[i+2].innerHTML=='d/e') {
                p.children[i+2].innerHTML=all[i].innerHTML;
            p.children[i+2].classList.add('blue');
            p.children[i+2].classList.add('poineter');
            }
        })
    })
     
 }
  var qbler=document.querySelectorAll('.qbler')
 
 for(let i = 0; i < qbler.length; i++) {
    qbler[i].addEventListener('click',function() {
        element7.forEach(p=>{
            if (p.children[i+2].innerHTML=='d/e') {
                p.children[i+2].innerHTML=qbler[i].innerHTML;
            p.children[i+2].classList.add('red');
            p.children[i+2].classList.add('poineter');
            }
        })
    })
     
 }