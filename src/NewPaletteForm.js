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
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import namedColors from 'color-name-list';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  ulBox: {
    height: "25%"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors : 20
  }
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			color: "red",
      colors: [{color : "blue", name : "Blue"},{color : "pink", name : "Pink"},{color : "salmon", name : "Salmon"},{color : "gold", name : "Gold"},{color : "lavender", name : "Lavender"}],
      newColorName: ""
		}
		this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.deleteColorBox = this.deleteColorBox.bind(this)
    this.clearPalette = this.clearPalette.bind(this)
    this.addRandomColor = this.addRandomColor.bind(this)
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (val) => {
      return this.state.colors.every((elm) => elm.name.toLowerCase() !== val.toLowerCase() )
    })
    ValidatorForm.addValidationRule('isColorUnique', (val) => {
      return this.state.colors.every((elm) => elm.color !== this.state.color )
    })
    ValidatorForm.addValidationRule('isPaletteNameUnique', (val) => {
      return this.props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== val.toLowerCase() )
    })
  }
  handleSave(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g,'-'),
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
	handleChange(c, e) {
		this.setState({
			color : c.hex
		})
	}
	handleClick() {
    const newColor = {
      color: this.state.color,
      name: this.state.newColorName
    }
		this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
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
              <NewPaletteNav palettes={this.props.palettes} open={open} classes={classes} handleSave={this.handleSave} handleDrawerOpen={this.handleDrawerOpen} />
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
                  <Typography variant="h4">Choose Your Color</Typography>
                  <div>
                      <Button variant="contained" color="secondary" onClick={this.clearPalette}>CLEAR PALETTE</Button>
                      <Button variant="contained" color="primary" disabled={isPaletteFull} onClick={this.addRandomColor}>RANDOM COLOR</Button>
                  </div>
                  <ChromePicker color={this.state.color} onChangeComplete={this.handleChange} />
                  <ValidatorForm onSubmit={this.handleClick}>
                    <TextValidator validators={['required','isColorNameUnique','isColorUnique']} errorMessages={['Input field is required','Please choose a unique name','Color is already taken']} value={this.state.newColorName} name="newColorName" onChange={this.handleNameChange} />
              <Button variant="contained" disabled={isPaletteFull} color="primary" type="submit" style={{ backgroundColor: isPaletteFull ? '#cecee2' : this.state.color }}>{isPaletteFull ? 'PALETTE FULL': 'ADD COLOR'}</Button>
                  </ValidatorForm>
              </Drawer>
              <main 
              className={classNames(classes.content, {
                  [classes.contentShift]: open
              })}
              >
                <div className={classes.drawerHeader} />
                <ul className={classes.ulBox}>
                  <DraggableColorList colors={this.state.colors} deleteColorBox={this.deleteColorBox} axis='xy' onSortEnd={this.onSortEnd} />
                </ul>
              </main>
          </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
