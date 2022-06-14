// console.log('dajdiajdiajdisajd!')
const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForNumber: false,
};

function updateDisplay() {
  document.querySelector('#displayNumber').innerHTML = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

const buttons = document.querySelectorAll('.button');
for (let button of buttons) {
  button.addEventListener('click', function (e) {
    const target = event.target;

    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}
