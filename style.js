const imgComputerField = document.querySelector('.img_computer_field');
let imgPlayerField = document.querySelector('.img_player_field');
const btnField = document.querySelectorAll('.btn_field');
const clearingGameBtn = document.querySelector('.clearing_game_btn')
const countPlayer = document.querySelector('.count_player');
const countComputer = document.querySelector('.count_computer');


btnField.forEach((event) => {
    event.addEventListener('click', (e) => {
        if (e.target.id === 'stone_p') {
            imgPlayerField.src = 'img/stone1.png'
            imgPlayerField.name = "stone_p";
        }
        if (e.target.id === 'scissors_p') {
            imgPlayerField.src = 'img/scissors1.png'
            imgPlayerField.name = "scissors_p";
        }
        if (e.target.id === 'paper_p') {
            imgPlayerField.src = 'img/paper1.png'
            imgPlayerField.name = "paper_p";
        }
        setTimeout(clearingField, 3000)
        setTimeout(f, 1000)
       setTimeout(name, 1000) ;

    })


    function f() {

        const min = 1;
        const max = 4;

        const res = Math.floor(Math.random() * (max - min) + min);
        switch (res) {
            case 1:
                imgComputerField.src = 'img/paper1.png';
                imgComputerField.name = "paper_c"

                break

            case 2:
                imgComputerField.src = 'img/scissors1.png';
                imgComputerField.name = "scissors_c"
                break


            case 3:
                imgComputerField.src = 'img/stone1.png';
                imgComputerField.name = "stone_c"
                break

            default :

                break
        }
    }
});


function name() {
    if (imgPlayerField.name === imgComputerField.name) {
    } else if (imgPlayerField.name === "stone_p" && imgComputerField.name === "scissors_c") {
        countPlayer.innerHTML++;
    } else if (imgPlayerField.name === "scissors_p" && imgComputerField.name === "paper_c") {
        countPlayer.innerHTML++;
    } else if (imgPlayerField.name === "paper_p" && imgComputerField.name === "stone_c") {
        countPlayer.innerHTML++;
    } else if (imgComputerField.name === "paper_c" && imgPlayerField.name === "stone_p") {
        countComputer.innerHTML++;
    } else if (imgComputerField.name === "scissors_c" && imgPlayerField.name === "paper_p") {
        countComputer.innerHTML++;
    } else if (imgComputerField.name === "stone_c" && imgPlayerField.name === "scissors_p") {
        countComputer.innerHTML++;
    }


}


function clearing() {

    clearingGameBtn.addEventListener('click', () => {
        countComputer.innerHTML = '0';
        countPlayer.innerHTML = '0';
        imgComputerField.src = '';
        imgPlayerField.src = '';
    })
}

clearing();


function clearingField() {
    imgComputerField.src = '';
    imgPlayerField.src = '';
}


