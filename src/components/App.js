import React, { useState } from "react"
import "./App.css"


export default function App() {
    const [calculation, setCalculation] = useState("")
    const [value, setValue] = useState("0")
    const operators = ["+", "-", "*", "/"]


    function handleClear() {
        setValue("0")
        setCalculation("")
    }


    function handleNum(num) {
        if (value === "0") {
            setValue(num)

            if (calculation === "") { // if there hasn't been any input yet
                setCalculation(num)
                return
            } else { // if there has been inputs
                setCalculation(prevCal => prevCal.substring(0, prevCal.length - 1) + num)
                return
            }
        }

        if (operators.includes(value)) { // if the previous input was an operator
            setValue(num)
            setCalculation(prevCal => prevCal + num)
            return
        }

        if (calculation.includes("=")) {
            setValue(num)
            setCalculation(num)
            return
        }

        setValue(prevVal => prevVal + num)
        setCalculation(prevCal => prevCal + num)
    }


    function handleDecimal() {
        if (operators.includes(value)) { // if the previous input was an operator
            setValue(".")
            setCalculation(prevCal => prevCal + ".")
            return
        }

        if (calculation.includes("=")) { // if previous input was an equal sign
            setValue(".")
            setCalculation(".")
            return
        }

        // skip if the previous input was a decimal
        if (value.includes("."))
            return

        setValue(prevVal => prevVal + ".")
        setCalculation(prevCal => prevCal + ".")
    }


    function handleOperator(operator) {
        if (operators.includes(value)) {
            setValue(operator)

            if (operator === "-") { // handle negative sign
                setCalculation(prevCal => prevCal + operator)
                return
            } else { // handle consecutive operators
                setCalculation(prevCal => prevCal.substring(0, prevCal.length - 1) + operator)
                return
            }
        }

        // pressing an operator immediately following a "="
        if (calculation.includes("=")) {
            setCalculation(value + operator)
            setValue(operator)
            return
        }

        setValue(operator)
        setCalculation(prevCal => prevCal + operator)       
    }


    function handleEquals() {
        try {
            setValue(eval(calculation))
        } catch (error) {
            if (error instanceof SyntaxError)
                return
        } 
        
        setCalculation(prevCal => prevCal + "=" + eval(calculation))
    }

    
    return (
        <div id="calculator">
            <div id="screen">
                <p id="calculation">{calculation}</p>
                <p id="display">{value}</p>
            </div>

            <div id="clear" className="button" onClick={handleClear}>AC</div>

            <div onClick={() => handleOperator("/")} id="divide" className="button operator">/</div>
            <div onClick={() => handleOperator("*")} id="multiply" className="button operator">x</div>
            <div onClick={() => handleOperator("-")} id="subtract" className="button operator">-</div>
            <div onClick={() => handleOperator("+")} id="add" className="button operator">+</div>

            <div onClick={() => handleNum("7")} id="seven" className="button num">7</div>
            <div onClick={() => handleNum("8")} id="eight" className="button num">8</div>
            <div onClick={() => handleNum("9")} id="nine" className="button num">9</div>
            <div onClick={() => handleNum("4")} id="four" className="button num">4</div>
            <div onClick={() => handleNum("5")} id="five" className="button num">5</div>
            <div onClick={() => handleNum("6")} id="six" className="button num">6</div>
            <div onClick={() => handleNum("1")} id="one" className="button num">1</div>
            <div onClick={() => handleNum("2")} id="two" className="button num">2</div>
            <div onClick={() => handleNum("3")} id="three" className="button num">3</div>
            <div onClick={() => handleNum("0")} id="zero" className="button num">0</div>

            <div onClick={handleDecimal} id="decimal" className="button num">.</div>
            <div onClick={handleEquals} id="equals" className="button">=</div>
        </div>
    )
}