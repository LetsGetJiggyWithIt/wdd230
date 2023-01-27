const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const submitButton = document.querySelector("#submitButton");

function checkPassword() {
    if (password1.value != password2.value) {
        submitButton.disabled = true;
        submitButton.title = "Please complete the form before submission.";
        if (document.activeElement != password2) {
            if (document.activeElement != password1) {
                password2.className = "invalid";
                password2.value = "";
                password2.placeholder = "Passwords don't match.";
            }
        }
        else {
            password2.placeholder = "Re-enter Password";
            password2.className = "";
        }
    }
    else {
        submitButton.disabled = false;
        password2.className = "";
        submitButton.title = "Send Feedback"
    }
}

password2.addEventListener("focusout", checkPassword);
password2.addEventListener("input", checkPassword);

password1.placeholder = "Password";
password2.placeholder = "Re-enter Password";