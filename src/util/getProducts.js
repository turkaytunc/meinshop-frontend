const getProducts = async () => {
  const products = await fetch('https://fakestoreapi.com/products');
  const parsedProducts = await products.json();
  return parsedProducts;
};

export default getProducts;
