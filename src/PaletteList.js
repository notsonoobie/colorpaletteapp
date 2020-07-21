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
            isResetDialogOpen: false,
            deletingID: ""
        }
        this.goToPalette = this.goToPalette.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.resetPalettes = this.resetPalettes.bind(this)
        this.openResetDialog = this.openResetDialog.bind(this)
        this.closeResetDialog = this.closeResetDialog.bind(this)
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
    openResetDialog(){
        this.setState({
            isResetDialogOpen: true
        })
    }
    closeResetDialog(){
        this.setState({
            isResetDialogOpen: false
        })
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletingID)
        this.closeDialog()
    }
    resetPalettes() {
        window.localStorage.clear()
        this.closeResetDialog()
        window.location.reload(false)
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
                    <footer className={classes.footer}>
                        <span onClick={this.openResetDialog} className={classes.footerLink}>Reset Palettes</span>
                        <span>Copyright &copy; Rahul Gupta</span>
                    </footer>
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
                <Dialog open={this.state.isResetDialogOpen} onClose={this.closeResetDialog}>
                    <DialogTitle>Reset to default palettes?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.resetPalettes}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Reset' />
                        </ListItem>
                        <ListItem button onClick={this.closeResetDialog}>
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
