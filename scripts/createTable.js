submitButton.addEventListener("click", Write);
const userName = document.querySelector("#name");
const email = document.querySelector("#email");

function Write () {
    if (userName.checkValidity() == true && email.checkValidity() == true && password1.checkValidity() == true && password2.checkValidity() == true) {
        document.querySelector("#name-td").innerHTML = userName.value;
        document.querySelector("#email-td").innerHTML = email.value;
        document.querySelector("#rating-td").innerHTML = rating.value;
        document.querySelector("#username-td").innerHTML = password1.value;
        document.querySelector("#form-table").className = "";
    }
}

document.querySelector("#form-table").classList.toggle("hide-table");