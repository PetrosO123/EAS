const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




// Creates a default grid sized 16x16
function defaultGrid(a=16) {
    makeRows(a);
    makeColumns(a);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
    // Creates rows
    for (c = 0; c < rowNum; c++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            newCell.addEventListener('mousedown', changeColor);
            newCell.addEventListener('mouseover', changeColor);
        };
    };
};

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown){
        e.target.style.backgroundColor = "black";
    }
    if (e.type === 'mousedown'){
        e.target.style.backgroundColor = "black";
    }
};


resizeGrid.onclick = () => {
    const entireGrid = document.getElementById("container");
    while (entireGrid.firstChild){
        entireGrid.removeChild(entireGrid.lastChild);
    }
    x = prompt("How many squares would you like for your etch-a-sketch?");
    defaultGrid(x);
}



window.onload = () =>{
    defaultGrid();
}