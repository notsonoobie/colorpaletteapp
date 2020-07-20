import React , { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      palettes: savedPalettes || seedColors
    }
    this.findPalette = this.findPalette.bind(this)
    this.savePalette = this.savePalette.bind(this)
    this.syncLocalStorage = this.syncLocalStorage.bind(this)
    this.deletePalette = this.deletePalette.bind(this)
  }
  savePalette(newPalette) {
    this.setState({
      palettes : [...this.state.palettes,newPalette]
    }, this.syncLocalStorage)
  }
  syncLocalStorage() {
    window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))
  }
  deletePalette(id) {
    this.setState(prevState => ({
      palettes : prevState.palettes.filter(palette => palette.id !== id) 
    }), this.syncLocalStorage)
  }
  findPalette(id) {
    return this.state.palettes.find( palette => palette.id===id )
  }
  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route exact path='/palette/new' render={(routeProps) => <div classNames="pages"><NewPaletteForm {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette} /></div> } />
              <Route exact path="/" render={ (routeProps)=> <div classNames="pages"><PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} /></div> } />
              <Route exact path="/palette/:id" render={ (routeProps)=> <div classNames="pages"><Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))} /></div> } />
              <Route exact path="/palette/:id/:colorID" render={ (routeProps) => <div classNames="pages"><SingleColorPalette colorID={routeProps.match.params.colorID} palettes={generatePalette(this.findPalette(routeProps.match.params.id))} /></div> } />
              <Route render={ (routeProps)=> <div classNames="pages"><PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} /></div> } />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    )
  }
}

export default App;
