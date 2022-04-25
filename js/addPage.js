import { productsList } from "../service/produtos.js";
import { formValidation } from "./controller/componets/formValidation.js";

const inputProductName = document.querySelector(".name");
const inputProductPrice = document.querySelector(".price");
const inputProductDescrip = document.getElementById("product-descrip");
const addProductButton = document.querySelector(".add-product");
const formAddProduct = document.querySelector(".addProductForm");
const img = document.getElementById("input-img");
const inputImg = document.getElementById("file");

function loadImg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (event) {
            img.src = event.target.result
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function formatCurrency(value) {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
}

inputImg.addEventListener("change", function () {
    loadImg(inputImg)
})

inputProductName.addEventListener("keydown", function () {
    formValidation.limitCaracter(inputProductName, 20)
});

inputProductDescrip.addEventListener("keydown", function () {
    formValidation.limitCaracter(inputProductDescrip, 150)
});

inputProductPrice.addEventListener("keyup", function () {
    const aux = inputProductPrice.value.replace('R$ ', '');
    const parsedValue = parseFloat(aux.replaceAll('.', ''))
    if (!parsedValue) {
        parsedValue = 0
    }
    const formattedValue = formatCurrency(parsedValue)

    inputProductPrice.value = formattedValue;
});

formAddProduct.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formValidation.validateForm(inputProductDescrip)
        || !formValidation.validateForm(inputProductName)
        || !formValidation.validateForm(inputProductPrice)
        || !formValidation.validateForm(inputImg)) {

        return;
    }

    const imagem = inputImg.value;
    const nome = inputProductName.value;
    const preco = inputProductPrice.value;
    const descricao = inputProductDescrip.value;

    const formData = {
        imagem,
        nome,
        preco,
        descricao
    }

    productsList.creatProduct(formData).then(() => {
        window.location.href = "./allProducts.html"
    })
})



