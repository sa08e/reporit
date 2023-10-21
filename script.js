const horizontalFrames = document.querySelectorAll('.horizontal-frame');
const puzzleCells = document.querySelectorAll('.puzzle-cell');

horizontalFrames.forEach(frame => {
    frame.addEventListener('dragstart', dragStart);
    frame.addEventListener('dragend', dragEnd);
});

puzzleCells.forEach(cell => {
    cell.addEventListener('dragover', allowDrop);
    cell.addEventListener('drop', handleDrop);
});

let draggedFrame = null;

function dragStart(event) {
    draggedFrame = this;
    event.dataTransfer.setData('text/plain', this.innerHTML);
}

function dragEnd() {
    draggedFrame = null;
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    if (!draggedFrame) return;

    this.innerHTML = draggedFrame.innerHTML;
}
