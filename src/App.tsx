import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { InputProvider } from './hooks/input';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <InputProvider>
        <Routes />
      </InputProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
