import { render, screen, act } from '@testing-library/react';
import { Router } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { createBrowserHistory } from 'history';
import setFunctionToSleep from '../util/setFunctionToSleep';

it('should render without crash', () => {
  const history = createBrowserHistory();
  history.push('products/5');
  render(
    <Router history={history}>
      <ProductDetails match={{ params: { id: 3 } }} />
    </Router>
  );
});

it('should render loading.. then should render content', async () => {
  const history = createBrowserHistory();
  history.push('products/2');

  render(
    <Router history={history}>
      <ProductDetails match={{ params: { id: 2 } }} />
    </Router>
  );

  const title = screen.queryByTestId('product-title');
  expect(title.textContent).toBe('Loading..');
  await act(() => setFunctionToSleep(1000));
  expect(title.textContent).toBe('Mens Casual Premium Slim Fit T-Shirts ');
});
