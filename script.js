// Create 16x16 cells and append them to the container div
let dimension = 16;

const containerDiv = document.querySelector(".container");

// check if given number is less than 100; if yes, create grid; if no, send popup and tell user to give a number < 100 
function createGrid(dimension) {
for (let i = 0; i < ( (dimension*dimension) ); i++) {
        if (dimension < 100) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell", "grid");
            gridCell.textContent = i;
            containerDiv.appendChild(gridCell);
        }
        else {
            window.alert("Please use a number that is smaller than 100 (to prevent the browser from being overloaded). Thank you!");
            break;
        }
}
}

// initially load a grid with the default dimension
createGrid(dimension);

// select cells
const cells = document.querySelectorAll(".cell");

function runEtchASketch() {
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them
function changeCellAppearance(targetCell) {
    targetCell.classList.add("mouseoverCell");
} 
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
    // console.log("Function resizeGrid was called.");
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
    runEtchASketch();
}

// select reset button
const resetButton = document.querySelector("#resetButton");

// add EventListener to reset button
resetButton.addEventListener("click", resetGrid);


// create function to remove mouseoverCell class (in order to reset the grid)
function resetGrid() {
    cells.forEach((cell) => {
        cell.classList.remove("mouseoverCell");
    })
}
