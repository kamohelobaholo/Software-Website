const diplay= document.getElementById('display');
const buttons= document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstValue = '';
let secondvalue = '';

buttons.forEach(button => {
    button.addeventListner('click',() => {
        const value = button.textContent;
        if (button.classList.contains('btn-number'))
            {
                if(display.textContent === '0' || operator && secondValue === '') {
                    display.textContent = value;} else {display.textContent += value;

                    }
                }
                if (button.classList.contains('btn-operator')) {
                    firstValue = display.textContent;
                    operator = value;
                    display.textContent = '';
                }
                if (value === '='){
                    secondValue = display.textContent;
                    display.textContent = calculate(firstValue, operator, secondValue);
                    operator = '';
                    firstValue = '';
                    secondValue = '';
                }
                if (button.classList.contains('btn-clear')){
                    display.textContent = '0';
                    firstValue = '';
                    secondValue = '';
                    operator = '';
                }

            
    });
});
function calculate(a, op, b){
    a = parseFloat(a);
    b = parsefloat(b);
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b !== 0? a/b : 'Error';
    return b;
}