import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'
import styles from './styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.shades = this.gatherShades(this.props.palettes, this.props.colorID)
        this.state = {
            format : "hex"
        }
        this.changeColorFormat = this.changeColorFormat.bind(this)
    }
    gatherShades(palette, colorFilter) {
        // Logic to gather all the shades of the given color from the given palette
        let shades = []
        let allColors = palette.colors
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilter)
            )
        }
        return shades.slice(1)
    }
    changeColorFormat(formatValue) {
        this.setState({
            format: formatValue
        })
    }
    render() {
        const colorBox = this.shades.map(color => (
            <ColorBox name={color.name} key={color.name} background={color[this.state.format]} showFullPalette={false} />
        ))
        const {paletteName, emoji} = this.props.palettes
        const {classes} = this.props
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeColorFormat} showSlider={false} />
                <div className={classes.PaletteColors}>
                    {colorBox}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${this.props.palettes.id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter emoji={emoji} paletteName={paletteName} />
            </div>
        )
    }
}
export default withStyles(styles)(SingleColorPalette)