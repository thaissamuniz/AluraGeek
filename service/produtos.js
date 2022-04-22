const PRODUCT_URL = 'http://localhost:3000/products';

function mountSearchParams(params) {
    let searchParams = '';
    if (params) {
        searchParams = '?' + new URLSearchParams(params).toString();
    }
    return searchParams;
}

const products = (params) => {
    let searchParams = mountSearchParams(params);
    return fetch(PRODUCT_URL + searchParams)
    .then(response => {
        return response.json()
    })
}

const allProducts = () => {
    return products();
}

const productsByCategory = (categoria) => {
    return products({categoria: categoria});
}

const productDetail = (id) => {
    return fetch(PRODUCT_URL + `/${id}`)
    .then(response => {
        return response.json()
    })
}

export const productsList = {
    allProducts,
    productsByCategory,
    productDetail,
    
}
