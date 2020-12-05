import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { createBrowserHistory } from 'history';

it('should render without crash', () => {
  const history = createBrowserHistory();
  history.push('products/5');
  render(
    <Router history={history}>
      <ProductDetails match={{ params: { id: 3 } }} />
    </Router>
  );
});

it('should render without crash d', () => {
  const history = createBrowserHistory();
  history.push('products/2');
  render(
    <Router history={history}>
      <ProductDetails match={{ params: { id: 2 } }} />
    </Router>
  );

  screen.debug();
});
