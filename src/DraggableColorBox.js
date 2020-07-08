import React from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        width: "20%",
        height: "100%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
    },
}

function DraggableColorBox(props) {
    const {classes} = props
    return (
        <div className={classes.root} style={{backgroundColor : props.color}}>
            <li>{props.name}</li>
        </div>
    )
}
export default withStyles(styles)(DraggableColorBox)
