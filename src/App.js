import React , { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
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
        <Route exact path="/" render={ ()=> <h1>Palatte List</h1> } />
        <Route exact path="/palette/:id" render={ (routeProps)=> <Palette colors={generatePalette(this.findPalette(routeProps.match.params.id))} /> } />
      </Switch>
        // <div className="">
        //   <Palette colors={generatePalette(seedColors[7])} />
        // </div>
      )
  }
}

export default App;
