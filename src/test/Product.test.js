import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from '../components/Product/Product';

const mockProduct = {
  id: 1,
  price: 30,
  image: 'fake image',
  title: 'fake title',
};

it('should render without crash', () => {
  render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );
});

it('should contain 2 child nodes', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(container.firstChild.childNodes.length).toEqual(2);
});

it('should contain class `product-container`', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(container.firstChild).toHaveClass('product-container');
});

it('should contain class `product-listitem`', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(container.firstChild.firstChild).toHaveClass('product-listitem');
});

it('should contain 2 children', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(container.firstElementChild.childElementCount).toBeGreaterThanOrEqual(
    2
  );
});

it('should have a child which has class name called `product-misc`', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(container.firstElementChild.children[1].className).toEqual(
    'product-misc'
  );
});

it('should have at least 3 attributes`', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(
    container.firstElementChild.children[0].firstElementChild.attributes.length
  ).toBeGreaterThanOrEqual(3);
});

it('should have atrributes', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(
    container.firstElementChild.children[0].firstElementChild.getAttributeNames()
  ).not.toEqual('');
});

it('should have attributes names `[height, alt, src]`', () => {
  const { container } = render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  expect(
    container.firstElementChild.children[0].firstElementChild.getAttributeNames()
  ).toEqual(['height', 'src', 'alt']);
});
