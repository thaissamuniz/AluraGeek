import { productsList } from "../../service/produtos.js";

const searchItem = document.querySelector('.search-desk');

searchItem.addEventListener('input', () => {
    console.log(this.value);
    productsList.allProducts()
})