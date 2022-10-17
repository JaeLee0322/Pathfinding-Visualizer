import React from 'react'
import { observer } from "mobx-react-lite";
import '../index.css'

const SquareView = observer(({ node, grid, mouseEvents }) => (
    <div 
        id={'node-' + node.col + '-' + node.row} 
        className={'node' + node.nodeId}
        onClick={() => {mouseEvents.mouseClick(node, grid)}}
        onMouseDown={() => {mouseEvents.mouseDown(node, grid.drawingMode, grid.changeGrid)}}
        onMouseUp={() => {mouseEvents.mouseUp()}}
        onMouseOver={() => {mouseEvents.mouseOver(node, grid.drawingMode, grid.changeGrid)}}>
    </div>
))

export default SquareView