import Login from '../components/Login/Login';
import { render, screen } from '@testing-library/react';

test('should render component without crash', () => {
  render(<Login />);
});
test('should render Login Page', () => {
  render(<Login />);
  expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
});
