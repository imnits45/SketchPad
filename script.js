// Copyright: TheOdinProject & imnits45 on Github

document.addEventListener('DOMContentLoaded', function () {
    function createGrid(userInput) {
        let numberOfGrids = parseInt(userInput);
        if(isNaN(numberOfGrids) || numberOfGrids <= 0)
            numberOfGrids = 16;

        if(numberOfGrids > 100)
        {
            userInput = prompt('Grid size should not be more than 100. Please enter a valid number: ');
            createGrid(userInput);
            return;
        }
        removeAllChildNodes(parentDiv);
        for (let i = 0; i < numberOfGrids; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'rowDiv';
            parentDiv.appendChild(newDiv);

            for (let j = 0; j < numberOfGrids; j++) {
                let blockDiv = document.createElement('div');
                blockDiv.className = 'colDiv';
                blockDiv.style.height = `${720 / numberOfGrids}px`;
                blockDiv.style.width = `${720 / numberOfGrids}px`;
                blockDiv.style.backgroundColor = 'black';
                blockDiv.style.border = '1px solid #ffffff30';
                newDiv.appendChild(blockDiv);
            }
        }
        addMouseOverListener();
    }

    function addMouseOverListener() {
        let colDivs = document.getElementsByClassName('colDiv');
        for (let i = 0; i < colDivs.length; i++) {
            let opacity = 1;
            colDivs[i].addEventListener('mouseover', function (event) {
                let targetDiv = event.target;
                if (Darkening) {
                    opacity -= 0.1;
                    if (opacity < 0) {
                        opacity = 0;
                    }
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    targetDiv.style.backgroundColor = `rgba(${red},${green},${blue},${opacity})`;
                } else {
                    targetDiv.style.backgroundColor = getRandomColor();
                }
            });
        }
    }

    function getRandomColor() {
        let randomRed = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }

    let parentDiv = document.querySelector('.container');
    let numberOfGrids = 16;
    let Darkening = false;
    createGrid(numberOfGrids);

    let gridSizeButton = document.createElement('button');
    gridSizeButton.className = 'gridSize';
    gridSizeButton.style.height = '64px';
    gridSizeButton.style.width = '128px';
    gridSizeButton.style.backgroundColor = 'black';
    gridSizeButton.style.color = 'white';
    gridSizeButton.style.borderRadius = '10px';
    gridSizeButton.innerText = 'Click here to change the Grid Size';
    let options = document.querySelector('.options');
    options.appendChild(gridSizeButton);
    gridSizeButton.addEventListener('click', () => {
        let userInput = parseInt(prompt(' Enter grid size: \n Max value: 100'));
        createGrid(userInput);
    });

    let resetButton = document.createElement('button');
    resetButton.className = 'reset';
    resetButton.style.height = '64px';
    resetButton.style.width = '128px';
    resetButton.style.backgroundColor = 'black';
    resetButton.style.color = 'white';
    resetButton.style.borderRadius = '10px';
    resetButton.innerText = 'Click here to reset the Grid';
    options.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        resetGrid();
    });

    let darkButton  = document.createElement('button')
    darkButton.className = 'dark';
    darkButton.style.height = '64px';
    darkButton.style.width = '128px';
    darkButton.style.backgroundColor = 'black';
    darkButton.style.color = 'white';
    darkButton.style.borderRadius = '10px';
    darkButton.innerText = 'Enable Darkening';
    darkButton.addEventListener('click', () => {
        Darkening = !Darkening;
        darkButton.textContent = Darkening ? 'Disable Darkening' : 'Enable Darkening';
    });
    options.appendChild(darkButton);

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function resetGrid() {
        createGrid(16);
    }
});

