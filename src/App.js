import React from 'react';

import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div className="">
      <Palette colors={seedColors[5]} />
    </div>
  );
}

export default App;
