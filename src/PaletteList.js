import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
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
                        <Link to="/palette/new"><Button variant="contained" color="danger" className={classes.btn} size="medium">Create New Palette</Button></Link>
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
