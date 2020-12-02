import { render } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';

it('should render without crash', () => {
  render(<HomePage key={null} />);
});
