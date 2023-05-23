let input;
const numbers = [];
let total = 0;

const totalAmount = function() {
  while (input !== null) {
    input = prompt('Enter a value');
    if (input === null) {
      console.log('Canceled by the user!');
      break;
    } else if (Number.isNaN(Number.parseInt(input, 10))) {
      console.log(`Input "${input}"`);
      continue;
    }
    numbers.push(input);
  }

  for (let i = 0; i < numbers.length; i++) {
    total = total + Number(numbers[i]);
  }
  return total;
};

console.log(`The total sum of numbers is ${totalAmount()}`);
console.log(`Array of entered numbers: ${numbers}`);
