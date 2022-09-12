import { fireEvent, render, screen } from '@testing-library/react';
import { Theme } from '../components';

test('render modal', () => {
  const props = {
    handleModal: jest.fn(),
    handleTheme: jest.fn(),
    modal: true,
    theme: 'my_theme',
  };

  render(<Theme {...props} />);
  const currentThemeDiv = screen.getByRole('button');

  fireEvent.click(currentThemeDiv);
  expect(screen.getByRole('list')).toBeInTheDocument();
});
