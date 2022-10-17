export function bfs(grid, height, width) {
    const startNode = grid.findNode(grid.startNode.y, grid.startNode.x);
    const finishNode = grid.findNode(grid.endNode.y, grid.endNode.x);

    const visitedNodesInOrder = [];
    let nextNodesStack = [startNode];
    while (nextNodesStack.length) {
        const currentNode = nextNodesStack.shift();
        if (currentNode === finishNode) return visitedNodesInOrder;

        if (
            !(currentNode.nodeType === 1) &&
            (currentNode.nodeType === 2 || !currentNode.isVisited)
        ) {
            currentNode.isVisited = true;
            visitedNodesInOrder.push(currentNode);
            const { col, row } = currentNode;
            let nextNode;
            if (row > 0) {
                nextNode = grid.squares[row - 1][col];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodesStack.push(nextNode);
                }
            }
            if (row < height - 1) {
                nextNode = grid.squares[row + 1][col];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodesStack.push(nextNode);
                }
            }
            if (col > 0) {
                nextNode = grid.squares[row][col - 1];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodesStack.push(nextNode);
                }
            }
            if (col < width - 1) {
                nextNode = grid.squares[row][col + 1];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodesStack.push(nextNode);
                }
            }
        }
    }
}
export default bfs