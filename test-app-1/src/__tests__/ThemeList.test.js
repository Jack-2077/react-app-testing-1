import { render, screen, fireEvent, within } from '@testing-library/react';
import { ThemeList } from '../components';

test('display all available themes and close modal', () => {
  const closeModal = jest.fn();
  const changeTheme = jest.fn();

  const props = {
    closeModal,
    changeTheme,
  };

  render(<ThemeList {...props} />);

  //test if all themes are displayed
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(15);

  //test if modal is closed when a theme is clicked
  fireEvent.click(screen.getByText('my_theme'));
  expect(changeTheme).toHaveBeenCalledTimes(1);

  //test if modal is closed when esc key is pressed
  fireEvent.keyDown(screen.getByTestId('outside-modal'), {
    key: 'Escape',
    code: 'Escape',
    keyCode: 27,
    charCode: 27,
  });
  expect(closeModal).toHaveBeenCalledTimes(1);

  //test if modal is closed when clicked anywhere outside of modal
  fireEvent.click(screen.getByTestId('outside-modal'));
  expect(closeModal).toHaveBeenCalledTimes(1);
});
