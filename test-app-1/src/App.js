import './App.css';
import { quotes } from './services/data-svc';
import { ReactComponent as PaletteIcon } from './palette.svg';
import { ReactComponent as RestartIcon } from './restart.svg';

const randomQuote = quotes[4].text;

function App() {
  return (
    <div className='container'>
      <div>
        <div className='currentTheme'>
          <PaletteIcon /> <span>Tron Orange</span>
        </div>
        <article>
          <p>{randomQuote}</p>
        </article>
        <div>
          <RestartIcon />
        </div>
      </div>
    </div>
  );
}

export default App;

/*
<div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        themeing commit
      </header>
    </div> */
