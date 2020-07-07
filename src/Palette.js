import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter'
import styles from './styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'

class Palette extends Component{
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeColorFormat = this.changeColorFormat.bind(this)
    }
    changeLevel(newLevel) {
        this.setState({
            level : newLevel
        })
    }
    changeColorFormat(formatValue) {
        this.setState({
            format: formatValue
        })
    }

    render() {
        const id = this.props.colors.id
        const { classes } = this.props
        const colorBoxes = this.props.colors.colors[this.state.level].map(color => ( <ColorBox background={color[this.state.format]} name={color.name} paletteID={id} id={color.id} key={color.id} showFullPalette={true} />))
        return (
            <div className={classes.Palette}>
                {/* NavBar*/}
                <Navbar level={this.state.level} changeLevel={this.changeLevel} showSlider={true} handleChange={this.changeColorFormat} />
                <div className={classes.PaletteColors}>
                    {/* COLOR BOXES */}
                    { colorBoxes }
                </div>
                {/* Footer */}
                <PaletteFooter paletteName={this.props.colors.paletteName} emoji={this.props.colors.emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);