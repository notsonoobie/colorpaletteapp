import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


class NewPaletteMetaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPaletteName: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (val) => {
          return this.props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== val.toLowerCase() )
        })
    }
    handleNameChange(e) {
        this.setState({
          [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <Dialog onClose={this.props.hideForm} open={true} aria-labelledby="form-dialog-title">
                    <ValidatorForm onSubmit={()=>this.props.handleSave(this.state.newPaletteName)}>
                        <DialogTitle id="form-dialog-title">Happy Coloring ❤</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Save your Color Palette</DialogContentText>
                                <TextValidator label='Palette Name' name='newPaletteName' validators={['required','isPaletteNameUnique']} errorMessages={['Palette name is required','Palette name already taken']} value={this.state.newPaletteName} onChange={this.handleNameChange} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.hideForm} color="primary">Cancel</Button>
                            <Button type="submit" variant='contained' color='primary'>Save Palette</Button>    
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}
export default NewPaletteMetaForm