const inputNameFooter = document.querySelector(".input-footer");
const textAreaFooter = document.getElementById("textarea");

const footerForm = document.querySelector(".form");
const footerButton = document.querySelector(".footer-button");

const sucessFormInfo = document.querySelector(".sucessInf");
const errorFormInfo = document.querySelector(".errorInf");
const formularioGeral = document.querySelector('.formInf');

function limitCaracter(camp, maxCaracter) {

    if (camp.value.length >= maxCaracter) {
        camp.value = camp.value.substring(0, maxCaracter)
        console.log("ultrapassou")
        return false;
    } else {
        return true;
    }
};

function validateForm(name, msg) {
    if (name.value === "" || name.value === undefined || name.value === null ||
        msg.value === "" || msg.value === undefined || msg.value === null) {
        showInfoSMessage(errorFormInfo)
        return false
    }

    inputNameFooter.value = ''
    textAreaFooter.value = ''
    showInfoSMessage(sucessFormInfo)
    return true;
};

function showInfoSMessage(element) {
    element.style.display = "block";
};

inputNameFooter.addEventListener("keydown", function () {
    limitCaracter(this, 40);
});

textAreaFooter.addEventListener("keydown", function () {
    limitCaracter(this, 120);
});

footerButton.addEventListener("click", function (footerForm) {
    footerForm.preventDefault()
    validateForm(inputNameFooter, textAreaFooter)
});
