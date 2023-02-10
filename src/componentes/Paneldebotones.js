import Button from "./Boton"
import "./Paneldebotones.css"

export default function paneldebotones ({clickHandle}) {
  
    const handleClick = nombredeboton => {
      clickHandle(nombredeboton)
    }
    
    return (
        <div className="component-button-panel">
          <div>
            <Button name="AC" clickHandle={handleClick} gray/>
            <Button name="+/-" clickHandle={handleClick} gray/>
            <Button name="%" clickHandle={handleClick} gray/>
            <Button name="+" clickHandle={handleClick} gray/>
          </div>
          <div>
            <Button name="7" clickHandle={handleClick} />
            <Button name="8" clickHandle={handleClick} />
            <Button name="9" clickHandle={handleClick} />
            <Button name="-" clickHandle={handleClick} gray/>
          </div>
          <div>
            <Button name="4" clickHandle={handleClick} />
            <Button name="5" clickHandle={handleClick} />
            <Button name="6" clickHandle={handleClick} />
            <Button name="x" clickHandle={handleClick} gray/>
          </div>
          <div>
            <Button name="1" clickHandle={handleClick} />
            <Button name="2" clickHandle={handleClick} />
            <Button name="3" clickHandle={handleClick} />
            <Button name="÷" clickHandle={handleClick} gray />
          </div>
          <div>
            <Button name="0" clickHandle={handleClick} wide/>
            <Button name="." clickHandle={handleClick} />
            <Button name="=" clickHandle={handleClick} blue/>
          </div>
        </div>
      );
  }