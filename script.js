"use strict";

const EMAIL = document.getElementById("email");
const BUTTON = document.getElementById("button");
const FORM = document.getElementById("form");
const ERROR_P = document.querySelector(".msg");


BUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    
    const REG_EX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(EMAIL.value === "") {
        FORM.classList.add("error");
        ERROR_P.innerHTML = "Email is required";
    } else if(!EMAIL.value.match(REG_EX)) {
        FORM.classList.add("error");
        ERROR_P.innerHTML = "Please provide a valid email address";
    } else {
        FORM.classList.remove("error");
    }
});







