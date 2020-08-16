function isNum(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}
let game = function () {
  const randomNum = parseInt(Math.random() * 100);
  let count = 10;

  return function repeat() {
    count -= 1;
    let userGuess = prompt("Угадай число от 1 до 100");
    if (isNum(userGuess)) {
      if (count > 0) {
        if (userGuess > randomNum) {
          alert("Загаданное число меньше. Осталось попыток: " + count);

          return repeat();
        } else if (userGuess < randomNum) {
          alert("Загаданное число большею  Осталось попыток: " + count);

          return repeat();
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
            game()();
          } else {
            alert("Вы завершили игру");
          }
        }
      } else {
        if (confirm("Вы проиграли. Хотите сыграть еще раз?")) {
          game()();
        } else {
          alert("Bye");
        }
      }
    } else if (userGuess === null) {
      alert("Пока!");
    } else {
      return repeat();
    }
  };
};
game()();
console.dir(game());
