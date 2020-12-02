import getProducts from '../util/getProducts';

describe('Fetch all products', () => {
  it('should be array of product objects', () => {
    return getProducts().then((data) => expect(data).toBeInstanceOf(Array));
  });

  it('should return a product with id equal to 1', () => {
    return getProducts().then((data) =>
      expect(data[0]).toHaveProperty('id', 1)
    );
  });
});
