const submit = document.getElementById("submit");
const exit = document.getElementsByClassName("exit")[0];
const mail = document.getElementById("email");
const error = document.getElementById("error");
const deskhead = document.getElementById("deskhead");
const form = document.getElementsByClassName("form")[0];
const success = document.getElementsByClassName("success")[0];
const emailRegex =   /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


submit.addEventListener("click", checkmail)

function checkmail(){
  const ma = mail.value;
  if(emailRegex.test(ma)){
    form.style.visibility = "hidden";
    success.style.visibility = "visible";
    error.style.visibility = "hidden";
    deskhead.style.visibility = "hidden";
  }
  else{
    error.style.visibility = "visible";
    mail.style.borderColor= '#fe5968';
    mail.style.backgroundColor = '#fee8e7';
    mail.style.color= '#fe5968';
  }
}

exit.addEventListener("click", exitfun)

function exitfun(){
  form.style.visibility = "visible";
  success.style.visibility = "hidden";
  error.style.visibility = "hidden";
  mail.style.borderColor= 'grey';
  mail.style.backgroundColor = 'white';
  mail.style.color= 'grey';
  deskhead.style.visibility = "visible";
}