let pass = document.getElementById('pass')
let pas = document.getElementById('pas')
let passc = document.getElementById('passc')
let pasc = document.getElementById('pasc')
let sign = document.getElementById('sign')

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
function containshNumber(str) {
    return /[0-9]/.test(str);
  }
function containsUpercase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }
   for(i=0; i<str.length; i++){
    if (str[i].toUpperCase() === str[i]) {
      return true;
    }}
  
    return false;
  }

function containsLowercase(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return false;
    }
   for(i=0;i<str.length; i++){
    if (str[i].toLowerCase() === str[i]) {
      return true;
    }}
  
    return false;
  }
// pass.addEventListener('click',()=>{
//   pass.s
// })
pass.addEventListener('keyup',()=>{
  if(containsUpercase(pass.value)&&containsLowercase(pass.value)&&containshNumber(pass.value)&&containsSpecialChars(pass.value)&&pass.value.length>=6) {
    pas.innerHTML = "Strong password"
    
  }
  else{
    pas.innerHTML = "Password length must be 6 or more"
  }
      
   })

passc.addEventListener("keyup",()=>{
    if (passc.value == pass.value) {
      pasc.innerHTML = "Correct password ";
      sign.classList.remove("disabled")

    }
    else{
      pasc.innerHTML = "Password not match";
      sign.classList.add("disabled")
    }
})


