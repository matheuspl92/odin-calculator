function add(a, b){return Number(a) + Number(b);}

function subtract(a, b){return Number(a) - Number(b);}

function multiply(a, b){return Number(a) * Number(b);}

function divide(a, b){return Number(a) / Number(b);}

function operate(operator, a, b){
    if(operator === "+"){return add(a, b);}
    if(operator === "-"){return subtract(a, b);}
    if(operator === "*"){return multiply(a, b);}
    if(operator === "/"){return divide(a, b);}
}