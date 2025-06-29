initGrid();
function updateGrid() {
    for (let y = grid_rows - 2; y >= 0; y--) {
        for (let x = 0; x < grid_cols; x++) {
            const cell = grid[y][x];
            if (cell && cell.type === "sand" && !grid[y + 1][x]) {
                grid[y][x] = null;
                grid[y + 1][x] = cell;
            }
        }
    }
    // Increment hue for all sand cells
    /*
    for (let y = 0; y < grid_rows; y++) {
        for (let x = 0; x < grid_cols; x++) {
            const cell = grid[y][x];
            if (cell && cell.type === "sand") {
                // cell.hue = (cell.hue + 1) % 360; // <-- comment this out
            }
        }
    }
    */
}
function gameloop() {
    // Only assign a random hue when creating new sand
    if (typeof mouseDown !== "undefined" && mouseDown &&
        mouseGridX !== null && mouseGridY !== null &&
        mouseGridY >= 0 && mouseGridY < grid_rows &&
        mouseGridX >= 0 && mouseGridX < grid_cols) {
        // Only set if the cell is empty
        if (!grid[mouseGridY][mouseGridX]) {
            setCell(mouseGridY, mouseGridX, {type: "sand", hue: Math.floor(Math.random() * 360)});
        }
    }

    updateGrid();
    drawGrid();
    requestAnimationFrame(gameloop);
}

gameloop();