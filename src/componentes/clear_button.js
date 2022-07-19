import React from "react";
import "../styles/clear-button.css";

const ClearButton = (props) => (
  <div className="clear-button" onClick={() => props.clear()}>
    {props.children}
  </div>
);

export default ClearButton;
