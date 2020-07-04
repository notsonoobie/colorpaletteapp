import React from 'react';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import './App.css';

function App() {
  return (
    <div className="">
      <Palette colors={generatePalette(seedColors[7])} />
    </div>
  );
}

export default App;
