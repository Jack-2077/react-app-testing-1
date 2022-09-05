import { useState, useEffect, useCallback } from 'react';
import { Theme, Quote, GetNewQuote } from './components';
import { themes, pickRandomeQuote } from './services';
import './App.css';

function App() {
  const [quote, setQuote] = useState(pickRandomeQuote());
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useState('tron_orange');

  const toggleTheme = useCallback((selectedTheme) => {
    setTheme(selectedTheme);
  }, []);

  const toggleModal = useCallback(() => setModal(!modal), [modal]);

  useEffect(() => {
    const root = document.querySelector(':root');
    root.style.setProperty('--bg-color', themes[theme].bgColor);

    root.style.setProperty('--sub-color', themes[theme].subColor);

    root.style.setProperty('--text-color', themes[theme].textColor);
  }, [theme]);

  return (
    <div className='container'>
      <div>
        <Theme
          toggleModal={toggleModal}
          toggleTheme={toggleTheme}
          theme={theme}
          modal={modal}
        />
        <Quote quote={quote} />
        <GetNewQuote setQuote={setQuote} />
      </div>
    </div>
  );
}

export default App;
