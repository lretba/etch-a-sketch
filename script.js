// Create 16x16 cells and append them to the container div
let dimension = 16;
let numberOfCells = (dimension * dimension);

const containerDiv = document.querySelector(".container");

for (let i = 0; i < (numberOfCells); i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell", "grid");
    containerDiv.appendChild(gridCell);
}



// Set up a “hover” effect so that the grid divs change color when your mouse passes over them

// function changeCellAppearance still needs to be created

// select cells
const cells = document.querySelectorAll(".cell");

// add EventListener to call changeCellAppearance on each cell
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        changeCellAppearance(e.target);
    })
})
