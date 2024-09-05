// Create 16x16 cells and append them to the container div
let dimension = 16;
let numberOfCells = (dimension * dimension);

const containerDiv = document.querySelector(".container");

// check if given number is less than 100; if yes, create grid; if no, send popup and tell user to give a number < 100 
for (let i = 0; i < (numberOfCells); i++) {
        if (dimension < 100) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell", "grid");
            containerDiv.appendChild(gridCell);
        }
        else {
            window.alert("Please use a number that is smaller than 100 (to prevent the browser from being overloaded). Thank you!");
        }
}



// Set up a “hover” effect so that the grid divs change color when your mouse passes over them

// function changeCellAppearance still needs to be created
function changeCellAppearance(targetCell) {
    targetCell.classList.add("mouseoverCell");
}

// select cells
const cells = document.querySelectorAll(".cell");

// add EventListener to call changeCellAppearance on each cell
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        changeCellAppearance(e.target);
    })
})

// create function(s) to prompt user for new grid size and change grid size 


// select first button


// add EventListener to first button


// create function to remove mouseoverCell class (in order to reset the grid)
function resetGrid() {
    console.log("This will later on reset the grid.")
}
