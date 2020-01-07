const display = document.querySelector('#display');

function createGrid(squares = 16){
    // delete previous grid
    while (display.firstChild) {
        display.removeChild(display.firstChild)
        };
    // calculate width and height of the squares
    let width = display.offsetWidth/squares;
    let height = display.offsetHeight/squares;
    // create new
    for (let i = 0 ; i < squares**2 ; i++ ){
        const div = document.createElement('div');
        div.style.cssText= `width:${width}px;height:${height}px`
        div.classList.add('grid')
        display.appendChild(div)
    };
};

const createGridButton = document.getElementById('create-grid');
// this button calls the createGrid function and prompt for squares
    createGridButton.addEventListener("click", () => {
        createGrid(prompt('How many squares per side?',10))
    });


// paints on the grid by adding a class  
display.addEventListener("mouseover", e => {
    if (e.target.classList.contains('grid')){
            e.target.classList.add("black");
    };
})

 // selecting clear button and then listen to click and clears grid
 const clearButton = document.querySelector('#clear');

    clearButton.addEventListener("click", () => {
            Array.from(display.children).forEach(el => {
            el.classList.remove('black');
        }); 
    });
 
