import { render, act, screen } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';
import setFunctionToSleep from '../util/setFunctionToSleep';
import { MemoryRouter } from 'react-router-dom';

it('should render without crash', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
});

it('should render loading.. then should render content', async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const title = screen.queryByTestId('home-page');
  expect(title.textContent).toBe('Loading..');
  await act(() => setFunctionToSleep(1000));
  expect(title.textContent).not.toBeNull();
});
