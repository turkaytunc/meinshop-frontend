const getProducts = async (fetch, url) => fetch(url).then((products) => products.json());

export default getProducts;
