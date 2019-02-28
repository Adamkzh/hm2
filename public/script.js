
// Check if repeat_password matches with password.
function checkRepeatPassword(){
    let password = document.getElementById("password")
        , confirm_password = document.getElementById("repeat_password");
    if(password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
        return false;
    } else {
        confirm_password.setCustomValidity('');
    }
    return true;
}

const email_error_messages = 'must separated by @';
const password_error_messages = 'must have 6+ chars(at least one lowercase letter, uppercase letter, and digit)';
const default_error_messages = 'invalid input';



document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("input", function (event) {
            console.log(event);
            if (event.target.validity.patternMismatch) {
                console.log(event.target.validity);
                if (event.target.type.toLowerCase() === 'email') {
                    event.target.setCustomValidity(email_error_messages);
                } else if (event.target.type.toLowerCase() === 'password') {
                    console.log(event.target);
                    event.target.setCustomValidity(password_error_messages);
                } else {
                    event.target.setCustomValidity(default_error_messages);
                }
            } else {
                event.target.setCustomValidity('');
            }
        });
    }
});




/*---- TOGGLE FORMS FOR SIGN UP / LOGIN / RESET PASSWORD  -----*/
function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-reset').toggle(); // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}


$(()=> {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
});


