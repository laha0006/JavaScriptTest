export default function calculator(displayId) {
    const operatorPrecedence = {
        "+": {"val": 3, "associative": 'left', "symbol": "+"},
        "-": {"val": 3, "associative": 'left', "symbol": "-"},
        "*": {"val": 4, "associative": 'left', "symbol": "*"},
        "/": {"val": 4, "associative": 'left', "symbol": "/"}
    }
    const display = document.getElementById(displayId);

    function buttonInput(e) {
        let button = e.target.innerText;
        let lastValue = display.innerText.slice(-1)
        console.log("target: ", e.target.className)
        if (e.target.className !== "t1") {
            return
        }
        if (!isOperator(lastValue) || !isOperator(button)) {
            console.log("add to display yaya smile")
            display.innerHTML += button
        }
        if (button === "=" && !isOperator(lastValue)) {
            console.log("CALCULATE!!!!!!!")
            calculate()
        }


    }

    function calculate() {
        let parsedDisplay = parseCalculatorDisplay(display.innerText)
        let RPNArray = convertToRPN(parsedDisplay);
        display.innerHTML = evaluateRPNarray(RPNArray)
    }


    function getOperator(operator) {
        return operatorPrecedence[operator];
    }

    function isOperator(operator) {
        return operatorPrecedence.hasOwnProperty(operator);
    }

    function isNumeric(value) {
        return !isNaN(value);
    }

    function parseCalculatorDisplay(str) {
        let result = [];
        let current = "";
        // console.log("###### THE TEST: ", str.split(/+-*//) )
        for (let i = 0; i < str.length; i++) {
            console.log("ParseCurrent: ", current);
            let currIndex = str[i];
            if (isNumeric(currIndex) || currIndex === ".") {

                current += currIndex;
            }
            if (isOperator(currIndex)) {
                console.log("currIndex: ", currIndex);
                console.log("### CURRENT: ", current)
                if (current !== "") {
                    result.push(current.replaceAll(" ", ""));
                }
                result.push(currIndex.replaceAll(" ", ""))
                current = "";
            }
            if (i + 1 === str.length && current !== "") {
                result.push(current.replaceAll(" ", ""));
            }
        }
        return result;
    }

    //convert array of inputs ["2","+","4", ... ] to Reverse Polish Notation ["2","4","+"]
    //using shunting yard algorithm (simplified, because of limited operators)
    function convertToRPN(stringArray) {
        let output = []
        let operatorStack = []
        // console.log("String Array: ", stringArray);
        for (let i = 0; i < stringArray.length; i++) {
            let current = stringArray[i];

            if (isOperator(current)) {
                let currOperator = getOperator(current);
                let peek = getOperator(operatorStack[operatorStack.length - 1]);

                if (typeof peek !== "undefined") {
                    while (peek.val >= currOperator.val) {
                        let popped = operatorStack.pop();
                        output.push(popped);
                        peek = getOperator(operatorStack[operatorStack.length - 1]);
                        if (typeof peek === "undefined") {
                            break;
                        }
                    }
                }
                operatorStack.push(currOperator.symbol);

            } else {
                output.push(current);
            }
        }
        while (operatorStack.length > 0) {
            output.push(operatorStack.pop());
        }
        return output;
    }

    function evaluateRPNarray(RPNarray) {
        console.log("RPNarray: ", RPNarray);
        let stack = []
        for (let i = 0; i < RPNarray.length; i++) {
            let current = RPNarray[i];
            let leftOperand;
            let rightOperand;
            switch (current) {
                case "+":
                    rightOperand = stack.pop()
                    leftOperand = stack.pop()
                    stack.push(leftOperand + rightOperand);
                    break;
                case "-":
                    rightOperand = stack.pop()
                    leftOperand = stack.pop()
                    stack.push(leftOperand - rightOperand);
                    break;
                case "*":
                    rightOperand = stack.pop()
                    leftOperand = stack.pop()
                    let result = leftOperand * rightOperand
                    stack.push(result);
                    break;
                case "/":
                    rightOperand = stack.pop()
                    leftOperand = stack.pop()
                    stack.push(leftOperand / rightOperand);
                    break;
                default:
                    stack.push(Number.parseFloat(current));
                    break;
            }
        }
        return stack.pop();
    }

    return {
        parse: parseCalculatorDisplay,
        convertToRPN: convertToRPN,
        evaluateRPNarray: evaluateRPNarray,
        buttonInput: buttonInput,
    }

}