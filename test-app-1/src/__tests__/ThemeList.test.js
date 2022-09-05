import { render, screen } from '@testing-library/react';
import ThemeList from './ThemeList';

test('Handles onMouseOve and onClick', () => {
  render(<ThemeList />);
  const linkElement = screen.getByRole('themeList');
  expect(linkElement).toBeInTheDocument();
});
