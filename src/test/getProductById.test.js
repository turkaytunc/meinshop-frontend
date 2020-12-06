import getProductById from '../util/getProductById';
import productsFetchUrl from '../util/productsFetchUrl';

const mock = {
  _id: '5fccda83acfe500d80c77fca',
  rating: 0,
  numReviews: 0,
  price: 109.95,
  stock: 0,
  name: 'Mens Casual Premium Slim Fit T-Shirts ',
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  brand: 'Koton',
  user: '5fccda83acfe500d80c77fc7',
  reviews: [],
  __v: 0,
  createdAt: { $date: '2020-12-06T13:20:03.477Z' },
  updatedAt: { $date: '2020-12-06T13:20:03.477Z' },
};

it('should get product with id=1', () => {
  return getProductById(
    window.fetch,
    productsFetchUrl,
    '5fccda83acfe500d80c77fca'
  ).then((data) => expect(data._id).toEqual(mock._id));
});
