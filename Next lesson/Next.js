'use strict'
let num = 50;

if (num < 49) {
    console.log("Неверно!");
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log("Верно!");
}

(num == 50) ? console.log("Верно!") :  console.log("Неверно!");
// тернарный оператор

switch (num){
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Чуть поменьше!");
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то не так!");
        break;
}