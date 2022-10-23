import { update } from "./rules.js";

let game = {
    board: document.getElementById('game_board'),
    cells: null,
    nb_row: 21,
    nb_column: 21
};

let pause_button = document.querySelector('.fa-pause');
let play_button = document.querySelector('.fa-play');

let game_speed = 5;
let last_render_time = 0;

let iteration_number = document.getElementById('iteration_number');
iteration_number.textContent = 0;

let myRequest;

for (let i = 0; i < game.nb_row; i++) {
    for (let j = 0; j < game.nb_column; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');

        // initialize the index of each squares (gridRowStart and gridColumnStart start on 1)
        cell.style.gridRowStart = i + 1;
        cell.style.gridColumnStart = j + 1; 
        game.board.appendChild(cell);
    }
}

pause();

function play(current_time) {
    myRequest = window.requestAnimationFrame(play);

    // make the window render every 1/game_speed seconds
    const seconds_since_last_render = (current_time - last_render_time) / 1000;
    if (seconds_since_last_render < 1/game_speed) {
        return;
    }
    last_render_time = current_time;

    update(game);

    iteration_number.textContent++;
}

function pause() {
    window.cancelAnimationFrame(myRequest);

    game.cells = document.querySelectorAll('.cell');
    game.cells.forEach(cell => {
        cell.addEventListener('click', handleCellsClick);
    });
}

function handleCellsClick(e) {
    e.target.classList.toggle('alive');
}


pause_button.addEventListener('click', () => {
    play_button.classList.toggle('visually_hidden');
    pause_button.classList.toggle('visually_hidden');
    pause();
});

play_button.addEventListener('click', () => {
    play_button.classList.toggle('visually_hidden');
    pause_button.classList.toggle('visually_hidden');
    window.requestAnimationFrame(play);
});