document.addEventListener('DOMContentLoaded', function () {
    function createGrid(numberOfGrids) {
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
                blockDiv.style.border = '1px solid white';
                newDiv.appendChild(blockDiv);
            }
        }
        addMouseOverListener();
    }

    function addMouseOverListener() {
        var colDivs = document.getElementsByClassName('colDiv');
        for (var i = 0; i < colDivs.length; i++) {
            colDivs[i].addEventListener('mouseover', function (event) {
                var randomRed = Math.floor(Math.random() * 256);
                var randomGreen = Math.floor(Math.random() * 256);
                var randomBlue = Math.floor(Math.random() * 256);
                var randomColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';
                event.target.style.backgroundColor = randomColor;
            });
        }
    }

    let parentDiv = document.querySelector('.container');
    let numberOfGrids = 16;

    createGrid(numberOfGrids);

    let newButton = document.createElement('button');
    newButton.className = 'gridSize';
    newButton.style.height = '64px';
    newButton.style.width = '128px';
    newButton.innerText = 'Click here to change the Grid Size';
    let options = document.querySelector('.options');
    options.appendChild(newButton);
    newButton.addEventListener('click', () => {
        let userInput = prompt('Enter number of Grids:');
        createGrid(userInput);
    });

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
});
