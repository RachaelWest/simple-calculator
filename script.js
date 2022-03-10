// Helper functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate() {
    let first_num = Number(document.getElementById("first-num").value);
    let second_num = Number(document.getElementById("second-num").value);
    let display = document.getElementById("result");
    let result = 0;

    let symbol = document.querySelector('input[name="math-symbol"]:checked');

    if (symbol !== null) {

        switch (symbol.value) {
            case 'add':
                result = add(first_num, second_num)
                break;
            case 'subtract':
                result = subtract(first_num, second_num)
                break;
            case 'multiply':
                result = multiply(first_num, second_num)
                break;
            case 'divide':
                result = divide(first_num, second_num)
                break;
        }
        display.innerHTML = "Result : " + String(result);
    } else {
        display.innerHTML = "No mode was set";
    }
}