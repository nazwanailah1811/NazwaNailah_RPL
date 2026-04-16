const inputFirstNumber = document.getElementById("inputFirstNumber");
const inputSecondNumber = document.getElementById("inputSecondNumber");
const resultText = document.getElementById("resultText");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", processCalculation);

function processCalculation() {
    const firstNumber = parseInput(inputFirstNumber.value);
    const secondNumber = parseInput(inputSecondNumber.value);

    if (firstNumber === null || secondNumber === null) {
        showError("Input tidak valid");
        return;
    }

    const result = calculate(firstNumber, secondNumber);
    displayResult(result);
}

function parseInput(value) {
    if (value.trim() === "") return null;
    return parseInt(value);
}

function calculate(a, b) {
    return a + b;
}

function displayResult(result) {
    resultText.innerText = `Hasil: ${result}`;
}

function showError(message) {
    resultText.innerText = message;
}