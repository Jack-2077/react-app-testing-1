import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders app content', () => {
  render(<App />);
  const onClick = jest.fn();
  const restartIconElement = screen.getByTestId('get-new-quote');
  fireEvent.click(restartIconElement);
  expect(onClick).toHaveBeenCalledTimes(1);
  // const articleElement = screen.getByRole('textContent');
  // expect(articleElement).toBeInTheDocument();
});
