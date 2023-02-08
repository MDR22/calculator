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

};

// Add function to clear display and set it back to 0

const display = document.getElementById("display");
const clear = document.getElementById("clear-button");

clear.addEventListener("click", function() {
      display.textContent = 0;
});