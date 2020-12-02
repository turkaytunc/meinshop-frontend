import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart/Cart';

it('should render without crash', () => {
  render(<Cart />);
});

it('should render title', () => {
  render(<Cart />);
  expect(screen.getByText(/Cart Page/i)).toBeInTheDocument();
});
