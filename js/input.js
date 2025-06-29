let mouseDown = false;
let mouseGridX = null;
let mouseGridY = null;

canvas.addEventListener('mousedown', (e) =>
{
    mouseDown = true;
    updateMouseGrid(e);
});

canvas.addEventListener('mouseup', () =>
{
    mouseDown = false;
    mouseGridX = null;
    mouseGridY = null;
});

canvas.addEventListener('mousemove', (e) =>
{
    if (mouseDown)
    {
        updateMouseGrid(e);
    }
});

function updateMouseGrid(e)
{
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    mouseGridX = Math.floor(mouseX / cell_width);
    mouseGridY = Math.floor(mouseY / cell_height);
}