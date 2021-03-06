import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/ChromePickerFormStyles';

class ChromePickerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "red",
            newColorName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (val) => {
          return this.props.colors.every((elm) => elm.name.toLowerCase() !== val.toLowerCase() )
        })
        ValidatorForm.addValidationRule('isColorUnique', (val) => {
          return this.props.colors.every((elm) => elm.color !== this.state.color )
        })
    }
	handleChange(c, e) {
		this.setState({
			color : c.hex
		})
    }
    handleNameChange(e) {
        this.setState({
        [e.target.name] : e.target.value
        })
    }
    handleFormSubmit() {
        const newColor = {
            color: this.state.color,
            name: this.state.newColorName
        }
        this.setState({
            newColorName : ""
        })
        this.props.handleClick(newColor)
    }
    render() {
        const {isPaletteFull, classes} = this.props
        return (
            <div>
                <ChromePicker className={classes.picker} color={this.state.color} onChangeComplete={this.handleChange} />
                <ValidatorForm instantValidate={false} onSubmit={this.handleFormSubmit}>
                    <TextValidator placeholder="Color Name" margin="normal" variant="filled" className={classes.colorInput} validators={['required','isColorNameUnique','isColorUnique']} errorMessages={['Input field is required','Please choose a unique name','Color is already taken']} value={this.state.newColorName} name="newColorName" onChange={this.handleNameChange} />
                    <Button className={classes.addColorBtn} variant="contained" disabled={isPaletteFull} color="primary" type="submit" style={{ backgroundColor: isPaletteFull ? '#cecee2' : this.state.color }}>{isPaletteFull ? 'PALETTE FULL': 'ADD COLOR'}</Button>
                </ValidatorForm>
            </div>
        )
    }
}
export default withStyles(styles)(ChromePickerForm)