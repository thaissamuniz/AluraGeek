import { createNewCard } from "./card.js"

const createCardList = (title, list) => {
    return `
        <div class= "container" >
        <div class="flex">
            <h2 class="section-title">${title}</h2>
            <a href="#" class="seeAll">Ver tudo</a>
        </div>
        <ul class="products" data-products>
        ${list.map(products => createNewCard(products.imagem, products.nome, products.preco, products.id))
        }
        </ul>
        <div>`
}


export {
    createCardList
}