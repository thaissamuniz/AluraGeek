const createNewCard = (imagem, nome, preco, id) => {

    const createNewLi = document.createElement('li')

    const content = `
        <li class="product">
        <img class="product-img" src="${imagem}">
        <div>
            <h4 class="product-tittle">${nome}</h4>
            <p class="product-price">${preco}</p>
            <a href="product.html?id=${id}" class="seeProduct">Ver produto</a>
        </div>
    </li>
    
    `
    createNewLi.innerHTML = content;
    return createNewLi;
}

export { createNewCard };