import React , { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state = {
      palettes: savedPalettes | seedColors
    }
    this.findPalette = this.findPalette.bind(this)
    this.savePalette = this.savePalette.bind(this)
    this.syncLocalStorage = this.syncLocalStorage.bind(this)
  }
  savePalette(newPalette) {
    this.setState({
      palettes : [...this.state.palettes,newPalette]
    }, this.syncLocalStorage)
  }
  syncLocalStorage() {
    window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))
  }
  findPalette(id) {
    return this.state.palettes.find( palette => palette.id===id )
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={(routeProps) => <NewPaletteForm {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette} /> } />
        <Route exact path="/" render={ (routeProps)=> <PaletteList palettes={this.state.palettes} {...routeProps} /> } />
        <Route exact path="/palette/:id" render={ (routeProps)=> <Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))} /> } />
        <Route exact path="/palette/:id/:colorID" render={ (routeProps) => <SingleColorPalette colorID={routeProps.match.params.colorID} palettes={generatePalette(this.findPalette(routeProps.match.params.id))} /> } />
      </Switch>
      )
  }
}

export default App;
