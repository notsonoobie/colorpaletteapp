import React, { Component } from 'react'
import DraggableColorBox from './DraggableColorBox'
import {SortableContainer} from 'react-sortable-hoc'

class DraggableColorList extends Component {
    render() {
        return (
            <div style={{height: "100%"}}>
                {this.props.colors.map((color,i) => <DraggableColorBox index={i} key={color.name} deleteBox={()=>this.props.deleteColorBox(color.name)} color={color.color} name={color.name} />)}
            </div>
        )
    }
}
export default SortableContainer(DraggableColorList)