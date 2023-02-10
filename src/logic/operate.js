import big from "big.js"

export default function operate (numeroUno, numeroDos, operador ){
    const uno = big(numeroUno || "0")
    const dos = big(numeroDos || (operador === "÷" || operador ==="x" ? "1": "0"))

    if(operador === "+") return uno.plus(dos).toString()
    if(operador === "-") return uno.minus(dos).toString()
    if(operador === "x") return uno.times(dos).toString()
    if(operador === "÷") return uno.div(dos).toString()
} 