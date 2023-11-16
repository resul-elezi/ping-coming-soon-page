"use strict";

const VALIDATE_FORM = formSelector => {
    const FORM_ELEMENT = document.querySelector(formSelector);

const VALIDATE_MAIL = mail => {
    const INPUT = mail.querySelector("input");
    const ERROR_CONTAINER = mail.querySelector(".error-msg");

const VALIDATE_OPTIONS = [
    {
        attribute: "pattern",
        isValid: INPUT => {
            const PATTERN_REGEX = new RegExp(INPUT.pattern);
            return PATTERN_REGEX.test(INPUT.value);
        },
        errorMessage: (INPUT) => `Please provide a valid ${INPUT.placeholder}`
    }
];
// const VALIDATE_SINGLE_FORM_GROUP = formGroup => {
//     const INPUT = formGroup.querySelector("input");
//     const ERROR_CONTAINER = formGroup.querySelector(".error-msg");

let emailError = false;
for(const OPTION of VALIDATE_OPTIONS) {
    if(INPUT.hasAttribute(OPTION.attribute) && !OPTION.isValid(INPUT)) {
        ERROR_CONTAINER.textContent = OPTION.errorMessage(INPUT);
        ERROR_CONTAINER.classList.remove("hidden");
        INPUT.style.border = "1px solid hsl(354, 100%, 66%)";
        emailError = true;
    }
}
// }
if(!emailError) {
    ERROR_CONTAINER.classList.add("hidden");
    INPUT.style.border = "";
}
};
FORM_ELEMENT.setAttribute("novalidate", "");


FORM_ELEMENT.addEventListener("submit", event => {
    event.preventDefault();
});

};

VALIDATE_FORM("#form");

