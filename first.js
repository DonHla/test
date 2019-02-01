'use strict'

a = 5;
console.log(a); 

/*var number=5; // уже существует до выполнения скрипта
var leftBorderWidth = 1;
{
    let second =2;
}
 // эта переменная создаётся, только при исполнении кода
// когда код до неё доходит (хостинг - всплытие переменных)
// таким образом ускоряем свой код и экономим память браузера
const pi= 3.14; // 
console.log(second);
*/
/*
var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null; // чего-то в коде вообще не существует
// при попытке вывести что-то (отдельный тип данных)
undefined; // объект(переменная) уже существует, но значения никакого не имеет
var obj ={};

console.log(4/0); // infinity числовые значения
console.log('string'*9); // Nan (not a number)
*/
//console.log(something); // null- ссылка на несуществующую вещь
/*
let something1;
console.log(something1);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person["name"]);
let arr = ['plum.png','oreng.jpg','apple.bmp'];

console.log(arr[0]);
*/
//alert("Hello word");
// стандартное окно с одной кнопкой ок и предложением
//let answer = confirm("Are you here?");
//стандартное окно вопроса с кнопками да(ок) и отмена
//console.log(answer) ;

// let answer = +prompt("Есть ли вам 18?", "Да"); 
// стандартное окно со строкой для вводв (Да- ввод по умолчанию в данном случае)
//console.log(answer) ;

//далее проверка на тип данных

// console.log(typeof(answer));

// console.log("arr"+" - obj");
// console.log(4 + +" - obj");

let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);

// префиксная форма возращает уже изменённое  значение 
// а постфиксная сначала  старое, а потом совершает с ним действие

console.log(5%2);
console.log("2"==2);// сравнение по значению
console.log("2"===2); // сравнение по типу данных

let isChecked = true,
    isClose = false;

console.log(!isChecked||isClose);
