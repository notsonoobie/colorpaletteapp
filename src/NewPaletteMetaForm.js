import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';


class NewPaletteMetaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPaletteName: "",
            emojiDialogToggle: false
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
        this.savePaletteEmoji = this.savePaletteEmoji.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (val) => {
          return this.props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== val.toLowerCase() )
        })
    }
    handleForm() {
        // this.props.hideForm()
        this.setState({
            emojiDialogToggle : true
        })
    }
    savePaletteEmoji(emoji) {
        const emo = emoji.native
        const newPaletteWithEmoji = {
            emo,
            paletteName : this.state.newPaletteName
        }
        this.props.handleSave(newPaletteWithEmoji)
    }
    handleNameChange(e) {
        this.setState({
          [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.emojiDialogToggle}>
                    <Picker onSelect={this.savePaletteEmoji} />
                </Dialog>
                <Dialog onClose={this.props.hideForm} open={true} aria-labelledby="form-dialog-title">
                    <ValidatorForm onSubmit={this.handleForm}>
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