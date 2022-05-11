// Global variables
let displayExprValue = "";
let valueString = "";
let firstNum = 1;
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
    addButton.addEventListener('click', event => {operatorButtonFunction(event)});

    const subtractButton = document.querySelector(".subtract");
    subtractButton.addEventListener('click', event => {operatorButtonFunction(event)});

    const multiplyButton = document.querySelector(".multiply");
    multiplyButton.addEventListener('click', event => {operatorButtonFunction(event)});
    
    const divideButton = document.querySelector(".divide");
    divideButton.addEventListener('click', event => {operatorButtonFunction(event)});
}

function operatorButtonFunction(event){
    if(firstNum != null){
        const string = event.target.textContent;
        displayExpr(string);
    }
}

function addToValueString(string){
    valueString += string;
}

function clearValueString(){
    valueString = "";
}

function init(){
    addEventListenerToNum();
    addEventListenerToOperators();
}

init();