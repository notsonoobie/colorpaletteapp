import React, { Component } from 'react'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class NewPaletteNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPaletteName: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (val) => {
          return this.props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== val.toLowerCase() )
        })
    }
    handleNameChange(e) {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    render() {
        const { open, classes } = this.props
        return (
            <div>
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
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Custom Palette
                        </Typography>
                        <ValidatorForm onSubmit={()=>this.props.handleSave(this.state.newPaletteName)}>
                            <TextValidator label='Palette Name' name='newPaletteName' validators={['required','isPaletteNameUnique']} errorMessages={['Palette name is required','Palette name already taken']} value={this.state.newPaletteName} onChange={this.handleNameChange} />
                            <Button type="submit" variant='contained' color='primary'>Save Palette</Button>
                            <Link to='/'>
                            <Button variant="contained" color="secondary">GO BACK</Button>
                            </Link>
                        </ValidatorForm>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NewPaletteNav
