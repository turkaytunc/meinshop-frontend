const getProductById = async (fetch, url, id) => {
  try {
    const product = await fetch(`${url}/${id}`);
    const parsedProduct = await product.json();
    return parsedProduct;
  } catch (error) {
    return `Cant fetch product. Error:${error}`;
  }
};

export default getProductById;
