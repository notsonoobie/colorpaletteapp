import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'
import { withStyles } from '@material-ui/styles'

class PaletteList extends Component {
    constructor(props) {
        super(props)
        this.goToPalette = this.goToPalette.bind(this)
    }
    
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>Palettes</h1>
                    </div>
                    <div className={classes.palettes}>
                        {palettes.map(p => <MiniPalette {...p} handleClick={()=> this.goToPalette(p.id)} /> )}
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList)
