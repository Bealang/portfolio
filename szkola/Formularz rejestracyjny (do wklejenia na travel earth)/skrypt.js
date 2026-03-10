var przyciski = document.getElementsByClassName("przycisk");
var forms = document.getElementsByClassName("form");
function checkPasswordMatch() {
    var haslo = document.getElementById("password").value;
    var potwierdzHaslo = document.getElementById("confirmPassword").value;
    if (haslo == potwierdzHaslo) {
        document.getElementById("confirmPassword").style.borderColor = "green";
        document.getElementById("passwordMatch").style.color = "green";
        document.getElementById("passwordMatch").innerHTML = "Hasła się zgadzają";
    }
    else {
        document.getElementById("passwordMatch").style.color = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("passwordMatch").innerHTML = "Hasła nie są zgodne";
    }
}
function addToProgressBar(procent, nr) {
    var procent_calkowity = document.getElementById('progressBar').value;
    document.getElementById('progressBar').value = procent_calkowity + procent;
    przyciski[nr-1].classList.add("invisible");
    forms[nr].classList.add("visible");
}
function clearProgressBar(){
    document.getElementById('progressBar').value = 0;
    for (let i = 0; i < przyciski.length; i++) {
        przyciski[i].classList.remove("invisible");
    }
    for (let i = 0; i < forms.length-1; i++) {
          forms[i+1].classList.remove("visible");
    }
}