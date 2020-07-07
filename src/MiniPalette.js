import React, { Component } from 'react'
import styles from './styles/MiniPaletteStyles'
import { withStyles } from '@material-ui/styles'

class MiniPalette extends Component {   
    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props
        const miniColorBox = colors.map(color => (
            <div className={classes.minibox} key={color.name} style={{backgroundColor: color.color}}></div>
        ))
        return (
            <div className={classes.root} onClick={handleClick}>
                <div className={classes.colors}>
                    { /* MINI COLOR BOXES */ }
                    { miniColorBox }
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette)
