"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstNumber = +prompt("Enter a number1:");
const secondNumber = +prompt("Enter a number2:");
const thirdNumber = +prompt("Enter a number3:");

function getMaxnumber(numb1,numb2,numb3) {
    const max = Math.max(numb1,numb2,numb3);
    return console.log(`Максимальное значение среди чисел N1, N2, N3 равно ${max}`);
}

console.log(getMaxnumber(firstNumber,secondNumber,thirdNumber));