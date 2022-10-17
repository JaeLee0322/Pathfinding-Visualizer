import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Node } from '../components/node';
import { randomMaze } from '../mazeAlgorithms/randomMaze';

export class GridStore {
    squares = [];
    drawingMode = 0;  // 0: empty, 1: wall, 2: start, 3: end, 4: isVisited, 5: Shortest-Path
    startNode = {
        x: 10,
        y: 10
    }
    endNode = {
        x: 80,
        y: 35
    }

    constructor(width, height) {
        makeAutoObservable(this, {
            squares: observable,
            drawingMode: observable,
            startNode: observable.struct,
            endNode: observable.struct,
            initiateGrid: action,
            findNode: action,
            changeGrid: action,
            clearGrid: action,
            setDrawingMode: action,
            changeMaze: action
        });
        this.setDrawingMode(1);
        this.initiateGrid(width, height);
    }

    initiateGrid(width, height) {
        const grid = []
        for (let i = 0; i < height; i++) {
            grid.push([])
            for (let j = 0; j < width; j++) {
                if (i == this.startNode.y && j == this.startNode.x) grid[i].push(new Node(j, i, 2));
                else if (i == this.endNode.y && j == this.endNode.x) grid[i].push(new Node(j, i, 3));
                else grid[i].push(new Node(j, i));
            }
        }
        this.squares = grid;
    }

    findNode(x, y) {
        return this.squares[x][y];
    }

    changeGrid(node, mode) {
        switch (mode) {
            case 0:
                if (node.nodeType !== 2 && node.nodeType !== 3) node.changeType(0);
                return;
            case 1:
                if (node.nodeType !== 2 && node.nodeType !== 3) node.changeType(1);
                return;
            case 2:
                node.changeType(2);
                break;
            case 3:
                node.changeType(3);
                break;
        }
    }

    clearGrid() {
        for (let row = 0; row < this.squares.length; row++) {
            for (let col = 0; col < this.squares[row].length; col++) {
                if (this.squares[row][col].nodeType !== 2 && this.squares[row][col].nodeType !== 3) this.squares[row][col].resetType();
                const nodeClassName = document.getElementById('node-'+col+'-'+row).className;
                if (nodeClassName === 'node-visited' || nodeClassName === 'node-shortest-path') {
                    document.getElementById('node-'+col+'-'+row).className = 'node';
                }
            }
        }
    }

    clearResults() {
        for (let row = 0; row < this.squares.length; row++) {
            for (let col = 0; col < this.squares[row].length; col++) {
                const node = this.squares[row][col];
                node.isVisited = false;
                node.previousNode = null;
                const nodeClassName = document.getElementById('node-'+col+'-'+row).className;
                if (nodeClassName === 'node-visited' || nodeClassName === 'node-shortest-path') {
                    document.getElementById('node-'+col+'-'+row).className = 'node';
                }
            }
        }
    }

    setDrawingMode(mode) {
        this.drawingMode = mode;
    }

    changeMaze() {
        this.clearGrid();
        randomMaze(this.squares);
    }
}

export default GridStore