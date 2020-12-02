import getProducts from '../util/getProducts';

describe('Fetch all products', () => {
  it('should be array of product objects', () => {
    return getProducts(
      window.fetch,
      'https://fakestoreapi.com/products'
    ).then((data) => expect(data).toBeInstanceOf(Array));
  });

  it('should return a product with id equal to 1', () => {
    return getProducts(
      window.fetch,
      'https://fakestoreapi.com/products'
    ).then((data) => expect(data[0]).toHaveProperty('id', 1));
  });

  it('should return error', () => {
    return getProducts(
      window.fetch,
      'https://fakestoreapi.com/product'
    ).catch((data) => expect(data).toEqual('Cant fetch products'));
  });
});
