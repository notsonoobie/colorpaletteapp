import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/DraggableColorBoxStyles'


function DraggableColorBox(props) {
    const {classes, deleteBox, color, name} = props
    return (
        <div className={classes.root} style={{backgroundColor : color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={deleteBox} />
            </div>
        </div>
    )
}
export default withStyles(styles)(SortableElement(DraggableColorBox))
