import { productsList } from "../../service/produtos.js";
import { createNewCard } from "./componets/card.js";
import { createItemDetail } from "./componets/item-detail.js";

const descriptionEl = document.querySelector('[data-description]');
const similarProductsEl = document.querySelector('[data-products]'); 

const url = new URL(window.location);
const productId = url.searchParams.get('id');

productsList.productDetail(productId)
    .then(product => {
        descriptionEl.appendChild(createItemDetail(product.imagem, product.nome, product.preco, product.descricao, product.id))
        productsList.productsByCategory(product.categoria)
        .then(products => {
            products
            .filter(product => product.id != productId)
            .forEach(product => {
                similarProductsEl.appendChild(createNewCard(product.imagem, product.nome, product.preco, product.id))
            });
        });
    })
