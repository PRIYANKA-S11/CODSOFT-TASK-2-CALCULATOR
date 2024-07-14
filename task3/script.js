
let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (display.innerText === '0' || shouldResetDisplay) resetDisplay();
    display.innerText += number;
}

function resetDisplay() {
    display.innerText = '';
    shouldResetDisplay = false;
}

function clearDisplay() {
    display.innerText = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function deleteNumber() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    firstOperand = display.innerText;
    currentOperation = operator;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    secondOperand = display.innerText;
    display.innerText = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            if (b === 0) return 'Error';
            return a / b;
        default:
            return null;
    }
}