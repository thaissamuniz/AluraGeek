import { productsList } from "../../service/produtos.js";
import { createNewCard } from "./componets/card.js";

const productsCardEl = document.querySelector('[data-products]');

productsList.allProducts()
    .then(products => {
        products.forEach(products => {
            productsCardEl.appendChild(createNewCard(products.imagem, products.nome, products.preco, products.id))
        });
    });

// const listGroup = [
//     { category: "Diversos", items: db.products.filter(product => product.categoria === 'Diversos') },
//     { category: "Consoles", items: db.products.filter(product => product.categoria === 'Consoles') }
// ]