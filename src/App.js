import React , { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.findPalette = this.findPalette.bind(this)
  }
  
  findPalette(id) {
    return seedColors.find( palette => palette.id===id )
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (routeProps)=> <PaletteList palettes={seedColors} {...routeProps} /> } />
        <Route exact path="/palette/:id" render={ (routeProps)=> <Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))} /> } />
        <Route exact path="/palette/:id/:colorID" render={ (routeProps) => <SingleColorPalette colorID={routeProps.match.params.colorID} palettes={generatePalette(this.findPalette(routeProps.match.params.id))} /> } />
      </Switch>
      )
  }
}

export default App;
