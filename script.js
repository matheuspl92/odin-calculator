// Global variables
let displayExprValue = "";
let valueString = "";
let selectedOperator = "";
let firstNum = null;
let secondNum = null;

function add(a, b) { return (Number(a) + Number(b)); }

function subtract(a, b) { return (Number(a) - Number(b)); }

function multiply(a, b) { return (Number(a) * Number(b)); }

function divide(a, b) { return (Number(a) / Number(b)); }

function operate(operator, a, b) {
    if (operator === "+") { firstNum = add(a, b); }
    if (operator === "-") { firstNum = subtract(a, b); }
    if (operator === "×") { firstNum = multiply(a, b); }
    if (operator === "÷") { firstNum = divide(a, b); }
    secondNum = null;
    if (firstNum !== Infinity) {
        displayResult(Math.round(firstNum * 10000) / 10000);
    } else {
        displayResult("To infinity and beyond!");
    }
    console.log(`RESULT = ${firstNum}`);
}

function displayExpr(string = "") {
    const display = document.querySelector('.expr-display');
    if (string === "") {
        display.textContent = "";
    } else {
        display.textContent += string;
    }
    displayExprValue = display.textContent;
}

function deleteDisplayExpr() {
    const display = document.querySelector('.expr-display');
    display.textContent = display.textContent.slice(0, -1);
}

function displayResult(string = "") {
    const display = document.querySelector('.result-display');
    if (string === "") {
        display.textContent = "";
    } else {
        display.textContent = string;
    }
}

function addEventListenerToEqual() {
    const equalButton = document.querySelector(".equal");
    equalButton.addEventListener('click', () => {
        if (valueString !== "" && firstNum !== null && secondNum === null) {
            pushValueToSecondNum();
            operate(selectedOperator, firstNum, secondNum);
            selectedOperator = "";
            displayExpr();

        }
    });
}

function addEventListenerToAC() {
    const acButton = document.querySelector(".AC");
    acButton.addEventListener('click', () => {
        displayExpr();
        displayResult();
        clearValueString();
        firstNum = null;
        secondNum = null;
        selectedOperator = "";
    });
}

function addEventListenerToDot() {
    const dotButton = document.querySelector(".dot");
    dotButton.addEventListener('click', () => {
        if (!valueString.includes(".")) {
            displayExpr(".");
            addToValueString(".");
        }
    });
}

function addEventListenerToDEL() {
    const delButton = document.querySelector(".DEL");
    delButton.addEventListener('click', () => {
        if (valueString) {
            valueString = valueString.slice(0, -1);
            deleteDisplayExpr();
        }
    });
}

function addEventListenerToNum() {
    const numButton = Array.from(document.querySelectorAll(".num"));
    numButton.forEach(btn => btn.addEventListener('click', event => {
        const string = event.target.textContent;
        displayExpr(string);
        addToValueString(string);
    }));
}

function addEventListenerToOperators() {
    const addButton = document.querySelector(".add");
    addButton.addEventListener('click', event => { operatorButtonFunction(event) });

    const subtractButton = document.querySelector(".subtract");
    subtractButton.addEventListener('click', event => { operatorButtonFunction(event) });

    const multiplyButton = document.querySelector(".multiply");
    multiplyButton.addEventListener('click', event => { operatorButtonFunction(event) });

    const divideButton = document.querySelector(".divide");
    divideButton.addEventListener('click', event => { operatorButtonFunction(event) });
}

function operatorButtonFunction(event) {

    if (valueString == "" && firstNum !== null && secondNum === null) {
        const string = event.target.textContent;
        selectedOperator = string;
        displayExpr();
        displayExpr(`Ans${string}`);
    }

    if (valueString !== "" && firstNum === null) {
        pushValueToFirstNum();
        const string = event.target.textContent;
        selectedOperator = string;
        displayExpr(string);
    }

    if (valueString !== "" && firstNum !== null && secondNum === null) {
        pushValueToSecondNum();
        const string = event.target.textContent;
        operate(selectedOperator, firstNum, secondNum);
        selectedOperator = string;
        displayExpr();
        displayExpr(`Ans${string}`);
    }

}

function addToValueString(string) {
    valueString += string;
    console.log(`valueString = ${valueString}`);
}

function clearValueString() {
    valueString = "";
    console.log(`valueString = ${valueString}`);
}

function pushValueToFirstNum() {
    if (valueString != "") {
        firstNum = Number(valueString);
        clearValueString();
        console.log(`firstNumber = ${firstNum}`);
    }
}

function pushValueToSecondNum() {
    if (valueString != "") {
        secondNum = Number(valueString);
        clearValueString();
        console.log(`secondNumber = ${secondNum}`);
    }
}

function addEventListenerToKeys(){
    window.addEventListener('keyup', event => {
        if(event.key === "0"){document.getElementById("zero").click();}
        if(event.key === "1"){document.getElementById("one").click();}
        if(event.key === "2"){document.getElementById("two").click();}
        if(event.key === "3"){document.getElementById("three").click();}
        if(event.key === "4"){document.getElementById("four").click();}
        if(event.key === "5"){document.getElementById("five").click();}
        if(event.key === "6"){document.getElementById("six").click();}
        if(event.key === "7"){document.getElementById("seven").click();}
        if(event.key === "8"){document.getElementById("eight").click();}
        if(event.key === "9"){document.getElementById("nine").click();}
        if(event.key === "/"){document.getElementById('divide').click()}
        if(event.key === "*"){document.getElementById("multiply").click();}
        if(event.key === "-"){document.getElementById("subtract").click();}
        if(event.key === "+"){document.getElementById("add").click();}
        if(event.key === "."){document.getElementById("dot").click();}
        if(event.key === "Enter"){document.getElementById("equal").click();}
        if(event.key === "Backspace"){document.getElementById("DEL").click();}
    })
}

function init() {
    addEventListenerToNum();
    addEventListenerToOperators();
    addEventListenerToEqual();
    addEventListenerToAC();
    addEventListenerToDot();
    addEventListenerToDEL();
    addEventListenerToKeys();
}

init();