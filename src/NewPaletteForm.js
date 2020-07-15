import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorBox from './DraggableColorBox';
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			color: "red",
      colors: [],
      newColorName: "",
      newPaletteName: ""
		}
		this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.deleteColorBox = this.deleteColorBox.bind(this)
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
  handleSave(e) {
    let newName = this.state.newPaletteName
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g,'-'),
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
  render() {
      const { classes } = this.props;
      const { open } = this.state;
      return (
          <div className={classes.root}>
              <CssBaseline />
              <AppBar
              color='default'
              position='fixed'
              className={classNames(classes.appBar, {
                  [classes.appBarShift]: open
              })}
              >
                  <Toolbar disableGutters={!open}>
                      <IconButton
                      color='inherit'
                      aria-label='Open drawer'
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, open && classes.hide)}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant='h6' color='inherit' noWrap>
                Persistent drawer
                      </Typography>
                      <ValidatorForm onSubmit={this.handleSave}>
                      <TextValidator label='Palette Name' name='newPaletteName' validators={['required','isPaletteNameUnique']} errorMessages={['Palette name is required','Palette name already taken']} value={this.state.newPaletteName} onChange={this.handleNameChange} />
                        <Button type="submit" variant='contained' color='primary'>Save Palette</Button>
                      </ValidatorForm>
                  </Toolbar>
              </AppBar>
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
                      <Button variant="contained" color="secondary">CLEAR PALETTE</Button>
                      <Button variant="contained" color="primary">RANDOM COLOR</Button>
                  </div>
                  <ChromePicker color={this.state.color} onChangeComplete={this.handleChange} />
                  <ValidatorForm onSubmit={this.handleClick}>
                    <TextValidator validators={['required','isColorNameUnique','isColorUnique']} errorMessages={['Input field is required','Please choose a unique name','Color is already taken']} value={this.state.newColorName} name="newColorName" onChange={this.handleNameChange} />
                    <Button variant="contained" color="primary" type="submit" style={{backgroundColor:this.state.color}}>ADD COLOR</Button>
                  </ValidatorForm>
              </Drawer>
              <main 
              className={classNames(classes.content, {
                  [classes.contentShift]: open
              })}
              >
            <div className={classes.drawerHeader} />
                  <ul className={classes.ulBox}>
                    {this.state.colors.map(color => <DraggableColorBox key={color.name} deleteBox={()=>this.deleteColorBox(color.name)} color={color.color} name={color.name} />)}
                  </ul>
              </main>
          </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
