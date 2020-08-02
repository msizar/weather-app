import React from 'react';

import Home from './pages/Home';
import { colors } from './assets/colors';

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.light }}>
      <Home />
    </div>
  );
}

export default App;
