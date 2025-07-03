function append(char) {
    const display = document.getElementById('display');
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators
    if (operators.includes(char) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + char;
        return;
    }

    // Prevent multiple dots in a number
    if (char === '.') {
        // Split by operators to get the current number
        const parts = display.value.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) {
            return; // Don't append another dot
        }
    }

    display.value += char;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        // Use math.js for safe evaluation
        document.getElementById('display').value = math.evaluate(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}