const getProducts = async (fetch, url) => {
  try {
    const products = await fetch(url);
    const parsedProducts = await products.json();
    return parsedProducts;
  } catch (error) {
    return Promise.reject(`Cant fetch products`);
  }
};

export default getProducts;
