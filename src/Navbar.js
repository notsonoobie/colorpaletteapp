import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import styles from './styles/NavbarStyles'
import { withStyles } from '@material-ui/styles'
import 'rc-slider/assets/index.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            format: "hex",
            open: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    handleChange(e) {
        this.setState({
            format: e.target.value,
            open : true
        },
            () => this.props.handleChange(this.state.format)
        )
    }
    handleClose(e) {
        this.setState({
            open: false
        })
    }   
    
    render() {
        const {classes} = this.props
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">colorpicker</Link>
                </div>
                { this.props.showSlider && (
                    <div className={classes.sliderContainer}>
                        <span>Level : {this.props.level}</span>
                        <div className={classes.slider}>
                            <Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel} />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>    
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    onClose={this.handleClose}
                autoHideDuration={8000} 
                    message={`Format Changed to ${this.state.format.toUpperCase()}`} 
                action={[   
                            <IconButton onClick={this.handleClose} key="close" color="inherit" > 
                                <CloseIcon /> 
                            </IconButton> 
                        ]} 
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)