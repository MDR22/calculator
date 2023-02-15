// Add functions for each operation

function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

// Add operate function that takes an operator and 2 numbers and then calls one of the operation functions
function operate(operator, a, b) {
    a = numberOne;
    b = numberTwo;
    if (operation === "multiplication") {
        result = multiplication(a, b);
        display.textContent = result;
    } else if (operation === "division") {
        result = division(a, b);
        display.textContent = result;
    } else if (operation === "addition") {
        result = addition(a, b);
        display.textContent = result;
    } else if (operation = "subtraction") {
        result = subtraction(a, b);
        display.textContent = result;
    }
};

// Add starting values for calculations

let numberOne = "";

let numberTwo = "";

let operation = "";

let result = "";
// Add function to clear display and set it back to 0

const display = document.getElementById("display");
const clear = document.getElementById("clear-button");

clear.addEventListener("click", function() {
      display.textContent = "";
});

// Add function that updates display when number buttons are pressed

const numberButtons = document.getElementsByClassName("number");

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", function onClick() {
        display.textContent += numberButton.id;
    });
};

// Add function that registers the operation called when operator is pressed

const operationButtons = document.getElementsByClassName("operation");

for (const operationButton of operationButtons) {
    operationButton.addEventListener("click", function onClick() {
        numberOne = Number(display.textContent);
        operation = operationButton.id;
        display.textContent = "";
    });
};

// Add function for equals button that computes the result

const equalsButton = document.getElementById("=");

equalsButton.addEventListener("click", function onClick() {
    numberTwo = Number(display.textContent);       
    operate(operation, numberOne, numberTwo);
    display.textContent = result;
    });