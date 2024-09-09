// Create 16x16 cells and append them to the container div
let dimension = 16;

const containerDiv = document.querySelector(".container");


function createGrid(dimension) {
    for (i = 0; i < dimension; i++) {
        let gridRow = document.createElement("div");
        for (let i = 0; i < dimension; i++) {
            let gridCell = document.createElement("div")
            gridCell.classList.add("cell", "grid");
            gridRow.appendChild(gridCell);
            }
        gridRow.classList.add("flexrow");
        containerDiv.appendChild(gridRow);
    }
 };

// initially load a grid with the default dimension
createGrid(dimension);

function runEtchASketch() {
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them
    function changeCellAppearance(targetCell) {
    targetCell.classList.add("mouseoverCell");
    } 
    // select cells
    const cells = document.querySelectorAll(".cell");
    // add EventListener to call changeCellAppearance on each cell
    cells.forEach((cell) => {
       cell.addEventListener("mouseover", (e) => {
          changeCellAppearance(e.target);
          });
    });
}

runEtchASketch();

// select resize button
const resizeButton = document.querySelector("#resizeButton");

// add EventListener to resize button
resizeButton.addEventListener("click", resizeGrid);

function resizeGrid() {
    changeDimension();
    replaceGrid();
    runEtchASketch();
    // this has a bug and does not work as expected - I am not sure why the function is not working properly?
}


// create function(s) to prompt user for new grid size and change grid size 
function changeDimension() {
    dimension = Number(prompt("Which resolution would you like? Please give the number for one axis, it will be squared automatically."))
    return dimension;
}

// create function to remove old grid and create new grid with the new dimensions
function replaceGrid() {
    containerDiv.replaceChildren();
    createGrid(dimension);
}

// select reset button
const resetButton = document.querySelector("#resetButton");

// add EventListener to reset button
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.remove("mouseoverCell");
    })
}
