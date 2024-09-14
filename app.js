// Captura DOM Element for Manipulation
//Time Elements
const hourIOSElement = document.getElementById("hour");
const minuteIOSElement = document.getElementById("minute");
//Set up the Time
const setupTime = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    hourIOSElement.textContent = currentHours.toString();
    minuteIOSElement.textContent = currentMinutes.toString().padStart(2, '0');
}
setInterval(() => {
    setupTime();    
}, 1000);

setupTime();

//Calculator
//Display
const displayCalculator = document.querySelector(".display");
//Function Buttons
const plusMinusButton = document.querySelector(".calc-button.function.pm");
const allClearButton = document.querySelector(".calc-button.function.ac");
const percentageButton = document.querySelector(".calc-button.function.percent");
//Operator Buttons
const additionButton = document.querySelector(".calc-button.operator.addition");
const substractionButton = document.querySelector(".calc-button.operator.substraction");
const multiplicationButton = document.querySelector(".calc-button.operator.multiplication");
const divisionButton = document.querySelector(".calc-button.operator.division");
const equalButton = document.querySelector(".calc-button.operator.equal");
// Numbers
const decimalButton = document.querySelector(".calc-button.decimal");
const number0Button = document.querySelector(".calc-button.number.zero");
const number1Button = document.querySelector(".calc-button.number.one");
const number2Button = document.querySelector(".calc-button.number.two");
const number3Button = document.querySelector(".calc-button.number.three");
const number4Button = document.querySelector(".calc-button.number.four");
const number5Button = document.querySelector(".calc-button.number.five");
const number6Button = document.querySelector(".calc-button.number.six");
const number7Button = document.querySelector(".calc-button.number.seven");
const number8Button = document.querySelector(".calc-button.number.eight");
const number9Button = document.querySelector(".calc-button.number.nine");
//Numbers Array
const numbersButtons = [
    number0Button,
    number1Button,
    number2Button,
    number3Button,
    number4Button,
    number5Button,
    number6Button,
    number7Button,
    number8Button,
    number9Button
];

const getValueDisplayStr = () => {
   const currentDisplayValue = displayCalculator.textContent;
   // Other way to turn String currentDisplayValue.split(",").join(""); 
   return currentDisplayValue.replace(",", "");
}

const getValueDisplayNum = () => {
    return parseFloat(getValueDisplayStr());
}

const setStrAsValue = (valueString) => {
    if (valueString.charAt(valueString.length - 1) === ".") {
        displayCalculator.textContent += ".";
        return;
    }
    const [integerPartNumStr, decimalPartNumStr] = valueString.split(".");
    if (decimalPartNumStr) {
        displayCalculator.textContent = parseFloat(integerPartNumStr).toLocaleString() + "." + decimalPartNumStr;
        return;
    }
    displayCalculator.textContent = parseFloat(integerPartNumStr).toLocaleString();
}

const handleNumberClick = (numberString) => {
    const currentDisplayValue = getValueDisplayStr();
    //if (currentDisplayValue.length === 6) return;
    if (!parseInt(currentDisplayValue)) {
        setStrAsValue(numberString);
    } else {
        setStrAsValue(currentDisplayValue + numberString);
    }
};

// Add Event Listeners to numbers and buttons
for (let i = 0; i < numbersButtons.length; i++) {
    const numberButton = numbersButtons[i];
    numberButton.addEventListener("click", () => {
        handleNumberClick(i.toString());
    })
}

//Add Event Listener to Decimal
decimalButton.addEventListener("click", () => {
    const currentDisplayValue = getValueDisplayStr();
    if (currentDisplayValue.includes(".")) return;
    setStrAsValue(currentDisplayValue + ".");
});

//Add Event Listener to function Buttons
allClearButton.addEventListener("click", () => {
   setStrAsValue("0"); 
})

plusMinusButton.addEventListener("click", () => {
    const currentValueNumber = getValueDisplayNum();
    setStrAsValue(String(currentValueNumber * -1));
});

percentageButton.addEventListener("click", () => {
    const currentValueNumber = getValueDisplayNum();
    setStrAsValue(String(currentValueNumber / 100));
});


