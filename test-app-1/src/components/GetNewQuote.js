import React from 'react';
import { pickRandomeQuote } from '../services';
import { ReactComponent as RestartIcon } from '../icons/restart.svg';

const GetNewQuote = ({ setQuote }) => {
  return (
    <RestartIcon
      onClick={() => setQuote(pickRandomeQuote())}
      data-testid='get-new-quote'
    />
  );
};

export default React.memo(GetNewQuote);
