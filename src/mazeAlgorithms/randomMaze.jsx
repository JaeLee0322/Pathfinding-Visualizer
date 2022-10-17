export function randomMaze(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const node = grid[row][col];
            if (node.type != 2 && node.type != 3 && getRandomInt(0,3) == 1) {
                node.type = getRandomInt(0, 2);
            }
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export default randomMaze