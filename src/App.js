import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { Style } from './Style';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Style />
    </div>
  );
}

export default App;