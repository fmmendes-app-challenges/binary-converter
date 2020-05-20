import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
