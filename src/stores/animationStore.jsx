import { makeAutoObservable, observable, action, computed } from "mobx"
import { bfs } from "../algorithms/bfs";
import { dfs } from "../algorithms/dfs";

export class AnimationStore {
    algorithm = '';
    height = 0;
    isPaused = false;
    isRunning = false;
    speedMulti = 1;
    width = 0;

    constructor(height, width) {
        makeAutoObservable(this, {
            algorithm: observable,
            height: observable,
            isPaused: observable,
            isRunning: observable,
            speedMulti: observable,
            width: observable,
            currentAlgorithm: computed,
            getShortestPath: action,
            setAlgorithm: action,
            setAnimationDuration: action,
        });
        this.speedMulti = 1;
        this.height = height;
        this.width = width;
    }

    get currentAlgorithm() {
        return this.algorithm;
    }

    toggleAnimation() {
        this.isRunning = !this.isRunning;
    }

    setAlgorithm(algorithm) {
        this.algorithm = algorithm;
    }

    setAnimationDuration(duration) {
        document.documentElement.style.setProperty('--animation-duration', duration + 's');
        this.speedMulti = duration / 1.5;
    }

    setPause() {
        this.isPaused = !this.isPaused;
        this.isPaused ? document.documentElement.style.setProperty('--test', 'paused') : document.documentElement.style.setProperty('--test', 'running');
    }

    getShortestPath(grid) {
        if (!this.isRunning) {
            this.clearResults(grid);
            this.toggleAnimation();
            const startNode = grid.findNode(grid.startNode.y, grid.startNode.x);
            const endNode = grid.findNode(grid.endNode.y, grid.endNode.x);
            let visitedNodesInOrder;
            switch (this.algorithm) {
                case "Breadth First Search":
                    visitedNodesInOrder = bfs(grid, this.height, this.width);
                    break;
                case "Depth First Search":
                    visitedNodesInOrder = dfs(grid, this.height, this.width);
                    break;
                default:
                    // should never go here
                    break;
            }
            const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
            nodesInShortestPathOrder.push('end');
            this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
        }
    }

    animate(visitedNodesInOrder, nodesInShortestPathOrder) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    this.animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i * this.speedMulti);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const nodeClassName = document.getElementById('node-' + node.col + '-' + node.row).className;
                if (nodeClassName !== 'node-start' && nodeClassName !== 'node-end') {
                    document.getElementById('node-' + node.col + '-' + node.row).className = 'node-visited';
                }
            }, 10 * i * this.speedMulti);
        }

    }

    animateShortestPath(nodesInShortestPathOrder) {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            if (nodesInShortestPathOrder[i] === 'end') {
                setTimeout(() => {
                    this.toggleAnimation();
                }, i * 50 * this.speedMulti);
            } else {
                setTimeout(() => {
                    const node = nodesInShortestPathOrder[i];
                    const nodeClassName = document.getElementById('node-' + node.col + '-' + node.row).className;
                    if (nodeClassName !== 'node-start' && nodeClassName !== 'node-end') {
                        document.getElementById('node-' + node.col + '-' + node.row).className = 'node-shortest-path';
                    }
                }, i * 40 * this.speedMulti);
            }
        }
    }

    clearResults(grid) {
        grid.clearResults();
    }

}

function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}