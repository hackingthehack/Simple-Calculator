function append(char) {
    const display = document.getElementById('display');
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators
    if (operators.includes(char) && operators.includes(lastChar)) {
        // Replace the last operator with the new one
        display.value = display.value.slice(0, -1) + char;
    } else {
        display.value += char;
    }
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