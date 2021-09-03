import React, { useEffect, useState } from "react"
import "./App.css"
import {  } from "./"


export default function App() {
    const [calculation, setCalculation] = useState("")
    const [value, setValue] = useState("0")

    function handleClear() {
        setValue("0")
        setCalculation("")
    }


    return (
        <div id="calculator">
            <div id="screen">
                <p id="calculation">{calculation}</p>
                <p id="display">{value}</p>
            </div>

            <div id="clear" className="button" onClick={handleClear}>AC</div>

            <div onClick={() => handleClick("/")} id="divide" className="button operator">/</div>
            <div onClick={() => handleClick("*")} id="multiply" className="button operator">x</div>
            <div onClick={() => handleClick("-")} id="subtract" className="button operator">-</div>
            <div onClick={() => handleClick("+")} id="add" className="button operator">+</div>

            <div onClick={() => handleClick("7")} id="seven" className="button num">7</div>
            <div onClick={() => handleClick("8")} id="eight" className="button num">8</div>
            <div onClick={() => handleClick("9")} id="nine" className="button num">9</div>
            <div onClick={() => handleClick("4")} id="four" className="button num">4</div>
            <div onClick={() => handleClick("5")} id="five" className="button num">5</div>
            <div onClick={() => handleClick("6")} id="six" className="button num">6</div>
            <div onClick={() => handleClick("1")} id="one" className="button num">1</div>
            <div onClick={() => handleClick("2")} id="two" className="button num">2</div>
            <div onClick={() => handleClick("3")} id="three" className="button num">3</div>
            <div onClick={() => handleClick("0")} id="zero" className="button num">0</div>

            <div onClick={() => handleClick(".")} id="decimal" className="button num">.</div>
            <div onClick={handleEquals} id="equals" className="button">=</div>
        </div>
    )
}