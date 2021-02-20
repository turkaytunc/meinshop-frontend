import { render, screen, act, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { createBrowserHistory } from 'history';
import setFunctionToSleep from '../util/setFunctionToSleep';
import { Provider } from 'react-redux';
import store from '../redux/store';

beforeEach(cleanup);

describe('<ProductDetails />', () => {
  it('should render without crash', async () => {
    const history = createBrowserHistory();
    history.push('products/5');
    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductDetails match={{ params: { id: 3 } }} />
        </Router>
      </Provider>
    );

    await act(() => setFunctionToSleep(1000));
  });

  it('should render loading.. then should render content', async () => {
    const history = createBrowserHistory();
    history.push('products/2');

    render(
      <Provider store={store}>
        <Router history={history}>
          <ProductDetails match={{ params: { id: '5fccda83acfe500d80c77fca' } }} />
        </Router>
      </Provider>
    );

    const title = screen.queryByTestId('product-title');
    expect(title.textContent).toBe('Loading..');
    await act(() => setFunctionToSleep(1000));
    expect(title.textContent).toBe('Mens Casual Premium Slim Fit T-Shirts ');
  });
});
