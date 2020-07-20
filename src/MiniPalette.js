import React, { PureComponent } from 'react'
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/styles'

class MiniPalette extends PureComponent { 
    constructor(props) {
        super(props)
        this.removeMiniPalette = this.removeMiniPalette.bind(this)
    }
    removeMiniPalette(e) {
        e.stopPropagation()
        this.props.deletePalette(this.props.id)
    }
    render() {
        const { classes, paletteName, emoji, colors, handleClick, id } = this.props
        const miniColorBox = colors.map(color => (
            <div className={classes.minibox} key={color.name} style={{backgroundColor: color.color}}></div>
        ))
        return (
            <div className={classes.root} onClick={() => handleClick(id)}>
                    <DeleteIcon className={classes.deleteIcon} style={{transition: "all 0.4s ease-in-out"}} onClick={this.removeMiniPalette} />
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
