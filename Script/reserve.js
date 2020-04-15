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
  last =document.getElementById("last").value,
  idnumb =document.getElementById("idnumb").value,
  days =document.getElementById("days").value;
  

      if(name == '' || days == '' || last == '' || last == ''){
          alert("Make sure of  all the fields are filled");
      }
         
      
        
};
var x = document.getElementById("method2");
    var y = document.getElementById("fly45");
    var z = document.getElementById("hyundai");
    var Generale = document.getElementById("fullcontainer");
    var bor = document.getElementById("bor");

function method2() {
      x.style.display = "flex";
      y.style.display = "none";
      z.style.display = "none";
      Generale.style.display = "flex";
      bor.style.display ="block";
   
    
  }
  function flye45() {
   
    
      x.style.display = "none";
      y.style.display = "flex";
      z.style.display = "none";
      Generale.style.display = "flex";
      bor.style.display ="block";
   
    
  }
  function hyundai() {
    
    
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "flex";
      Generale.style.display = "flex";
      bor.style.display ="block";
   
    
  }
  
  
 