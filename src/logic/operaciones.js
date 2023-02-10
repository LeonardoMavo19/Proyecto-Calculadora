import big from "big.js"
import operate from "./operate"
import isNumber from "./isNumber"

export default function operaciones(estado, nombreboton) {

    if (nombreboton === "AC") {
      return {
        total: null,
        siguiente: null,
        operador: null,
      };
    }
  
  
    if (isNumber(nombreboton)) {
  
      if (nombreboton === "0" && estado.siguiente === "0") return {data:""}
      
      if (estado.operador) {
  
        if (estado.siguiente) return { siguiente: estado.siguiente + nombreboton }
        
        return { siguiente: nombreboton }
      }
      
      if (estado.siguiente) {
  
        const siguiente = estado.siguiente === "0" ? nombreboton : estado.siguiente + nombreboton;
  
        return {
          siguiente,
          total: null,
        }
  
      }
  
      return {
        siguiente: nombreboton,
        total: null,
      }
    }
  
    if (nombreboton === "%") {
  
      if (estado.operador && estado.siguiente) {
  
        const result = operate(estado.total, estado.siguiente, estado.operador)
  
        return {
          total: big(result)
            .div(big("100"))
            .toString(),
          siguiente: null,
          operador: null,
        }
  
      }
  
      if (estado.siguiente) {
        return {
          siguiente: big(estado.siguiente)
            .div(big("100"))
            .toString(),
        }
      }
  
      return {};
  
    }
  
    if (nombreboton === ".") {
  
      if (estado.siguiente) {
        
        if (estado.siguiente.includes(".")) return {}
  
        return { siguiente: estado.siguiente + "." }
      }
  
      return { siguiente: "0." }
  
    }
  
    if (nombreboton === "=") {
  
      if (estado.siguiente && estado.operador) {
  
        return {
          total: operate(estado.total, estado.siguiente, estado.operador),
          siguiente: null,
          operador: null,
        }
  
      } else return {}
  
    }

    if (nombreboton === "+/-") {
  
      if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() }
  
      if (estado.total) return { total: (-1 * parseFloat(estado.total)).toString() }
  
      return {}
  
    }
  
    if (estado.operador) {
  
      return {
        total: operate(estado.total, estado.siguiente, estado.operador),
        siguiente: null,
        operador: nombreboton,
      }
  
    }
  
    if (!estado.siguiente) return { operador: nombreboton }
    
    return {
      total: estado.siguiente,
      siguiente: null,
      operador: nombreboton,
    }
  
  }