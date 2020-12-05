let input = Number;
const numbers = [];
let total = 0;

const totalAmount = function() {
    while (input !== null) {
    input = prompt('Введите значение');
    if (input === null) {console.log('Отменено пользователем!');
            break
        }
    else  if ((Number.isNaN(Number.parseInt(input, 10)))) {
              console.log(`Введено ${input}`); 
              continue;
        };
        numbers.push(input)
    };

        for (let i = 0; numbers.length > i; i++) {
        total = total + Number(numbers[i]);
    }
return(total);
};


console.log(`Общая сумма чисел равна ${totalAmount()}`);
console.log(`Массив введенных чисел ${numbers}`);
