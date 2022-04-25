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
    return products({ categoria: categoria });
}

const productDetail = (id) => {
    return fetch(PRODUCT_URL + `/${id}`)
        .then(response => {
            return response.json()
        })
}

const creatProduct = (formData) => {
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    return fetch(PRODUCT_URL, requestOption)
        .then(response => response.body)
}

export const productsList = {
    allProducts,
    productsByCategory,
    productDetail,
    creatProduct

}
