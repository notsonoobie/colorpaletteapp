import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';

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
        const colorBoxes = this.props.colors.colors[this.state.level].map(color => ( <ColorBox background={color[this.state.format]} name={color.name} key={color.id} />))
        return (
            <div className="Palette">
                {/* NavBar*/}
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeColorFormat} />
                <div className="Palette-colors">
                    {/* COLOR BOXES */}
                    { colorBoxes }
                </div>
                {/* Footer */}
                <footer className="Palette-footer">
                    {this.props.colors.paletteName}
                    <span className="emoji">{ this.props.colors.emoji }</span>
                </footer>
            </div>
        )
    }
}

export default Palette;