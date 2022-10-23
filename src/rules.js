/* 
(1) : initialization : I wanted to go through the game array twice.
        First to check the number of alive cells around each cells.
        And lastly to update the game from those numbers.
*/


export function update(game) {
    
    // (1)
    // contains the number of alive cells around each cell
    let lives_around = new Array(game.cells.length);

    for (let i = 0; i < lives_around.length; i++) {
        lives_around[i] = countLivesAround(game.cells[i], game);
    }

    for (let i = 0; i < game.cells.length; i++) {
        if (game.cells[i].classList.contains('alive') &&
            lives_around[i] !== 2 &&
            lives_around[i] !== 3) {
                game.cells[i].classList.remove('alive');
        } else if (!game.cells[i].classList.contains('alive') &&
            lives_around[i] === 3) {
                game.cells[i].classList.add('alive');
        }
    }
}

function countLivesAround(cell, game) {
    let x = cell.style.gridColumnStart - 1;
    let y = cell.style.gridRowStart - 1;
    // to make the indexes start on zero ^^ 

    let result = 0;

    // cell on the first row
    if (y === 0) {
        // first cell
        if (x === 0) {
            if (game.cells[1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + 1].classList.contains('alive')) {
                result++;
            }
        }
        // top right cell
        else if (x === game.nb_column - 1) {
            if (game.cells[x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + x].classList.contains('alive')) {
                result++;
            }
        }
        // other cells on the first row
        else {
            if(game.cells[x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[game.nb_column + x].classList.contains('alive')) {
                result++;
            }
        }
    }
    // cells on last row
    else if(y === game.nb_row - 1) {
        // bottom left cell
        if (x === 0) {
            if (game.cells[(y*game.nb_column) + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column)].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + 1].classList.contains('alive')) {
                result++;
            }
        }
        // bottom right cell
        else if (x === game.nb_column - 1) {
            if (game.cells[(y*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
        }
        // other cells on the first row
        else {
            if(game.cells[(y*game.nb_column) + x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[(y*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
        }
    }
    else {
        // other cells on the first column
        if (x === 0) {
            if(game.cells[(y*game.nb_column) + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column)].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column)].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + 1].classList.contains('alive')) {
                result++;
            }
        }
        // other cells on the last column
        else if (x === game.nb_column - 1) {
            if(game.cells[(y*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
        }
        else {
            if(game.cells[(y*game.nb_column) + x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + x + 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y + 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[(y*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if(game.cells[((y - 1)*game.nb_column) + x - 1].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x].classList.contains('alive')) {
                result++;
            }
            if (game.cells[((y - 1)*game.nb_column) + x + 1].classList.contains('alive')) {
                result++;
            }
        }
    }

    return result;
}
