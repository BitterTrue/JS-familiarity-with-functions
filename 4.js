"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

  /** вычисляет сумму двух чисел
   @param {number} number1 - первое число суммы
   @param {number}number2 - второе число суммы
   @return возвращает результат суммы*/
   function sum(number1, number2){
    const result = number1 + number2;
    return result;
  }
  /** вычисляет разность двух чисел
   @param {number} number1 - первое число, уменьшаемое
   @param {number}number2 - второе число, вычитаемое
   @return возвращает значение разности */
  function difference(number1, number2){
    if(number1 >= number2){
    const result= number1 - number2;
    return result}    
}
  /** вычисляет произведение двух чисел
   @param {number} number1 - первое умножаемое число 
   @param {number}number2 - второе умножаемое число 
   @return возвращает результат умножения */
  function multiplication(number1, number2) {
    const result = number1 * number2;
    return result;
}
  /** вычисляет деление чисел
   @param {number} number1 - первое число, делимое
   @param {number}number2 - второе число, делитель
   @return возвращает результат деления  */
  function division(number1, number2){
    const result = number1 / number2;
    return result;
}
console.log(`сумма: ${sum(10, 2)}`);
console.log(`разность: ${difference(10, 2)}`);
console.log(`умножение: ${multiplication(10, 2)}`);
console.log(`деление: ${division(10, 2)}`);
