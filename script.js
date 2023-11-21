"use strict";

const EMAIL = document.getElementById("email");
const BUTTON = document.getElementById("button");
const FORM = document.getElementById("form");

BUTTON.addEventListener('click', (e) => {
    // e.preventDefault();
    
    const REG_EX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!EMAIL.value.match(REG_EX)) {
        FORM.classList.add("error");
    } 
    else {
        FORM.classList.remove("error");
    }
});



