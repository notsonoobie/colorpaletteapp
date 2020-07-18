import React, { Component } from 'react'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import NewPaletteMetaForm from './NewPaletteMetaForm';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from './styles/NewPaletteNavStyles'

class NewPaletteNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPaletteName: "",
            formShowing: false
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }
    handleClickOpen(){
        this.setState({
            formShowing: true
        })
    }
    hideForm(){
        this.setState({
            formShowing: false
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
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Custom Palette
                        </Typography>
                        
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to='/'>
                            <Button variant="contained" color="secondary" className={classes.btns}>GO BACK</Button>
                        </Link>
                        <Button variant="contained" color="primary" className={classes.btns} onClick={this.handleClickOpen}>Save</Button>
                    </div>
                </AppBar>
                {this.state.formShowing && <NewPaletteMetaForm hideForm={this.hideForm} handleSave={this.props.handleSave} palettes={this.props.palettes} /> }
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteNav)
