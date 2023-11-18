"use strict";

const EMAIL = document.getElementById("email");
const BUTTON = document.getElementById("button");
const ERROR = document.querySelector(".error-msg");


BUTTON.addEventListener('click', (e) => {
    // e.preventDefault(); // prevent the auto submission of the form

    const REG =  /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*$/;

    if(EMAIL.value.match(REG)){
        ERROR.style.display = "none";
        EMAIL.style.border = "";
    } 
    else {
        ERROR.style.display = "block"
        ERROR.innerText = "Please provide a valid email address";
        EMAIL.style.border = "1px solid hsl(354, 100%, 66%)";
    }
})


