var header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if(scrollPos > 10){
    header.classList.add('scrolled');
    
  } else {
    header.classList.remove('scrolled');
  }
});
function validation(){
    var name =document.getElementById("name").value,
    password1 =document.getElementById("password1").value,
    password2 =document.getElementById("password2").value;
  
        if(name == '' || password1 == '' || password2 == ''){
            alert("Make sure of  all the fields");
        }
            else{
                if(password1 != password2 ){

                    alert("Make sure the passwords are matching");
                   return false;
  
               }else{
               alert("welcome");
               return true;
  
                 }
            }
        
          
}