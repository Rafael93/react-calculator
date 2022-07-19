import React from "react";
import "../styles/button.css";

function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`button_container ${
        isOperator(props.children) ? "operator" : null
      }`.trimEnd()}
      onClick={() => props.input(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
