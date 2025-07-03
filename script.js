function append(char) {
    document.getElementById('display').value += char;
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