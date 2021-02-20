import { render, act, screen } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';
import setFunctionToSleep from '../util/setFunctionToSleep';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('<HomePage />', () => {
  it('should render without crash', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should render loading.. then should render content', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    const title = screen.queryByTestId('home-page');
    expect(title.textContent).toBe('Loading...');
    await act(() => setFunctionToSleep(1000));
    expect(title.textContent).not.toBeNull();
  });
});
