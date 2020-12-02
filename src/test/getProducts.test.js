import getProducts from '../util/getProducts';

describe('Fetch all products', () => {
  it('should return 30 products', () => {
    return getProducts().then((data) => expect(data).toBeInstanceOf(Object));
  });
});
