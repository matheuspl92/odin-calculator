// Global variables
let displayExprValue = "";
let firstNum = null;
let secondNum = null;

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

function displayExpr(string = ""){
    const display = document.querySelector('.expr-display');
    if(string === ""){
        display.textContent = "";
    } else {
        display.textContent += string;
    }
    displayExprValue = display.textContent;
}

function addEventListenerToNum(){
    const numButton = Array.from(document.querySelectorAll(".num"));
    numButton.forEach(btn => btn.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
    }));
}

function addEventListenerToOperators(){
    const addButton = document.querySelector(".add");
    addButton.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
    });
    const subtractButton = document.querySelector(".subtract");
    subtractButton.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
    });
    const multiplyButton = document.querySelector(".multiply");
    multiplyButton.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
    });
    const divideButton = document.querySelector(".divide");
    divideButton.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
    });
}

function init(){
    addEventListenerToNum();
    addEventListenerToOperators();
}

init();