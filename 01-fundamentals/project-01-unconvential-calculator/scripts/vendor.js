// DOM Element References (from vendor.js)
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

// Output function (from vendor.js)
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

/* // Calculator state
let currentNumber = 0;
let previousNumber = 0;
let operator = null;
let waitingForOperand = false;

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
    default:
      return secondOperand;
  }
}

function performOperation(nextOperator) {
  const inputValue = parseFloat(userInput.value);

  if (previousNumber === 0) {
    previousNumber = inputValue;
  } else if (operator) {
    currentNumber = calculate(previousNumber, inputValue, operator);

    if (currentNumber === 'Error') {
      outputResult('Error', 'Cannot divide by zero');
      reset();
      return;
    }

    outputResult(
      currentNumber,
      `${previousNumber} ${operator} ${inputValue} = ${currentNumber}`
    );
    previousNumber = currentNumber;
  }

  waitingForOperand = true;
  operator = nextOperator;

  if (nextOperator) {
    outputResult(previousNumber, `${previousNumber} ${nextOperator} ?`);
  }
}

function reset() {
  currentNumber = 0;
  previousNumber = 0;
  operator = null;
  waitingForOperand = false;
  userInput.value = '';
  outputResult('0', 'Enter a number and select an operation');
}

// Event listeners for operation buttons
addBtn.addEventListener('click', () => {
  performOperation('+');
  userInput.focus();
});

subtractBtn.addEventListener('click', () => {
  performOperation('-');
  userInput.focus();
});

multiplyBtn.addEventListener('click', () => {
  performOperation('*');
  userInput.focus();
});

divideBtn.addEventListener('click', () => {
  performOperation('/');
  userInput.focus();
});

// Handle input changes
userInput.addEventListener('input', () => {
  if (waitingForOperand) {
    waitingForOperand = false;
  }

  if (operator && !waitingForOperand) {
    outputResult(
      previousNumber,
      `${previousNumber} ${operator} ${userInput.value}`
    );
  }
});

// Handle Enter key to perform calculation
userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    if (operator && !waitingForOperand) {
      performOperation();
      operator = null;
    }
  } else if (event.key === 'Escape') {
    reset();
  }
});

// Initialize
outputResult('0', 'Enter a number and select an operation');
userInput.focus();
 */
