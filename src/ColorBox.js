import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
             copied : false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(()=> this.setState({ copied :false }), 1000)
        })    
    }

    render() {
        const { name, background, showFullPalette, classes } = this.props
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
                <div style={{ background: background }} className={classes.ColorBox}>
                    <div style={{ background: background }} className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`}></div>
                    <div className={`${classes.copyMsg} ${this.state.copied && classes.showMsg}`}>
                        <h1 className={classes.copyText}>COPIED!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>
                            COPY
                        </button>
                        {showFullPalette && (
                            <Link onClick={(e) => e.stopPropagation()} to={`/palette/${this.props.paletteID}/${this.props.id}`} >
                                <span className={classes.seeMore}>MORE</span>
                            </Link>
                        )}
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);
