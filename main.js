const sketchGrid = document.querySelector("#container")

let input = document.querySelector("#selection");
input.addEventListener("click", (e) => {
    let gridSize = e.target.value * e.target.value;
        createGrid(gridSize);
})


function createGrid(gridSize) {
    let test = document.querySelectorAll(".sketch-item")
    test.forEach(node => {
        node.parentNode.removeChild(node);
    })
    for (let i = 0; i < gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("sketch-item")
        sketchGrid.appendChild(newDiv);
        newDiv.addEventListener("mouseover", (e) => {
            newDiv.classList.add("sketch")
        })
    }

    sketchGrid.style.gridTemplateColumns = `repeat(${Math.sqrt(gridSize)}, minmax(15px, 15px)`;
    sketchGrid.style.gridTemplateRows= `repeat(${Math.sqrt(gridSize)}, minmax(15px, 15px)`;

}

function resetGrid() {
    let newDivs = Array.from(document.querySelectorAll(".sketch-item"));
        newDivs.forEach((div) => {
            div.classList.remove("sketch")
        })

}

