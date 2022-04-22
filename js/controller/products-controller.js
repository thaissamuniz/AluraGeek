import { productsList } from "../../service/produtos.js";
import { groupBy } from "./array.js";
import { createCardList } from "./componets/cardList.js";

const productsCardEl = document.querySelector('[data-cards]');
const searchInput = document.querySelector('.search-desk');
let productsCache;

loadProducts();

searchInput.addEventListener('input', e => {
    const searchTerm = e.target.value;

    loadProducts(searchTerm)
});



function loadProducts(searchTerm) {
    let itemListPromise;
    if(productsCache && productsCache.length > 0) {
        itemListPromise = Promise.resolve(productsCache)
    }else {
        itemListPromise = productsList.allProducts();
    }

    itemListPromise.then(products => {

        productsCache = products

        let filteredProducts = products;
        if (searchTerm) {
            filteredProducts = products.filter(product => product.nome.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }

        const productsByCategory = groupBy(filteredProducts, 'categoria');

        const categories = Object.keys(productsByCategory);

        const cardLists = categories.map(category => createCardList(category, productsByCategory[category]));

        productsCardEl.innerHTML = cardLists;
    });
}
// const listGroup = [
//     { category: "Diversos", items: db.products.filter(product => product.categoria === 'Diversos') },
//     { category: "Consoles", items: db.products.filter(product => product.categoria === 'Consoles') }
// ]
