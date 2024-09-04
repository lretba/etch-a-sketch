// Create 16x16 cells and append them to the container div
let dimension = 16;
let numberOfCells = (dimension * dimension);

const containerDiv = document.querySelector(".container");

for (let i = 0; i < (numberOfCells); i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell", "grid");
    containerDiv.appendChild(gridCell);
}