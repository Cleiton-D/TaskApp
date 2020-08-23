import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AccessProvider from './hooks/access';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <AccessProvider>
    <Router>
      <Routes />
    </Router>
    <GlobalStyles />
  </AccessProvider>
);

export default App;
