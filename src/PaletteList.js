import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withStyles } from '@material-ui/styles'

class PaletteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpen: false,
            deletingID: ""
        }
        this.goToPalette = this.goToPalette.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    openDialog(id){
        this.setState({
            isDialogOpen: true,
            deletingID: id
        })
    }
    closeDialog(){
        this.setState({
            isDialogOpen: false,
            deletingID: ""
        })
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletingID)
        this.closeDialog()
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>Palettes</h1>
                        <Link to="/palette/new"><Button variant="contained" color="danger" className={classes.btn} size="medium">Create Palette</Button></Link>
                    </div>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(p => <CSSTransition key={p.id} classNames="fade" timeout={500}><MiniPalette {...p} key={p.id} id={p.id} deletePalette={this.openDialog} handleClick={this.goToPalette} /></CSSTransition> )}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.isDialogOpen} onClose={this.closeDialog}>
                    <DialogTitle>Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete' />
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel' />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList)
