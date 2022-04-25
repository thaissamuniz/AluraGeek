const inputNameFooter = document.querySelector(".input-footer");
const textAreaFooter = document.getElementById("textarea");

const footerForm = document.querySelector(".form");
const footerButton = document.querySelector(".footer-button");

const sucessFormInfo = document.querySelector(".sucessInf");
const errorFormInfo = document.querySelector(".errorInf");

function limitCaracter(camp, maxCaracter) {

    if (camp.value.length >= maxCaracter) {
        camp.value = camp.value.substring(0, maxCaracter)

        return false;
    } else {
        return true;
    }
};

function validateForm(input) {
    if (input.value === "" || input.value === undefined || input.value === null) {
        showInfoMessage(errorFormInfo)
        hideInfoMessage(sucessFormInfo)
        return false
    }
    hideInfoMessage(errorFormInfo)
    showInfoMessage(sucessFormInfo)
    input.value = ''
    return true;
};

function showInfoMessage(element) {
    element.style.display = "block";
};
function hideInfoMessage(element) {
    element.style.display = "none";
};

inputNameFooter.addEventListener("keydown", function () {
    limitCaracter(this, 40);
});

textAreaFooter.addEventListener("keydown", function () {
    limitCaracter(this, 120);
});

footerButton.addEventListener("click", function (footerForm) {
    footerForm.preventDefault()
    validateForm(inputNameFooter)
    validateForm(textAreaFooter)
});

export const formValidation = {
    limitCaracter,
    validateForm,
    showInfoMessage,
    hideInfoMessage
}

