import { useState, useEffect } from 'react';
import { quotes } from './services/data-svc';
import './App.css';

import { ReactComponent as PaletteIcon } from './palette.svg';
import { ReactComponent as RestartIcon } from './restart.svg';

function pickRandomeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const item = quotes[randomIndex];
  return item;
}

const themes = [
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
  '8008',
  'tron',
  'check',
  'flex',
];
function ThemeList() {
  return (
    <div className='wrapper'>
      <div className='themeListContainer'>
        <div className='themeList'>
          {themes.map((item) => (
            <div className='theme'>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [quote, setQuote] = useState(pickRandomeQuote().text);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div className='container'>
      <div>
        <div className='currentTheme' onClick={toggleModal}>
          <PaletteIcon />
          <span>Tron Orange</span>
          {modal && <ThemeList />}
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
