var submit= document.getElementById("submit-btn");
 submit.addEventListener('click',function(){
    var email=document.getElementById("email").value;
    var text=document.getElementById("text");
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    var page1=document.getElementById("page1");
    var yourmail=document.getElementById("mail");
    var page2=document.getElementById("page2");     
             if(email.match(pattern)){
                page1.style.display="none";
               page2.style.display="flex";
               yourmail.innerHTML=email;          
             }
             else{
            text.innerHTML="Valid email required";
            text.style.color="red";      
            }
 });
 var returnbtn=document.getElementById("return-btn");
 returnbtn.addEventListener('click',function(){
    page2.style.display="none";
    page1.style.display="flex";
    email.value=''; 
 });