import { fireEvent, render, screen } from '@testing-library/react';
import { Theme } from '../components';

test('clicking the div opens modal', () => {
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

/*
// import { render, screen } from '@testing-library/react';
// import ThemeList from './ThemeList';

// test('Handles onMouseOve and onClick', () => {
//   render(<ThemeList />);
//   const linkElement = screen.getByRole('themeList');
//   expect(linkElement).toBeInTheDocument();
// });


import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders app content', () => {
  render(<App />);
  // const onClick = jest.fn();
  // const restartIconElement = screen.getByTestId('get-new-quote');
  // fireEvent.click(restartIconElement);
  // expect(onClick).toHaveBeenCalledTimes(1);
  // const articleElement = screen.getByRole('textContent');
  // expect(articleElement).toBeInTheDocument();
});

*/
