const grid_rows = 50;
const grid_cols = 50;

const grid = [];

function initGrid() {
    for (let y = 0; y < grid_rows; y++) {
        grid[y] = [];
        for (let x = 0; x < grid_cols; x++) {
            grid[y][x] = null; // null means empty
        }
    }
}

function setCell(y, x, value) {
    if (y >= 0 && y < grid_rows && x >= 0 && x < grid_cols) {
        grid[y][x] = value;
    }
}

function getCell(y, x) {
    if (y >= 0 && y < grid_rows && x >= 0 && x < grid_cols) {
        return grid[y][x];
    }
    return null;
}