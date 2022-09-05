import { useState, useEffect } from 'react';
import ThemeList from './ThemeList';
import { themes, pickRandomeQuote } from './services';
import './App.css';

import { ReactComponent as PaletteIcon } from './palette.svg';
import { ReactComponent as RestartIcon } from './restart.svg';

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
