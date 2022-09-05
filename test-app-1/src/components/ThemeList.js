import { useEffect } from 'react';
import { theme_list } from '../services';

export default function ThemeList({ closeModal, changeTheme }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        console.log('heyo-2');
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeModal, changeTheme]);

  return (
    <div className='wrapper'>
      <div className='themeListContainer'>
        <div className='themeList' role='themeList'>
          {theme_list.map((item) => (
            <div
              key={item}
              className='theme'
              onMouseOver={() => changeTheme(item)}
              onClick={() => changeTheme(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
