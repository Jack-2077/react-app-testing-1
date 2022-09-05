import { useState, useEffect } from 'react';
import ThemeList from './ThemeList';
import { themes, pickRandomeQuote } from './services';
import './App.css';

import { ReactComponent as PaletteIcon } from './palette.svg';
import { ReactComponent as RestartIcon } from './restart.svg';

function App() {
  const [quote, setQuote] = useState(pickRandomeQuote());
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('tron_orange');

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const root = document.querySelector(':root');
    root.style.setProperty('--bg-color', themes[theme].bgColor);

    root.style.setProperty('--sub-color', themes[theme].subColor);

    root.style.setProperty('--text-color', themes[theme].textColor);
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
          <RestartIcon onClick={() => setQuote(pickRandomeQuote())} />
        </div>
      </div>
    </div>
  );
}

export default App;
