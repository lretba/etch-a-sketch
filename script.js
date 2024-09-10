// Create 16x16 cells and append them to the container div
let dimension = 16;

const containerDiv = document.querySelector(".container");


function createGrid(dimension) {
    for (i = 0; i < dimension; i++) {
        let gridRow = document.createElement("div");
        for (let i = 0; i < dimension; i++) {
            let gridCell = document.createElement("div")
            gridCell.classList.add("cell", "grid");
            gridCell.style.opacity = "0.1";
            gridRow.appendChild(gridCell);
            }
        gridRow.classList.add("flexrow");
        containerDiv.appendChild(gridRow);
    }
 };

// initially load a grid with the default dimension
createGrid(dimension);


// Get random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function runEtchASketch() {
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them. Randomize RGB colors.
    function changeCellAppearance(targetCell) {
        if (targetCell.style.opacity == "0.1") {
            let redRandom  = getRandomInt(256);
            let greenRandom = getRandomInt(256);
            let blueRandom = getRandomInt(256);
            targetCell.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
            targetCell.style.opacity = "0.2";
        }
        else {
            let oldOpacity = parseFloat(targetCell.style.opacity);
            let newOpacity =  Math.min(oldOpacity + 0.1, 1);
            targetCell.style.opacity = `${newOpacity}`;
        }
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
    if (dimension < 100) {
        replaceGrid();
        runEtchASketch();
    }
}


// create function(s) to prompt user for new grid size and change grid size 
function changeDimension() {
    dimension = Number(prompt("Which resolution would you like? Please give the number for one axis, it will be squared automatically."))
    if (dimension < 100 ) {
        return dimension;
    }
    else {
        alert("Unfortunately, the browser can not easily support a resolution bigger than 100x100. Please select a number between 1-100. Thank you!");
    }
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
        cell.style.backgroundColor = "#FFFFFF";
        cell.style.opacity = 0.1;
    })
}
