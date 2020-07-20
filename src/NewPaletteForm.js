import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NewPaletteNav from './NewPaletteNav';
import DraggableColorList from './DraggableColorList';
import ChromePickerForm from './ChromePickerForm';
import { arrayMove } from 'react-sortable-hoc';
import namedColors from 'color-name-list';
import styles from './styles/NewPaletteFormStyles'

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors : 20
  }
	constructor(props) {
		super(props)
		this.state = {
			open: false,
      colors: [{color : "blue", name : "Blue"},{color : "pink", name : "Pink"},{color : "salmon", name : "Salmon"},{color : "gold", name : "Gold"},{color : "lavender", name : "Lavender"}],
		}
    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.deleteColorBox = this.deleteColorBox.bind(this)
    this.clearPalette = this.clearPalette.bind(this)
    this.addRandomColor = this.addRandomColor.bind(this)
  }
  handleSave(newPaletteWithEmoji) {
    const newPalette = {
      paletteName: newPaletteWithEmoji.paletteName,
      id: newPaletteWithEmoji.paletteName.toLowerCase().replace(/ /g, '-'),
      emoji: newPaletteWithEmoji.emo,
      colors: this.state.colors
    }
    this.props.savePalette(newPalette)
    this.props.history.push('/')
  }
  handleNameChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
	handleClick(newColor) {
		this.setState({
      colors: [...this.state.colors, newColor]
		})
	}
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  deleteColorBox(colorName) {
    this.setState({
      colors : this.state.colors.filter(color => colorName !== color.name)
    })
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors : arrayMove(colors,oldIndex,newIndex)
    }))
  }
  clearPalette() {
    this.setState({
      colors :[]
    })
  }
  addRandomColor() {
    let randColor = namedColors[Math.floor(Math.random() * namedColors.length)]
    let clr = {
      color: randColor.hex,
      name: randColor.name
    }  
    this.setState({
      colors : [...this.state.colors,clr]
    })
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const isPaletteFull = this.state.colors.length >= this.props.maxColors;
      return (
          <div className={classes.root}>
              <NewPaletteNav palettes={this.props.palettes} open={open} handleSave={this.handleSave} handleDrawerOpen={this.handleDrawerOpen} />
              <Drawer
              className={classes.drawer}
              variant='persistent'
              anchor='left'
              open={open}
              classes={{
                  paper: classes.drawerPaper
              }}
              >
                  <div className={classes.drawerHeader}>
                      <IconButton onClick={this.handleDrawerClose}>
                          <ChevronLeftIcon />
                      </IconButton>
                  </div>
                  <Divider />
                  <div className={classes.chromeContainer}>
                    <Typography variant="h4" gutterBottom>Choose Your Color</Typography>
                    <div className={classes.buttons}>
                      <Button className={classes.button} variant="contained" color="secondary" onClick={this.clearPalette}>CLEAR PALETTE</Button>
                      <Button className={classes.button} variant="contained" color="primary" disabled={isPaletteFull} onClick={this.addRandomColor}>RANDOM COLOR</Button>
                    </div>
                    <ChromePickerForm isPaletteFull={isPaletteFull} colors={this.state.colors} handleClick={this.handleClick} />
                  </div>
              </Drawer>
              <main 
              className={classNames(classes.content, {
                  [classes.contentShift]: open
              })}
              >
                <div className={classes.drawerHeader} />
                <ul className={classes.ulBox}>
                  <DraggableColorList distance={20} colors={this.state.colors} deleteColorBox={this.deleteColorBox} axis='xy' onSortEnd={this.onSortEnd} />
                </ul>
              </main>
          </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
