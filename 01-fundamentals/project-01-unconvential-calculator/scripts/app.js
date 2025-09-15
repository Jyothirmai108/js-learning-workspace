const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

//Generates a description for the calculation
function createCalculationDescription(
  operation,
  resultBeforeCalc,
  calcNNumber
) {
  const calcDescription = `${resultBeforeCalc} ${operation} ${calcNNumber} `;
  outputResult(currentResult, calcDescription); // This outputResult function from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}

function calculatorResult(calculationType) {
  const inputValue = getUserNumberInput();

  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    inputValue === 0
  ) {
    return;
  }

  const initalResult = currentResult;
  let operatorType;
  if (calculationType === 'ADD') {
    currentResult += inputValue;
    operatorType = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= inputValue;
    operatorType = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= inputValue;
    operatorType = '*';
  } else if (calculationType == 'DIVIDE') {
    currentResult /= inputValue;
    operatorType = '/';
  }
  createCalculationDescription(operatorType, initalResult, inputValue);
  writeToLog(calculationType, initalResult, inputValue, currentResult);
}

function add() {
  calculatorResult('ADD');
}

function subtract() {
  calculatorResult('SUBTRACT');
}

function multiply() {
  calculatorResult('MULTIPLY');
}

function divide() {
  calculatorResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
