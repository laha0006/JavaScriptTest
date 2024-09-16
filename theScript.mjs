// const operators = ["+", "-", "/", "*"]


// 3 + 5 - (2 * 5)
//

// function createCalculator() {
//     const operators = ["+", "-", "/", "*"];
//     const display = document.getElementById("display");
//
//     console.log("Display: ", display);
//     function buttonInput(e) {
//         let lastDisplayVal = display.innerText.slice(-1);
//         let value = e.target.innerText;
//
//         if (value === "=") {
//             console.log("calc!");
//             display.innerText = calculate();
//             return;
//         }
//
//         if (!operators.includes(lastDisplayVal) || !operators.includes(value)) {
//             console.log("lastDisplayVal", lastDisplayVal);
//             display.innerText += value;
//         }
//     }
//
//     function calculate() {
//         const displayVal = display.innerText;
//         let operator;
//         let nums;
//         let a;
//         let b;
//
//         for (let i = 0; i < displayVal.length; i++) {
//             if (operators.includes(displayVal[i])) {
//                 operator = displayVal[i];
//                 nums = displayVal.split(operator);
//                 break;
//             }
//         }
//
//         a = Number.parseFloat(nums[0]);
//         b = Number.parseFloat(nums[1]);
//
//         console.log(a);
//         console.log(b);
//         console.log(operator);
//
//         switch (operator) {
//             case "-":
//                 return a - b;
//             case "/":
//                 return a / b;
//             case "*":
//                 return a * b;
//             case "+":
//                 return a + b;
//             default:
//                 return 0;
//         }
//     }
//
//     return { buttonInput };
// }


// function buttonInput(e) {
//     const display = document.getElementById("display");
//     const lastDisplayVal = display.innerText.slice(-1)
//     if (e.target.innerText === "=") {
//         console.log("calc!")
//         result = calculate()
//         display.innerText = result
//         return
//     }
//     const target = e.target
//     const value = target.innerText
//     if (!operators.includes(lastDisplayVal) || !operators.includes(value)) {
//         console.log("lastDisplayVal", lastDisplayVal)
//         display.innerText += value;
//     }
// }
//
// function calculate() {
//     const display = document.getElementById("display");
//     const displayVal = display.innerText;
//     let operator;
//     let nums;
//     let a;
//     let b;
//     for (let i = 0; i < displayVal.length; i++) {
//         if (operators.includes(displayVal[i])) {
//             operator = displayVal[i];
//             nums = displayVal.split(operator);
//             break
//         }
//     }
//     a = Number.parseFloat(nums[0]);
//     b = Number.parseFloat(nums[1]);
//     console.log(a);
//     console.log(b);
//     console.log(operator);
//     switch (operator) {
//         case "-":
//             return a - b;
//         case "/":
//             return a / b;
//         case "*":
//             return a * b;
//         case "+":
//             return a + b;
//     }
// }


import calculator from './calculator.mjs';


const calc = calculator("display");

// let testArr = calc.parse("4+5*2-4/2");
// let RPNarr = calc.convertToRPN(testArr);
// console.log(calc.evaluateRPNarray(RPNarr));;


window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("buttons").addEventListener("click", calc.buttonInput)
});

