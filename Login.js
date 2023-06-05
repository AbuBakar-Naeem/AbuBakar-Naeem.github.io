let form1= document.getElementById("form");

form1.addEventListener("submit",(e) =>{
     e.preventDefault();
     eventInput();
});

function eventInput(){
    let firstname = document.getElementById("firstname").value;
    let firstNameFormat = /[a-z ,.'-]+$/;
     
    if(firstname == ""){
        document.getElementById("d1").innerHTML = "Please Enter your Name above"
        document.getElementById("d1").style.color = "red"
    }
    else if(!firstname.match(firstNameFormat)){
        document.getElementById("d1").innerHTML = "Please Enter a Valid Name !"
        document.getElementById("d1").style.color = "red"
    }
    else{
        document.getElementById("d1").innerHTML = "Looks Good!!"
        document.getElementById("d1").style.color = "green"
    }

         /* Last Name */

    let lastname = document.getElementById("lastname").value;
    let lastNameFormat = /[a-z ,.'-]+$/;
     
    if(lastname == ""){
        document.getElementById("d2").innerHTML = "Please Enter your Last Name above"
        document.getElementById("d2").style.color = "red"
    }
    else if(!lastname.match(lastNameFormat)){
        document.getElementById("d2").innerHTML = "Please Enter a Valid Last Name !"
        document.getElementById("d2").style.color = "red"
    }
    else{
        document.getElementById("d2").innerHTML = "Looks Good!!"
        document.getElementById("d2").style.color = "green"
    }

    /*  Email */

    let email = document.getElementById("email").value;
    let emailFormat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     
    if(email == ""){
        document.getElementById("d3").innerHTML = "Please Enter a E-mail above"
        document.getElementById("d3").style.color = "red"
    }
    else if(!email.match(emailFormat)){
        document.getElementById("d3").innerHTML = "Please Enter a Valid E-mail !"
        document.getElementById("d3").style.color = "red"
    }
    else{
        document.getElementById("d3").innerHTML = "Looks Good!!"
        document.getElementById("d3").style.color = "green"
    }

       /* number */


    let number = document.getElementById("number").value;
    let numberFormat =/^03\d{9}$/;
     
    if(number == ""){
        document.getElementById("d4").innerHTML = "Please Enter your number above"
        document.getElementById("d4").style.color = "red"
    }
    else if(!number.match(numberFormat)){
        document.getElementById("d4").innerHTML = "Please Enter a Valid number !"
        document.getElementById("d4").style.color = "red"
    }
    else{
        document.getElementById("d4").innerHTML = "Looks Good!!"
        document.getElementById("d4").style.color = "green"
    }

      /* ADDRESS */

    let address = document.getElementById("address").value;
     
    if(address == ""){
        document.getElementById("d5").innerHTML = "Please Enter your Address above"
        document.getElementById("d5").style.color = "red"
    }
    else{
        document.getElementById("d5").innerHTML = "Looks Good!!"
        document.getElementById("d5").style.color = "green"
    }


      /* Language */

    let language = document.getElementById("language").value;
     
    if(language == ""){
        document.getElementById("d6").innerHTML = "Select a Language"
        document.getElementById("d6").style.color = "red"
    }
    else{
        document.getElementById("d6").innerHTML = "Looks Good!!"
        document.getElementById("d6").style.color = "green"
    }
      /* Gender */

    let gender = document.getElementById("gender").value;
     
    if(gender == ""){
        document.getElementById("d7").innerHTML = "Select Your Gender"
        document.getElementById("d7").style.color = "red"
    }
    else{
        document.getElementById("d7").innerHTML = "Looks Good!!"
        document.getElementById("d7").style.color = "green"
    }

       /* Zip Code */


       let zipcode = document.getElementById("zipcode").value;
       let zipCodeFormat =/^[0-9]{5}(?:-[0-9]{4})?$/;
        
       if(zipcode == ""){
           document.getElementById("d8").innerHTML = "Please Enter your Zip-Code "
           document.getElementById("d8").style.color = "red"
       }
       else if(!zipcode.match(zipCodeFormat)){
           document.getElementById("d8").innerHTML = "Please Enter a Valid Zip Code !"
           document.getElementById("d8").style.color = "red"
       }
       else{
           document.getElementById("d8").innerHTML = "Looks Good!!"
           document.getElementById("d8").style.color = "green"
       }


       /* password */


       let newPassword = document.getElementById("newPassword").value;
       let newPasswordFormat =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        
       if(newPassword == ""){
           document.getElementById("d9").innerHTML = "Please Enter New-Password"
           document.getElementById("d9").style.color = "red"
       }
       else if(!newPassword.match(newPasswordFormat)){
           document.getElementById("d9").innerHTML = "Please Enter a Valid Password!!"
           document.getElementById("d9").style.color = "red"
       }
       else{
           document.getElementById("d9").innerHTML = "Looks Good!!"
           document.getElementById("d9").style.color = "green"
       }


       /* Confirm password */


       let conPassword = document.getElementById("conPassword").value;
       let conPasswordFormat =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        
       if(conPassword == ""){
           document.getElementById("d10").innerHTML = "Please Confirm your new Password"
           document.getElementById("d10").style.color = "red"
       }
       else if(conPassword !== newPassword){
           document.getElementById("d10").innerHTML = "Your password does not match"
           document.getElementById("d10").style.color = "red"
       }
       else{
           document.getElementById("d10").innerHTML = "Looks Good!!"
           document.getElementById("d10").style.color = "green"
       }
}                    


                  /* THEEEE EENNNDDDDDDD */


             

     




