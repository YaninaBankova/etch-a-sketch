function createGrid(rows){
    const container = document.querySelector(".container");
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < rows; j++){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            container.appendChild(gridSquare);
            gridSquare.addEventListener("mouseenter", hoverEffect);
        }
    }

    const styleSheet = document.styleSheets[0];
    const gridSquareRule = Array.from(styleSheet.cssRules).find(
        r => r.selectorText === ".grid-square");
    gridSquareRule.style.width = `calc((90vh - ${rows - 1}px - 10px) / ${rows})`;
    gridSquareRule.style.maxWidth = `calc((90vw - ${rows - 1}px - 10px) / ${rows})`;
}

createGrid(16);

function deleteGrid(){
     const container = document.querySelector(".container");
     while(container.firstChild){
        container.removeChild(container.firstChild);
     }
}

function hoverEffect(event){
    const gridSquare = event.target;
    let opacity = +getComputedStyle(gridSquare).opacity;
    if(opacity < 1){
        gridSquare.style.opacity = opacity + 0.1;
    }
}

const resize = document.querySelector("#resize");
resize.addEventListener("click", (event) => {
    let numRows = Number(prompt("How many squares per side?", 16));
    if(numRows > 100){
        numRows = 100;
    } else if(isNaN(numRows)){
        numRows = 16;
    }
    deleteGrid();
    createGrid(numRows);
});