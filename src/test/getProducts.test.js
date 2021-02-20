import { cleanup } from '@testing-library/react';
import getProducts from '../util/getProducts';
import productsFetchUrl from '../util/productsFetchUrl';

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(cleanup);
beforeEach(jest.clearAllMocks);

describe('getProducts', () => {
  it('should be array of product objects', () => {
    let fetchMock = window.fetch.mockResolvedValue({
      json: () => Promise.resolve([{ _id: '5fccda83acfe500d80c77fca' }]),
    });
    return getProducts(fetchMock, productsFetchUrl).then((data) => expect(data).toBeInstanceOf(Array));
  });

  it('should return a product with id `5fccda83acfe500d80c77fca`', () => {
    let fetchMock = window.fetch.mockResolvedValue({
      json: () => Promise.resolve([{ _id: '5fccda83acfe500d80c77fca' }]),
    });
    return getProducts(fetchMock, productsFetchUrl).then((data) =>
      expect(data[0]).toHaveProperty('_id', '5fccda83acfe500d80c77fca')
    );
  });

  it('should return error message because of broken url', () => {
    let fetchMock = window.fetch.mockResolvedValue({
      json: () => Promise.resolve({ data: { _id: '5fccda83acfe500d80c77fca' } }),
    });
    return getProducts(fetchMock, 'https://fakestoreapi.com/product').catch((data) =>
      expect(data).toEqual('Cant fetch products')
    );
  });
});
