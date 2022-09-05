import React from 'react';
import ThemeList from './ThemeList';
import { ReactComponent as PaletteIcon } from '../icons/palette.svg';

const Theme = ({ toggleModal, toggleTheme, modal, theme }) => {
  return (
    <div className='currentTheme' onClick={toggleModal} role='button'>
      <PaletteIcon />
      <span>{theme}</span>
      {modal && (
        <ThemeList closeModal={toggleModal} changeTheme={toggleTheme} />
      )}
    </div>
  );
};

export default React.memo(Theme);
