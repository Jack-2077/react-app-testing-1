import { useState, useEffect } from 'react';
import { themes, theme_list, quotes } from './services';
import './App.css';

import { ReactComponent as PaletteIcon } from './palette.svg';
import { ReactComponent as RestartIcon } from './restart.svg';

function pickRandomeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const item = quotes[randomIndex];
  return item;
}

function ThemeList({ closeModal, changeTheme }) {
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
    <div className='wrapper'>
      <div className='themeListContainer'>
        <div className='themeList'>
          {theme_list.map((item) => (
            <div
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

function App() {
  const [quote, setQuote] = useState(pickRandomeQuote().text);
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('tron_orange');

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--bg-color',
      themes[theme].bgColor
    );
    document.documentElement.style.setProperty(
      '--sub-color',
      themes[theme].subColor
    );
    document.documentElement.style.setProperty(
      '--text-color',
      themes[theme].textColor
    );
  }, [theme]);

  return (
    <div className='container'>
      <div>
        <div className='currentTheme' onClick={toggleModal}>
          <PaletteIcon />
          <span>{theme}</span>
          {modal && (
            <ThemeList closeModal={toggleModal} changeTheme={toggleTheme} />
          )}
        </div>
        <article>
          <p>{quote}</p>
        </article>
        <div>
          <RestartIcon onClick={() => setQuote(pickRandomeQuote().text)} />
        </div>
      </div>
    </div>
  );
}

export default App;
