'use strict'

//  if (num < 49) {
//     console.log("неверно!");
// } else if (num > 100) {
//     console.log("много!");
// } else {
//     console.log("верно!");
// }

// (num == 50) ? console.log("Верно!") :  console.log("Неверно!");
// // тернарный оператор

// switch (num){
//     case num < 49:
//         console.log("Неверно!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80:
//         console.log("Чуть поменьше!");
//     case 50:
//         console.log("Верно!");
//         break;
//     default:
//         console.log("Что-то не так!");
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);  
//     num++;
// }
// while (num < 55);

// for (let i=1; i < 8 ; i++){
//     if (i==6){
//        continue;
//     }
//     console.log(i);
// }


// let x = 5; 
// console.log(x++); //5

// console.log([]+false-null+true); //NaN
// console.log([]-null);// 0
// console.log([]+null);// null

// let y = 1; 
// let x = y = 2;
// console.log(x);//2

// console.log([ ] + 1 + 2);//12

// console.log("1"[0]); //1

// console.log(2 && 1 && null && 0 && undefined ); //null
// console.log(2 && 1 );
// console.log( 1 && null );
// console.log( null && 0 );
// console.log( null && undefined );


// let a = 1,
//     b = 0;
// console.log(!!( a && b )); //false логический тип
// console.log(( a && b )); //0


// console.log( null || 2 && 3 || 4); //3
// console.log( null || 2); //2
// console.log( 3 || 4); //3
// console.log(  2 && 3 );//3
// //&& возвращает последний операнд, есди оба они истины
// //и, например, являются арифметическими числами    
// // если оба операнда равны false, то возвращатся 1-ый
// // оператор || возвращает 1-ое значение true
// //Если всё false, то последний операнд

// a = [1, 2, 3]; 
// b = [1, 2, 3]; 
// console.log(a==b);//false

// console.log(+"Infinity");// infinity

// console.log("ёжик" > "яблоко");//true
// // сравнение по юникоду

// console.log(0 || "" || 2 || undefined || true || falsе);//2


//Функции
// let num = 20;
// function showFirstMassage(text){
//     console.log(text);
//      console.log(num);
// }

// showFirstMassage("Hello world");
// console.log(num);




//функцианальное выражение (можно использовать только после объявления)
// фанкшен экспрешен и декларейшен
// let calc = function (a,b){
//     return(a+b);
// };

let calc = (a,b) => a+b; // стрелочная функция по новому стандарту

console.log(calc(3,4));

console.log(calc(8,4));

function retVar()
{
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log (anotherNum);

// методы и свойства у строк и чисел
// методы - вспомогательные функции
// свойства - вспомогательные значения

let str = "test";
console.log(str.length); // свойство (получили описание) lengh

console.log(str.toUpperCase());// методы перевод в верхний регистр
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));

console.log(parseInt(twelve)); 
console.log(parseFloat(twelve)); 
