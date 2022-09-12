import { render, screen, fireEvent } from '@testing-library/react';
import { GetNewQuote } from '../components';

test('trigger on click function', () => {
  const setQuote = jest.fn();
  render(<GetNewQuote setQuote={setQuote} />);

  const getNewQuoteIcon = screen.getByRole('button');
  fireEvent.click(getNewQuoteIcon);
  expect(setQuote).toHaveBeenCalledTimes(1);
});
