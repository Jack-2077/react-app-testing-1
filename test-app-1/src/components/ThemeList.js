import { useEffect } from 'react';
import { theme_list } from '../services';

export default function ThemeList({ closeModal, changeTheme }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeModal]);

  return (
    <div className='wrapper' data-testid='outside-modal'>
      <div className='themeListContainer'>
        <div className='themeList' role='list'>
          {theme_list.map((item) => (
            <div
              key={item}
              className='theme'
              onMouseOver={() => changeTheme(item)}
              onClick={() => changeTheme(item)}
              role='listitem'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
