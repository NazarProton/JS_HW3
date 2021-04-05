// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
function countTotalSalary(employees) {
    let allSallarys = Object.values(employees);
    let sumSallary = 0
    for(let sallary of allSallarys) {
        sumSallary += sallary;
    }
  return sumSallary;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400