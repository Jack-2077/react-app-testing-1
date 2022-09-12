import { render, screen, fireEvent, within } from '@testing-library/react';
import { ThemeList } from '../components';

const closeModal = jest.fn();
const changeTheme = jest.fn();

const props = {
  closeModal,
  changeTheme,
};

test('display all themes', () => {
  render(<ThemeList {...props} />);

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(15);
});

test('close modal when a theme is clicked', () => {
  render(<ThemeList {...props} />);

  fireEvent.click(screen.getByText('my_theme'));
  expect(changeTheme).toHaveBeenCalledTimes(1);
});
