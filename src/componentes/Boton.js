import "./Boton.css"

export default function Boton ({clickHandle, name, gray, wide, blue}) {

  const handleClick = () => clickHandle(name)

  const className = [
    "component-button",
    wide ? "wide" : "",
    blue ? "blue" : "",
    gray ? "gray" : "",
  ]

      return (
        <div className={className.join(" ").trim()}>
          <button className="btn" onClick={handleClick}>{name}</button>
        </div>
      );
  }