import { productsList } from "../../service/produtos.js";
import { groupBy } from "./array.js";
import { createCardList } from "./componets/cardList.js";

const productsCardEl = document.querySelector('[data-cards]');

productsList.allProducts()
    .then(products => {
        const productsByCategory = groupBy(products, 'categoria');

        const categories = Object.keys(productsByCategory);

        const cardLists = categories.map(category => createCardList(category, productsByCategory[category]));

        productsCardEl.innerHTML = cardLists;
    })

// const listGroup = [
//     { category: "Diversos", items: db.products.filter(product => product.categoria === 'Diversos') },
//     { category: "Consoles", items: db.products.filter(product => product.categoria === 'Consoles') }
// ]
