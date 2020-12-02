import { render } from '@testing-library/react';
import Product from '../components/Product/Product';

const mockProduct = {
  price: 30,
  image: 'fake image',
  title: 'fake title',
};

it('should render without crash', () => {
  render(<Product product={mockProduct} />);
});

it('should contain 2 child nodes', () => {
  const { container } = render(<Product product={mockProduct} />);

  expect(container.firstChild.childNodes.length).toEqual(2);
});

it('should contain class `product-container`', () => {
  const { container } = render(<Product product={mockProduct} />);

  expect(container.firstChild).toHaveClass('product-container');
});

it('should contain class `product-listitem`', () => {
  const { container } = render(<Product product={mockProduct} />);

  expect(container.firstChild.firstChild).toHaveClass('product-listitem');
});
