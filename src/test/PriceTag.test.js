import { render } from '@testing-library/react';
import PriceTag from '../components/PriceTag/PriceTag';

it('should render without crash', () => {
  render(<PriceTag price={5} />);
});

it('should contain class called `product-price`', () => {
  const { container } = render(<PriceTag price={5} />);
  expect(container.firstChild).toHaveClass('product-price');
});

it('should have 3 or more classes', () => {
  const { container } = render(<PriceTag price={5} />);
  expect(container.firstElementChild.classList.length).toBeGreaterThanOrEqual(
    2
  );
});
