import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/layout/Header';

import Routes from './Routes';

function App() {


  return (

      <Router>
        
        <Header>
          
        </Header>
        <Routes />
      </Router>
    //</ThemeProvider>
  );
}

export default App;
