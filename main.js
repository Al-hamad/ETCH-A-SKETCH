const display = document.querySelector('#display');
createGrid();

function createGrid(squares = 16){
    // delete previous grid
    while (display.firstChild) display.removeChild(display.firstChild);
    // create new
    for (let i = 0 ; i < squares**2; i++ ){
        const div = document.createElement('div');
        div.style.flexBasis = `${760/squares}px`;
        div.classList.add('grid');
        display.appendChild(div);
    };
};

let color = 'black';
const toggleColorButton = document.querySelector('#toggle-color');
    toggleColorButton.addEventListener("click", () => {
        color === 'black' ? color = 'colored' : color = 'black';
    });   

// paints on the grid
display.addEventListener("mouseover", e => {
    if (e.target.classList.contains('grid')){
        if (color === 'black'){
            e.target.style.background = 'black';
        } else {
        e.target.style.background = "#"+Math.floor(Math.random()*16777215).toString(16);
        };      
    };
});

 const clearButton = document.querySelector('#clear');
    clearButton.addEventListener("click", () => {
        [...display.children].forEach(el => {
            el.style.background = '#fff';
        }); 
    });
 
const createGridButton = document.querySelector('#create-grid');
    createGridButton.addEventListener("click", () => {
        createGrid(prompt('How many squares per side?',16));
    });
