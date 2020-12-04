import getProductById from '../util/getProductById';
import productsFetchUrl from '../util/productsFetchUrl';

const mock = {
  category: 'men clothing',
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  id: 1,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 109.95,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
};

it('should get product with id=1', () => {
  return getProductById(window.fetch, productsFetchUrl, 1).then((data) =>
    expect(data).toEqual(mock)
  );
});
