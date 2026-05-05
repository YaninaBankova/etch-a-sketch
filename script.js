function createGrid(rows, cols){
    const container = document.querySelector(".container");
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            container.appendChild(gridSquare);
        }
    }
}

createGrid(16, 16);