const calculate = (num1, num2, op) => {
  let result
  switch (op) {
    case '+':
      result = num1 + num2;
      break

    case '-':
      result = num1 - num2;
      break

    case '*':
      result = num1 * num2;
      break

    case '/':
      result = num1 / num2;
      break
    
    default:
      console.log('Operador errado');
  }
  return result
}

console.log(calculate(2, 4, '+'));
console.log(calculate(2, 4, '-'));
console.log(calculate(2, 4, '*'));
console.log(calculate(2, 4, '/'));