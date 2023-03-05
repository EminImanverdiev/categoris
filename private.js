newUser.addEventListener('click',function() {
    con.style.display="none"
    con_reg.style.display=""
});
const userData=[
    {
        Name:'Elmin',
        Surname:'Imanverdiyev',
        UserName:'elmin.imanverdiyev',
        Password:'elmin123',
        url:'https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg'
    }
];
qeyd_et.addEventListener('click',function(){
    if(document.querySelector('.name').value!='' && surname.value!='' && username.value!='' && password.value!=''){
        userData.push(
          {
             Name:document.querySelector('.name').value,
             Surname:surname.value,
             UserName:username.value,
             Password:password.value,
             url:fileInp.value,
          }
        )
        con.style.display=""
        con_reg.style.display="none"
    }
    else{
        username.style.border="2px red solid";
    }
});
passLogin.addEventListener('click',function(){
    let user=userData.filter(item=>item.UserName==passName.value)
    if(user[0].UserName==passName.value && user[0].Password==passPassword.value) {
        accountPart.style.display=''
        con.style.display="none"
        ad.innerHTML=user[0].Name;
        soyad.innerHTML=user[0].Surname;
        picture.src=user[0].url;
        deyis.addEventListener('click',function() {
            if(currentpasword.value==user[0].Password && confirmationPassword.value==newpassword.value) {
                user[0].Password=confirmationPassword.value;
                newPagePassword.style.display='none';
                con.style.display='';  
    }
    }) 
    }
   else{
        alert('Bele istifadeci yoxdur Qeydiyyatdan kecesiniz zehnet olmazsa...')
 }
})
document.querySelector('.fa-lock').addEventListener('click',function() {
    accountPart.style.display='none';
    newPagePassword.style.display='block';
});