function msg(){  
     // Selecting the input element and get its value 
     let inputVal = document.getElementById("email").value;
     let length = inputVal.length;
  
    if(length > 0){
        window.location = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=forcemultipliersclub@gmail.com";
        alert("Thanks for visiting");
       
       
    }
    else{
       
        alert("You have to Enter the email id");
    }

   }  
   function mail(){  
    // Selecting the input element and get its value 
    
       window.location = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=forcemultipliersclub@gmail.com";
       
   

  } 