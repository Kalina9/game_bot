function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}
let game = function () {
    const randomNum = parseInt(Math.random() * 100);
    return function repeat() {
        let userGuess = prompt("Угадай число от 1 до 100");
        if (isNum(userGuess)) {
            if (userGuess > randomNum) {
                alert('Загаданное число меньше');
                return repeat();
            } else if (userGuess < randomNum) {
                alert('Загаданное число больше');
                return repeat();
            } else {
                if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                    game()();
                } else {
                    alert('Вы завершили игру');
                }
            }
        } else if (userGuess === null) {
            alert('Пока!')
        } else {
            return repeat();
        }
    }
}
game()();
console.dir(game())