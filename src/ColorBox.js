import React, { Component } from 'react'

import './ColorBox.css'

class ColorBox extends Component {
    render() {
        console.log(this.props.background)
        return (
            <div style={{ background : this.props.background }} className="ColorBox">
                <span>{ this.props.name }</span>
            </div>
        )
    }
}

export default ColorBox;
