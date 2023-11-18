"use strict";

const FORM = document.getElementById("form");
const EMAIL = document.getElementById("email");
const ERROR = document.querySelector(".error-msg");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!validateEmail(EMAIL_INPUT.value)) {
        ERROR.classList.remove("hidden");
        ERROR.classList.remove("hidden");
        EMAIL.style.border = "1px solid hsl(354, 100%, 66%)";
    }
});

const SET_ERROR = 

const VALIDATE_INPUT = () => {
    const EMAIL_VALUE = EMAIL.value.trim();
};

function validateEmail(EMAIL_INPUT) {
    const PATTERN = /^[A-Za-z\._\-0-9]*\[@\][A-Za-z]*\[\.\][a-z]{2,4}$/;
    return PATTERN.test(EMAIL_INPUT);
}

// const ERROR_CONTAINER = formGroup.querySelector(".error-msg");

// let emailError = false;
// for(const OPTION of VALIDATE_OPTIONS) {
//     if(INPUT.hasAttribute(OPTION.attribute) && !OPTION.isValid(INPUT)) {
//         ERROR_CONTAINER.textContent = OPTION.errorMessage(INPUT);
//         ERROR_CONTAINER.classList.remove("hidden");
//         INPUT.style.border = "1px solid hsl(354, 100%, 66%)";
//         emailError = true;
//     }
// }
// // }
// if(!emailError) {
//     ERROR_CONTAINER.classList.add("hidden");
//     INPUT.style.border = "";
// }


