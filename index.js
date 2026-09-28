





function ValidateForm(){

let fullname=document.getElementById("validationCustom01").value;
let emailId=document.getElementById("exampleInputEmail1").value;
let password=document.getElementById("exampleInputPassword1").value;
let Cpassword=document.getElementById("exampleInputPassword2").value;
let checkbox =document.getElementById("exampleCheck1").checked;

let fullnameerror=document.getElementById("validationCustom01error");
let emailIderror=document.getElementById("exampleInputEmail1error");
let passworderror=document.getElementById("exampleInputPassword1error");
let passworderror1=document.getElementById("exampleInputPassword2error");
let checkboxerror =document.getElementById("exampleCheck1error");



fullnameerror.textContent="";
emailIderror.textContent="";
passworderror.textContent="";
passworderror1.textContent="";
checkboxerror.textContent="";


 const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


 let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
let s1 = "Geeks@123";
let s2 = "GeeksforGeeks";
let s3 = "Geeks123";

if(fullname == ""){

fullnameerror.textContent="name connot be blank"


document.getElementById("validationCustom01").classList.add("error");

return false;


}

if(fullname !== ""){

fullnameerror.textContent=""


document.getElementById("validationCustom01").classList.remove("error");




}


if(emailId == ""){

emailIderror.textContent="Email connot be blank";

document.getElementById("exampleInputEmail1").classList.add("error");
return false;



}

if( !pattern.test(emailId)){

emailIderror.textContent="enter a vaild email";

document.getElementById("exampleInputEmail1").classList.add("error");
return false;


}

if(emailId !== ""){

emailIderror.textContent="";

document.getElementById("exampleInputEmail1").classList.remove("error");




}

if(password==""){

passworderror.textContent="password connot be blank"

document.getElementById("exampleInputPassword1").classList.add("error");
return false;
}

else if( !regex.test(password)){

    passworderror.textContent="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}"

document.getElementById("exampleInputPassword1").classList.add("error");
return false
}

if(!password==""){

passworderror.textContent=""

document.getElementById("exampleInputPassword1").classList.remove("error");


}


if(Cpassword==""){

passworderror1.textContent=" confirm password connot be blank"
document.getElementById("exampleInputPassword2").classList.add("error");

return false;

}

if( password != Cpassword ){

    passworderror1.textContent="Password does not match"
    document.getElementById("exampleInputPassword2").classList.add("error");

return false;
}

if( !Cpassword =="" ){

    passworderror1.textContent=""
    document.getElementById("exampleInputPassword2").classList.remove("error");


}

if(checkbox == false){

    checkboxerror.textContent="please agree to terms and conditions"
    return false;

}


return true;
}

function showTerms(){
let terms = document.getElementById("termsText");

terms.style.display="block";

}

function togglepassword(inputId,button){

    let input =document.getElementById("exampleInputPassword1");

    if(input.type =="password"){

        input.type ="text";
        button.textContent="hide password"

    } else{

         input.type="password";
         button.textContent="show password"

    }





}



function togglePassword(inputId,button){

    let input1 =document.getElementById("exampleInputPassword2");

    if(input1.type =="password"){

        input1.type ="text";
        button.textContent="hide password"

    } else{

         input1.type="password";
         button.textContent="show password";

    }





}


function checkPasswordStrength(){


let password = document.getElementById("exampleInputPassword1").value;

let strenght = document.getElementById("passwordStrength");

if (password ==""){

strenght.textContent ="";
return;

}

if(password.length<8){

    strenght.textContent="weak";
    strenght.style.color="red"
    strenght.style.fontSize="bold"
     strenght.style.fontSize="small"

    return

}

let hasUpper = /[A-Z]/.test(password);
let hasLower = /[a-z]/.test(password);
let HasNumber = /[0-9]/.test(password);
let hasSpecial =/[@.#$!%*?&]/.test(password);

if ( hasUpper&& hasLower&& HasNumber&& hasSpecial){

strenght.textContent="strong";
 strenght.style.color="green";
 strenght.style.fontSize="bold";

} else {

    strenght.textContent="medium";
     strenght.style.color="orange";
    strenght.style.fontSize="bold";


}



}