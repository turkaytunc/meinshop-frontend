import getProducts from '../util/getProducts';
import productsFetchUrl from '../util/productsFetchUrl';

describe('Fetch all products', () => {
  it('should be array of product objects', () => {
    return getProducts(window.fetch, productsFetchUrl).then((data) =>
      expect(data).toBeInstanceOf(Array)
    );
  });

  it('should return a product with id `5fccda83acfe500d80c77fca`', () => {
    return getProducts(window.fetch, productsFetchUrl).then((data) =>
      expect(data[0]).toHaveProperty('_id', '5fccda83acfe500d80c77fca')
    );
  });

  it('should return error message because of broken url', () => {
    return getProducts(
      window.fetch,
      'https://fakestoreapi.com/product'
    ).catch((data) => expect(data).toEqual('Cant fetch products'));
  });
});
