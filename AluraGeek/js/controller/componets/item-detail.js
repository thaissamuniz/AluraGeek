const createItemDetail = (imagem, nome, preco, descricao, id) => {
    const descriptionSection = document.createElement('section');
    const cont = `
    <img class="img-product" src="${imagem}" alt="">
<section class="product-description container">
    <img class="img-tab" src="${imagem}" alt="">
    <img class="img-desk" src="${imagem}" alt="">
    <div class="description">
    <h2 class="product-name">${nome}</h2>
    <p class="product-tag">${preco}</p>
    <p class="product-paragraph">
        ${descricao}
    </p>
    </div>
    `
    descriptionSection.innerHTML = cont;
    return descriptionSection;
}

export { createItemDetail }