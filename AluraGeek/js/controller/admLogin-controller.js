import { productsList } from "../../service/produtos.js";
const loginForm = document.querySelector('.login-section');
const admEmail = document.querySelector('.email');
const admPassword = document.querySelector('.password');

const errorMsg = document.querySelector(".error-info")
function showErrorMessage() {
    errorMsg.style.display = "flex";
}

function hideErrorMessage() {
    errorMsg.style.display = "none"
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

function validatePassword(password) {
    if (password === "" || password === undefined || password === null) {
        return false
    }
    return true;
}

function redirectPage() {
    location.href = 'allProducts.html'
}


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(event)

    if (!validateEmail(admEmail.value) || !validatePassword(admPassword.value)) {
        showErrorMessage()
        return;
    }
    hideErrorMessage()
    redirectPage()
})