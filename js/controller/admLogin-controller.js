import { productsList } from "../../service/produtos.js";
import { login } from "../../service/user.js";
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

const executaQuandoReceberARespostaComSucesso = body => {
    localStorage.setItem("user", body)
    redirectPage();
}

const executaQuandoReceberARespostaComError = error => {
    console.error(error);
    showErrorMessage();
}


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(event)

    if (!validateEmail(admEmail.value) || !validatePassword(admPassword.value)) {
        showErrorMessage()
        return;
    }

    hideErrorMessage()

    login(admEmail.value, admPassword.value)
        .then(executaQuandoReceberARespostaComSucesso)
        .catch(executaQuandoReceberARespostaComError);
})