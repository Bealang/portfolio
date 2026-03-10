function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'serio dzielic przez 0?';
    }
    
    document.getElementById('wynik1').innerText = 'Wynik: ' + result;
}