import { makeAutoObservable, observable, action } from "mobx"

export class MouseEventStore {
    isMouseDown = false;

    constructor() {
        makeAutoObservable(this, { 
            isMouseDown: observable, 
            mouseClick: action,
            mouseDown: action,
            mouseUp: action,
            mouseOver: action
        });
    }

    mouseClick(node, grid) {
        if (grid.drawingMode === 0 || grid.drawingMode === 1) return;
        grid.changeGrid(node, grid.drawingMode);
        deleteOldEndPoint(node, grid);
    }

    mouseDown(node, mode, event) {
        if (mode === 2 || mode === 3) return;
        this.isMouseDown = true;
        event(node, mode);
    }

    mouseUp() {
        this.isMouseDown = false;
    }

    mouseOver(node, mode, event) {
        if (mode === 2 || mode === 3) return;
        if (this.isMouseDown) {
            event(node, mode);
        }
    }

}

function deleteOldEndPoint(node, grid) {
    if (grid.drawingMode === 2) {
        grid.squares[grid.startNode.y][grid.startNode.x].changeType(0);
        grid.startNode = {x: node.col, y: node.row};
    } else if (grid.drawingMode === 3) {
        grid.squares[grid.endNode.y][grid.endNode.x].changeType(0);
        grid.endNode = {x: node.col, y: node.row};
    } else return;
}