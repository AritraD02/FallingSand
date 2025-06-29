const canvas = document.getElementById('sandCanvas');
const ctx = canvas.getContext('2d');

const cell_width = canvas.width / grid_cols;
const cell_height = canvas.height / grid_rows;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < grid_rows; y++) {
        for (let x = 0; x < grid_cols; x++) {
            const cell = grid[y][x];
            if (cell && cell.type === "sand") {
                ctx.fillStyle = `hsl(${cell.hue}, 80%, 50%)`;
            } else {
                ctx.fillStyle = "#333";
            }
            ctx.fillRect(x * cell_width, y * cell_height, cell_width, cell_height);
            ctx.strokeStyle = "#888";
            ctx.strokeRect(x * cell_width, y * cell_height, cell_width, cell_height);
        }
    }
}