//Включение игры
//размещение кораблей
//Начало боя
//Повторение действия -> запрос координат корабля -> сравнение с координатами позиционирования корабля
//конец игры -> вывод счета

let randonLocation = Math.floor(Math.random() * 5);
let location1 = randonLocation;
let location2 = location1++;
let location3 = location2++;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while(isSunk === false) {
    guess = +prompt('Готов выстрелить? Введи цифру от 0-6');
    if (guess < 0 || guess > 6) {
        alert('Tы (как бы это сказать... допустил ошибку, мы просили тебя ввести цифры от 0 до 6');
    } else if (guess === null) {
        alert('так просто сдался? Давай, игра примитивная!');
    } else {
        guesses++
        if (guess === location1 || guess === location2 || guess === location3) {
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert('Ты победил! Приза не будет конечно, игра примитивная же, спасибо за внимание');
            }
        } else {
            alert('МИМО!');
        }
    }
}

let losse = (3 / guesses);
let status = `Вы попали c ${guesses} попытки, для того чтобы попасть по кораблю, 
это показывает твой уровень меткости как ${losse}`;
alert(status);